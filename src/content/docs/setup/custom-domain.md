---
title: Connect your own domain
description: Put your booking site on a domain you own — two DNS records, then HTTPS is set up for you automatically.
sidebar:
  order: 3
---

Your [booking site](/setup/booking-site/) always works at its Santara AI address,
`yourname.book.santara.ai`. If you own a domain, you can put the site on it instead — for example
`www.yourvilla.com` or `book.yourvilla.com`. Guests see your name in the address bar, with the
padlock, and search engines index your domain.

It takes about five minutes of your time. The HTTPS certificate is issued and renewed for you.

## Before you start

- **A domain you own**, and a login to the place that manages its DNS — usually where you bought
  it (GoDaddy, Namecheap, PA Vietnam, Mắt Bão, Niagahoster, Cloudflare…).
- **Pick the address** for the site. Use a name with a prefix, such as `www.yourvilla.com` or
  `book.yourvilla.com`. A bare `yourvilla.com` needs an extra step — see
  [Using the bare domain](#using-the-bare-domain).
- If `www.yourvilla.com` already shows another website, choose another prefix (`book.`, `stay.`)
  or that website stops showing once you point it at us.

## 1. Add the domain in Santara AI

**Booking Site → Setup → Custom domain.** Type the address (for example `www.yourvilla.com`) and
press **Connect domain**. Santara AI shows two DNS records made for your site.

## 2. Add the two records at your DNS provider

Open the DNS settings for your domain and add both records exactly as shown. Use the copy buttons.

| Type | Host / Name | Value / Points to |
|---|---|---|
| CNAME | `www` (your prefix) | `edge.book.santara.ai` |
| TXT | `_santara-verify.www` | `santara-verify=…` (the code shown in Santara AI) |

- **Host field:** most providers want only the part before your domain — `www` and
  `_santara-verify.www`, not `www.yourvilla.com`. If your provider shows the full name next to the
  field, it adds the domain for you.
- **TTL:** leave the default (or 1 hour).
- **Cloudflare:** set the CNAME to **DNS only** (grey cloud). With the orange cloud on, Cloudflare
  answers instead of us and the check fails.
- The TXT record proves the domain is yours. The CNAME sends guests to your booking site.

## 3. Verify

Back in Santara AI, press **Verify**. New records usually appear within minutes, but some providers
take up to an hour. If the check fails, the card says which record is missing or wrong — fix it and
press **Verify** again.

## 4. HTTPS is set up for you

Once both records check out, the card shows **Securing HTTPS** while we issue the certificate for
your domain — usually 5 to 30 minutes. You can close the page; it is not waiting for you.

When it shows **Active**, your site is live at `https://www.yourvilla.com`:

- Your Santara AI address (`yourname.book.santara.ai`) **redirects** to your domain, page for page,
  so old links and search results still land on your site.
- Search results, the sitemap and social previews use your domain.
- The certificate renews automatically. Keep both records in place — removing the CNAME takes the
  site off your domain.

## Using the bare domain

Most providers cannot put a CNAME on a bare domain (`yourvilla.com` with nothing in front). Two ways
round it:

- **Forward it (simplest).** Connect `www.yourvilla.com` as above, then in your provider's settings
  forward `yourvilla.com` to `https://www.yourvilla.com`. Almost every provider has a "forwarding"
  or "redirect" option.
- **ALIAS / ANAME / CNAME flattening.** Some providers (Cloudflare, AWS Route 53, DNSimple) can
  point the bare domain at `edge.book.santara.ai` with one of these record types. Use that instead of
  the CNAME in step 2, keep the TXT record (host `_santara-verify`), and connect `yourvilla.com`.

## If something goes wrong

| What you see | What to do |
|---|---|
| "No TXT record was found at …" | The TXT host must be `_santara-verify.<prefix>`. Wait a few minutes after saving, then verify again. |
| "is a CNAME to …, but it needs to point at edge.book.santara.ai" | Edit the CNAME's value to exactly `edge.book.santara.ai`. |
| Check passes but stays on **Securing HTTPS** for over an hour | If your domain has **CAA** records, add one allowing `amazon.com` — our certificates come from Amazon. On Cloudflare, make sure the CNAME is **DNS only**. Then press **Verify** again. |
| "already connected to another booking site" | The domain is in use on another Santara AI site. Remove it there first, or [contact support](/help/support/). |

## Change or remove the domain

On the same card, **Remove domain** puts the site back on its Santara AI address straight away;
the certificate is removed for you. To move to a different domain, remove the old one and connect
the new one. You can delete the DNS records at your provider afterwards.
