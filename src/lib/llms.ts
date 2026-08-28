/*
 * llms.txt and llms-full.txt, per locale.
 *
 * The convention (llmstxt.org): llms.txt is a MAP — one line per page, title, URL, one-sentence
 * description. llms-full.txt is the whole manual as a single markdown file. We publish both,
 * because they answer different questions: an agent deciding what to read wants the map, and an
 * agent that has decided wants the text without thirty fetches.
 */

import { SECTION_LABELS, SITE_TAGLINE, sectionsFor, urlFor, type Locale } from "./docs-source";

export function llmsTxt(locale: Locale, site: string): string {
  const heading: Record<Locale, string> = {
    en: "Santara AI Documentation",
    id: "Dokumentasi Santara AI",
    vi: "Tài liệu Santara AI",
  };
  const fullNote: Record<Locale, string> = {
    en: "Every page below is also available as raw markdown by adding `.md` to its URL. The whole manual in one file: ",
    id: "Setiap halaman di bawah juga tersedia sebagai markdown mentah dengan menambahkan `.md` pada URL-nya. Seluruh manual dalam satu berkas: ",
    vi: "Mỗi trang bên dưới cũng có bản markdown thô bằng cách thêm `.md` vào URL. Toàn bộ tài liệu trong một tệp: ",
  };

  const prefix = locale === "en" ? "" : `${locale}/`;
  const lines: string[] = [
    `# ${heading[locale]}`,
    "",
    `> ${SITE_TAGLINE[locale]}`,
    "",
    `${fullNote[locale]}${site.replace(/\/$/, "")}/${prefix}llms-full.txt`,
    "",
  ];

  for (const group of sectionsFor(locale)) {
    lines.push(`## ${SECTION_LABELS[group.section][locale]}`, "");
    for (const page of group.pages) {
      const description = page.description ? `: ${page.description}` : "";
      lines.push(`- [${page.title}](${urlFor(page, site)})${description}`);
    }
    lines.push("");
  }

  return `${lines.join("\n").trimEnd()}\n`;
}

export function llmsFullTxt(locale: Locale, site: string): string {
  const parts: string[] = [
    `# ${
      { en: "Santara AI Documentation", id: "Dokumentasi Santara AI", vi: "Tài liệu Santara AI" }[
        locale
      ]
    }`,
    "",
    `> ${SITE_TAGLINE[locale]}`,
    "",
  ];

  for (const group of sectionsFor(locale)) {
    parts.push(`# ${SECTION_LABELS[group.section][locale]}`, "");
    for (const page of group.pages) {
      parts.push(
        `## ${page.title}`,
        "",
        `Source: ${urlFor(page, site)}`,
        "",
        page.description ? `${page.description}\n` : "",
        stripMdx(page.body),
        "",
        "---",
        "",
      );
    }
  }

  return `${parts.join("\n").replace(/\n{3,}/g, "\n\n").trimEnd()}\n`;
}

/**
 * Starlight components, flattened to text.
 *
 * The pages use a small set of MDX components for layout (<Card>, <Steps>, <Aside>). A model
 * reading llms-full.txt should get the words, not the JSX — so tags are dropped and their
 * `title` attributes are promoted to a bold line, which is what they render as anyway.
 */
export function stripMdx(body: string): string {
  return body
    .replace(/^import .*$/gm, "")
    .replace(/<(Card|CardGrid|Tabs|TabItem|Steps|Aside|LinkCard|Badge)\b([^>]*)>/g, (_m, _tag, attrs) => {
      const title = /title="([^"]+)"/.exec(attrs)?.[1];
      return title ? `\n**${title}**\n` : "";
    })
    .replace(/<\/(Card|CardGrid|Tabs|TabItem|Steps|Aside|LinkCard|Badge)>/g, "")
    .replace(/<(Card|LinkCard|Badge)\b[^>]*\/>/g, (m) => {
      const title = /title="([^"]+)"/.exec(m)?.[1];
      const description = /description="([^"]+)"/.exec(m)?.[1];
      return title ? `- **${title}**${description ? ` — ${description}` : ""}` : "";
    })
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}
