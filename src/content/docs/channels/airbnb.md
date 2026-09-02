---
title: Connect Airbnb
description: Authorise the account, pick your listings, check what was read, then go live when you are ready.
sidebar:
  order: 2
---

## What you need

- The **Airbnb account that owns the listings**. A co-host who cannot see Account settings cannot
  authorise the connection.
- Popups allowed in your browser — the authorisation opens in a window. If it is blocked you will
  see *"Your browser blocked the popup"*; allow it and press *Connect Airbnb* again.

## 1. Start the connection

**Settings → Channels → Connect Airbnb**.

You are asked, optionally, which existing Santara AI properties this account's listings belong to.
If you have no properties yet, skip it — they get created from the listings.

Press **Continue to Airbnb**. Sign in on Airbnb's own page and approve the connection there. The
Santara AI tab shows *Waiting for you to finish authorizing on Airbnb* until you do.

If you close the window before approving, you will see *Authorization wasn't completed*. Nothing
was connected; press **Try again**.

## 2. Map your listings

Once Airbnb shares the account's listings you get a table. For each listing:

- **Untick** anything you do not want in Santara AI.
- Choose where it goes under **Import into**:
  - **New property — created from this listing** — the usual choice for a whole-home listing.
  - **An existing property** — then pick **which room**, if that property has more than one. Use
    this when several Airbnb listings are bedrooms of the same villa.
- A listing already connected elsewhere is marked *already connected* and cannot be picked twice.

Press **Set up listings**. Santara AI then:

1. creates the properties and rooms,
2. maps each listing to its room,
3. reads the listing's rates from Airbnb.

:::caution[Nothing has gone live]
The screen now says **Set up — not live yet**. Airbnb still controls these calendars. Read
[Going live](/channels/going-live/) before the next step.
:::

## 3. Read what came back

The review screen lists what was read from Airbnb per listing:

- **Nightly price**, weekend price, guests included, extra-guest price, cleaning fee.
- **Kept on Airbnb** — settings Santara AI has no exact equivalent for. They still apply on Airbnb;
  they are shown so you know they exist.
- **Worth checking on Airbnb** — values that looked unusual. Santara AI flags rather than guesses.
- **We could not read this listing's price safely** — the room keeps its own price and nothing was
  invented. Set a price on the room before going live.

:::tip[Why the refusals]
A mis-read price on a live listing is a real loss, so the importer refuses ambiguous data instead
of guessing at it. If a listing's price could not be read at all, its channel link is held back
until a real price exists — the link restores itself once one does.
:::

## 4. Go live

**Go live on Airbnb** hands calendar control to Santara AI. Availability starts syncing. **Prices stay
as they are on Airbnb** until you change one here or a pricing rule publishes.

If a listing does not go live, the reason is shown as Airbnb gave it:

| Message | What to do |
| --- | --- |
| *Airbnb has not finished linking this listing yet* | Wait a minute, press Go live again |
| *The listing's currency has not synced yet* | Wait a few minutes and retry |
| *This room is missing its channel setup* | Remove the listing and import it again |
| *Airbnb did not confirm it went live* | Retry once; if it repeats, [contact support](/help/support/) |

The other listings still go live. A partial result leaves the rest set up and retryable.

## Several Airbnb accounts

Press **Connect another account** and repeat. Each account gets its own connection page with its
own listings. Connecting an account that is already connected is refused — disconnect the existing
one first.

## Removing things

- **Remove from Santara AI** on one listing — removes that room's imported reservations, messages,
  guests and reviews. Your Airbnb listing is untouched. You can import it again later.
- **Disconnect** the account — the same, for every listing on it, and syncing stops.

## Guest messages and reviews

Once live, Airbnb conversations appear in [Messages](/daily/messages/) and replies you send there
go back to Airbnb. Guest reviews appear in [Reviews](/daily/reviews/), and you can publish your
review of a guest to Airbnb from there — see the warning on that page, it cannot be undone.
