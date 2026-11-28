---
title: Smart pricing
description: Choose who sets each room's price — Santara AI's ready-made rules for your area, PriceLabs, or you — with hard limits, and your manual prices left alone.
sidebar:
  order: 1
---

Santara AI's pricing engine works out a nightly rate for every future night and publishes it to your
channels. It runs on **Santara AI's ready-made rules for each area** — the seasons, weekends and
holidays of the market your property is in — and you can see exactly what it would do before
anything goes out.

Nothing is priced automatically until a room is set to **Automatic (Santara AI)** and its property
has an area. A room on **Manual — I set prices** keeps whatever price it has.

The **Pricing** screen has three tabs — **Calendar**, **Channel prices** and **Who sets prices** —
and is part of the **Operator** plan (and of the single plan in
[markets with their own price](/setup/billing/#markets-with-their-own-price)). See
[Plans and billing](/setup/billing/).

To set one night by hand — or a minimum stay, or how many units are sellable — see
**[Rates and availability](/money/rates/)**.

![The Who sets prices tab: every room grouped under its property, each with a dropdown set to Automatic (Santara AI), PriceLabs or Manual — I set prices, the area each property uses for Automatic, and the time of the nightly update.](/screens/pricing.en.png)

## Who sets each room's price

The **Who sets prices** tab lists every room under its property, with one choice each:

| Choice | What it means |
| --- | --- |
| **Automatic (Santara AI)** | Changes daily with demand, on the ready-made rules for the property's area. Prices start changing tonight |
| **PriceLabs** | Prices come from the PriceLabs listing you pick for that room — see [below](#if-you-already-use-pricelabs) |
| **Manual — I set prices** | Nothing changes the price. It stays where it is now, and you edit it in the [rate calendar](/money/rates/) |

A room is on exactly one; choosing one clears the others. A dot on each row is green when it is
working and amber when it needs you — click it to see why: *Publish prices automatically* is off so
prices are only suggested, say, or the room is not on a channel yet.

**Change several** lets you tick rooms, or every room in a property, and set them all at once. The
top of the tab counts the rooms on each choice and says when the nightly update runs.

## Choosing an area

Automatic uses one **area** per property — the market whose seasons, holidays and weekends look
like yours. Every room in that property on Automatic shares it. A property with none says *No area
chosen for Automatic* and its rooms stay manual; on the Calendar tab it reads *No rules chosen — this
listing is never priced*.

You pick the area when you move a room to Automatic, or with **Change** next to the property. The
picker searches by city, island or country, and puts the area **Suggested for this listing** first,
worked out from where the property is. Nothing is published until you choose.

There is nothing to build or edit: the rules are Santara AI's, and we keep their holiday dates up to
date each year — including the ones that move with the moon, as Nyepi and Idul Fitri do. A rule set
you copied and edited before is still listed under **Your rules** and keeps running as it was, but
**we do not maintain its dates**.

## The two halves

**The area's rules decide the shape of the year. The room's numbers decide what it is a shape of.**

- The **rules** are multipliers: this season is ×1.85, Fridays are +20%, Christmas replaces the
  season. One area can price fifty properties.
- A **room's pricing settings** are its base price, its floor and ceiling, and its costs. Those are
  yours, under [Edit price](#the-listings-numbers).

![A nightly price starts from the base, is multiplied by the season and the day of week, may be replaced by an event, and is then clamped by your limits and the channel's before it is published. A price you typed by hand skips all of it.](/diagrams/pricing-pipeline.en.svg)

The **Year** view on the Calendar tab lists the **Events moving your prices** over the next 12
months and what each does — how much it moves the price, and whether it blocks discounts, check-in
or check-out.

## The listing's numbers

Press **Edit price** on the **Calendar** tab. It opens on the room the chart is drawn for:

| Setting | Meaning |
| --- | --- |
| **Base price** | What every multiplier keys off. Used only when the rate plan has no price of its own — the plan's price comes first |
| **Rate plans** | Smart pricing sets the primary plan. A plan that *Follows the primary* moves with it by its offset; one left *On its own* stays where it is |
| **Minimum / maximum** | Hard bounds. Automatic pricing never crosses them. A minimum replaces the calculated floor; it does not raise it |
| **Costs** | What one night costs you to service. Fill in all six fields or none — one blank and the floor falls back to a share of the base price |
| **Price this listing automatically** | Off stops the rules running here entirely |
| **Publish prices automatically** | Off works prices out and shows them without publishing them |
| **Replace prices I typed by hand** | Off by default. See below |
| **What the channel will accept** | A separate window held by Booking.com and Airbnb. It narrows the range above; it does not replace it. Edited in the listing's channel settings |

## Protecting manual prices

**A price you typed by hand is never overwritten**, unless you turn on *Replace prices I typed by
hand* for that listing. When that is on, the rate you typed is overwritten and **the value is gone —
there is no undo**.

This is why you can safely hand-price a wedding week on a room that is otherwise automatic. The
grid marks a night you priced yourself; clear the cell to hand it back to smart pricing. For a room
whose price nothing should move at all, choose **Manual — I set prices** instead.

## Seeing before publishing

The **Calendar** tab has two views. **Grid** draws your price for the next 90 nights over the
[rates grid](/money/rates/), with the booked share along the bottom — click a night to see why it
costs that — and a row of figures for the next 14 nights: average price, booked, sold-out nights and
whether smart pricing is on. **Year** shows a year of prices: a trend chart of what the engine
suggests against the base rate it started from and the floor and ceiling it may not cross, the
events, and a heat map.

Set a room to Automatic, leave *Publish prices automatically* off, and watch it for a week before
letting it out.

### Sync now

**Sync now** on the **Calendar** tab runs the rules for the listing the chart is drawn for and opens
the **Smart pricing preview**. Nothing is published yet. Every night is listed as **Will change**,
**Your prices, untouched** (a price you typed by hand) or **Already correct**, and **Why this price**
breaks a night down into base, season, day of week, event, booking pace, gap night and last minute.
A night held at your floor or ceiling says so.

**Apply these prices** publishes them to your channels. If *Publish prices automatically* is off for
the listing, the list is suggestions only and the button reads **Apply N suggested prices** instead:
those nights are saved as your own prices, the same as typing them in the grid, so smart pricing
leaves them alone until you clear them. While PriceLabs owns the rates, or smart pricing is switched
off, there is no Apply button — the list is what would be written, not what was. Saving a new base
price under **Edit price** offers the same preview, so you do not have to wait for the night's run to
see its effect. Only the workspace owner can run it.

### Market check

Where Santara Revenue is set up, **Market check** (Beta) on the Calendar tab shows what your
competitors charge, checked every day, and suggests the nights worth changing. Nothing changes until
you apply a night. Choose the competitors for a listing in Santara Revenue first — **Set up
competitors** takes you there. For rooms on Automatic, *Let Smart pricing follow competitors* pulls
each night halfway toward the suggested price, by at most 15%, inside your limits.

## Channel prices

The **Channel prices** tab holds **one adjustment per channel**. Every plan mapped to a channel sells
there at your price plus its adjustment, so you change your price once and every channel follows.

Beside each channel is the commission it took on your recent bookings and the **break-even**
adjustment. The channel takes its cut from the adjusted price, so covering an 18% commission takes
more than +18%; **Use +N%** applies the break-even figure. An adjustment applies to every property on
that channel connection, and Airbnb's is set on Airbnb. The channel chips under each plan in the grid
open the same adjustment.

## When it runs

Once a room is on Automatic and *Publish prices automatically* is on, the engine **runs every night**
and publishes what changed. Two limits keep it steady, so it does not churn your channel rankings:

- **A night it has already priced moves only a little per run** — by default at most 8% up or down.
  A big seasonal jump is reached over several nights' runs, not in one leap. The first time a night
  is priced, it goes straight to its target.
- **It stays close to the seasonal calendar** — by default within 30% of the price the seasons, day
  of week and events give — so demand signals cannot run away with it.

Your minimum and maximum always win over both. A workspace whose billing has been read-only for 30
days is skipped until it pays — see [If a payment fails](/setup/billing/#if-a-payment-fails).

## Did it work?

Revenue, occupancy, average daily rate and earnings per property per night (RevPAR) are on
**Reports → Performance**, counted by the night a stay is slept — see [Reports](/money/reports/).
RevPAR — revenue ÷ every night you had to sell — is the number that matters: ADR and occupancy move
independently, and neither alone tells you whether pricing earned anything.

Under the grid on the Pricing screen, **Occupancy signals · Next 30 nights** sorts rooms into
**Healthy**, **Check pricing**, **Needs demand** and **Watch** from their next 30 nights, and each
room opens in the price grid.

## If you already use PriceLabs

PriceLabs is one of the three choices on **Who sets prices**. If it is not connected yet, choosing it
offers to connect it first. Then pick the PriceLabs listing that prices the room — each PriceLabs
listing can price only one room. Its prices are pulled every night and sent to every channel, and
**Update now** pulls them straight away. Santara AI's own engine stands aside for those rooms, rather
than the two fighting over the same calendar.

An amber dot flags a listing whose sync is off in PriceLabs, or one PriceLabs also changes on Airbnb
directly — then Airbnb gets prices from two places. See [PriceLabs](/channels/listings/#pricelabs).
