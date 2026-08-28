---
title: How channel connections work
description: What a connection is, what syncs in each direction, and the four states a listing passes through.
sidebar:
  order: 1
---

Santara connects to the channels you sell on through a certified channel manager. Once a listing
is live, four things flow:

| Direction | What moves |
| --- | --- |
| **Out to the channel** | Availability, nightly rates, minimum stay, restrictions |
| **In from the channel** | Reservations, cancellations, guests, messages, reviews |
| **In, once, at import** | Listing details — title, photos, amenities, capacity, existing rates |
| **Out, on demand** | Your reply to a guest message; your reply to a review |

Anything else stays where it is. Santara does not edit your listing's description, and it never
changes a price on a channel that you did not either type or ask a pricing rule to work out.

![Availability and rates go out to the channel; bookings, guests, messages and reviews come back. Listing details arrive once, at import.](/diagrams/sync-directions.en.svg)

## Supported channels

| Channel | How it connects | Status |
| --- | --- | --- |
| **Airbnb** | You authorise Santara on Airbnb, then pick listings | Available |
| **Booking.com** | You add a connectivity provider in the extranet, then enter your Hotel ID | Available |
| **Your booking site** | Built into Santara, no connection needed | Available |
| **VRBO** | Via the same channel manager | On the roadmap — it appears in Settings → Channels as a greyed card until it ships |
| **PriceLabs** | Read-only detection: if you run PriceLabs, Santara's own pricing engine stands aside | Available |

## Connections and accounts

A **connection** is one channel account. You can connect:

- several **Airbnb accounts** to one workspace — a common case for managers who hold listings
  under different host logins;
- several **Booking.com properties**, one per Hotel ID.

Each connection has its own page under **Settings → Channels** showing its listings, when it last
synced, and every action available for it. Nothing in Santara assumes there is only one of
anything.

## The four states of a listing

This vocabulary is used identically on every screen:

![The four states a listing passes through, with Go live as the gate before the last one.](/diagrams/listing-states.en.svg)

1. **Not connected** — no channel account is linked.
2. **Linked — not mapped yet** — Santara can see the listing on the channel, but it does not point
   at any room here. Nothing syncs.
3. **Mapped — awaiting activation** — it points at a room. Still nothing syncs; the channel has not
   handed over.
4. **Live** — availability and rates go out, bookings and messages come in.

The gap between 3 and 4 is deliberate and it is yours to close. See
[Going live](/channels/going-live/).

## Sync timing

- **New bookings, cancellations and messages** arrive within seconds to a minute, pushed by the
  channel.
- **Availability and rate changes you make** are pushed as you save them, usually visible on the
  channel within a minute.
- **A full re-read** of a connection happens when you press **Refresh** on it, and on a schedule.

If a channel has an outage, changes queue and drain when it recovers. You do not need to repeat them.

## What disconnecting does

Disconnecting a connection stops syncing and removes the reservations, guests, messages and reviews
that came from it. **Nothing on the channel is affected** — your listing, its calendar and its
bookings are untouched there. You can reconnect the same account later and import again.

Removing a single listing (**Remove from Santara**) does the same for that one room.

:::caution
Disconnecting is not the way to pause. If you want the channel to stop taking bookings for a
while, close the dates in the [calendar](/daily/calendar/) instead — that keeps your data and your
history.
:::
