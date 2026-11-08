---
title: Going live
description: When a listing goes live on each channel, what changes at that moment, and what to check before you import or map anything.
sidebar:
  order: 5
---

Read this before you import a listing or map a room. It is the one page in these docs that
describes an action you cannot quietly undo.

## When a listing goes live

Going live is the moment a channel hands calendar control to Santara AI. When that happens depends
on the channel:

- **Airbnb** — the import takes each listing live as its last step, once it has a real price and
  its capacity is confirmed. A listing Airbnb has not confirmed stays **Set up — not live yet**, and
  goes live when you press **Go live on Airbnb** in the import step, or **Go live** on the
  connection page. See [Connect Airbnb](/channels/airbnb/#going-live).
- **Booking.com and every other channel** — there is no separate Go live step. **Mapping a room
  sets it up and takes it live** — availability starts syncing right away.

So the checks below belong **before** you import on Airbnb, and **before** you map a room
anywhere else.

## What going live changes

From that moment, for the listings that are live:

- **The channel hands calendar control to Santara AI.** Availability is now driven from here. A
  booking on any channel closes the night on every channel.
- **Rates are pushed from here.** On Airbnb, prices stay exactly as they are until you change one
  in Santara AI or a [pricing rule](/money/pricing/) publishes. On Booking.com and the other
  channels, the rate plan you mapped is what the channel receives.
- **Restrictions are pushed** — minimum stay, closed-to-arrival, and the rest.
- Bookings, guests, messages and reviews sync in.

## Check these things first

1. **Every room has a nightly price.** A room with no price cannot sell, and going live with a
   zero price is the one mistake with a same-day cost. Santara AI blocks a zero-price channel link
   for exactly this reason, but check anyway.
2. **Occupancy is right.** How many guests each room sleeps drives extra-guest pricing and what
   Booking.com will accept.
3. **The calendar looks like the channel's calendar.** Open [Calendar](/daily/calendar/) and
   compare a month against the channel. Existing bookings should already be there.
4. **The right rooms are mapped to the right listings.** A crossed mapping sends the wrong
   availability to the wrong listing, which is worse than no mapping.
5. **Capacity is confirmed.** Before a channel first touches a property's calendar, Santara AI asks
   you to confirm it — **Confirm capacity before we go live**, or *Confirm capacity to continue*
   beside a listing. Press **Confirm** and answer **How many identical units?**, **Currency** and
   **Nightly rate**. Availability is capped at that unit count: if a room is one apartment and you
   enter 3, you have just offered three. The dialog shows how many upcoming nights will be open and
   how many closed as fully booked before you confirm.

## Going live listing by listing

You do not have to take everything live at once. On Airbnb, import one listing, watch it for a
day, then import the rest. On other channels, map one room first. Listings that are not live stay
set up and keep their mapping.

## If it does not work

The failure is shown as the channel reported it. Common Airbnb ones and their fixes are in
[Connect Airbnb](/channels/airbnb/#going-live). A partial result is normal: the listings that went
live are live, the rest stay set up, and you can retry.

## Pausing or backing out

- **To stop selling nights**, close the dates in the [calendar](/daily/calendar/). This is the
  right way to pause. Your data and history are kept.
- **To hand control back**, remove the listing from Santara AI or disconnect the connection. Your
  channel listing and its calendar are unaffected, but the reservations, messages and reviews
  imported here are removed with it.

:::note[Upcoming stays are kept]
Removing or disconnecting stops syncing — it does not cancel anything on the channel. Stays that
have not ended yet stay in Santara AI, so their nights remain blocked on your other channels and
nothing gets double-booked. Past stays, their messages and reviews are removed.
:::

:::caution[Bookings taken while live are real]
Anything a guest books during the live period exists on the channel and must be honoured, whatever
you do in Santara AI afterwards. Disconnecting removes the record from here, not the obligation.
:::
