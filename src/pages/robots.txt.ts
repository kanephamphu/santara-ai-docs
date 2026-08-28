import type { APIRoute } from "astro";

/*
 * robots.txt.
 *
 * Documentation exists to be found and quoted, including by answer engines — so the AI crawlers
 * are named and allowed rather than left to the default, and llms.txt is pointed at explicitly
 * beside the sitemap. The only thing disallowed is Pagefind's internal index: it is a binary
 * search index, not content, and crawling it wastes everyone's time.
 */

const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "meta-externalagent",
  "Bingbot",
  "cohere-ai",
];

export const GET: APIRoute = ({ site }) => {
  const base = (site?.href ?? "https://docs.santara.ai/").replace(/\/$/, "");

  const body = [
    "User-agent: *",
    "Allow: /",
    "Disallow: /pagefind/",
    "",
    ...AI_CRAWLERS.flatMap((agent) => [`User-agent: ${agent}`, "Allow: /", ""]),
    `Sitemap: ${base}/sitemap-index.xml`,
    "",
    "# The whole manual as markdown, per language:",
    `# ${base}/llms.txt`,
    `# ${base}/llms-full.txt`,
    `# ${base}/id/llms.txt`,
    `# ${base}/vi/llms.txt`,
    "",
  ].join("\n");

  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
