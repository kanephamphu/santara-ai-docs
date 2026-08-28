import type { APIRoute, GetStaticPaths } from "astro";
import { ALL_PAGES, urlFor } from "../lib/docs-source";

/*
 * THE MARKDOWN MIRROR: every page's own URL with `.md` on the end.
 *
 * /channels/airbnb/ → /channels/airbnb.md, /id/channels/airbnb.md, and so on. It is what the
 * "Copy page" button copies, what "View as markdown" opens, and what an agent handed a docs link
 * can fetch to read the page without parsing a rendered layout.
 *
 * The frontmatter is not republished — a title and description that only Starlight reads are
 * noise to everyone else, so they come back as an H1 and a lead line instead.
 */

export const getStaticPaths: GetStaticPaths = () =>
  ALL_PAGES.map((page) => ({
    // "" would be the site root, which cannot carry a `.md` suffix as a path — the home page's
    // mirror is /index.md, matching what the marketing site does for the same reason.
    params: { slug: page.slug || "index" },
    props: { file: page.file },
  }));

export const GET: APIRoute = ({ props, site }) => {
  const page = ALL_PAGES.find((entry) => entry.file === props.file);
  if (!page) return new Response("Not found\n", { status: 404 });

  const header = [
    `# ${page.title}`,
    "",
    page.description ? `> ${page.description}` : "",
    "",
    `Source: ${urlFor(page, site?.href ?? "https://docs.santara.ai")}`,
    "",
  ]
    .filter((line, index, all) => !(line === "" && all[index - 1] === ""))
    .join("\n");

  return new Response(`${header}\n${page.body}\n`, {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
};
