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
infrastructure/              the two CloudFormation stacks behind docs.santara.ai
.github/workflows/           checks on every PR, deploy on merge to production
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

Eight screens, in three languages, as `public/screens/<id>.<locale>.png`. **They are captured by a
script, never by hand** — a screenshot goes stale the first time a button moves, and readers trust
a stale picture over the prose beside it, so the only version worth having is one that regenerates
in a single command:

```bash
npm run capture:screens              # every screen, every locale
npm run capture:screens -- calendar  # just one, while composing it
```

`scripts/capture-screens.mjs` drives a headless Chromium: it signs in, defers the 19-step product
tour (which otherwise puts a coach mark over whatever the caption is pointing at), forces light
theme through the `aircierge_theme` cookie, and captures at 2x. Locale costs a page load, not a
login — the whole dashboard follows the `aircierge_locale` cookie, so the three languages are one
loop.

**The workspace is seeded, never a customer's.** `scripts/seed-docs-demo.mts` in the `aircierge`
repo builds one tenant of invented data in the dev database — three Bali villas, guests who do not
exist — composed so each screen has something worth photographing: two checkouts today so the
cleaning board is not empty, a deliberate two-night gap next week so the calendar shows the hole
upsells exist for, an unanswered thread so the inbox has something at the top. Villa Melati is
three rooms because that is the worked example in the object-model diagram; the picture and the
drawing agree on purpose.

Credentials live in `.env.capture` (gitignored) or the environment, never in the repo:

```bash
echo 'SANTARA_DEMO_PASSWORD=…' >> .env.capture
```

`verify:docs` fails on a screenshot that is missing, has no alt text, or — the one that matters —
**carries another locale's suffix**. An English screenshot on a Vietnamese page renders perfectly
and shows the reader an interface they will never see.

#### Callouts

The red boxes and labels are **never painted into the pixels**. A shot declares its callouts by
selector; at capture time Playwright reads each target's bounding box out of the page it just
photographed and writes them to a sibling `<id>.<locale>.json`, and
`src/lib/rehype-figures.ts` draws them as an SVG over the `<img>` at render time:

```js
{
  id: "tasks",
  callouts: [
    { find: /To clean today|Perlu dibersihkan|Cần dọn hôm nay/i,
      up: 1, expand: { top: 40, left: 62, right: 300 },
      label: { en: "Turnovers due today", id: "…", vi: "…" } },
  ],
}
```

That indirection buys three things a drawn-on arrow cannot: **the annotation survives a
recapture** — move the button, rerun, the box follows; **the label is translated** like any other
string instead of being retyped inside an image editor three times; and **a box can never
silently drift onto the wrong element** — if the selector matches nothing the callout is skipped
and the run says so, rather than pointing confidently at the wrong thing.

Measuring per locale is not redundant. The Indonesian tile box comes out 536px wide against
English's 468 because the caption is longer, and the Indonesian row box starts 32px further left.
Reusing English coordinates would put every box slightly wrong in two languages out of three.

Locating targets, in order of preference: `find` (a regex covering all three languages, matched on
text or `role`), `css` for controls with no useful accessible name, `up: n` to measure an ancestor
when the text you can find is a caption inside the card you want, and `expand` as the explicit
escape hatch in pixels per edge — used where the DOM simply has no ancestor meaning "this card".

**If every box sits slightly below its target, check `margin` on `.callouts`.** Starlight spaces
stacked block elements with a `* + *` top margin, and an absolutely positioned element still
honours its margins — so the overlay sat 16px below the image it is meant to cover exactly, and
every red box pointed just under its button while the coordinates were right the whole time.
`src/styles/santara.css` resets it.

**Two callouts whose boxes are close together will collide**, because each pill is sized from its
string and both are drawn outside their box. Box the pair together with one label instead; that is
usually the better instruction anyway.

Two screens are **not** captured and cannot be: the Airbnb listing-mapping table and the go-live
review only exist after a real OAuth authorization against a real host account. Those pages keep
prose and diagrams.

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

`docs.santara.ai` is a private S3 bucket behind CloudFront, created and updated by CloudFormation.
**Merging to `production` deploys it** — there is no manual step and no console clicking.

```
.github/workflows/deploy.yml      push to production -> build, deploy, sync, invalidate, smoke test
.github/workflows/ci.yml          every PR -> the same build and checks, without AWS
infrastructure/certificate.yaml   ACM certificate — us-east-1, because CloudFront takes it from nowhere else
infrastructure/docs-site.yaml     bucket, OAC, distribution, index-rewrite function, DNS
```

### What the pipeline does, and why in that order

1. **`verify:docs`, then build.** A dead link or an untranslated page fails the job before anything
   touches AWS.
2. **Two CloudFormation stacks.** The certificate in `us-east-1` (a region constraint, not a
   preference), then the bucket and distribution in `ap-southeast-1` with that ARN passed in.
   Both are idempotent — `--no-fail-on-empty-changeset` means an unchanged deploy is a no-op.
3. **Sync, uploading before deleting.** Hashed `_astro/*` assets go up first and immutable for a
   year; everything else gets `s-maxage=600`; `.md` and `.txt` get explicit content types. The
   `--delete` pass runs last, so the site is never briefly missing a page.
4. **Invalidate `/*` and wait for it.** The job goes green only once edges are serving the new
   build.
5. **Smoke test the live domain** — a page per locale, a markdown mirror, `llms.txt`, `robots.txt`,
   and the trailing-slash redirect. Content types are asserted, not assumed: `.md` served as
   `application/octet-stream` would make every Copy-page button hand the reader a download.

### One-time setup

1. **Create the `production` branch** and protect it. `main` is the working branch; merging
   `main -> production` is the release.
2. **Find the hosted zone id** for `santara.ai` — it is already in Route 53, which is what lets
   ACM validate itself and the stack write its own DNS:

   ```bash
   aws route53 list-hosted-zones-by-name --dns-name santara.ai \
     --query 'HostedZones[0].Id' --output text
   ```

3. **Configure the `production` environment** in GitHub (Settings -> Environments):

   | Kind | Name | Value |
   | --- | --- | --- |
   | Variable | `SANTARA_HOSTED_ZONE_ID` | **Required.** From the command above, e.g. `Z0123456789ABCDEFGHIJ` |
   | Variable | `AWS_REGION` | Optional, defaults to `ap-southeast-1` |
   | Variable | `DOCS_DOMAIN` | Optional, defaults to `docs.santara.ai` |
   | Variable | `DOCS_PRICE_CLASS` | Optional, defaults to `PriceClass_200` |
   | Variable | `AWS_DEPLOY_ROLE_ARN` | Optional — see below |
   | Secret | `AWS_ACCESS_KEY_ID` / `AWS_SECRET_ACCESS_KEY` | Required unless using the role |

   **Credentials, two ways.** Set `AWS_DEPLOY_ROLE_ARN` and the job assumes a role through GitHub's
   OIDC provider, with no long-lived keys in the repo — the better option, and worth doing. Leave
   it unset and it falls back to access keys, matching the other Santara repos so the first deploy
   needs no IAM work. The workflow picks the path on its own.

   The deploying identity needs: CloudFormation on the two stacks; `acm:*` on the certificate;
   S3 bucket create/read/write plus `PutBucketPolicy`; CloudFront distribution, function,
   response-headers-policy and OAC management; `cloudfront:CreateInvalidation`; and Route 53
   `ChangeResourceRecordSets` on the santara.ai zone.

4. **Merge to `production`.** The first run creates everything; the distribution takes ten to
   fifteen minutes, and the smoke test retries while the edge settles.

### The two things that break this deployment

Both are handled in `infrastructure/docs-site.yaml`; they are written here because they are the
first suspects if the site ever 404s everywhere:

- **Directory indexes.** Pages are built as `/channels/airbnb/index.html` and linked as
  `/channels/airbnb/`. S3's REST endpoint — the only one an Origin Access Control can lock down —
  has no index document, so a CloudFront Function rewrites the request. It deliberately leaves
  anything with a file extension alone, or `/channels/airbnb.md` would become a directory.
- **Content types.** Set during the sync, not by guesswork. `.md` is `text/markdown`, `.txt` is
  `text/plain`, both UTF-8.

### Deploying by hand

Only for a broken pipeline. Same steps, same order:

```bash
DOCS_SITE_URL=https://docs.santara.ai npm run build
aws s3 sync dist/ s3://<bucket>/ --delete
aws cloudfront create-invalidation --distribution-id <id> --paths '/*'
```

Note that a plain `sync` does **not** set the content types the workflow sets — read the
`Sync to S3` step before relying on this.

## Search

Pagefind, built at `astro build` time and served as static files. It indexes all three languages
separately. Nothing to operate.
