---
title: Rates and availability
description: Per-date prices, how many units are sellable, and the stay rules that go out to your channels with them.
sidebar:
  order: 2
---

[Smart pricing](/money/pricing/) decides the shape of the year. This is where you set a specific
night by hand, and where the rules that are not prices — minimum stay, how many units are
sellable — live.

Open it from **Pricing → Calendar**, in the **Grid** view, and pick the property and room at the top.

![The Calendar tab of Pricing in Grid view: property and room pickers, the Grid / Year switch, Edit price and Sync now, the figures for the next 14 nights, Market check, and the grid with Left to sell above the rate plan's nightly prices.](/screens/rates.en.png)

## The grid

Rooms and their rate plans down the left, dates across the top, with **Left to sell** above each
room's plans. **Click a night, then another night in the same row — or drag — to pick a range**;
shift-click extends it too. That is how you price a week without touching seven cells.

A small **Selected nights** box then asks what the range is for: **Edit price & rules** or **View
prices** — on the Left to sell row, **Edit rooms to sell** or **View availability**. The editor has:

| Field | What it means |
| --- | --- |
| **Price per night** | The nightly rate for those dates on that rate plan. It publishes to your connected channels |
| **Rooms to sell** | How many of that room are sellable each night. Capped at the room's unit count, and bookings take from it |
| **Selling** | **Keep** leaves it as it is now; **Open**, or **Closed** — nobody can book those nights, on any channel |
| **Stay rules** | Min stay (applies to both arrival and through-stay rules), max stay, **No check-ins** and **No check-outs**, each with the same Keep choice |

On a single night, **Why this price & history** shows the price, who set it — you, smart pricing,
PriceLabs or an import — why, what each channel sells it at and whether it has reached them, with
**Show change history** for that night.

**Add to pending** stages the change; **nothing is sent until you press Save all** in the bar that
counts your unsaved changes, where **Review** lists them and **Discard all** drops them. Saving pushes
a batched update to your channels — there is no separate publish step. A night still waiting to send
shows a clock.

Above the grid, **Prices for** switches between your price and what a channel sells at; the channel
chips under each plan open that channel's adjustment (see
[Channel prices](/money/pricing/#channel-prices)); and **History** lists the last 50 changes to
prices, stay rules and units at the property.

## Rate plans

A **rate plan** is a price for a room plus its rules: how many guests are included, what an extra
guest costs, cancellation terms, and the restrictions above. A room can have more than one — a
flexible rate and a cheaper non-refundable one.

Plans are **mirrored with your connected channels**. Edits here sync out; a plan created on the
channel side appears here after a refresh rather than needing to be retyped.

Restriction fields on a plan apply to **every day**. Leave one blank to keep whatever the channel
currently holds — a blank is "don't manage this", not "set it to zero".

:::caution[Booking.com needs its occupancies priced]
If a rate plan has no price for a guest count Booking.com accepts, that room stays *linked but not
mapped* — Santara AI will not guess a price on a live listing. Price the occupancy on the plan and
map it again. See [Connect Booking.com](/channels/booking-com/).
:::

## Full sync

**Push 500 days of availability and rates for every room** on the property, as two channel
updates. Use it when you suspect a channel has drifted out of step — after an outage, or after
editing on the channel side.

It is safe to run and it is not a repair for a mapping problem: if a listing points at the wrong
room, a full sync sends the wrong data faster. Check the
[mapping](/channels/listings/) first.

## What overrides what

Working from the strongest:

1. **Closed** — nothing sells, whatever the price says.
2. **The channel's own accepted range** — narrows your price; it never widens it.
3. **Your floor and ceiling** under [Edit price](/money/pricing/#the-listings-numbers) — automatic
   pricing never crosses them.
4. **A price you typed here** — protected from the pricing engine unless you have explicitly
   allowed it to overwrite manual prices.
5. **The pricing rules** — everything else.

## An empty grid

*"No rooms with editable rate plans yet"* means the property has rooms but none of them has a rate
plan to price. Add one from the room, then come back.
