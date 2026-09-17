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
import { basename, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = fileURLToPath(new URL("../src/content/docs/", import.meta.url));
const DIAGRAMS = fileURLToPath(new URL("../public/diagrams/", import.meta.url));
const SCREENS = fileURLToPath(new URL("../public/screens/", import.meta.url));
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

/** Generate the unique IDs Starlight gives repeated headings: "example", "example-1", etc. */
function headingIds(source) {
  const used = new Set();

  for (const [, rawHeading] of source.matchAll(/^#{2,6}[ \t]+(.+?)[ \t]*$/gm)) {
    // CommonMark permits optional closing hashes when whitespace separates them from the title.
    const heading = rawHeading.replace(/[ \t]+#+[ \t]*$/, "");
    const base = slug(heading);
    let id = base;
    let duplicate = 0;
    while (used.has(id)) id = `${base}-${++duplicate}`;
    used.add(id);
  }

  return used;
}

function walk(dir) {
  return readdirSync(dir).flatMap((entry) => {
    const full = join(dir, entry);
    return statSync(full).isDirectory() ? walk(full) : full.match(/\.mdx?$/) ? [full] : [];
  });
}

const files = walk(ROOT).map((full) => {
  const rel = relative(ROOT, full).replace(/\.mdx?$/, "").replace(/\\/g, "/");
  const parts = rel.split("/");
  const locale = LOCALES.includes(parts[0]) ? parts[0] : "en";
  const localeless = locale === "en" ? rel : parts.slice(1).join("/");
  const source = readFileSync(full, "utf8");
  const frontMatch = /^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/.exec(source);
  const front = frontMatch?.[1] ?? "";
  return {
    rel,
    locale,
    localeless,
    front,
    body: source.slice(frontMatch?.[0].length ?? 0),
    // "start/index" is served at /start/, "index" at /.
    url: `/${[locale === "en" ? "" : locale, localeless.replace(/(^|\/)index$/, "")]
      .filter(Boolean)
      .join("/")}`.replace(/\/+/g, "/"),
  };
});

const problems = [];
const urls = new Map();
for (const file of files) {
  const route = file.url.endsWith("/") ? file.url : `${file.url}/`;
  if (urls.has(route)) problems.push(`${file.rel}: duplicate route ${route}`);
  urls.set(route, headingIds(file.body));
}

// 1 + 2. Links and their anchors
for (const file of files) {
  for (const [, target] of file.body.matchAll(/\]\(((?:\/|#)[^)\s]*)\)/g)) {
    const hashAt = target.indexOf("#");
    const href = hashAt === -1 ? target : target.slice(0, hashAt);
    const hash = hashAt === -1 ? "" : target.slice(hashAt + 1);

    // .svg, .jpg, .png are images — the diagram rules below check those, and they are not page routes.
    if (/\.(?:txt|md|svg|jpe?g|png|webp|gif|avif)$/i.test(href)) continue;
    const normalized = href
      ? href.endsWith("/")
        ? href
        : `${href}/`
      : file.url.endsWith("/")
        ? file.url
        : `${file.url}/`;
    const headings = urls.get(normalized);
    if (!headings) {
      problems.push(`${file.rel}: dead link ${target}`);
      continue;
    }

    const firstSegment = normalized.split("/")[1];
    const targetLocale = LOCALES.includes(firstSegment) ? firstSegment : "en";
    if (targetLocale !== file.locale) {
      problems.push(`${file.rel}: link ${target} points to the ${targetLocale} locale`);
    }

    if (hash) {
      let decodedHash;
      try {
        decodedHash = decodeURIComponent(hash);
      } catch {
        problems.push(`${file.rel}: malformed anchor ${target}`);
        continue;
      }
      if (!headings.has(decodedHash)) problems.push(`${file.rel}: dead anchor ${target}`);
    }
  }
}

// 3. Translations
const english = files.filter((file) => file.locale === "en");
const englishPaths = new Set(english.map((file) => file.localeless));
for (const locale of LOCALES) {
  const translated = files.filter((file) => file.locale === locale);
  const have = new Set(translated.map((file) => file.localeless));
  for (const page of english) {
    if (!have.has(page.localeless)) problems.push(`${locale}: missing translation of ${page.localeless}`);
  }
  for (const page of translated) {
    if (!englishPaths.has(page.localeless)) {
      problems.push(`${locale}: translation has no English source for ${page.localeless}`);
    }
  }
}

// 4. Diagrams — the right locale, present on disk, and never without alt text
for (const file of files) {
  for (const [, alt, src] of file.body.matchAll(/!\[([^\]]*)\]\((\/diagrams\/[^)\s]+)\)/g)) {
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

// 4b. Screenshots — present, captioned, and captured in this page's own language
for (const file of files) {
  for (const [, alt, src] of file.body.matchAll(/!\[([^\]]*)\]\((\/screens\/[^)\s]+)\)/g)) {
    if (!alt.trim()) problems.push(`${file.rel}: screenshot ${src} has no alt text`);

    // Same rule as the diagrams, and for a stronger reason: the product itself is translated,
    // so an English screenshot on a Vietnamese page shows the reader an interface they will not
    // see. It renders perfectly and teaches the wrong thing.
    // Screenshots use both "name.en.png" and legacy "name_en.jpg" naming. Older Vietnamese
    // captures use "vn", which is an alias for the site's canonical "vi" locale.
    const suffix = /(?:_|\.)(en|id|vi|vn)(?=[_.])/i.exec(basename(src))?.[1].toLowerCase() ?? null;
    const screenshotLocale = suffix === "vn" ? "vi" : suffix;

    if (screenshotLocale !== file.locale) {
      problems.push(`${file.rel}: screenshot ${src} is not the ${file.locale} capture`);
    }
    if (!existsSync(join(SCREENS, src.replace("/screens/", "")))) {
      problems.push(`${file.rel}: no such screenshot — public${src}`);
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
