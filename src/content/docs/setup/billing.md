---
title: Plans and billing
description: A 3-month (90-day) free trial with a three-listing limit, two tiers, pricing per listing that falls as you grow, and 0% commission on channel bookings and upsells.
sidebar:
  order: 7
---

**Settings → Billing**. The figures on that screen are authoritative for your workspace — this page
explains the shape of them.

![Billing on a workspace with no card yet: Start your 3-month free trial, an optional promo code, Start free trial, and What you pay below.](/screens/billing.en.png)

## The trial

Three months free — **90 days** — and **a card is required**. Nothing is charged on the day you
add it, and cancelling before day 91 costs nothing.

A workspace with no card opens **Settings → Billing** on **Start your 3-month free trial**. Enter
a promotion code under **Have a code? (optional)** if you have one, then press **Start free
trial**: Stripe opens its own secure card form, and nothing is charged today. **What you pay**,
below it, shows what the plan will cost each month.

:::caution[The trial has two limits, not one]
It ends at **90 days or 3 listings, whichever comes first.** Connecting a fourth listing ends the
trial there and then and charges your card for the plan your listing count falls into.

Importing is usually the first thing anyone does, so a host with eight listings is billed during
onboarding rather than on day 91. That is intended — but it surprises people who read only the
three months. The screen tells you the amount and asks before it charges.
:::

### How many days are left

**Personal settings** (the account menu at the foot of the sidebar) opens with a **Your package**
card: the plan you are on and, during the trial, a ring that counts down the days — *Free trial: N of 90
days left*. It turns amber in the last two days. The card is shown only to people who can
see billing, so a cleaner never sees it.

### When the trial ends without a card

Nothing is locked on the day. You keep **full access for 7 more days**, and a banner on every page
says until when — *"Your free trial has ended. You can keep using Santara AI until [date]…"* — with
**Choose a package**.

If no plan is chosen by then, the workspace turns **read-only**. There is no wall in front of the
product: you can still open every screen and read everything, and the banner stays at the top. You
just cannot change anything until you choose a package. Nothing is deleted. See
[If a payment fails](#if-a-payment-fails) for what keeps running while it is read-only.

### One free trial per owner

The free trial is given once. If you already owned a workspace that had a subscription and you
create another, the new one starts **without free days**: the Billing screen says **Resume your
subscription**, and the card is charged the day you add it. The same applies when you come back
after cancelling.

## What you are billed for

**A listing — one sellable room.** Not a property, and not a channel connection.

A four-bedroom villa let by the room is **four listings**. The same villa let whole is **one**.
This is counted the same way no matter how the rooms got there: created by hand, imported from
Airbnb, or linked from Booking.com.

Only **active** listings are billed. The Billing screen shows the count it is charging against your
total.

## The two tiers

You choose the tier. It decides what the product *does*, and it never changes on its own as you
grow.

| | **Host** | **Operator** |
| --- | --- | --- |
| **Price** | $9.99 per listing, at any size | Falls per listing as you grow — see the bands below |
| **The schedule and calendar** | Yes | Yes |
| **Channel sync** | Yes | Yes |
| **Cleaning and maintenance** | Yes | Yes |
| **AI insights and the tomorrow preview** | — | Yes |
| **Unified inbox and guest profiles** | — | Yes |
| **Pricing insights** | — | Yes |
| **Upsells** | — | Yes |

Host's number never moves: 30 listings on Host is $299.70 a month. That is the whole proposition —
one figure, times however many listings you run.

### The Operator bands

Within Operator, the **band** follows your listing count. Nothing here is chosen; it is arithmetic.

| Band | Listings | Base | Each additional listing |
| --- | --- | --- | --- |
| **Operator** | 1–10 | $29/mo, covering the first listing | $25 |
| **Portfolio** | 11–40 | $254/mo, covering the first ten | $18 |
| **Enterprise** | 41+ | from $794/mo, covering the first forty | $12 |

The bands are **continuous**: each base is exactly the previous band's price at that listing count
($29 + 9 × $25 = $254; $254 + 30 × $18 = $794). Nothing jumps when you cross a boundary — the
eleventh listing simply costs less than the tenth.

**Enterprise is quote-only.** It carries an SLA and dedicated onboarding, and Portfolio is
arithmetically cheaper at every count, so there is no listing count at which a self-serve checkout
could honestly sell it. Above forty listings, [talk to us](/help/support/).

## Markets with their own price

Some countries have their own price book — Vietnam first. It is the simplest one we publish: **one
flat rate per listing, per month, in the local currency.** No base fee, no tiers, no bands. One
listing or fifty, every listing costs the same, and the plan carries the **whole product** —
everything in the Operator column above.

The rate for your country is on the [pricing page](https://www.santara.ai/pricing/), which shows the
price for where you are, and — once you subscribe — on **Settings → Billing**. It is billed in the
local currency, not in dollars converted at checkout.

**Which book you are on is set when the workspace is created**, from the country you signed up
from — so it follows the operator rather than the properties. A manager based outside Vietnam is
on the global schedule above even if every listing is Vietnamese, and the reverse holds too. It
does not switch afterwards: a card can only ever be charged in one currency, so moving between
books means a new subscription rather than a setting — [talk to us](/help/support/) if you are on
the wrong one.

## Choosing between Host and Operator

Change it from **Settings → Billing**, and only the **workspace owner** can:

- **Host → Operator** takes effect **immediately**. Your card is charged today for the change, with
  your unused Host time credited.
- **Operator → Host** takes effect **at your next renewal**. Nothing is charged and nothing is
  refunded, and you keep the Operator features until then.

The asymmetry is deliberate: gaining features should not wait, and losing them should not happen
mid-month by accident.

## Commission

Santara AI takes **no commission on channel bookings** (Airbnb, Booking.com and the rest) **or on
upsells**. Everything is the subscription described above.

The one exception is your [direct booking site](/setup/booking-site/), and only if you switch it
on: the **Guest booking fee** adds 3% to a direct booking, **paid by the guest** on top of the stay
and shown to them as its own line. Your payout is unchanged. It is **off by default**, and it
applies only to bookings paid online at checkout — never to a booking request. See
[Connect Stripe](/setup/booking-site/#5-connect-stripe).

## Adding a listing mid-month

Going past the listing count your plan covers is a deliberate, priced action rather than a silent
change to your invoice.

1. Adding the room shows **how many listings you are using of how many you have paid for**.
2. It quotes **what it costs today** — the pro-rated amount for the rest of this billing period.
3. Your usual monthly amount resumes at the next renewal.
4. You confirm, and the card is charged then and there.

If the card is declined, **nothing is charged and no listing is added**. If you have no card saved
yet, you are sent to add one first. If you are still in the trial and this is the listing that
passes the allowance, the dialog says so plainly — it ends the trial and starts the plan that day.

A **promotion code** can be applied at checkout. Codes do not stack with a discount already on your
plan.

## What deleting a property does to the bill

It stops being billed going forward. **A charge already paid for the current month is not
refunded** — that is stated on the delete confirmation.

## Managing payment

**Manage payment method** opens Stripe's own portal, where you update the card and download
invoices. The card form is Stripe's throughout; Santara AI never sees the number. Stripe's invoices
are the document your accountant wants.

You do not need the portal just to fetch an invoice. The **Invoices** list on the Billing screen
shows each one with its status — Paid, Unpaid, Void or Uncollectible — and **View** or
**Download PDF**. **Load more** reaches older ones.

## If a payment fails

You get a banner and a notification. Stripe retries on its own schedule, and you have a **grace
period of three business days** to fix the card.

If it is not fixed, the workspace becomes **read-only** rather than disappearing: everything is
still there, the banner stays on every page, and you cannot make changes until billing is sorted.
Fix the card and everything resumes.

**After 30 days read-only, the background work pauses too** — the daily brief, the nightly pricing
run, and new bookings and messages coming in from your channels. Your channel connections are not
disconnected and your listings keep selling on the channels themselves. Pay, and it resumes,
catching up on what arrived while it was paused. See
[Data and privacy](/setup/data-and-privacy/#if-billing-lapses).

## Grandfathered and agreed pricing

- **Signed up under an earlier price list?** You keep it. A price change never moves you; changing
  plan is something you do deliberately. The Billing screen names your plan, quotes what you would
  pay on current pricing, and offers **Move to current pricing** — which applies from your next
  renewal, with nothing charged that day.
- **On terms agreed directly with us?** The screen says so instead of quoting a standard rate, and
  your invoice is the exact figure.

## Cancelling

Cancel from the Billing screen. Access continues to the end of the paid period, with no further
charge.

Your channel listings are unaffected — cancelling Santara AI does not touch your Airbnb or
Booking.com account. But it does end the syncing that keeps their calendars aligned, so **close or
reconcile your calendars before you go**.

## Refer & earn

**Refer & earn** is in the account menu at the foot of the sidebar. It gives you a personal **link**
and **code** to share with other hosts.

- When a workspace signs up with your link or code and pays, you earn a share of what it pays. **The
  page states the current percentage and what it applies to** — for example their first payment.
  Read it there; it is the figure that counts.
- The workspace you referred also gets a discount when it starts.
- Each commission is **on hold** until the refund period ends, then shows as **owed to you**, then
  **paid out**. The page lists your sign-ups and which of them are paying.
- Commission is paid by **bank transfer, Wise or PayPal**. Enter where to send it under **Where to
  send your commission**.
