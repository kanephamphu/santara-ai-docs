---
title: Smart pricing
description: Rules that move your nightly rates by season, day of week, event and demand — with hard limits, and your manual prices left alone.
sidebar:
  order: 1
---

Santara AI's pricing engine works out a nightly rate for every future night and publishes it to your
channels. You control it with a **rule set**, and you can see exactly what it would do before
anything goes out.

Nothing is priced automatically until you assign a rule set to a listing. A listing with no rules
keeps whatever price it has.

The **Pricing** screen is part of the **Operator** plan (and of the single plan in
[markets with their own price](/setup/billing/#markets-with-their-own-price)). See
[Plans and billing](/setup/billing/).

To set one night by hand — or a minimum stay, or how many units are sellable — see
**[Rates and availability](/money/rates/)**.

![A rule set on the Rules tab: seasons with their multipliers and weekend strength. This one is a Santara AI template, which is why it is read-only until you make your own copy.](/screens/pricing.en.png)

## The two halves

**The rules decide the shape of the year. The listing's numbers decide what it is a shape of.**

- A **rule set** is multipliers: this season is ×1.85, Fridays are +20%, Christmas replaces the
  season. It is shared — one rule set can price fifty listings.
- A **listing's pricing settings** are its base price, its floor and ceiling, and its costs. Those
  are per listing.

![A nightly price starts from the base, is multiplied by the season and the day of week, may be replaced by an event, and is then clamped by your limits and the channel's before it is published. A price you typed by hand skips all of it.](/diagrams/pricing-pipeline.en.svg)

## Building a rule set

**Seasons.** Date ranges with a multiplier. `1.85` means 85% above the base price. Each season also
has a **weekend strength** that scales the day-of-week premiums — below 1 flattens them in a busy
season, above 1 sharpens them in a quiet one.

**Day of week.** A premium per weekday, applied to **the night, not the booking**. Each season
scales these by its weekend strength, so the same Friday premium can be gentle in peak and strong
in low season.

**Events.** Named date ranges that **replace the season** for their dates, taking whichever is
higher. Use them for holidays we do not ship, and for dates nobody travels.

| Event option | What it does |
| --- | --- |
| **Recurs each year** | For fixed dates like Christmas. Leave it off for anything that moves — Easter, Tết, Nyepi |
| **Replaces the season** | On by default; the higher of the two applies. Turn it off for something that softens demand over weeks, like Ramadan |
| **Blackout** | Blocks last-minute and demand-based discounts on those nights |
| **Blocks check-in** | An availability rule, not a price one — for days nobody can travel |

**Starting from ours.** Santara AI ships rule sets with the regional holidays kept up to date each
year. You can see exactly what they would do. Make your own copy to change anything — and note that
once it is yours, **we stop maintaining its dates**, including the ones that move with the moon:
Nyepi and Idul Fitri shift every year.

Changes in the rule editor are **staged**. Nothing applies until you press Save at the top.

## The listing's numbers

Open a listing's pricing settings:

| Setting | Meaning |
| --- | --- |
| **Base price** | What every multiplier keys off. Used only when the rate plan has no price of its own — the plan's price comes first |
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

This is why you can safely hand-price a wedding week on a listing that is otherwise automatic.

## Seeing before publishing

The pricing screen shows a year of prices as a grid, and a trend chart of what the engine suggests
against the base rate it started from and the floor and ceiling it may not cross. Assign a rule
set, leave *Publish prices automatically* off, and watch it for a week before letting it out.

### Sync now

**Sync now** on the **Prices** tab runs the rules for the listing the chart is drawn for and opens
the **Smart pricing preview**. Nothing is published yet. Every night is listed as **Will change**,
**Your prices, untouched** (a price you typed by hand) or **Already correct**, and **Why this price**
breaks a night down into base, season, day of week, event, booking pace, gap night and last minute.
A night held at your floor or ceiling says so.

**Apply these prices** publishes them to your channels. If *Publish prices automatically* is off for
the listing, there is no Apply button — the list is what would be written, not what was. Saving a
new base price under **Edit price** offers the same preview, so you do not have to wait for the
night's run to see its effect. Only the workspace owner can run it.

## When it runs

Once a listing has a rule set and *Publish prices automatically* is on, the engine **runs every
night** and publishes what changed. Two limits keep it steady, so it does not churn your channel
rankings:

- **A night it has already priced moves only a little per run** — by default at most 8% up or down.
  A big seasonal jump is reached over several nights' runs, not in one leap. The first time a night
  is priced, it goes straight to its target.
- **It stays close to the seasonal calendar** — by default within 30% of the price the seasons, day
  of week and events give — so demand signals cannot run away with it.

Your minimum and maximum always win over both. A workspace whose billing has been read-only for 30
days is skipped until it pays — see [If a payment fails](/setup/billing/#if-a-payment-fails).

## Did it work?

The performance panel answers that:

- **RevPAN** — revenue ÷ every night you had to sell. **This is the number that matters.**
- **ADR** — revenue ÷ the nights that sold.
- **Occupancy** — nights sold ÷ nights available.

ADR and occupancy move independently and neither alone tells you whether the engine earned
anything; RevPAN does.

There is also an **engine activity** chart: how much it moved prices, and whether it is bumping
into your limits. *A forest of tall bars means it is twitching — widen the dead band. A flat line
at zero means it has settled, which is the goal.*

Each night the engine has priced keeps one row, rewritten each run — so the activity column is the
newest run's work, not a running total for the window.

## Market suggestions

Based on where each listing is, Santara AI can suggest what to price it on. Suggestions are
suggestions: nothing is published until you choose.

## If you already use PriceLabs

New PriceLabs connections are **paused** for now — PriceLabs is not offered under Settings →
Channels at the moment. A PriceLabs connection you already made **keeps working**: Santara AI's own
engine stands aside for the listings PriceLabs manages, rather than the two fighting over the same
calendar, and you can still disconnect it. See [PriceLabs](/channels/listings/#pricelabs).
