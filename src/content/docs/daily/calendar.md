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
- **Occupancy**, the first row, shows each night's share of rooms booked across everything on
  screen (*89%*, *17/19*). Each property's own header row shows the same count for its rooms
  (*2/3*).
- **Click a day** for the day list: everything moving on that date, arrivals and departures
  together.
- **A red bar with a warning sign** is an overbooked stay: the room holds more stays than units on
  those nights. Its card says **Overbooked: this room has more bookings than units on these
  nights**. See [Overbooked stays](/daily/bookings/#overbooked-stays).
- **No room assigned** is a greyed row under a property, holding stays that sit on none of its
  rooms. It only appears when there is such a stay. If a channel booking lands there, check the
  listing's mapping — see [Channel troubleshooting](/channels/troubleshooting/#once-live).
- **Hover over a bar** for the stay's card. **Ask Santi** on it opens Santi with that reservation
  already described, so you can ask about it straight away.

## Views and filters

The switch at the top of the page picks the view:

- **Timeline** — every listing down the side, dates across the top, as in the picture above. On a
  phone this becomes **Day**: one day at a time, listing who is **In**, **Out**, **Staying** and
  which rooms are **Free**.
- **Listing** — one listing, one month. Pick the listing, page with **Previous month** and **Next
  month**, and the month shows how many nights are booked (*12 of 30 nights booked*) and its
  revenue. Click a free night to add a booking or change its rate.

Both views read the same dates, so switching never loses your place, and the browser remembers
which one you used.

**Listings shown** (with a count such as *4/6*) turns listings on and off one by one, with **Show
all** and **Hide all**. The choice sticks in this browser — handy when you only look after some of
the buildings.

**Filters** opens two more:

- **Channel** — show stays from one channel only. It lists the channels of the stays on screen,
  each with its count.
- **Stay filter** — **All stays**, or only those **With upsell signal**.

**Clear filters** puts both back.

Above the grid, the arrows, **Today** and the date move through time, and **2 weeks**, **3 weeks**
or **4 weeks** sets how many days fit on screen. **Show** turns **Prices**, **Revenue** and
**Upsell** on or off on the grid. Under them a row of chips sums up what is on screen: **Tonight
13/19 booked**, **Next 7 nights 60%**, **8 arriving today**, **Booked revenue ahead** and
**Upsells open**.

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

3. In the rate editor, set **Selling** to **Closed** to block the nights, or to **Open** to
   unblock them. Its first option, **Keep**, leaves the nights as they are now (*Keep (Open)*).
   Leave the other fields as they are to keep them unchanged.

   ![The rate editor for three nights on Garden Room, with Selling set to Closed and Add 3 nights to pending below.](/screens/calendar-block-close.en.png)

4. Click **Add 3 nights to pending** (the number is your selection). The nights turn amber with a dashed border — nothing
   has been sent yet, so you can keep selecting and stacking more changes.
5. Click **Save all** at the top of the calendar. The change is pushed to every connected channel.
   **Discard all** throws the pending changes away instead.

   ![The three nights now amber and dashed, waiting in pending; Save all sends them to every channel.](/screens/calendar-block-save.en.png)

Closed nights then read **Closed** on the grid. To unblock them later, select the same nights again
and set **Selling** to **Open**.

:::note
- A range stays on **one room row** — to block two rooms, do each row in turn (both can sit in
  pending and save together).
- **Past dates** are read-only and cannot be selected.
- **On a phone or tablet** dragging scrolls the calendar, so tap one night instead and widen the
  range with the dates in the panel.
- Press **Esc** or the **×** on the panel to cancel a selection.
:::

## Editing a range

Select a range of nights on a room and the **Selected dates** panel offers two actions:

**New reservation** — book these nights for a guest by hand. Use it for a direct booking taken
over the phone, an owner stay, or a friend. Manual reservations block the nights on every connected
channel just like a real one.

**Rates & availability** — the rate editor:

| Field | What it does |
| --- | --- |
| **Price per night** | The nightly rate for those nights. It publishes to your connected channels |
| **Rooms to sell** | How many of the room's units stay on sale, up to its unit count; bookings take from this |
| **Selling** | **Closed** blocks those nights on every channel; **Open** sells them again; **Keep** leaves them as they are |
| **Stay rules** | Folded away by default: **Min stay (nights)**, **Max stay**, **No check-ins** and **No check-outs** |

**Clear overrides** removes what you set by hand on those nights. **Open the full rate calendar**
opens the Pricing grid in a new tab, for bulk work across many rooms.

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
