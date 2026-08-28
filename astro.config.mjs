// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import { rehypeFigures } from "./src/lib/rehype-figures";

/*
 * docs.santara.ai — the product manual, as static files.
 *
 * Three constraints shaped every choice here, and they are worth writing down because the next
 * person will otherwise "simplify" one of them away:
 *
 * 1. STATIC. `astro build` emits plain HTML/CSS/JS into dist/. No server, no SSR adapter, no
 *    runtime env. That is what lets this sit on S3+CloudFront or Amplify behind
 *    docs.santara.ai with nothing to operate. Search is Pagefind, which indexes at build time
 *    and runs in the browser — do not swap it for a hosted index.
 *
 * 2. MARKDOWN IS THE SOURCE, and it stays reachable. Every page has a `.md` twin
 *    (src/pages/[...slug].md.ts) and every locale has an llms.txt / llms-full.txt. The site is
 *    the rendering; the markdown is the document. See src/lib/docs-source.ts.
 *
 * 3. THREE LOCALES, one tree. en at the root, /id/ and /vi/ beside it — the same shape the
 *    marketing site uses, so a link translated between the two properties is a prefix swap.
 *    English is `root`, so its files live at src/content/docs/*.md with no `en/` folder.
 */

const site = process.env.DOCS_SITE_URL || "https://docs.santara.ai";

/** The app the docs are about. Every "open it in Santara" link goes through here. */
const APP_URL = "https://www.santara.ai/dashboard";
const MARKETING_URL = "https://www.santara.ai";

export default defineConfig({
  site,
  /*
   * "ignore", NOT "always" — and this is load-bearing.
   *
   * Pages are still emitted directory-style (`/channels/airbnb/index.html`) and every link the
   * site generates carries the trailing slash, so the URLs match the marketing site's. But
   * `always` makes the dev server 404 anything without one, and that includes the `.md` twins:
   * `/channels/airbnb.md` cannot end in a slash. The build happened to work — the files exist on
   * disk — while dev silently served 404s, which is the worst possible split.
   */
  trailingSlash: "ignore",
  build: { format: "directory" },
  markdown: {
    // Diagrams are inlined so they follow the reader's theme; screenshots are wrapped in a
    // captioned figure. Both stay plain markdown image references — see src/lib/rehype-figures.ts.
    rehypePlugins: [rehypeFigures],
  },
  integrations: [
    starlight({
      title: {
        en: "Santara AI Docs",
        id: "Dokumentasi Santara AI",
        vi: "Tài liệu Santara AI",
      },
      description:
        "How to run your short-term rentals on Santara AI — connect your channels, work the day, price the year, and get paid.",
      logo: {
        light: "./src/assets/santara-lockup-light.svg",
        dark: "./src/assets/santara-lockup-dark.svg",
        replacesTitle: true,
      },
      favicon: "/favicon.png",
      customCss: ["./src/styles/santara.css"],
      components: {
        // The page title row carries the "Copy for LLM" actions. Overriding PageTitle rather
        // than adding a component to the content means the actions sit beside the <h1> on every
        // page automatically — including pages nobody remembered to edit.
        PageTitle: "./src/components/PageTitle.astro",
        Head: "./src/components/Head.astro",
        Footer: "./src/components/Footer.astro",
      },
      defaultLocale: "root",
      locales: {
        root: { label: "English", lang: "en" },
        id: { label: "Bahasa Indonesia", lang: "id" },
        vi: { label: "Tiếng Việt", lang: "vi" },
      },
      social: [
        { icon: "external", label: "Santara AI", href: MARKETING_URL },
        { icon: "rocket", label: "Open the app", href: APP_URL },
      ],
      editLink: undefined,
      lastUpdated: true,
      pagination: true,
      tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
      sidebar: [
        {
          label: "Start here",
          translations: { id: "Mulai di sini", vi: "Bắt đầu" },
          autogenerate: { directory: "start" },
        },
        {
          label: "Connect your channels",
          translations: { id: "Hubungkan channel", vi: "Kết nối kênh" },
          autogenerate: { directory: "channels" },
        },
        {
          label: "Every day",
          translations: { id: "Setiap hari", vi: "Hằng ngày" },
          autogenerate: { directory: "daily" },
        },
        {
          label: "Money",
          translations: { id: "Keuangan", vi: "Doanh thu" },
          autogenerate: { directory: "money" },
        },
        {
          label: "Set up once",
          translations: { id: "Atur sekali", vi: "Thiết lập một lần" },
          autogenerate: { directory: "setup" },
        },
        {
          label: "Help",
          translations: { id: "Bantuan", vi: "Trợ giúp" },
          autogenerate: { directory: "help" },
        },
      ],
    }),
  ],
});
