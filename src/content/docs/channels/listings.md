---
title: Managing listings after setup
description: Import one more, unlink one, move a listing to a different room, and read what each connection is doing.
sidebar:
  order: 5
---

Everything below lives on **Settings → Channels**, or on a connection's own page — open a
connection to get the full list of its listings, each managed on its own.

## The connection page

Each connected account has its own page showing:

- **Status** and **last sync** time.
- **Listings on this connection**, each with its state — *linked*, *mapped*, *live* — and the
  Santara AI room it points at.
- **Refresh**, which re-reads everything from the channel now rather than waiting for the schedule.

Use **Refresh** first whenever something looks stale. It is safe, it is idempotent, and it fixes
most "the channel and Santara AI disagree" reports on its own.

## Import a listing you skipped

Open the connection, press **Find listings on this account**, and the listings not yet imported are
listed. Pick where each goes, exactly as at first import. New listings you create on the channel
later show up here too.

## Add another account

**Connect another account** on the same channel. Common for managers holding listings under several
Airbnb logins. Each connection is independent — its own listings, its own status, its own sync.

## Move a listing to a different room

Remove the listing from Santara AI, then import it again into the room you want. There is no in-place
re-point, on purpose: the reservations and messages that arrived belong to the room they arrived
on, and silently moving them would rewrite history.

For **Booking.com**, the property a hotel is linked to *can* be changed in place — **Change
property**. Future reservations and messages land on the new property; everything already imported
stays where it is.

## Remove one listing

**Remove from Santara AI** removes that room's imported reservations, messages, guests and reviews.
Your listing on the channel is not affected. You can import it again later; the history comes back
with it on the next sync.

## Disconnect an account

**Disconnect** stops syncing and removes everything imported from that account. The channel side is
untouched. Reconnecting the same account later is allowed and normal.

Trying to connect an account that is already connected gives *"This Airbnb account is already
connected"* — disconnect the existing connection first.

## Deleting a property that is still connected

Santara AI refuses. Disconnect its listings first, so they are cleaned up on the channel side too —
otherwise the channel keeps a mapping to a room that no longer exists here.

## PriceLabs

If you already run PriceLabs, connect it under **Settings → Channels → Connect PriceLabs** and
Santara AI's own pricing engine stands aside for the listings PriceLabs manages.

You provide your PriceLabs **account email** and an **API key** (PriceLabs → account settings →
API). The key is verified with PriceLabs, stored encrypted, and used only to confirm the account —
Santara AI does not read prices from PriceLabs.

:::caution
Never paste a PriceLabs password anywhere in Santara AI. Sign in on PriceLabs' own site and provide
an API key intended for integrations.
:::
