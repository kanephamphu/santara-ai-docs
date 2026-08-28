---
title: Channel troubleshooting
description: The dozen things that actually go wrong with a connection, and what fixes each one.
sidebar:
  order: 6
---

Start with the two moves that fix most of it: check **Settings → Channels** for the connection's
status and last sync, then press **Refresh**.

## Connecting

**The Airbnb popup never opened.**
Your browser blocked it. Allow popups for the site and press *Connect Airbnb* again.

**"Authorization wasn't completed."**
The window closed before you approved on Airbnb. Nothing was connected — press *Try again*.

**"This Airbnb account is already connected."**
The same account is on another connection in this workspace. Disconnect that one first.

**No Airbnb listings appear after authorising.**
Airbnb can take a moment to share them. Press *Check again* after a few seconds. If it stays empty,
confirm you authorised with the account that actually owns the listings — a co-host login shows
none.

**No Booking.com rooms are found.**
Almost always the connectivity provider step. In the extranet, **Account → Connectivity provider**,
search **Channex**, select it, accept the agreement. Then refresh here. If it still finds nothing,
re-check the Hotel ID against the number at the top of the extranet.

## After import

**A room has no price.**
The importer refused to guess an ambiguous one. Open the room, set a nightly price, and it can
sell. On Airbnb the channel link restores itself once a real price exists.

**"Kept on Airbnb."**
Settings with no exact equivalent here. They still apply on Airbnb. Nothing to do.

**A listing stayed *linked — not mapped*.**
It points at no room. Map it from the connection page. On Booking.com, the usual cause is a rate
plan that does not price a guest count Booking.com accepts — open the room's rate plan and price
that occupancy.

**Rooms I did not create appeared.**
Booking.com discovers rooms as bookings arrive and adds them to the linked property. Rename them,
or link them to rooms you already have.

## Once live

**The channel and Santara disagree about a date.**
Press **Refresh** on the connection. If it persists, note the exact date and room and
[contact support](/help/support/) — do not fix it by editing both sides, which can loop.

**Availability shows fewer nights than I expect.**
Availability is capped at the room's unit count. One apartment is one unit. Check the room's unit
count.

**"This channel was removed on the channel manager side."**
The connection was cancelled upstream — usually the connectivity provider was removed in the
extranet. Syncing has stopped. Re-accept it on the channel, then disconnect and reconnect here.

**A price I typed by hand was overwritten.**
Check the listing's pricing settings: *Replace prices I typed by hand* is off by default, and on it
overwrites manual rates with no undo. See [Smart pricing](/money/pricing/#protecting-manual-prices).

**Messages stopped arriving.**
Check the connection status first. If it is connected and recently synced, the thread may have
moved — some channels close a thread after checkout. [Contact support](/help/support/) with the
reservation code.

**A booking arrived that I cannot see in the calendar.**
Check the room it landed on: a listing mapped to the wrong room puts real bookings in the wrong
place. Fix the mapping ([Managing listings](/channels/listings/)) and tell support so the existing
reservation can be moved.

## Still stuck

Ask the [assistant](/help/assistant/) — it can read your workspace and answer "what is the status
of my Airbnb connection" directly. Then [contact support](/help/support/) from inside the product,
which attaches the workspace and connection automatically.
