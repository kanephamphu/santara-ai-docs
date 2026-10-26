/**
 * Screenshots for the per-channel guides (src/content/docs/channel-guides/).
 *
 *   SANTARA_DEMO_URL=http://localhost:3210 SANTARA_DEMO_PASSWORD=… node scripts/capture-channel-guides.mjs
 *
 * Writes public/screens/channel-guides/<shot>.<locale>.png:
 *   - catalogue      Settings → Channels → Add a channel
 *   - property       step 1 of the connect wizard (shown on every guide)
 *   - <slug>         step 2 for that channel — our own form, with the channel's own fields
 *
 * NOTHING IS CREATED. Step 2 only reads the channel's field list; Test connection, Connect and
 * the embedded session are POSTs, and every POST under /api/connected-accounts/channels/ is
 * aborted below, so a stray click or a channel that falls back to the embedded screens cannot
 * provision anything in the channel manager.
 *
 * Same demo workspace and login as capture-screens.mjs (aircierge/scripts/seed-docs-demo.mts).
 */
import { existsSync, mkdirSync, readFileSync, rmSync } from "node:fs";
import { chromium } from "playwright";

const ENV_FILE = new URL("../.env.capture", import.meta.url).pathname;
if (existsSync(ENV_FILE)) {
  for (const line of readFileSync(ENV_FILE, "utf8").split("\n")) {
    const match = /^\s*([A-Z_]+)\s*=\s*(.*)\s*$/.exec(line);
    if (match && !process.env[match[1]]) process.env[match[1]] = match[2].replace(/^["']|["']$/g, "");
  }
}

const BASE = (process.env.SANTARA_DEMO_URL || "http://localhost:3210").replace(/\/$/, "");
const EMAIL = process.env.SANTARA_DEMO_EMAIL || "demo@docs-demo.invalid";
const PASSWORD = process.env.SANTARA_DEMO_PASSWORD;
if (!PASSWORD) throw new Error("SANTARA_DEMO_PASSWORD is required");
const OUT = new URL("../public/screens/channel-guides/", import.meta.url).pathname;
mkdirSync(OUT, { recursive: true });

const LOCALES = (process.env.LOCALES || "en,id,vi").split(",");

// Guide slug → the channel's name in the catalogue's ?channel= link. Only channels the catalogue
// offers can be photographed; the rest of the guides go without a step-2 shot.
const CHANNELS = {
  agoda: "Agoda",
  expedia: "Expedia",
  "trip-com": "CTrip",
  "tiket-com": "TiketCom",
  makemytrip: "Goibibo",
  vrbo: "VRBO",
  hostelworld: "Hostelworld",
  crewdogs: "Crewdogs",
  "emerging-travel": "Ostrovok",
  "glamping-hub": "GlampingHub",
  hipcamp: "Hipcamp",
  "hotel-trader": "HotelTrader",
  webbeds: "WebBeds",
  yatra: "Yatra",
  hopper: "Hopper",
};
const only = process.env.ONLY ? process.env.ONLY.split(",") : null;

const browser = await chromium.launch();
const context = await browser.newContext({
  viewport: { width: 1280, height: 900 },
  deviceScaleFactor: 2,
  colorScheme: "light",
});
await context.addCookies([{ name: "aircierge_theme", value: "light", url: BASE }]);

// The guard. Reads pass; anything that would write to the channel manager does not.
await context.route("**/api/connected-accounts/channels/**", (route) =>
  route.request().method() === "GET" ? route.continue() : route.abort(),
);

const page = await context.newPage();
page.setDefaultNavigationTimeout(240_000);
page.setDefaultTimeout(90_000);

await page.goto(`${BASE}/login`, { waitUntil: "domcontentloaded" });
await page.waitForLoadState("networkidle", { timeout: 90_000 }).catch(() => {});
await page.fill('input[type="email"]', EMAIL);
await page.fill('input[type="password"]', PASSWORD);
await page.press('input[type="password"]', "Enter");
await page.waitForURL(/\/dashboard/, { timeout: 90_000, waitUntil: "commit" });

async function dismissTour(waitMs = 1000) {
  const defer = page.getByRole("button", { name: /Don't show me this again|Jangan tampilkan lagi|Đừng hiện lại nữa/i });
  try {
    await defer.first().waitFor({ state: "visible", timeout: waitMs });
    await defer.first().click();
  } catch {}
}
await page.waitForTimeout(2500);
await dismissTour(8000);

/** Screenshot the box spanning `top` to `bottom` (locators), inside the main column. */
async function shoot(name, locale, top, bottom, pad = 16) {
  const a = await top.boundingBox();
  const b = await bottom.boundingBox();
  const main = await page.locator("main").first().boundingBox();
  if (!a || !b || !main) throw new Error(`${name}: nothing to frame`);
  // boundingBox() is viewport-relative; the clip of a fullPage shot is page-relative.
  const scrollY = await page.evaluate(() => window.scrollY);
  const y = Math.max(0, a.y + scrollY - pad);
  const clip = { x: main.x, y, width: main.width, height: b.y + scrollY + b.height + pad - y };
  const file = `${OUT}${name}.${locale}.png`;
  rmSync(file.replace(/\.png$/, ".webp"), { force: true });
  await page.screenshot({ path: file, clip, fullPage: true });
  console.log("wrote", name, locale);
}

const heading = () => page.locator("main h1").first();

for (const locale of LOCALES) {
  await context.addCookies([{ name: "aircierge_locale", value: locale, url: BASE }]);

  if (!only) {
    // Catalogue: the tab row down to the first row of channel cards.
    await page.goto(`${BASE}/dashboard/settings/channels?tab=add`, { waitUntil: "domcontentloaded" });
    await dismissTour();
    const firstCard = page.locator('a[href*="channels/connect?channel="]').nth(5);
    await firstCard.waitFor();
    // From the heading above the cards ("Available channels") to the end of the second row.
    const grid = firstCard.locator("xpath=ancestor::*[.//h2 or .//h3][1]");
    await shoot("catalogue", locale, grid.locator("h2, h3").first(), firstCard);
  }

  for (const [slug, channel] of Object.entries(CHANNELS)) {
    if (only && !only.includes(slug)) continue;
    await page.goto(`${BASE}/dashboard/settings/channels/connect?channel=${encodeURIComponent(channel)}`, {
      waitUntil: "domcontentloaded",
    });
    await dismissTour();
    await heading().waitFor();
    const radios = page.getByRole("radio");
    await radios.first().waitFor();
    const continueButton = page.getByRole("button", { name: /Continue|Lanjut|Tiếp tục/i }).last();

    if (!only && slug === "agoda") await shoot("property", locale, heading(), continueButton);

    await continueButton.click();
    // Step 2: the native form ends in its Test connection button. A channel that has no native
    // form falls back to the embedded screens, whose session request is aborted above — skip it.
    const test = page.getByRole("button", { name: /Test connection|Uji koneksi|Kiểm tra kết nối/i }).first();
    try {
      await test.waitFor({ timeout: 60_000 });
    } catch {
      console.warn("no native form for", slug, "— skipped");
      if (process.env.DEBUG) await page.screenshot({ path: `/tmp/cg-debug-${slug}.png` });
      continue;
    }
    await page.waitForTimeout(600);
    await shoot(slug, locale, heading(), test, 24);
  }
}

await browser.close();
