---
title: Upsells
description: Late checkouts, early arrivals and extra nights found in the calendar and offered before the guest thinks to ask.
sidebar:
  order: 3
---

![The Upsells screen: this month's captured value, active potential, message-ready and expiring-soon counts, offers grouped by room with their top opportunities, and the Offers ready to send list with Send all.](/screens/upsells.en.png)

An upsell is a night or an hour you already have, sold to a guest who is already staying. Santara AI
finds them by reading the calendar, not by guessing at what a guest might want.

## What it looks for

Three offers, each one a rule you can switch on or off and price under [Settings](#settings):

| Offer | When it is offered | Priced as |
| --- | --- | --- |
| **Early check-in** | On arrival day, when the night before is empty | A percentage of one night |
| **Late checkout** | On checkout morning, when nobody arrives that day | A percentage of one night |
| **Stay extension** | Before checkout, when the next night is free | The nightly rate minus a discount |

Each is calendar-driven and deterministic: if the night is genuinely free and the timing works, the
opportunity exists. If it does not, no offer is made — there is nothing to be optimistic about.

## Working the pipeline

The **Upsells** screen opens with four figures — **Captured this month**, **Active potential**,
**Message-ready** and **Expiring soon** — and then **Offers by room**: the rooms worth most first, each
with its **Top Opportunities**, soonest to expire first. Open an opportunity to see:

- **The facts behind it** — the reservation, the free nights, the rate it is priced from.
- **Why it was recommended** — the signals and the confidence behind the score.
- **Timing constraints** — operational windows, conflicts, and anything suppressing it (a clean
  scheduled that morning, a booking that arrived since).
- **Review offer**, which opens the drafted message to the guest in [Messages](/daily/messages/),
  ready to send.

Revenue and occupancy figures are not on this screen; they are on **Reports → Performance**.

### Sending several at once

**Offers ready to send** lists the offers whose message is ready, soonest to expire first. **Send
all** opens **Send upsell messages** with each guest's highest-value offer already picked — one offer
per guest. Change the pick or untick anything, then press **Send all**: the messages go out one at a
time, each guest's progress shown as it goes, and **Stop** halts the rest.

## What happens when a guest says yes

You extend or adjust the stay in [Reservations](/daily/bookings/) or the
[calendar](/daily/calendar/). The nights close on every channel as usual, and the extra revenue
appears in [Reports](/money/reports/) under the stay it belongs to.

Santara AI does not silently modify a reservation on your behalf.

## Where else offers surface

- In the [daily brief](/daily/) — the highest-value opportunity for today's guests.
- In [Messages](/daily/messages/) — as a prompt in the thread where it is relevant.

## When the guest asks first

A guest who has confirmed their booking in the [guest guidebook](/setup/guidebook/) can request an
early check-in, a late checkout or one more night themselves, from the QR sticker in their room. The
request lands here already **Accepted**, at the price the guidebook showed them, and the team is
notified. It passed the same calendar check as a detected offer, but nothing on the booking changes
until you adjust the stay.

## Settings

The **Settings** tab of Upsells sets each offer once for the whole workspace:

- **On / Off** for each of the three offers.
- **Price (% of one night)** for early check-in and late checkout, priced from that night's live
  calendar rate; **Discount (% off the nightly rate)** for a stay extension.
- **Time offered** — the earliest check-in or latest checkout you offer.
- **Guest message** — the text the guest reads, pre-filled with the Santara AI default in your
  workspace language. Insert fields such as the guest's name, the price or the time; the price must
  be in it. **Reset to default** brings the default back.

Every room follows these unless you give a room its own: open the room from
[Properties](/setup/properties/) and change its upsell rules there. **Save settings** applies to
new offers from the next detection run.

## Nothing is sent automatically

Every offer is a draft. You send it — one at a time, or several with **Send all**. A guest who receives an automated offer for a night that was
booked five minutes ago writes a review about it, which is why this stays manual.
