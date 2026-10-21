/*
 * Screenshots of the Santi app (santi.santara.ai), captured from its PUBLIC demo.
 *
 *   npm run capture:santi              every shot, every locale
 *   npm run capture:santi -- santi-approve
 *
 * Before sign-in, Santi answers typed questions about a made-up business, "Bali Villa Co", with
 * the real model (aircierge-santi src/http/demo.ts). No account, no password and no real data —
 * which is why these shots can be taken by anyone, and why they are the docs' worked examples.
 *
 * Live answers are worded fresh every run, so LOOK at each capture before committing it. The demo
 * is rate-limited per visitor (6 a minute), hence the pause between questions.
 *
 * Writes public/screens/<id>.<locale>.png at 2x on a 390x844 phone viewport.
 */

import { rmSync } from "node:fs";
import { chromium } from "playwright";

const BASE = (process.env.SANTI_URL || "https://santi.santara.ai").replace(/\/$/, "");
const OUT = new URL("../public/screens/", import.meta.url).pathname;
const LOCALES = ["en", "id", "vi"];

const YES = /^(Yes|Ya|Có)$/;

const SHOTS = [
  {
    // Matches a scripted demo intent: the arrivals table renders without a model call.
    id: "santi-arrivals",
    note: "Today's arrivals, as a table",
    say: [
      {
        en: "Who arrives this week, and is anyone waiting on a reply?",
        id: "Siapa yang datang minggu ini, dan apakah ada yang menunggu balasan?",
        vi: "Tuần này ai đến, và có ai đang chờ trả lời không?",
      },
    ],
  },
  {
    // Santi checks before it proposes: the villa is booked on those nights, so it says so.
    id: "santi-refuses",
    note: "Santi turns down a change that would clash with a booking",
    say: [
      {
        en: "Block Villa Ombak next Friday and Saturday for a family visit",
        id: "Blokir Villa Ombak Jumat dan Sabtu depan untuk kunjungan keluarga",
        vi: "Chặn Villa Ombak thứ Sáu và thứ Bảy tuần sau cho gia đình đến chơi",
      },
    ],
  },
  {
    // A request Santi has to turn down: the villa is booked on those nights. Then a range that is
    // free, which produces the approval card; tapping Yes moves it to its Confirm step.
    id: "santi-approve",
    note: "A blocked request, a better one, and the Yes -> Confirm card",
    say: [
      {
        en: "Block Villa Ombak next Friday and Saturday for a family visit",
        id: "Blokir Villa Ombak Jumat dan Sabtu depan untuk kunjungan keluarga",
        vi: "Chặn Villa Ombak thứ Sáu và thứ Bảy tuần sau cho gia đình đến chơi",
      },
      {
        en: "OK, block Villa Ombak 20 and 21 October instead",
        id: "Oke, blokir Villa Ombak tanggal 20 dan 21 Oktober saja",
        vi: "Được, chặn lịch Villa Ombak đêm 20 và 21/10",
      },
    ],
    tapYes: true,
  },
];

const only = process.argv.slice(2).filter((a) => !a.startsWith("-"));
const shots = only.length ? SHOTS.filter((s) => only.includes(s.id)) : SHOTS;
// --locale=vi recaptures one language — a live answer sometimes needs a second take.
const localeArg = process.argv.find((a) => a.startsWith("--locale="))?.slice(9);
const locales = localeArg ? [localeArg] : LOCALES;

const browser = await chromium.launch();
let written = 0;

for (const locale of locales) {
  for (const shot of shots) {
    // A fresh context per shot: the demo keeps its conversation in the page, so each picture
    // shows only its own exchange.
    const context = await browser.newContext({
      viewport: { width: 390, height: 844 },
      deviceScaleFactor: 2,
      colorScheme: "light",
      locale: { en: "en-US", id: "id-ID", vi: "vi-VN" }[locale],
    });
    // Chat mode (voice needs a microphone) and the interface language, before the app boots.
    await context.addInitScript((lang) => {
      localStorage.setItem("santi_mode", "chat");
      localStorage.setItem("santi_lang", lang);
    }, locale);
    const page = await context.newPage();
    await page.goto(`${BASE}/`, { waitUntil: "networkidle" });
    await page.waitForTimeout(1500);

    const input = page.locator("input[aria-label]").last();
    for (const line of shot.say) {
      await input.fill(line[locale]);
      const answered = page
        .waitForResponse((r) => r.url().includes("/api/demo/turn"), { timeout: 90_000 })
        .catch(() => null);
      await input.press("Enter");
      // Scripted intents answer without a request; live ones wait for the model.
      await Promise.race([answered, page.waitForTimeout(8000)]);
      await answered;
      await page.waitForTimeout(3500);
      // The demo allows 6 questions a minute per visitor.
      await page.waitForTimeout(11_000);
    }
    if (shot.tapYes) {
      try {
        await page.getByRole("button", { name: YES }).last().click({ timeout: 10_000 });
        await page.waitForTimeout(2000);
      } catch {
        console.warn(`  ! ${shot.id}.${locale}: no approval card to tap — check the answer`);
      }
    }
    // Blur the input so no focus ring sits on the composer.
    await page.evaluate(() => document.activeElement instanceof HTMLElement && document.activeElement.blur());
    await page.waitForTimeout(500);

    const file = `${OUT}${shot.id}.${locale}.png`;
    await page.screenshot({ path: file });
    rmSync(file.replace(/\.png$/, ".webp"), { force: true });
    console.log(`  ✓ ${shot.id}.${locale}.png — ${shot.note}`);
    written += 1;
    await context.close();
  }
}

await browser.close();
console.log(`\n  ${written} screenshot(s) written to public/screens/ — look at each before committing`);
