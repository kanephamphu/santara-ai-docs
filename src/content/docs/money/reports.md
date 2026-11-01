---
title: Reports
description: One owner statement a month — what the stays earned, what each channel took, what it cost, and what the owner is left with.
sidebar:
  order: 4
---

Reports is one screen: the **Owner statement**. It answers a single question for a month — what
did the stays earn, what did the channels take, what did it cost, and what is the owner left with.

It replaces the old report library and the separate Accounting section. Two screens answering the
same question is how you end up with two owner nets and no way to say which is right, so there is
one, and everything on it adds up.

## The owner statement

Read it top to bottom:

| Line | What it is |
| --- | --- |
| **Gross booking revenue** | What guests paid for the stays in the period, with the number of stays |
| **Channel fee — {channel}** | One line per channel: what Airbnb, Booking.com and the rest kept |
| **Expenses** | Every cost recorded against the period, with the number of entries |
| **Owner net** | Gross − channel fees − expenses |

Two rules decide what lands in the month, and both are printed under the title:

- **A stay counts in the month it checks out.** A stay from 28 March to 3 April belongs to April.
  Cancelled stays are left out.
- **Each currency is stated separately and never converted.** A villa priced in IDR that took a
  USD booking gets two statements, not one blended number.

If no stay checked out in the month you see *No stays checked out in this month.*

## Gross, fees and payout

Every stay can carry three different figures — gross (what the guest paid), room revenue (the
accommodation part) and payout (what reaches you). The statement starts from **gross** and shows
each channel's take as its own line, so the owner can see where the money went.

Not every channel reports its fee, and the statement never guesses one. Under a fee line you may see:

- **"… worked out from the payout"** — the channel did not report a fee, so it was calculated as
  gross − payout.
- **"… fee not reported"** — there was no fee and no way to work one out. Those stays are counted,
  not quietly treated as fee-free: assuming a channel took nothing overstates what the owner is
  owed.
- **"… without a gross figure"**, under the gross line — a stay that only ever recorded a payout.
  The payout is used instead, which understates the top line visibly rather than pretending.

If you are reconciling against a bank statement, it is the payout that matches.

## Expenses

Below the statement is the list of **Expenses** — the same rows that were subtracted above, so you
can check every one. Switch to **Expenses only** to see just the costs.

### Adding an expense

Press **Add expense**. The form has five fields:

- **Date** — when the cost happened, not the day you type it.
- **Property** — which property it belongs to.
- **Category** — **Electricity**, **Water**, **Cleaning** or **Other**.
- **Amount** — in the property's currency.
- **Note** — what it was for.

Older entries may carry other categories (Linen, Maintenance, Repairs, Utilities and so on). They
still show on the statement and can still be filtered for; they are simply not offered on the form.

### Owner-borne and manager-borne

Every expense is either **Owner-borne** or **Manager-borne**. Expenses you add with **Add expense**
are owner-borne. The statement subtracts both; use the filters to look at one side only.

### Shared bills

One electricity meter behind a whole building is one bill for several listings. Tick the other
listings under **Also covers** — the amount is recorded once and never divided.

A shared bill is subtracted only when the statement covers **every** listing it names. If you
narrow the view to some of them, it moves to a separate list, **Shared costs — not allocated**,
and is not subtracted — otherwise each listing's statement would carry the whole bill.

## Filters and periods

Open **Filters** to choose:

- **Period** — **This month**, **Last month**, **Last 3 months**, **This year** or a **Custom range**.
  The resolved period is printed on the statement and written into the CSV, so a range can never
  pass for a single month.
- **Listings** — one property, several, or all.
- **Category** and **Owner-borne** / **Manager-borne** — to look at part of the costs.

Filtering the costs changes the bottom line's name from **Owner net** to **Net of shown
expenses**, with a note saying which filters are on. Some costs are left out, so the figure is no
longer the owner's net — and the screen says so rather than letting it pass for one.

### Saved views

Under **Saved**, press **Save current** and name the view — "Villa Anyar, utilities this year", for
example. It comes back with one click, and can be deleted from the same list.

## Download CSV

**Download CSV**, next to the page title, exports exactly what is on screen: the same period, the
same filters, the same rows. Send it to the owner or to your accountant. Santara AI is not a
bookkeeping system — it is the operational record that feeds one.

## Which plan includes it

Reports is part of the **Operator** plan and every plan above it. On **Host**, the page opens to a
locked panel that explains what the upgrade adds. See [Plans and billing](/setup/billing/).

## Occupancy, ADR and RevPAR

Those figures — occupancy, reservation average daily rate, earnings per property per night and the
room-by-room comparison — now live on [Upsells](/money/upsells/).
