/*
 * The docs' own verify script: run it before deploying, and in CI.
 *
 * It checks the five things that actually break a documentation site, none of which a build
 * failure catches:
 *
 *   1. INTERNAL LINKS that point at nothing. A build succeeds happily with a dozen dead links.
 *   2. ANCHORS that point at nothing — /money/pricing/#protecting-manual-prices is a dead link
 *      the moment that heading is reworded, and reworded headings are what translation does.
 *   3. MISSING TRANSLATIONS — every English page must exist in every locale, or the site quietly
 *      serves English under a /vi/ URL and nobody notices until a customer does.
 *   4. DIAGRAMS that are referenced but missing in a locale, or missing their alt text.
 *   5. FRONTMATTER that would break the sidebar or llms.txt: no title, no description, no order.
 *
 * Plain Node, no dependencies, reads the markdown directly — so it runs in a second and cannot
 * itself be broken by an Astro upgrade. The heading slugger below has to agree with the one
 * Starlight uses (github-slugger); if a heading with unusual punctuation ever disagrees, fix it
 * here rather than avoiding the punctuation.
 */

import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = new URL("../src/content/docs/", import.meta.url).pathname;
const DIAGRAMS = new URL("../public/diagrams/", import.meta.url).pathname;
const LOCALES = ["id", "vi"];

/** github-slugger's rules, for the subset of punctuation these pages actually use. */
function slug(text) {
  return text
    .trim()
    .toLowerCase()
    .replace(/[`*_~]/g, "")
    // Strip link syntax down to its label, so "## [Go live](/x/)" slugs as "go-live".
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/[^\p{L}\p{N}\s-]/gu, "")
    .replace(/\s+/g, "-");
}

function walk(dir) {
  return readdirSync(dir).flatMap((entry) => {
    const full = join(dir, entry);
    return statSync(full).isDirectory() ? walk(full) : full.match(/\.mdx?$/) ? [full] : [];
  });
}

const files = walk(ROOT).map((full) => {
  const rel = relative(ROOT, full).replace(/\.mdx?$/, "");
  const parts = rel.split("/");
  const locale = LOCALES.includes(parts[0]) ? parts[0] : "en";
  const localeless = locale === "en" ? rel : parts.slice(1).join("/");
  const source = readFileSync(full, "utf8");
  const front = /^---\r?\n([\s\S]*?)\r?\n---/.exec(source)?.[1] ?? "";
  return {
    rel,
    locale,
    localeless,
    source,
    front,
    // "start/index" is served at /start/, "index" at /.
    url: `/${[locale === "en" ? "" : locale, localeless.replace(/(^|\/)index$/, "")]
      .filter(Boolean)
      .join("/")}`.replace(/\/+/g, "/"),
  };
});

const problems = [];
const urls = new Map(
  files.map((file) => [
    file.url.endsWith("/") ? file.url : `${file.url}/`,
    new Set(
      [...file.source.slice(file.front.length).matchAll(/^#{2,4}\s+(.+?)\s*$/gm)].map(
        ([, heading]) => slug(heading),
      ),
    ),
  ]),
);

// 1 + 2. Links and their anchors
for (const file of files) {
  const body = file.source.slice(file.front.length);
  for (const [, href, hash] of body.matchAll(/\]\((\/[^)#\s]*)(#[^)\s]*)?\)/g)) {
    // .svg is an image — the diagram rules below check those, and they are not page routes.
    if (href.endsWith(".txt") || href.endsWith(".md") || href.endsWith(".svg")) continue;
    const normalized = href.endsWith("/") ? href : `${href}/`;
    const headings = urls.get(normalized);
    if (!headings) {
      problems.push(`${file.rel}: dead link ${href}`);
      continue;
    }
    if (hash && !headings.has(decodeURIComponent(hash.slice(1)))) {
      problems.push(`${file.rel}: dead anchor ${href}${hash}`);
    }
  }
}

// 3. Translations
const english = files.filter((file) => file.locale === "en");
for (const locale of LOCALES) {
  const have = new Set(files.filter((file) => file.locale === locale).map((file) => file.localeless));
  for (const page of english) {
    if (!have.has(page.localeless)) problems.push(`${locale}: missing translation of ${page.localeless}`);
  }
}

// 4. Diagrams — the right locale, present on disk, and never without alt text
for (const file of files) {
  const body = file.source.slice(file.front.length);
  for (const [, alt, src] of body.matchAll(/!\[([^\]]*)\]\((\/diagrams\/[^)\s]+)\)/g)) {
    if (!alt.trim()) problems.push(`${file.rel}: diagram ${src} has no alt text`);

    // Diagrams carry words, so each is generated per locale (scripts/build-diagrams.mjs) and the
    // page names the one it wants. THE CHECK THAT MATTERS is the suffix: an English diagram left
    // inside a Vietnamese page renders perfectly and is wrong, which is exactly the mistake a
    // human review misses.
    const suffix = /\.([a-z]{2})\.svg$/.exec(src)?.[1];
    if (suffix !== file.locale) {
      problems.push(`${file.rel}: diagram ${src} is not the ${file.locale} one`);
    }
    if (!existsSync(join(DIAGRAMS, src.replace("/diagrams/", "")))) {
      problems.push(`${file.rel}: no such diagram — public${src}`);
    }
  }
}

// 5. Frontmatter
for (const file of files) {
  if (!/^title:\s*\S/m.test(file.front)) problems.push(`${file.rel}: no title`);
  if (!/^description:\s*\S/m.test(file.front)) problems.push(`${file.rel}: no description`);
  const isHome = file.localeless === "index";
  if (!isHome && !/^\s+order:\s*\d+/m.test(file.front)) problems.push(`${file.rel}: no sidebar.order`);
}

if (problems.length) {
  console.error(`\n${problems.length} problem(s):\n`);
  for (const problem of problems) console.error(`  ✗ ${problem}`);
  process.exit(1);
}

const anchors = [...urls.values()].reduce((total, set) => total + set.size, 0);
console.log(
  `✓ ${files.length} pages, ${urls.size} routes, ${anchors} headings — no dead links or anchors, all locales complete`,
);
