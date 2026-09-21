---
title: How channel connections work
description: What a connection is, what syncs in each direction, and the four states a listing passes through.
sidebar:
  order: 1
---

Santara AI connects to the channels you sell on through a certified channel manager. Once a listing
is live, four things flow:

| Direction | What moves |
| --- | --- |
| **Out to the channel** | Availability, nightly rates, minimum stay, restrictions |
| **In from the channel** | Reservations, cancellations, guests, messages, reviews |
| **In, once, at import** | Listing details — title, photos, amenities, capacity, existing rates |
| **Out, on demand** | Your reply to a guest message; your reply to a review |

Anything else stays where it is. Santara AI does not edit your listing's description, and it never
changes a price on a channel that you did not either type or ask a pricing rule to work out.

![Availability and rates go out to the channel; bookings, guests, messages and reviews come back. Listing details arrive once, at import.](/diagrams/sync-directions.en.svg)

## Supported channels

Santara AI connects to **54 sales channels**, plus your own booking site. Two of them have a flow
built into Santara AI end to end; the other 52 you pick from the channel catalogue in the app.

| Channel | How it connects |
| --- | --- |
| **Airbnb** | You authorise Santara AI on Airbnb, then pick listings — [Connect Airbnb](/channels/airbnb/) |
| **Booking.com** | You add a connectivity provider in the extranet, then enter your Hotel ID — [Connect Booking.com](/channels/booking-com/) |
| **The other 52** — Agoda, Expedia, Trip.com, Vrbo, Traveloka, Tiket.com, Hostelworld and more | **Settings → Channels → Add a channel**, pick it from the catalogue, then connect and map it in a three-step setup — [Connect another channel](/channels/other-channels/) |
| **Your booking site** | Built into Santara AI, no connection needed — [Your direct booking site](/setup/booking-site/) |
| **PriceLabs** | Read-only detection: if you run PriceLabs, Santara AI's own pricing engine stands aside |

Every channel gets the same calendar, rates and restrictions, and brings bookings, cancellations
and guests in. Two things differ by channel:

- **Guest messages.** Replies go out on **Airbnb, Booking.com and Expedia** only — those are the
  channels whose guest messaging the channel manager carries. On any other channel, answer the
  guest in that channel's own inbox. Vrbo guest messages are not supported.
- **Reviews** arrive, and can be answered, where the channel passes them on.

![Settings → Channels before anything is connected. Each channel is linked on its own and carries its own status and last-sync time.](/screens/channels.en.png)

## Connections and accounts

A **connection** is one channel account. You can connect:

- several **Airbnb accounts** to one workspace — a common case for managers who hold listings
  under different host logins;
- several **Booking.com properties**, one per Hotel ID;
- any other channel from the catalogue, **one property at a time** — connect the same channel again
  for another property.

Each connection has its own page under **Settings → Channels** showing its listings, when it last
synced, and every action available for it. Nothing in Santara AI assumes there is only one of
anything.

## The four states of a listing

This vocabulary is used identically on every screen:

![The four states a listing passes through, with Go live as the gate before the last one.](/diagrams/listing-states.en.svg)

1. **Not connected** — no channel account is linked.
2. **Linked — not mapped yet** — Santara AI can see the listing on the channel, but it does not point
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

Removing a single listing (**Remove from Santara AI**) does the same for that one room.

:::caution
Disconnecting is not the way to pause. If you want the channel to stop taking bookings for a
while, close the dates in the [calendar](/daily/calendar/) instead — that keeps your data and your
history.
:::
