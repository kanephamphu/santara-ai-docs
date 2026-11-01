---
title: How channel connections work
description: What a connection is, what syncs in each direction, where every channel connects, and the states a listing passes through.
sidebar:
  order: 1
---

Santara AI is your channel manager: it connects the channels you sell on. Once a listing
is live, four things flow:

| Direction | What moves |
| --- | --- |
| **Out to the channel** | Availability, nightly rates, minimum stay, restrictions |
| **In from the channel** | Reservations, cancellations, guests, messages, reviews |
| **In, once, at import** | Listing details — title, photos, amenities, capacity, existing rates |
| **Out, on demand** | Your reply to a guest message; your reply to a review |

Santara AI never writes to your **Airbnb** listing's content — its title, description and photos
stay as they are on Airbnb. It never changes a price on a channel that you did not either type or
ask a pricing rule to work out.

On **Booking.com and the other channels**, your property's content is sent too. When you save a
property or a room, Santara AI pushes its photos (up to 30), description, house policy,
cancellation policy and facilities to the channel manager, which passes them to the channels that
accept them.

![Availability and rates go out to the channel; bookings, guests, messages and reviews come back. Listing details arrive once, at import.](/diagrams/sync-directions.en.svg)

## Supported channels

Santara AI connects to **54 sales channels**, plus your own booking site. Every channel, Airbnb and
Booking.com included, is a tile on **Settings → Channels → Add a channel**. Press **Connect** on a
tile and a three-step setup opens.

| Channel | How it connects |
| --- | --- |
| **Airbnb** | Connect, choose listings, import. Santara AI creates the properties and rooms from your listings — [Connect Airbnb](/channels/airbnb/) |
| **Booking.com** | Choose property, connect and map (your Hotel ID), import — [Connect Booking.com](/channels/booking-com/) |
| **Every other channel** — Agoda, Expedia, Trip.com, Traveloka, Tiket.com, Hostelworld and more | Choose property, connect and map, import — [Connect another channel](/channels/other-channels/) |
| **Your booking site** | Built into Santara AI, no connection needed — [Your direct booking site](/setup/booking-site/) |

**Every channel except Airbnb needs a property with a room first.** Until you have one, its tile
shows **Add a property first** — connecting a channel maps the rooms you already have, it does not
create them. Add one under [Properties](/setup/properties/), or connect Airbnb first and let it
create them.

:::note[PriceLabs is paused]
New PriceLabs connections are paused, so PriceLabs has no tile. A PriceLabs connection you already
have keeps working and can still be disconnected.
:::

Every channel gets the same calendar, rates and restrictions, and brings bookings, cancellations
and guests in. Two things differ by channel:

- **Guest messages.** Replies go out on **Airbnb, Booking.com and Expedia** only — those are the
  channels that pass guest messaging through a connection. On any other channel, answer the
  guest in that channel's own inbox.
- **Reviews** arrive, and can be answered, where the channel passes them on.

![Settings → Channels before anything is connected. Each channel is linked on its own and carries its own status and last-sync time.](/screens/channels.en.png)

## The three tabs

**Settings → Channels** has three tabs:

- **Add a channel** — the catalogue. Search by name, or filter by type, and press **Connect**.
  A channel you already use shows **Add another account**.
- **Connected** — every connection you have. Open one to see its listings, sync status and
  go-live state.
- **Apps** — the apps you have allowed into your account, such as Santi, ChatGPT or Claude. See
  [Connect an AI assistant](/help/ai-assistants/).

## Connections and accounts

A **connection** is one channel account. You can connect:

- several **Airbnb accounts** to one workspace — a common case for managers who hold listings
  under different host logins;
- several **Booking.com properties**, one per Hotel ID;
- any other channel from the list, **one property at a time** — connect the same channel again
  for another property.

Each connection has its own page under **Settings → Channels** showing its listings, when it last
synced, and every action available for it. Nothing in Santara AI assumes there is only one of
anything.

## Listing states

Each listing on a connection's page carries one of these labels:

| Label | Meaning |
| --- | --- |
| **Not linked** | Santara AI can see the listing on the channel; it points at no room here. Nothing syncs |
| **Linked — rates not mapped** | It points at a room, but its rates have nowhere to go yet |
| **Action required** | Something needs you — the reason is shown beside it, for example *Confirm capacity to continue* |
| **Ready — not live** | Set up and mapped, but the channel has not handed over yet |
| **Publishing…** | Going live right now |
| **Live** | Availability and rates go out, bookings and messages come in |
| **Error** | The channel refused something; the reason is shown beside it |

On Airbnb, importing a listing takes it live as its last step. On Booking.com and every other
channel, mapping a room takes it live straight away. See [Going live](/channels/going-live/).

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
