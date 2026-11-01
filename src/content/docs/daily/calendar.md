---
title: Calendar
description: Every night across every room, with prices, minimum stays and availability editable straight on the grid.
sidebar:
  order: 5
---

Rooms down the left, dates across the top, stays drawn as bars. Scroll sideways to load more dates;
free nights show their price.

![The calendar: every room down the left, every night across the top. Free nights show the price they will sell at.](/screens/calendar.en.png)

## Reading it

- **A bar** is a reservation. Its colour tells you the channel; its label shows the guest and the
  revenue.
- **A free night** shows the nightly price that will be charged for it.
- **A striped block** is a ticket scheduled over those dates — a repair, a deep clean, an owner
  stay.
- **Click a day** for the day list: everything moving on that date, arrivals and departures
  together.

## Block or unblock dates

Blocking a night is the same as closing it: nobody can book it on any channel. You do it straight
on the grid — click one night, or drag across several.

1. **Pick the nights.**
   - *One night:* click the free night on the room's row.
   - *Several nights:* press on the first night and **drag** along the same row to the last one,
     then let go. The nights pulse while you drag. Drag past the right-hand edge and the calendar
     scrolls to follow you.
   - *Widen a range:* hold **Shift** and click a further night on the same row.

2. A **Selected dates** panel opens under the range, showing how many nights you picked. Choose
   **Rates & availability**.

   ![Three nights dragged on Garden Room: the nights are outlined and the Selected dates panel opens beside them.](/screens/calendar-block-select.en.png)

3. Set **Stop sell** to **Closed** to block the nights, or to **Open** to unblock them. Leave the
   other fields empty to keep them as they are.

   ![Stop sell set to Closed for the three nights, with Add 3 nights to pending below.](/screens/calendar-block-close.en.png)

4. Click **Add 3 nights to pending** (the number is your selection). The nights turn amber with a dashed border — nothing
   has been sent yet, so you can keep selecting and stacking more changes.
5. Click **Save all** at the top of the calendar. The change is pushed to every connected channel.
   **Discard all** throws the pending changes away instead.

   ![The three nights now amber and dashed, waiting in pending; Save all sends them to every channel.](/screens/calendar-block-save.en.png)

Closed nights then read **Closed** on the grid. To unblock them later, select the same nights again
and set **Stop sell** to **Open**.

:::note
- A range stays on **one room row** — to block two rooms, do each row in turn (both can sit in
  pending and save together).
- **Past dates** are read-only and cannot be selected.
- **On a phone or tablet** dragging scrolls the calendar, so tap one night instead and widen the
  range with the dates in the panel.
- Press **Esc** or the **×** on the panel to cancel a selection.
:::

## Editing a range

Select a range of nights on a room and you get three actions:

**Book these nights for a guest** — create a reservation by hand. Use it for a direct booking taken
over the phone, an owner stay, or a friend. Manual reservations block the nights on every connected
channel just like a real one.

**Schedule maintenance or a job** — opens a [ticket](/daily/tasks/#tickets) over those dates and
draws it here.

**Price, min stay or close the dates** — the availability editor:

| Field | What it does |
| --- | --- |
| **Price** | The nightly rate for those nights, on the selected rate plan |
| **Minimum stay** | The shortest booking that may start on those nights |
| **Stop sell** | **Closed** blocks those nights on every channel; **Open** sells them again |

Changes wait in **pending** until you click **Save all**; that one save pushes them to every connected channel. There is no other "publish" step.

## Prices and the pricing engine

A price you type here is a **manual price**, and the [pricing engine](/money/pricing/) leaves it
alone — unless you have explicitly turned on *Replace prices I typed by hand* for that listing,
which overwrites with no undo.

That is the whole relationship: rules set the shape of the year, your hand wins on the nights you
touched.

## Availability and unit count

A room can never offer more nights than its **unit count**. If a room is one apartment its unit
count is 1, and availability is capped there on the calendar, on the way out to the channel, and in
what you can type. A room representing eight identical units has a count of 8 and sells them
independently.

If the calendar shows less availability than you expected, check the room's unit count first.

## Closing dates is how you pause

To stop selling — a renovation, an owner's stay, a season off — **close the dates** here. Do not
disconnect the channel: that removes your imported history and does not stop the listing existing
on the channel.

## Blocks that came from the channel

A block made on Airbnb or in the Booking.com extranet before you went live is imported and shown.
Once live, make blocks here — the channel's own calendar is now downstream of this one.
