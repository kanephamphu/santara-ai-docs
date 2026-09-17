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
const ALL_LOCALES = ["en", ...LOCALES];
const TEXT_ROUTES = new Set([
  "/llms.txt",
  "/llms-full.txt",
  "/robots.txt",
  ...LOCALES.flatMap((locale) => [`/${locale}/llms.txt`, `/${locale}/llms-full.txt`]),
]);

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

function walkFiles(dir) {
  return readdirSync(dir).flatMap((entry) => {
    const full = join(dir, entry);
    return statSync(full).isDirectory() ? walkFiles(full) : [full];
  });
}

/** Remove fenced code examples so fake links, images, and headings inside them are not validated. */
function withoutFencedCode(source) {
  let fence = null;
  const lines = source.split(/\r?\n/).map((line) => {
    const marker = /^ {0,3}(`{3,}|~{3,})/.exec(line)?.[1];
    if (!fence && marker) {
      fence = { character: marker[0], length: marker.length };
      return "";
    }
    if (fence) {
      if (marker?.[0] === fence.character && marker.length >= fence.length) fence = null;
      return "";
    }
    return line;
  });

  return lines.join("\n");
}

/** Inline code can contain Markdown-looking examples, but it does not render links or images. */
function scannableMarkdown(source) {
  return withoutFencedCode(source).replace(/(`+)[^\n]*?\1/g, "");
}

function nestedFrontmatter(front, key) {
  const lines = front.split(/\r?\n/);
  const start = lines.findIndex((line) => new RegExp(`^${key}:\\s*$`).test(line));
  if (start === -1) return "";

  const block = [];
  for (const line of lines.slice(start + 1)) {
    if (line.trim() && !/^\s/.test(line)) break;
    block.push(line);
  }
  return block.join("\n");
}

const files = walkFiles(ROOT).filter((full) => /\.mdx?$/.test(full)).map((full) => {
  const rel = relative(ROOT, full).replace(/\.mdx?$/, "").replace(/\\/g, "/");
  const parts = rel.split("/");
  const locale = LOCALES.includes(parts[0]) ? parts[0] : "en";
  const localeless = locale === "en" ? rel : parts.slice(1).join("/");
  const source = readFileSync(full, "utf8");
  const frontMatch = /^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/.exec(source);
  const front = frontMatch?.[1] ?? "";
  const body = source.slice(frontMatch?.[0].length ?? 0);
  return {
    rel,
    locale,
    localeless,
    front,
    markdown: withoutFencedCode(body),
    scan: scannableMarkdown(body),
    // "start/index" is served at /start/, "index" at /.
    url: `/${[locale === "en" ? "" : locale, localeless.replace(/(^|\/)index$/, "")]
      .filter(Boolean)
      .join("/")}`.replace(/\/+/g, "/"),
  };
});

const problems = [];

// Screenshot files themselves must follow the same canonical convention as their references.
for (const full of walkFiles(SCREENS)) {
  const rel = relative(SCREENS, full).replace(/\\/g, "/");
  if (/\.jpe?g$/i.test(rel)) {
    problems.push(`screens/${rel}: legacy JPEG; use a locale-suffixed PNG`);
    continue;
  }
  if (!/\.png$/i.test(rel)) continue;

  const locale = /\.(en|id|vi)\.png$/i.exec(basename(rel))?.[1].toLowerCase() ?? null;
  if (!locale) problems.push(`screens/${rel}: PNG has no canonical locale suffix`);

  const directory = rel.includes("/") ? rel.split("/")[0].toLowerCase() : null;
  if (directory === "vn") problems.push(`screens/${rel}: use the canonical vi directory`);
  if (ALL_LOCALES.includes(directory) && locale !== directory) {
    problems.push(`screens/${rel}: directory and filename locales disagree`);
  }
}

const urls = new Map();
for (const file of files) {
  const route = file.url.endsWith("/") ? file.url : `${file.url}/`;
  if (urls.has(route)) problems.push(`${file.rel}: duplicate route ${route}`);
  urls.set(route, headingIds(file.markdown));
}

// 1 + 2. Links and their anchors
for (const file of files) {
  for (const [, target] of file.scan.matchAll(/\]\(((?:\/|#)[^)\s]*)\)/g)) {
    const hashAt = target.indexOf("#");
    let href = hashAt === -1 ? target : target.slice(0, hashAt);
    const hash = hashAt === -1 ? "" : target.slice(hashAt + 1);

    if (/\.txt$/i.test(href)) {
      if (!TEXT_ROUTES.has(href)) {
        problems.push(`${file.rel}: dead link ${target}`);
      } else if (href !== "/robots.txt") {
        const firstSegment = href.split("/")[1];
        const targetLocale = LOCALES.includes(firstSegment) ? firstSegment : "en";
        if (targetLocale !== file.locale) {
          problems.push(`${file.rel}: link ${target} points to the ${targetLocale} locale`);
        }
      }
      continue;
    }

    // Every docs page also has a generated Markdown twin at the same route with a .md extension.
    if (/\.md$/i.test(href)) href = href.slice(0, -3);

    // Images are not page routes. Diagram and screenshot rules below validate the managed assets.
    if (/\.(?:svg|jpe?g|png|webp|gif|avif)$/i.test(href)) continue;
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

// A translated page must show the localized version of the same screenshots in the same order.
const filesByLocaleAndPath = new Map(files.map((file) => [`${file.locale}:${file.localeless}`, file]));
const screenshotKeys = (file) =>
  [...file.scan.matchAll(/!\[[^\]]*\]\((\/screens\/[^)\s]+)\)/g)].map(([, src]) =>
    src
      .replace(/^\/screens\/(?:en|id|vi)\//, "/screens/{locale}/")
      .replace(/\.(?:en|id|vi)\.png$/i, ".{locale}.png"),
  );

for (const page of english) {
  const expected = JSON.stringify(screenshotKeys(page));
  for (const locale of LOCALES) {
    const translated = filesByLocaleAndPath.get(`${locale}:${page.localeless}`);
    if (translated && JSON.stringify(screenshotKeys(translated)) !== expected) {
      problems.push(`${translated.rel}: screenshots differ from the English source page`);
    }
  }
}

// 4. Diagrams — the right locale, present on disk, and never without alt text
for (const file of files) {
  for (const [, alt, src] of file.scan.matchAll(/!\[([^\]]*)\]\((\/diagrams\/[^)\s]+)\)/g)) {
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
  for (const [, alt, src] of file.scan.matchAll(/!\[([^\]]*)\]\((\/screens\/[^)\s]+)\)/g)) {
    if (!alt.trim()) problems.push(`${file.rel}: screenshot ${src} has no alt text`);

    // Same rule as the diagrams, and for a stronger reason: the product itself is translated,
    // so an English screenshot on a Vietnamese page shows the reader an interface they will not
    // see. It renders perfectly and teaches the wrong thing.
    // Every screenshot follows the same convention: "name.en.png", "name.id.png", or
    // "name.vi.png". Keeping the canonical locale immediately before the extension makes
    // mixed-language captures and legacy names fail loudly.
    const screenshotLocale = /\.(en|id|vi)\.png$/i.exec(basename(src))?.[1].toLowerCase() ?? null;

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
  const sidebar = nestedFrontmatter(file.front, "sidebar");
  if (!isHome && !/^\s+order:\s*\d+\s*$/m.test(sidebar)) {
    problems.push(`${file.rel}: no sidebar.order`);
  }
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
