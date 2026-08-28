/*
 * THE MARKDOWN, as data.
 *
 * Starlight renders the content collection into HTML. This module reads the SAME files as raw
 * text so we can serve the markdown itself — the `.md` twin of every page, and the llms.txt /
 * llms-full.txt bundles. One glob, resolved at build time, so nothing here costs a request.
 *
 * Deliberately no gray-matter: the frontmatter this repo writes is four known keys, and adding a
 * YAML parser to read them would be the largest dependency in the project. The parser below
 * fails loudly (throws on a page with no title) rather than silently publishing a blank entry.
 */

const RAW = import.meta.glob("/src/content/docs/**/*.{md,mdx}", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

export const LOCALES = ["en", "id", "vi"] as const;
export type Locale = (typeof LOCALES)[number];

/** The sidebar's order, so llms.txt reads in the order a human is walked through the product. */
export const SECTIONS = ["start", "channels", "daily", "money", "setup", "help"] as const;
export type Section = (typeof SECTIONS)[number];

export const SECTION_LABELS: Record<Section, Record<Locale, string>> = {
  start: { en: "Start here", id: "Mulai di sini", vi: "Bắt đầu" },
  channels: { en: "Connect your channels", id: "Hubungkan channel", vi: "Kết nối kênh" },
  daily: { en: "Every day", id: "Setiap hari", vi: "Hằng ngày" },
  money: { en: "Money", id: "Keuangan", vi: "Doanh thu" },
  setup: { en: "Set up once", id: "Atur sekali", vi: "Thiết lập một lần" },
  help: { en: "Help", id: "Bantuan", vi: "Trợ giúp" },
};

export const SITE_TAGLINE: Record<Locale, string> = {
  en: "Santara AI is AI operations management software for short-term rentals: one workspace for your channels, your calendar, your guests, your team and your books.",
  id: "Santara AI adalah software manajemen operasional berbasis AI untuk sewa jangka pendek: satu ruang kerja untuk channel, kalender, tamu, tim, dan pembukuan Anda.",
  vi: "Santara AI là phần mềm quản lý vận hành bằng AI cho thuê ngắn hạn: một không gian làm việc cho kênh bán, lịch, khách, đội ngũ và sổ sách của bạn.",
};

export type DocPage = {
  /** Path under src/content/docs, without extension — e.g. "id/start/quickstart". */
  file: string;
  locale: Locale;
  section: Section | null;
  /** URL path without leading or trailing slash — "" for a locale home page. */
  slug: string;
  order: number;
  title: string;
  description: string;
  /** The markdown body, frontmatter removed. */
  body: string;
};

function parse(file: string, source: string): DocPage {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(source);
  if (!match) throw new Error(`${file}: no frontmatter`);
  const front = match[1] ?? "";
  const body = source.slice(match[0].length).trim();

  const scalar = (key: string) => {
    // Top-level keys only: the leading anchor keeps `order:` (nested under `sidebar:`) from
    // being read as a title, and vice versa.
    const hit = new RegExp(`^${key}:\\s*(.+)$`, "m").exec(front);
    if (!hit) return null;
    return hit[1]!.trim().replace(/^["']|["']$/g, "");
  };

  const title = scalar("title");
  if (!title) throw new Error(`${file}: frontmatter has no title`);

  const orderRaw = /^\s+order:\s*(\d+)/m.exec(front)?.[1];

  const parts = file.split("/");
  const locale = (LOCALES as readonly string[]).includes(parts[0] ?? "")
    ? (parts[0] as Locale)
    : "en";
  const localePath = locale === "en" ? parts : parts.slice(1);
  const withoutIndex =
    localePath[localePath.length - 1] === "index" ? localePath.slice(0, -1) : localePath;
  const section = (SECTIONS as readonly string[]).includes(withoutIndex[0] ?? "")
    ? (withoutIndex[0] as Section)
    : null;

  return {
    file,
    locale,
    section,
    slug: [...(locale === "en" ? [] : [locale]), ...withoutIndex].join("/"),
    order: orderRaw ? Number(orderRaw) : 999,
    title,
    description: scalar("description") ?? "",
    body,
  };
}

export const ALL_PAGES: DocPage[] = Object.entries(RAW)
  .map(([path, source]) =>
    parse(path.replace("/src/content/docs/", "").replace(/\.mdx?$/, ""), source),
  )
  .sort((a, b) => a.order - b.order || a.slug.localeCompare(b.slug));

export function pagesFor(locale: Locale): DocPage[] {
  return ALL_PAGES.filter((page) => page.locale === locale);
}

/**
 * The pages of a locale, grouped in sidebar order.
 *
 * A locale that has not been translated yet still gets an llms.txt — it falls back to English
 * for the pages it is missing, exactly like Starlight's own fallback does for the HTML. An
 * answer engine that fetches /vi/llms.txt therefore never sees a half-empty map of the product.
 */
export function sectionsFor(locale: Locale): { section: Section; pages: DocPage[] }[] {
  const own = pagesFor(locale);
  const english = pagesFor("en");
  const translated = new Set(own.map((page) => localeless(page)));

  const merged = [
    ...own,
    ...english.filter((page) => !translated.has(localeless(page))),
  ].sort((a, b) => a.order - b.order || a.slug.localeCompare(b.slug));

  return SECTIONS.map((section) => ({
    section,
    pages: merged.filter((page) => page.section === section),
  })).filter((group) => group.pages.length > 0);
}

/** The page's identity across locales: "start/quickstart", whatever language it is in. */
export function localeless(page: DocPage): string {
  return page.locale === "en" ? page.slug : page.slug.slice(page.locale.length + 1);
}

export function homeFor(locale: Locale): DocPage | undefined {
  return pagesFor(locale).find((page) => page.section === null && !page.slug.includes("/"));
}

export function urlFor(page: DocPage, site: string): string {
  const base = site.replace(/\/$/, "");
  return page.slug ? `${base}/${page.slug}/` : `${base}/`;
}
