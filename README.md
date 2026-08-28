# docs.santara.ai

The Santara AI product manual. Astro + Starlight, built to **static files**, in **English,
Bahasa Indonesia and Tiếng Việt**, with every page also published as raw markdown.

```bash
npm install
npm run dev             # http://localhost:4321
npm run build           # → dist/
npm run verify:docs     # dead links, dead anchors, missing translations, bad frontmatter
npm run build:diagrams  # regenerate public/diagrams/ after editing the generator
```

## What is where

```
src/content/docs/            English pages (the root locale)
src/content/docs/id/         Bahasa Indonesia — same file names
src/content/docs/vi/         Tiếng Việt — same file names
src/components/PageActions   the "Copy page / view as markdown / open in ChatGPT" row
scripts/build-diagrams.mjs   the four figures — one geometry, three label sets
public/diagrams/             generated SVG, committed, do not hand-edit
src/lib/rehype-diagrams.ts   inlines those SVGs so they follow the reader's theme
src/lib/docs-source.ts       the markdown, read as data (powers the .md twins and llms.txt)
src/pages/[...slug].md.ts    every page's .md twin
src/pages/llms*.txt.ts       llms.txt and llms-full.txt, per locale
scripts/verify-docs.mjs      the pre-deploy check
```

Sections are directories, and the sidebar is generated from them — `start`, `channels`, `daily`,
`money`, `setup`, `help`. Their labels (and the labels used in `llms.txt`) live in
`astro.config.mjs` and `src/lib/docs-source.ts` respectively; add a section and you must add it
to both.

## Writing a page

Plain markdown. Frontmatter is three fields and all three are enforced by `verify:docs`:

```markdown
---
title: Connect Airbnb
description: One sentence. It becomes the page's lead line and its line in llms.txt.
sidebar:
  order: 2
---
```

Asides use Starlight's markdown directives (`:::note`, `:::tip`, `:::caution`), not components —
the pages stay portable markdown so the `.md` twins are clean. The one exception is the home
page, which is `.mdx` for its card grid.

**A new English page must be translated into `id/` and `vi/` before it can ship** —
`verify:docs` fails otherwise, and it runs in the build. That is on purpose: a half-translated
locale silently serves English under a `/vi/` URL, and nobody notices until a customer does.
Internal links inside a translated page must carry that locale's prefix (`/id/channels/airbnb/`).

## Figures

Four diagrams carry the ideas that prose is bad at — a state machine, two directions of sync, a
containment hierarchy, a pipeline with clamps. They live in `scripts/build-diagrams.mjs` as **one
geometry plus three label sets**, and that script writes `public/diagrams/<id>.<locale>.svg`:

```bash
npm run build:diagrams   # also runs automatically on npm run dev / npm run build
```

The output is committed. Do not hand-edit it; edit the generator and regenerate.

A page references its own locale's file with ordinary markdown image syntax:

```markdown
![The four states a listing passes through, with Go live as the gate before the last one.](/diagrams/listing-states.en.svg)
```

Three things then happen, and each exists for a reason:

- **`src/lib/rehype-diagrams.ts` inlines the SVG** into the rendered page. The diagrams paint in
  `var(--sl-color-*)`, and inside an `<img>` they would be a separate document that cannot see the
  page's variables — so they would glow white in dark mode. Inlined, they follow the theme.
- **The alt text becomes a real `<figcaption>`.** Write it as a sentence that carries the figure's
  point, because it is also what the `.md` twin shows to a reader with no picture.
- **The file at that URL is real**, so the markdown mirror is not lying and an agent can fetch it.

`verify:docs` fails if a page references a diagram that does not exist, has no alt text, or —
the one that matters — carries **another locale's suffix**. An English diagram inside a Vietnamese
page renders perfectly and is wrong; that is exactly the mistake a human review misses.

The generator refuses to emit a diagram whose text falls outside its frame. There is no browser to
measure with, so `text()` records an estimated extent and `svg()` asserts the frame contains it.
This is not fussiness: it caught an Indonesian label running 11px past the edge that nobody would
have seen, because nobody reviews the Indonesian screenshots.

### Two cache traps, both already handled

- Astro 5 caches each markdown file's **rendered HTML** in `.astro/data-store.json`, keyed by that
  file's contents. A redrawn diagram inside an unchanged `.md` is invisible to it, so `astro build`
  serenely reuses the old picture. `build:diagrams` deletes the store when a file actually changed.
- The **dev server** holds the same transform in memory. After regenerating diagrams, restart it.

### Screenshots

There are none, deliberately, and adding them is a real decision rather than an obvious win:

- A screenshot goes stale the first time a button moves, and a stale screenshot is worse than none
  — readers trust it over the words next to it.
- Screenshots of the product require a signed-in workspace with believable data. Ours would have to
  be a seeded demo account, or they leak a customer's guests, revenue and door codes.
- They cannot be translated. One screenshot becomes three, each needing an account in that
  language, or the Vietnamese page shows an English UI.

If you add them anyway, the shape is the same as the diagrams: `public/screens/<id>.<locale>.png`,
referenced with markdown image syntax and real alt text, `@2x` source scaled to 1400px wide, and
**no browser chrome** — crop to the panel being described. `verify:docs` will need its diagram
rules pointed at that folder too. The pages where one would genuinely help are the listing mapping
table in `channels/airbnb.md`, the rule editor in `money/pricing.md`, and the cleaning board in
`daily/tasks.md`;
everywhere else the words are doing the work.

## The markdown / LLM surface

| URL | What it is |
| --- | --- |
| `/channels/airbnb.md` | Any page's markdown, its own URL with `.md` |
| `/llms.txt` | The map: every page, URL, one-line description |
| `/llms-full.txt` | The whole manual as one markdown file |
| `/id/…`, `/vi/…` | The same four, per locale |

Non-English `llms.txt` falls back to English for any page not yet translated, so it is always a
complete map. The **Copy page** button fetches the `.md` twin and puts it on the clipboard; the
footer of every page links to all three.

## Deploying

**Amplify** — `amplify.yml` is the build spec. Set `DOCS_SITE_URL` (e.g.
`https://docs.santara.ai`) in the app's environment variables; canonical URLs, the sitemap,
`llms.txt` and every `Source:` line are built from it.

**S3 + CloudFront** — `dist/` is a plain directory tree:

```bash
DOCS_SITE_URL=https://docs.santara.ai npm run build
aws s3 sync dist/ s3://<bucket>/ --delete
aws cloudfront create-invalidation --distribution-id <id> --paths '/*'
```

Two things the distribution needs:

- **Directory indexes.** URLs end in `/`, so `/channels/airbnb/` must serve
  `/channels/airbnb/index.html`. On CloudFront that is a small viewer-request function (or
  CloudFront Functions' built-in index rewrite); S3 website endpoints do it natively.
- **Content types.** `.md` files must be served as `text/markdown` and `.txt` as `text/plain`,
  both UTF-8. `aws s3 sync` guesses these correctly for `.txt`; set `.md` explicitly if your
  tooling does not.

Set a short cache TTL on `.md`, `.txt` and HTML, and a long one on `/_astro/*` (hashed).

## Search

Pagefind, built at `astro build` time and served as static files. It indexes all three languages
separately. Nothing to operate.
