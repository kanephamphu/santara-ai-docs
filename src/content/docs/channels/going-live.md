---
title: Going live
description: Importing a listing does not hand over your calendar. This page is what changes when you press Go live, and what to check first.
sidebar:
  order: 4
---

Read this before you press the button. It is the one page in these docs that describes an action
you cannot quietly undo.

## The promise

**Importing a listing never takes control of its calendar.** After an import, your listings are
created, mapped and priced from the channel's own data, and the channel keeps running exactly as
it did. You can look at everything, change what is wrong, and leave it sitting there for a week.

Control moves at one moment, by one deliberate action: **Go live**.

![The four states a listing passes through, with Go live as the gate before the last one.](/diagrams/listing-states.en.svg)

## What Go live changes

From that moment, for the listings you took live:

- **The channel hands calendar control to Santara AI.** Availability is now driven from here. A
  booking on any channel closes the night on every channel.
- **Rates are pushed from here.** Prices stay exactly as they are on the channel until you change
  one in Santara AI or a [pricing rule](/money/pricing/) publishes.
- **Restrictions are pushed** — minimum stay, closed-to-arrival, and the rest.
- Bookings, guests, messages and reviews were already syncing in from the import; that does not
  change.

## Check these five things first

1. **Every room has a nightly price.** A room with no price cannot sell, and going live with a
   zero price is the one mistake with a same-day cost. Santara AI blocks a zero-price channel link
   for exactly this reason, but check anyway.
2. **Occupancy is right.** How many guests each room sleeps drives extra-guest pricing and what
   Booking.com will accept.
3. **The calendar looks like the channel's calendar.** Open [Calendar](/daily/calendar/) and
   compare a month against the channel. Existing bookings should already be there.
4. **The right rooms are mapped to the right listings.** A crossed mapping sends the wrong
   availability to the wrong listing, which is worse than no mapping.
5. **Your availability count.** Availability is capped at the room's unit count. If a room is
   one apartment, it sells one night at a time — if you have set a unit count of 3 by accident,
   you have just offered three.

## Going live listing by listing

You do not have to take everything live at once. Go live on one listing, watch it for a day, then
do the rest. Listings that are not live stay set up and keep their mapping.

## If it does not work

The failure is shown as the channel reported it. Common ones and their fixes are in
[Connect Airbnb](/channels/airbnb/#4-go-live). A partial result is normal: the listings that went
live are live, the rest stay set up, and you can retry.

## Pausing or backing out

- **To stop selling nights**, close the dates in the [calendar](/daily/calendar/). This is the
  right way to pause. Your data and history are kept.
- **To hand control back**, remove the listing from Santara AI or disconnect the connection. Your
  channel listing and its calendar are unaffected, but the reservations, messages and reviews
  imported here are removed with it.

:::caution[Bookings taken while live are real]
Anything a guest books during the live period exists on the channel and must be honoured, whatever
you do in Santara AI afterwards. Disconnecting removes the record from here, not the obligation.
:::
