import { chromium } from "playwright";
const b = await chromium.launch();
const ctx = await b.newContext({ viewport: { width: 1500, height: 1000 }, deviceScaleFactor: 2 });
const p = await ctx.newPage();
for (const [name, url] of [["tasks","http://localhost:4321/daily/tasks/"],["pricing","http://localhost:4321/money/pricing/"]]) {
  await p.goto(url, { waitUntil: "networkidle", timeout: 90_000 });
  const fig = p.locator("figure.screenshot.annotated").last();
  await fig.scrollIntoViewIfNeeded();
  await p.waitForTimeout(2500);
  await fig.screenshot({ path: `/tmp/check-${name}.png` });
  console.log("ok", name);
}
await b.close();
