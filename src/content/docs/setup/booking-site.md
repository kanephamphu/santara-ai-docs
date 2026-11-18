---
title: Your direct booking site
description: A booking website on your own subdomain or domain, paid into your own Stripe account.
sidebar:
  order: 2
---

Every workspace can publish a direct booking site. The money goes to your Stripe account, not ours.

**Booking Site** in the sidebar. The left side is the setup; the right is a live preview. Along the
top are its tabs: **Setup**, **Design**, **Pages & blog**, **SEO**, **Pricing**, **Leads**,
**Requests** and **Analytics**.

![The booking site builder: setup on the left, live preview on the right.](/screens/booking-site.en.png)

## 1. Pick a subdomain

Lowercase letters, numbers and hyphens. It is what guests will type, so make it your business name.
Save the site details, and the preview starts working.

## 2. Choose a look

A **template** decides how each section looks; you decide which sections appear and in what order.
Pick a template and an accent colour, upload a logo (PNG, JPG, WEBP or GIF up to 5 MB, or a public
image URL), and set the currency prices are shown in.

For anything finer, **Design → Open the visual editor** puts your site in front of you while you
change it: template, colours, typography, hero media (an image, or an MP4 or WEBM video up to
25 MB), branding, the order of sections, navigation, social links and section backgrounds. Click a
section in the preview to open its settings.

**Everything you change in the visual editor is a draft until you press Publish.** It saves as you
go, with Undo and Redo. **Discard** throws the draft away without touching your live site, and
**Preview language** shows the draft in each language you offer.

## 3. Build the home page

Drag the sections into the order you want, or hide one without deleting what you wrote:

| Section | What it is |
| --- | --- |
| **Hero** | Headline, tagline, banner image |
| **Trust** | The three no-fees / best-price / direct-contact points |
| **Listings** | Your property and room cards. Always present |
| **About** | Free text and an optional photo |
| **Reviews** | Star ratings pulled from your synced channels |
| **Gallery** | A grid of your own images |
| **FAQ** | The questions guests ask before booking |
| **Blog** | Teaser cards linking to your posts |
| **Contact** | Your details and an enquiry form |
| **CTA** | A closing banner with a button |
| **Rich text** | Anything else, anywhere on the page |

## 4. Choose which properties appear

Pick the properties on the site and how guests can book each one — instantly, or by enquiry.

## 5. Connect Stripe

**Payments** connects your own Stripe account. You sign in to (or create) Stripe on Stripe's own
site. Santara AI never touches the money and never sees a card number.

Santara AI takes no commission from your payout. Under Payments there is an optional **Guest booking
fee**: switch it on and guests pay 3% on top of the stay, shown as its own *Booking fee* line before
they reach the card form. Your payout is unchanged. It is **off by default** — *"Off. Guests pay
exactly the stay."* — and turning it on or off affects new bookings only. It applies to bookings
paid online at checkout, not to booking requests. See [Commission](/setup/billing/#commission).

## 6. Publish

Until you publish, the site is fully disallowed to crawlers — nothing leaks before you are ready.
Publishing generates the sitemap and robots rules and keeps them in step with what you publish
afterwards.

## Let AI draft your copy

On the Setup tab, **AI suggestions** drafts your headline, tagline, About text, FAQ, section headings
and search text from your listings. Add a note on what to emphasise if you like — *family-friendly,
5 minutes to the beach*.

Nothing changes until you choose. Each suggestion sits next to your current text, marked as filling
an empty field or replacing your text. **Only empty fields are ticked for you** — text you wrote is
never selected unless you tick it. New FAQ questions are added; your existing questions are never
changed. After **Apply**, **Undo** puts your previous text back.

Single pages and posts have their own **Suggest with AI** in the content editor.

## Pricing, fees and cancellation

The **Pricing** tab sets what guests pay on your site, on top of the nightly rates from your
calendar:

| Group | What it does |
| --- | --- |
| **Markup** | A percentage added to every nightly rate. Guests see the marked-up rate, not a separate line |
| **Extra fees** | Each its own line: per stay, per night, per guest, per guest per night, or a % of accommodation |
| **Taxes** | Exclusive taxes are added on top; inclusive ones are already inside your rates and shown for information |
| **Damage waiver** | A non-refundable charge that stands in for a security deposit |
| **Cancellation policy** | Flexible, Moderate, Strict, or Custom refund tiers, plus a free-cancellation grace period after booking |

Guests agree to the cancellation policy at checkout, and it is what **Refund per policy** uses later
— see [Enquiries and booking requests](/setup/booking-site-requests/). An **Example quote** shows
the result as a guest would see it.

**Per-listing overrides** change one or more of these groups for a single listing; anything left on
*Inherit site setting* follows the site.

## Languages

In the visual editor, **Other settings → Languages & translations** chooses the languages guests can
read your site in. The switcher appears only when more than one is on, and the booking parts —
buttons, calendar, checkout — are translated for you.

Below that, **Translations** puts what you wrote in your default language beside each translation.
**Suggest** drafts one field; **Suggest for empty fields** drafts a whole group. An empty translation
falls back to the default language, so a half-translated site still works.

## Search and sharing

The **SEO** tab sets the title, description and share image (1200×630 works best) that Google and
link previews use, with a **Google preview**. Leave them blank and your headline and tagline are
used. The sitemap and robots rules are generated for you.

## Analytics and tracking

The **Analytics** tab shows your site's page views, visitors, listing views, quotes, bookings,
revenue and conversion for the last 7, 30 or 90 days, with a funnel from first page to paid booking
and your top pages, referrers and listings. Days are counted in UTC.

To use your own tools as well, **Third-party tracking** on the Setup tab takes a **Google Analytics
Measurement ID** (it starts with `G-`) and a **Meta Pixel ID**. Paste the IDs only, never the full
tracking script; page views on your public site are then sent to those accounts.

## Your own domain

The site always lives at its subdomain. To put it on a domain you own — say `www.yourvilla.com` —
add two DNS records from the **Custom domain** card and press **Verify**; HTTPS is set up for you
automatically. Step-by-step: [Connect your own domain](/setup/custom-domain/).

## Pages and blog posts

Write posts and standalone pages in the content editor, from blocks: text, images, tables (one row
per line, columns separated by `|`), dividers. Inline `<strong>`, `<em>` and links are allowed.

**Drafts stay private until you publish them.** Each page has its own SEO summary — add one, or
search engines get whatever they can scrape.

## Contact details

Shown in the contact section and the footer. The address links to Maps; Santara AI never embeds a map
iframe you supply. Pick the language guests see first — they can still switch.

## What guests get

A site that lists your rooms with live availability and live prices from the same calendar the
channels use. A direct booking closes those nights everywhere, exactly like a channel booking.

What guests send you back — contact-form enquiries, and requests to book on request-mode
properties — is **[Enquiries and booking requests](/setup/booking-site-requests/)**.
