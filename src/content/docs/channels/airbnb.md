---
title: Connect Airbnb
description: Connect the account, choose your listings, and import them one at a time — each one is created, priced and taken live.
sidebar:
  order: 2
---

## What you need

- The **Airbnb account that owns the listings**. A co-host who cannot see Account settings cannot
  authorise the connection.
- Popups allowed in your browser — the authorisation opens in a window. If it is blocked you will
  see *"Your browser blocked the popup"*; allow it and press **Connect Airbnb** again.
- **No other channel manager or PMS connected** to that Airbnb account — Airbnb refuses a second
  one and the connection does not complete. Disconnect the old one in Airbnb first (**Account →
  Privacy**, under connected services).
- **Host details complete** — a missing email verification or similar blocks the authorisation;
  Airbnb names what is missing on its own screen.
- **Signed in to the right Airbnb account** in this browser before you start. Changing the Airbnb
  password afterwards does not break the connection.
- **Calendar availability not set to "Unavailable by default"** on the listings — choose all dates or
  a number of days ahead, or availability Santara AI sends cannot open the calendar.

## Where to start

**Settings → Channels → Add a channel**, then press **Connect** on the **Airbnb** tile. Airbnb is
the one channel that needs no property first — Santara AI creates the properties and rooms from
your listings.

The setup has three steps: **Connect**, **Choose listings**, **Import**.

## 1. Connect

Press **Connect Airbnb**. Airbnb's own page opens in a window: sign in there and approve the
connection. Until you do, Santara AI shows *Waiting for you to finish authorizing on Airbnb*. If
you lose the window, press **Reopen the Airbnb window**.

If you close the window before approving, you will see *Authorization wasn't completed*. Nothing
was connected; press **Try again**.

## 2. Choose listings

Once Airbnb shares the account's listings you get a list with a photo of each. For each listing:

- **Untick** anything you do not want in Santara AI. **Select all** and **Clear all** work on the
  whole list.
- Choose where it goes under **Import into**:
  - **New property — created from this listing** — the usual choice for a whole-home listing.
  - **An existing property** — then pick **Which room?**, if that property has more than one. Use
    this when several Airbnb listings are bedrooms of the same villa. When a listing looks like a
    property you already have, Santara AI suggests it — press **Use it** to accept.
- A listing already connected elsewhere is marked *already connected* and cannot be picked twice.

Press **Import N listings** — the button counts the listings you ticked.

## 3. Import

Listings are imported **one at a time**, with a progress bar (*2 of 5 done*). For each listing
Santara AI reads it from Airbnb, creates the property and room, maps the listing, reads its
price, and takes it live. Each row shows what happened to the **Property**, **Room**, **Rate** and
**Airbnb** — *Live* or *Not live yet*.

- Keep the page open while it runs. Leaving it stops the listings that have not started yet.
- **Stop after this one** finishes the listing in progress and stops. The listings already
  imported stay set up; the rest are untouched.
- Come back to the setup later and it offers **Pick up where you left off**, with the remaining
  listings still waiting.
- A listing that fails shows the reason and a **Try again** button. The others carry on.

When the run finishes, Santara AI brings across bookings, reviews and messages for everything you
imported. That keeps running in the background — you do not have to wait. **Go to your listings**
opens the connection page; **Import more** goes back to step 2.

### Prices read from Airbnb

- The listing's **nightly price**, weekend price, guests included, extra-guest price and cleaning
  fee are read and set on the room.
- **Kept on Airbnb** — settings Santara AI has no exact equivalent for. They still apply on Airbnb;
  they are shown so you know they exist.
- **Worth checking on Airbnb** — values that looked unusual. Santara AI flags rather than guesses.
- **Kept the room's own price** — Santara AI could not read the listing's price safely, so the room
  keeps the price it already had, and nothing was invented.

:::tip[Why the refusals]
A mis-read price on a live listing is a real loss, so the importer refuses ambiguous data instead
of guessing at it. If a listing's price could not be read at all, its channel link is held back
until a real price exists — the link restores itself once one does.
:::

## Confirm capacity

Before Santara AI first writes to a listing's calendar, the property's **capacity** has to be
confirmed. A new property gets this at import. A listing imported into a room you already had may
show **Confirm capacity before we go live** instead (on the connection page, *Confirm capacity to
continue*). Press **Confirm** and answer the dialog:

- **How many identical units?** — one apartment is 1. This number caps the availability sent to
  Airbnb, so a wrong one can sell nights you do not have, or close nights you do.
- **Currency** and **Nightly rate** — a rate suggested from Airbnb is filled in; edit it if it is
  wrong.

The dialog shows how many upcoming nights will be open and how many closed as fully booked, then
press **Confirm**. **Not now** leaves the listing waiting.

## Going live

Taking a listing live means Airbnb **hands calendar control to Santara AI**. Availability starts
syncing; **prices stay as they are on Airbnb** until you change one here or a pricing rule
publishes. Read [Going live](/channels/going-live/) for what changes.

The import takes each listing live as its last step. A listing Airbnb has not confirmed stays
**Set up — not live yet**, with a **Go live on Airbnb** button, in the import step and on the
connection page (where the listing reads *Ready — not live* and has its own **Go live** button).

If a listing does not go live, the reason is shown as Airbnb gave it:

| Message | What to do |
| --- | --- |
| *Airbnb has not finished linking this listing yet* | Wait a minute, press Go live again |
| *The listing's currency has not synced yet* | Wait a few minutes and retry |
| *This room is missing its channel setup* | Remove the listing and import it again |
| *Airbnb did not confirm it went live* | Retry once; if it repeats, [contact support](/help/support/) |

The other listings still go live. A partial result leaves the rest set up and retryable.

## Several Airbnb accounts

Press **Add another account** on the Airbnb tile in **Add a channel** and repeat. Each account gets
its own connection page with its own listings. Connecting an account that is already connected is
refused — disconnect the existing one first.

## Reconnect

If Santara AI's access is removed from the Airbnb account — in Airbnb's connected apps, for
example — syncing stops. The connection shows **Needs reconnect** and a banner: *Santara AI's
access was removed from your Airbnb account*. Press **Reconnect** and sign in with the **same**
Airbnb account. Your listings and history are kept.

You can also press **Reconnect** on an account that is working — to renew access, for example.
Your listings **stay live** while you approve in the Airbnb window; the page shows *Waiting for you
to approve in the Airbnb window*, then *Reconnected* once Airbnb confirms. If you sign in with a
**different** Airbnb account, nothing changes and the page tells you so — to add that account, use
**Add another account** instead.

## Removing things

- **Remove from Santara AI** on one listing — removes that room's imported reservations, messages,
  guests and reviews. Your Airbnb listing is untouched. You can import it again later.
- **Disconnect** the account — the same, for every listing on it, and syncing stops.

## Guest messages and reviews

Once live, Airbnb conversations appear in [Messages](/daily/messages/) and replies you send there
go back to Airbnb. Guest reviews appear in [Reviews](/daily/reviews/), and you can publish your
review of a guest to Airbnb from there — see the warning on that page, it cannot be undone.
