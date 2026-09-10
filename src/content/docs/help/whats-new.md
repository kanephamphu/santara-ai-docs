---
title: What's new
description: Product changes worth knowing about, newest first, each pointing at the page that explains it.
sidebar:
  order: 10
---

Changes you would actually notice, grouped by the month they landed. Internal work, performance and
bug fixes are left out unless they change what you see.

This page starts in July 2026, when this manual was first published. Every page also carries its
own **Last updated** date at the foot, which is the finer-grained answer to "has this changed?".

## September 2026

### Guest messages in your language

A guest who writes in German, Korean or French now reads to you in English, Indonesian or
Vietnamese — whichever is set on your own profile — with **Show original** one click away. Each
teammate reads in their own language; your replies go out exactly as you wrote them. See
[Reading a guest in their language](/daily/messages/#reading-a-guest-in-their-language).

### An inbox that works as a to-do list

Every thread has one status — **Needs reply**, **Waiting on guest** or **Handled** — and the inbox
opens on **Needs you**. Threads arriving or leaving today rise to **Needs you now**, pins follow
you across devices, the browser tab shows how many are waiting, and a chime (which you can mute)
plays when a guest writes. See [One status per thread](/daily/messages/#one-status-per-thread).

### Same-day arrival alerts

A booking made for a stay checking in **today** now emails the team and the room's cleaner
straight away, with the cleaning window and a warning if the clean will finish late. On by default.
See [Same-day arrival alerts](/setup/workspace/#same-day-arrival-alerts).

### The assistant can assign work

Ask Santara AI can now assign a clean, assign a ticket or change a ticket's status — each only
after you press **Confirm**. See [What it can do](/help/assistant/#what-it-can-do).

### Elsewhere

- **Cleaners without an account** — add a cleaner by name and WhatsApp number and assign them
  straight away — [Tasks](/daily/tasks/#cleaners-without-an-account).
- **Closed tickets leave the board after 30 days**; their history stays —
  [Tickets](/daily/tickets/#how-long-closed-tickets-stay-on-the-board).
- **A notification when a channel connects**, with how many rooms were mapped —
  [Notifications](/setup/workspace/#notifications).
- **Bookings show their real source**: Agoda, Expedia, Traveloka, Trip.com and others appear under
  their own name instead of "Manual", and Reservations can be filtered by channel —
  [Bookings](/daily/bookings/).

## August 2026

### Billing is counted per listing

The billable unit is now a **listing — a sellable room**, not a property row. A four-room villa is
four listings whether you created the rooms by hand or linked them from Booking.com; before this,
the two routes disagreed and could differ several-fold for the same building.

If you add a listing beyond what your plan covers, Santara AI now **asks first, shows the price, and
charges for the rest of the billing period** rather than silently changing your invoice. Promotion
codes are accepted at checkout. See [Plans and billing](/setup/billing/).

### Two tiers: Host and Operator

**Host** is $9.99 per listing at any size — the schedule, channel sync, cleaning and maintenance.
**Operator** adds insights, the tomorrow preview, the unified inbox, guest profiles, pricing
insights and upsells, and its price falls per door as you grow. You choose the tier; only the band
inside Operator follows your listing count. See
[Choosing between Host and Operator](/setup/billing/#choosing-between-host-and-operator).

### Ask Santara AI

An assistant on every screen that reads your workspace under your own permissions. Read-only, with
one exception: it can draft a guest reply. See [Ask Santara AI](/help/assistant/).

### Smart pricing grew up

- **Preview a rule set against the real engine** before publishing, rather than a calendar-only
  approximation — [Seeing before publishing](/money/pricing/#seeing-before-publishing).
- **Every published price can be explained** — which season, which day-of-week premium, which
  event, which limit clamped it.
- **Market events** carry global and country tiers, with Indonesian and Vietnamese calendars
  seeded.
- Rule sets are assigned per listing, and the market only ever *suggests*.

See [Smart pricing](/money/pricing/).

### Notifications in the product

A bell in the header with eight kinds of event — a booking created, changed or cancelled; a clean
assigned or finished; a ticket opened, assigned or done. Notifications are addressed by **who can
act on them**, so somebody added next month starts receiving the ones their role owns without
anything being re-pointed. Importing a year of history stays quiet on purpose. See
[Notifications](/setup/workspace/#notifications).

### Safer channel imports

- A **zero-rate guard**: a listing whose real price cannot be read is held back from the channel
  rather than published at zero, and re-links itself once a price exists.
- **Availability is clamped to the room's unit count** on write, on push and in the UI, so what you
  see matches what the channel accepted.
- **Rename a connection**, so three Airbnb accounts are not three identical rows.
- **Undo an import** cleanly.

See [Managing listings after setup](/channels/listings/).

### Elsewhere

- **Attachments in guest messages** — [Messages](/daily/messages/).
- **Editable stays** from the reservation feed — [Bookings](/daily/bookings/).
- **Tickets can be scheduled**, which puts the repair on the calendar and holds the room —
  [Tickets](/daily/tickets/#scheduling-puts-it-on-the-calendar).
- **Calendar view modes** and a listing-visibility toggle — [Calendar](/daily/calendar/).
- **Booking.com room-level mapping** with occupancy and currency preflight checks, so a mapping
  that would silently fail to sync is refused with a reason — [Connect Booking.com](/channels/booking-com/).
- **PriceLabs** replaces Wheelhouse as the supported external pricing engine —
  [If you already use PriceLabs](/money/pricing/#if-you-already-use-pricelabs).
- A **link to these docs** from the product's own navigation.

## July 2026

### Rooms became the unit of work

A run of changes that all point the same way: the **room**, not the property, is what the product
operates on.

- **Cleaning groups moved to the room**, so a building with rooms cleaned by different people works
  properly — [Cleaning clusters](/daily/tasks/#cleaning-clusters).
- **Team access can be scoped to individual rooms**, not just buildings —
  [Scoping to buildings](/setup/team/#scoping-to-buildings).
- **Reviews are held per room**, with aggregated scores on the room —
  [Reviews](/daily/reviews/).
- **Multi-room Airbnb properties** map correctly: several listings that are bedrooms of one villa
  land as one property with several rooms — [Property, then room](/start/concepts/#property-then-room).

### Message delivery status

A reply now shows whether it actually reached the channel, rather than looking sent and quietly
failing. A message whose channel has stopped syncing stays in the thread and can be resent. See
[Messages](/daily/messages/).

### Prices sync out by default

Price synchronisation is on for connected listings rather than being a per-listing opt-in. The
zero-price safety check is independent of it and was kept. See [Rates and availability](/money/rates/).

### Booking.com onboarding, simplified

The connect flow is synchronous — enter your Hotel ID, link it to a property, map the rooms — with
explicit progress rather than a screen that appears to do nothing. See
[Connect Booking.com](/channels/booking-com/).

## Telling us what to build

The feature requests that get built are the ones that arrive with the situation attached: what you
were trying to do, and what you did instead. Send them through
[support](/help/support/) from inside the product.
