---
title: Using these docs with AI tools
description: Every page as clean markdown, plus llms.txt and llms-full.txt in all three languages.
sidebar:
  order: 4
---

This documentation is written in markdown and published as markdown. If you want to hand a page to
ChatGPT, Claude, or your own agent, you never have to scrape rendered HTML.

## Copy one page

At the top of every page:

- **Copy page** — puts that page's markdown on your clipboard.
- **View as markdown** — opens the raw file.
- **Open in ChatGPT / Open in Claude** — opens a new chat with the page's markdown URL and a
  prompt already written.

## The `.md` twin

Any page URL with `.md` on the end returns the markdown source:

```
https://docs.santara.ai/channels/airbnb/      → the page
https://docs.santara.ai/channels/airbnb.md    → the markdown
https://docs.santara.ai/id/channels/airbnb.md → the Indonesian markdown
```

The home page's twin is `/index.md`. Every page carries a
`<link rel="alternate" type="text/markdown">` pointing at its own, so a crawler does not have to
guess the convention.

## The whole manual in one file

| File | What it is |
| --- | --- |
| [`/llms.txt`](/llms.txt) | The map: every page, its URL, one line of description |
| [`/llms-full.txt`](/llms-full.txt) | The entire documentation as a single markdown file |
| `/id/llms.txt`, `/id/llms-full.txt` | The same, in Bahasa Indonesia |
| `/vi/llms.txt`, `/vi/llms-full.txt` | The same, in Tiếng Việt |

A locale falls back to English for pages it has not translated yet, so a non-English `llms.txt` is
always a complete map of the product rather than a partial one.

## Why bother

A rendered docs page is a few hundred kilobytes of HTML wrapped around a few kilobytes of prose. An
answer engine fetching the markdown gets the same words for a fraction of the bytes, and quotes
them correctly, because there is no navigation, no sidebar and no cookie banner in the way.

## Asking about *your* workspace

These docs describe the product. For questions about your own data — your bookings, your revenue,
your listings — use [Ask Santara](/help/assistant/) inside the product. It has your workspace; a
chatbot with this URL does not.
