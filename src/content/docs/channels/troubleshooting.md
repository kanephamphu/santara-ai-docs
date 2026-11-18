---
title: Channel troubleshooting
description: The dozen things that actually go wrong with a connection, and what fixes each one.
sidebar:
  order: 7
---

Start with the two moves that fix most of it: check **Settings → Channels** for the connection's
status and last sync, then press **Refresh**.

## Where problems show up

You do not have to go looking. Two things tell you when a channel stops working.

**The health strip.** When something is wrong, a strip appears at the top of every page, under any
billing banner. One problem is one line; several collapse into **3 things need a look**, with
**Show** to list them. Each line has **Fix**, which opens the page where it is fixed. The **×**
(*Hide until something changes*) hides those problems — a new problem shows again. When everything
works there is no strip at all.

| The strip says | What it means |
| --- | --- |
| *… is not connected. Reconnect it so bookings and prices keep flowing.* | The connection has stopped — access removed, expired, removed on the channel manager side, or activation failed. Reconnect it |
| *… is waiting on one step from you.* | Something is unfinished: listings waiting to go live, capacity to confirm, or no room mapped yet |
| *… sign-in expires on …. Reconnect before then.* | The channel sign-in runs out within 7 days. Reconnect before the date |
| *…: the last sync failed.* | The latest sync failed and none has succeeded since. Press **Refresh** on the connection |
| *3 price or availability updates keep failing to reach your channels.* | Updates have failed three times or more. Check the connection, then [contact support](/help/support/) if it stays |
| *3 listings were rejected by the channel manager.* | A room or rate plan was refused. **Fix** opens the room, where the reason shows beside the setting that caused it |

**Alerts in the bell.** When a channel refuses a price or availability update, the bell says
**… didn't accept an update** — *prices or availability may be out of date there*. A milder **…
sent a sync warning** means the update went through but the channel had a complaint worth a look.
You get at most one alert a day for the same channel, property and problem. They go to owners,
admins and co-hosts, and open **Settings → Channels**.

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
search for the provider named in the connect dialog, select it, accept the agreement. Then refresh here. If it still finds nothing,
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

**The channel and Santara AI disagree about a date.**
Press **Refresh** on the connection. If it persists, note the exact date and room and
[contact support](/help/support/) — do not fix it by editing both sides, which can loop.

**Availability shows fewer nights than I expect.**
Availability is capped at the room's unit count. One apartment is one unit. Check the room's unit
count.

**"Santara AI's access was removed from your Airbnb account, so syncing has stopped."**
Someone removed Santara AI from the Airbnb account's connected apps, or Airbnb withdrew access. The
connection shows **Needs reconnect**. Press **Reconnect** and sign in with the **same** Airbnb
account — your listings and history are kept. See [Reconnect](/channels/airbnb/#reconnect).

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
