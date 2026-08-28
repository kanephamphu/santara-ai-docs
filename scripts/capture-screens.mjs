/*
 * The product screenshots in these docs, captured.
 *
 * A screenshot in documentation is a liability the moment a button moves: readers trust the
 * picture over the prose beside it. The only version of screenshots worth having is one that can
 * be REGENERATED in a single command, so this script exists before any of the images do.
 *
 *   npm run capture:screens              every screen, every locale
 *   npm run capture:screens -- calendar  just one, while composing it
 *
 * It writes public/screens/<id>.<locale>.png at 2x, from a seeded demo workspace — never from a
 * real one. Shots that carry callouts also write a sibling .json of MEASURED coordinates: the
 * red boxes are never painted into the pixels, they are drawn over the image at render time from
 * boxes this script read out of the live DOM. Move a button and a recapture moves the box; edit
 * a screenshot in an image editor and the next recapture throws your work away. See scripts/seed-docs-demo.mts in the aircierge repo: three invented villas, guests
 * who do not exist, two checkouts today and a deliberate two-night gap next week so that each
 * screen has something worth photographing.
 *
 * CREDENTIALS ARE NEVER IN THIS FILE. It reads them from the environment, so the password lives
 * in your shell or in .env.capture (gitignored) and nowhere in the repository:
 *
 *   SANTARA_DEMO_URL       defaults to the main Amplify preview
 *   SANTARA_DEMO_EMAIL     defaults to demo@docs-demo.invalid
 *   SANTARA_DEMO_PASSWORD  required
 */

import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { chromium } from "playwright";

// A tiny .env.capture reader — one file, KEY=value, no dependency and no surprises.
const ENV_FILE = new URL("../.env.capture", import.meta.url).pathname;
if (existsSync(ENV_FILE)) {
  for (const line of readFileSync(ENV_FILE, "utf8").split("\n")) {
    const match = /^\s*([A-Z_]+)\s*=\s*(.*)\s*$/.exec(line);
    if (match && !process.env[match[1]]) process.env[match[1]] = match[2].replace(/^["']|["']$/g, "");
  }
}

const BASE = (process.env.SANTARA_DEMO_URL || "https://main.d22c9793921ez0.amplifyapp.com").replace(/\/$/, "");
const EMAIL = process.env.SANTARA_DEMO_EMAIL || "demo@docs-demo.invalid";
const PASSWORD = process.env.SANTARA_DEMO_PASSWORD;
const OUT = new URL("../public/screens/", import.meta.url).pathname;

const LOCALES = ["en", "id", "vi"];

if (!PASSWORD) {
  console.error(
    "\n  SANTARA_DEMO_PASSWORD is not set.\n\n" +
      "  Put it in .env.capture (gitignored) or the environment:\n\n" +
      "    echo 'SANTARA_DEMO_PASSWORD=…' >> .env.capture\n",
  );
  process.exit(1);
}

/*
 * The shots.
 *
 * `settle` is a selector that must be on the page before the shutter: these screens fetch their
 * data after first paint, and without it you capture skeletons. `clip` frames the interesting
 * part — a full 1440x900 of a mostly-empty screen makes the reader hunt for the thing the
 * caption is talking about.
 */
const SHOTS = [
  {
    id: "today",
    path: "/dashboard",
    settle: "main",
    height: 900,
    note: "Today, with the daily brief",
  },
  {
    id: "calendar",
    path: "/dashboard/calendar",
    settle: "main",
    height: 620,
    note: "The calendar timeline, prices on free nights",
  },
  {
    id: "tasks",
    path: "/dashboard/tasks",
    settle: "main",
    height: 760,
    note: "The cleaning board, grouped by day and building",
    callouts: [
      {
        // Text locators, one regex per string across the three languages. A structural selector
        // would be shorter and would silently point at the wrong element the day the markup
        // changes; this one simply fails to find anything, and the box is skipped.
        find: /To clean today|Perlu dibersihkan hari ini|Cần dọn hôm nay/i,
        up: 1,
        // Out to the edges of the tile the caption sits in. The caption is the tile's lower
        // line, so this reaches left and right to the card and down past it — no upward reach,
        // which previously pushed the box over the tab row above.
        expand: { left: 40, right: 240, bottom: 14 },
        label: {
          en: "Turnovers due today",
          id: "Turnover hari ini",
          vi: "Turnover cần làm hôm nay",
        },
      },
      {
        // ONE box over both controls, not two. Boxed separately their labels sat 182px apart and
        // each pill is wider than that, so the two pills overlapped and neither could be read.
        // They are one instruction anyway: assign it, then mark it done.
        css: "main select, main [role='combobox']",
        // As far as the Mark done button and no further — 306 ran the box off the
        // right edge of the frame, which reads as a rendering fault rather than a callout.
        expand: { right: 108 },
        label: {
          en: "Assign a cleaner, then mark it done",
          id: "Tugaskan petugas, lalu tandai selesai",
          vi: "Giao cho nhân viên, rồi đánh dấu xong",
        },
        side: "left",
      },
    ],
  },
  {
    id: "messages",
    path: "/dashboard/messages",
    settle: "main",
    height: 760,
    note: "The guest inbox",
  },
  {
    id: "bookings",
    path: "/dashboard/bookings",
    settle: "main",
    height: 760,
    note: "The reservation feed",
  },
  {
    id: "pricing",
    // ?tab=rules, not the bare path: with no rule set assigned yet the page opens on the
    // Properties tab, which is an empty-state warning rather than the rule editor this page
    // describes. components/pricing-workspace.tsx reads the parameter.
    path: "/dashboard/pricing?tab=rules",
    callouts: [
      {
        find: /Make these rules mine|Jadikan aturan ini milik saya|Biến quy tắc này thành của tôi/i,
        role: "button",
        label: {
          en: "Copy before you can edit",
          id: "Salin dulu sebelum bisa diubah",
          vi: "Sao chép trước khi sửa được",
        },
        side: "left",
      },
      {
        find: /^(Seasons|Musim|Mùa)$/,
        up: 2,
        label: {
          en: "×1.85 = 85% above your base price",
          id: "×1,85 = 85% di atas harga dasar",
          vi: "×1,85 = cao hơn giá cơ sở 85%",
        },
      },
    ],
    settle: "main",
    height: 820,
    note: "Pricing rules and the year of prices they produce",
  },
  {
    id: "channels",
    path: "/dashboard/settings/channels",
    settle: "main",
    height: 760,
    note: "Settings → Channels, before anything is connected",
    callouts: [
      {
        find: /Connect Airbnb|Hubungkan Airbnb|Kết nối Airbnb/i,
        role: "button",
        label: {
          en: "Start here — the account that owns your listings",
          id: "Mulai di sini — akun pemilik listing Anda",
          vi: "Bắt đầu ở đây — tài khoản sở hữu listing",
        },
        side: "left",
      },
    ],
  },
  {
    id: "properties",
    path: "/dashboard/properties",
    settle: "main",
    height: 760,
    note: "The estate: buildings and the rooms guests book",
  },
];

const only = process.argv.slice(2).filter((a) => !a.startsWith("-"));
const shots = only.length ? SHOTS.filter((s) => only.includes(s.id)) : SHOTS;
if (!shots.length) {
  console.error(`no shot matches ${only.join(", ")} — known ids: ${SHOTS.map((s) => s.id).join(", ")}`);
  process.exit(1);
}

mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch();
const context = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  // 2x, so the images stay sharp on the retina screens most readers are on. It doubles the file
  // size, which is why the shots are clipped rather than full-page.
  deviceScaleFactor: 2,
  colorScheme: "light",
});
/*
 * LIGHT THEME, set as a cookie before the first navigation.
 *
 * The app reads localStorage["aircierge_theme"] ?? cookie "aircierge_theme" (components/
 * app-shell.tsx). The context's `colorScheme` option only sets prefers-color-scheme, which the
 * app overrides with its own stored preference — so a fresh profile captured dark until this
 * was added.
 */
await context.addCookies([{ name: "aircierge_theme", value: "light", url: BASE }]);

const page = await context.newPage();
// The Amplify preview is a cold-start Next.js server: the first navigation and the first hit on
// each route can take far longer than Playwright's 30s default, and the failure looks like a
// broken script rather than a slow host.
page.setDefaultNavigationTimeout(90_000);
page.setDefaultTimeout(30_000);

// ── sign in ────────────────────────────────────────────────────────────────────────────────────
await page.goto(`${BASE}/login`, { waitUntil: "domcontentloaded" });
await page.fill('input[type="email"]', EMAIL);
await page.fill('input[type="password"]', PASSWORD);
// Enter, not a click on button[type="submit"] — the login button carries no type attribute
// (it is the form's implicit submit), so a type selector matches nothing and waits 30s to say so.
await page.press('input[type="password"]', "Enter");
await page.waitForURL(/\/dashboard/, { timeout: 60_000 });

/*
 * The 19-step product tour opens itself on a workspace that has not seen it, and it covers the
 * screen with a card and a cut-out. Defer it once, before the first shot, or every screenshot
 * has a coach mark over the thing it is meant to show.
 */
async function dismissTour(waitMs = 1000) {
  // The three locales' wording for the defer control (content/<locale>/product/pages/tour.json).
  // Deferring once is recorded server-side, so in practice only the first call does anything.
  const defer = page.getByRole("button", {
    name: /Don't show me this again|Jangan tampilkan lagi|Đừng hiện lại nữa/i,
  });
  try {
    await defer.first().waitFor({ state: "visible", timeout: waitMs });
    await defer.first().click();
    await defer.first().waitFor({ state: "hidden", timeout: 5_000 });
  } catch {
    // Not showing — which is the normal case after the first dismissal.
  }
}

// THE TOUR MOUNTS AFTER THE PAGE SETTLES, not with it. Dismissing immediately after login found
// nothing and every screenshot came back with a coach mark over the metric tiles; this waits for
// it to appear once, and the deferral then holds for the rest of the run.
await page.waitForTimeout(2500);
await dismissTour(15_000);

let written = 0;
for (const locale of LOCALES) {
  // The whole dashboard follows this cookie — verified against the running app, where setting it
  // to `id` turned Calendar into "Kalender" and the sidebar into Indonesian. It is why capturing
  // three languages costs three page loads rather than three logins.
  await context.addCookies([{ name: "aircierge_locale", value: locale, url: BASE }]);

  for (const shot of shots) {
    await page.goto(`${BASE}${shot.path}`, { waitUntil: "domcontentloaded" });
    await dismissTour();

    try {
      await page.waitForSelector(shot.settle, { timeout: 20_000 });
      // These screens fetch after first paint. Waiting for the network to go quiet is what
      // separates a screenshot of the data from a screenshot of the skeletons — and unlike a
      // text selector it does not have to be translated three times.
      await page.waitForLoadState("networkidle", { timeout: 20_000 });
    } catch {
      console.warn(`  ! ${shot.id}.${locale}: still busy after 20s — capturing anyway`);
    }
    await dismissTour();
    // Charts and the brief animate in; a fixed beat after the data lands beats racing a
    // transition.
    await page.waitForTimeout(1200);

    /*
     * BACK TO THE TOP BEFORE THE SHUTTER.
     *
     * dismissTour() clicks a button, and Playwright scrolls an element into view before clicking
     * it. `screenshot({clip})` measures from the top of the PAGE while `boundingBox()` reports
     * against the VIEWPORT, so any scroll at all puts every callout out by that many pixels —
     * which is exactly how the Connect Airbnb box ended up sitting below its button.
     */
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(300);

    const file = `${OUT}${shot.id}.${locale}.png`;
    await page.screenshot({
      path: file,
      clip: { x: 0, y: 0, width: 1440, height: shot.height },
    });

    /*
     * The callouts, MEASURED rather than guessed.
     *
     * Each one names an element; Playwright reads its bounding box out of the page that was just
     * photographed, and the box is written next to the PNG in the SAME coordinate space as the
     * screenshot clip. src/lib/rehype-figures.ts draws them over the image at render time.
     *
     * Doing it this way rather than drawing on the pixels buys three things: the annotation
     * survives a recapture, the label is translated like any other string instead of being baked
     * into an image, and a box can never quietly drift off its target — if the element is gone,
     * the box is gone too and the warning below says so.
     */
    if (shot.callouts?.length) {
      const boxes = [];
      // Belt and braces: whatever the scroll position turns out to be, boxes are recorded in the
      // screenshot's own coordinate space rather than the viewport's.
      const scroll = await page.evaluate(() => ({ x: window.scrollX, y: window.scrollY }));
      for (const callout of shot.callouts) {
        // `css` for elements with no useful accessible name — a styled <select> whose label is
        // its current value reads as "Unassigned", which matches three other things on the page.
        const locator = callout.css
          ? page.locator(callout.css).first()
          : callout.role
            ? page.getByRole(callout.role, { name: callout.find }).first()
            : page.getByText(callout.find).first();

        let box = null;
        try {
          box = callout.up
            ? // `up` measures an ANCESTOR rather than the element itself. Text is the only
              // dependable way to find a card — "To clean today" is the tile's caption — but
              // boxing the caption boxes three words and leaves out the number above them, which
              // is the part the label is talking about. Walking up n levels gets the whole card.
              await locator.evaluate((el, up) => {
                let node = el;
                for (let i = 0; i < up && node.parentElement; i += 1) node = node.parentElement;
                const r = node.getBoundingClientRect();
                return { x: r.x, y: r.y, width: r.width, height: r.height };
              }, callout.up)
            : await locator.boundingBox({ timeout: 4_000 });
        } catch {
          // Not on this screen in this language — fall through to the warning.
        }
        if (!box) {
          console.warn(`  ! ${shot.id}.${locale}: callout "${callout.label.en}" found no element`);
          continue;
        }
        // `grow` widens the box to take in the block a heading introduces — a rule about a table
        // wants the table in the box, not just its title.
        const pad = 6;
        const grow = callout.grow ?? 0;
        /*
         * `expand` is the escape hatch, in pixels per edge.
         *
         * It is here because DOM ancestry does not always have a level that means "the card":
         * on the cleaning board the caption's parent is the caption block and its grandparent is
         * the whole three-tile row, with nothing in between. Rather than pick the wrong one, name
         * the nudge — it is visible in the config and it is checked by eye once.
         */
        const grew = callout.expand ?? {};
        boxes.push({
          x: Math.max(0, box.x + scroll.x - pad - (grew.left ?? 0)),
          y: Math.max(0, box.y + scroll.y - pad - (grew.top ?? 0)),
          width: box.width + pad * 2 + (grew.left ?? 0) + (grew.right ?? 0),
          // A grow of 1 is "this row", 2 is "this section" — expressed in multiples of the
          // element's own height so it scales with the type rather than with a magic pixel count.
          height: box.height * (1 + grow * 4) + pad * 2 + (grew.top ?? 0) + (grew.bottom ?? 0),
          label: callout.label[locale] ?? callout.label.en,
          side: callout.side ?? "right",
        });
      }
      if (boxes.length) {
        writeFileSync(
          `${OUT}${shot.id}.${locale}.json`,
          `${JSON.stringify({ width: 1440, height: shot.height, boxes }, null, 2)}\n`,
        );
      }
    }

    written += 1;
    console.log(`  ✓ ${shot.id}.${locale}.png — ${shot.note}`);
  }
}

await browser.close();

/*
 * BUST THE CONTENT CACHE.
 *
 * Astro 5 caches each markdown file's RENDERED html in .astro/data-store.json, keyed by that
 * file's own contents. The callout boxes are read at render time from the .json this script
 * writes, so new coordinates inside an unchanged .md are invisible to the cache: the build
 * happily redraws yesterday's boxes on today's screenshot, which is worse than no boxes at all.
 * scripts/build-diagrams.mjs carries the same line for the same reason.
 */
for (const store of [
  new URL("../.astro/data-store.json", import.meta.url).pathname,
  new URL("../node_modules/.astro/data-store.json", import.meta.url).pathname,
]) {
  rmSync(store, { force: true });
}

console.log(`\n  ${written} screenshot(s) written to public/screens/ — content cache cleared\n`);
