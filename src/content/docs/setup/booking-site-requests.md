---
title: Enquiries and booking requests
description: The two things guests send you from your own site — a question, and an ask for dates you have to approve.
sidebar:
  order: 3
---

Your [booking site](/setup/booking-site/) produces two inboxes, and they are not the same thing.

## Enquiries

The **Leads** tab on **Booking Site**. Everyone who has used the contact form on your site: name,
message, and how to reach them.

If it is empty and you expected otherwise, the usual cause is that there is no form on the site —
add a **Contact** section on the Design tab, or a contact page. No form, no enquiries.

These are leads, not bookings. Nothing is held and no dates are reserved.

## Booking requests

The **Requests** tab on **Booking Site**. Requests exist only for properties you have set to
**request mode** rather than instant booking — the guest asks for dates, and nothing is reserved
until you say yes.

The same list also shows the stays guests **booked and paid for online**, marked **Paid**, so a
direct payment always has a screen where you can see it and refund it.

The screen tells you how many people are waiting on you, because that is the number that matters:
a request sitting unanswered is a guest deciding to book somewhere else.

### Approving one

Approve, and the stay is created and the nights close on every connected channel like any other
booking. Decline, and the dates stay open.

Choose request mode per property on the booking site's **Properties** section. It is the right
choice for a villa where you want to vet the group, and the wrong one for anything competing on
convenience.

### Money

A booking request is **not paid online** — nothing is charged when the guest asks, and the optional
[Guest booking fee](/setup/booking-site/#5-connect-stripe) never applies to it.

A stay paid online at checkout goes into your own Stripe account. If the Guest booking fee was on,
the row shows the booking fee it includes; your payout is the rest. To refund one:

- **Refund per policy** returns what your [cancellation policy](/setup/booking-site/#pricing-fees-and-cancellation)
  allows today — the row previews it as *Policy refund now: amount (percent)*.
- **Refund in full** returns everything that has not gone back yet.

Partial refunds add up, and the row shows how much has been refunded so far. A refund also returns
the matching share of any booking fee — Santara AI does not keep a fee on a stay that did not happen.

:::caution[Refunding is not cancelling]
**Refunding returns the money only. The stay remains on your calendar until you cancel it** — and
while it is there, those nights are still closed on every channel. Two steps, deliberately
separate, because refunding a partial amount on a stay that is going ahead is a real thing people
do. If the guest is not coming, do both.
:::

## Where these differ from channel bookings

A direct booking is yours: the guest's real email address rather than a
forwarding alias. What you give up is the channel's dispute process — which is why request mode
exists, and why the [contact details](/setup/booking-site/) on your site are worth filling in
properly.
