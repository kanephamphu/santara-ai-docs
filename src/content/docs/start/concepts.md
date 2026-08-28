---
title: How Santara is put together
description: Workspace, property, room, rate plan, listing, connection. Six words that explain every screen in the product.
sidebar:
  order: 3
---

Almost every question about "where does this live?" is answered by these six words. They are worth
five minutes.

## Workspace

Everything you see belongs to one **workspace** — your properties, your team, your billing, your
booking site. If you manage two portfolios that must never mix, they are two workspaces, and you
switch between them from the account menu.

Your login is separate from the workspace. One person can be an owner in their own workspace and a
cleaner in someone else's.

## Property, then room

A **property** is a building or an address. A **room** is a bookable unit inside it.

| What you sell | Property | Rooms |
| --- | --- | --- |
| A whole villa, one listing | The villa | One room — the whole villa |
| A 3-bedroom villa let by the room | The villa | Three rooms |
| A small guesthouse, 8 units | The guesthouse | Eight rooms |
| Five apartments in one block, sold separately | Usually five properties | One room each |

![A workspace holds properties; a property holds rooms; each room carries its own rate plan and maps one-to-one to a channel listing.](/diagrams/object-model.en.svg)

**The room is what guests book, and the room is what is billed.** Prices, availability, photos,
capacity and channel mappings all hang off the room. The property holds what they share: the
address, wifi, the house rules, the cleaning group.

Some facts exist at both levels — wifi, door code, access notes. Set them on the property and
every room inherits; set them on a room and that room wins. See
[Properties and rooms](/setup/properties/).

## Rate plan

A **rate plan** is the price a room sells at, plus the rules attached to it: minimum stay,
how many guests are included, what each extra guest costs, cancellation terms.

A room can have more than one rate plan (a flexible rate and a cheaper non-refundable one, for
example). Imported rooms arrive with a rate plan built from what the channel had.

The nightly price on the calendar is the rate plan's price for that night. Pricing rules change
that number; they do not create new plans.

## Listing and connection

A **connection** is one channel account you have linked — one Airbnb login, or one Booking.com
property. You can have several, including several Airbnb accounts.

A **listing** is one thing on that channel that maps to one Santara room. Mapping is one-to-one:
this Airbnb listing is that room. When a listing is mapped and the channel is active, that room's
availability and prices flow out, and its bookings and messages flow in.

A listing goes through these states, and the wording on screen matches:

| State | Meaning |
| --- | --- |
| **Not connected** | The channel account is not linked yet |
| **Linked — not mapped yet** | We can see the listing; it points at no room |
| **Mapped — awaiting activation** | It points at a room, but the channel is not handing over yet |
| **Live** | Availability and rates sync out, bookings and messages sync in |

Nothing moves from *mapped* to *live* on its own. See [Going live](/channels/going-live/).

## Reservation, guest, thread

A **reservation** (also called a stay or booking) belongs to a room and a date range. A **guest** is
a person, and the same person across two stays is one guest with a history. A **thread** is the
conversation with that guest — one per reservation on most channels.

## Capability, not job title

Access is not "cleaners see three screens". Every screen and every API route asks for a named
**capability** — `stay.read`, `pricing.write`, `guest.message.send` — and your role is a bundle of
them, optionally narrowed to certain buildings. That is why a cleaner can see which building a job
is in without being able to open your estate. See [Team and roles](/setup/team/).

## Money words

- **Revenue** in Santara means **net payout** — what the channel actually pays you, after its
  commission. It is labelled on screen wherever it is shown, because gross and payout differ by
  15% and mixing them up ruins a year of reporting.
- **RevPAN** is revenue per available night: revenue divided by every night you had to sell.
  It is the number the pricing engine is judged on, because ADR and occupancy each move on their
  own and neither alone tells you if you are winning.
