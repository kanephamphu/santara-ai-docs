/**
 * WebP copies of the screenshots — what the pages actually load.
 *
 * scripts/capture-screens.mjs writes lossless 2x PNGs (2880px wide) and they stay the source of
 * truth: verify:docs, the callout .json sidecars and the recapture flow are all keyed on them.
 * But served raw from public/ they were 0.5–1.3 MB each, and SEO crawlers flag every image over
 * 1 MB. src/lib/rehype-figures.ts points each <img> at the .webp written here instead.
 *
 * Committed alongside the PNGs (a cold run is minutes). Runs before dev and build and writes only
 * the MISSING ones — mtimes mean nothing after a clone. capture-screens.mjs deletes a shot's .webp
 * when it rewrites the PNG, so a recapture is picked up on the next run.
 */
import { existsSync, readdirSync, rmSync, statSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const SCREENS = fileURLToPath(new URL("../public/screens/", import.meta.url));

function* pngs(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) yield* pngs(path);
    else if (entry.name.endsWith(".png")) yield path;
  }
}

let written = 0;
let before = 0;
let after = 0;
for (const png of pngs(SCREENS)) {
  const webp = png.replace(/\.png$/, ".webp");
  if (existsSync(webp)) continue;

  // Quality 82: UI text stays crisp at 2x; the loss is invisible at the column's display size.
  const info = await sharp(png).webp({ quality: 82, effort: 5 }).toFile(webp);
  before += statSync(png).size;
  after += info.size;
  written += 1;
}

if (written) {
  // Astro caches each page's rendered markdown, and rehype-figures only swaps a src to .webp when
  // the file exists — a page cached before this run would keep pointing at the PNG.
  rmSync(fileURLToPath(new URL("../.astro/data-store.json", import.meta.url)), { force: true });
  console.log(`  screens: ${written} WebP written (${(before / 1e6).toFixed(1)} MB → ${(after / 1e6).toFixed(1)} MB)`);
}
