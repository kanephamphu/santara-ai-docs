---
title: Your data and privacy
description: What Santara holds, who inside your workspace can see it, what leaves it, how to get it out, and what happens when you delete something.
sidebar:
  order: 9
---

You are putting your guests' details into somebody else's software. This page is the operational
answer to what that means — what is stored, who can reach it, and how to get it back out.

The legal document is the [privacy policy](https://www.santara.ai/privacy/). This page is how it
works in practice.

## Who controls it

Santara AI is a product of **AirCierge AI LLC**, registered in Wyoming, USA, with its operations
team in Da Nang, Vietnam. Data questions and requests go to **hello@santara.ai**, or through
[support](/help/support/) from inside the product, which arrives with your workspace attached.

**Your host and guest data is not sold.** Not to anyone, in any form.

## What is held

Roughly, everything the product needs to run your day:

| Kind | Examples |
| --- | --- |
| **Property** | Buildings, rooms, photos, house rules, wifi, door codes, access notes |
| **Commercial** | Rates, rate plans, availability, pricing rules, costs, owner statements |
| **Reservation** | Stays, dates, status, gross, room revenue and net payout |
| **Guest** | Name, contact details where the channel shares them, stay history, messages |
| **Operational** | Cleans, tickets, notes, who did what and when |
| **Account** | Your name, email, language, timezone, and a hash of your password |

Passwords are stored as **PBKDF2 hashes with 310,000 iterations**, never as text. Nobody at Santara
can read your password, and neither can we recover it — which is why a reset issues a new one
rather than telling you the old one.

## Who inside your workspace can see it

Not "everyone with a login". Access is decided on three separate axes, and all three have to
agree:

1. **Capability** — every screen *and every API route* asks for a named permission
   (`stay.read`, `pricing.write`, `guest.message.send`). Hiding a menu item is not the security;
   the route refuses a link somebody types by hand.
2. **Scope** — which buildings and rooms a person is attached to. A scoped member does not see the
   rest of your estate at all.
3. **Data class** — door codes, guest contact details and financial figures are each their own
   class, independent of the screen they appear on.

That third axis is the one people miss. It is why a cleaner can be told which building a job is in
without being handed its door code, and why a manager can run the operation without seeing owner
payouts. See [Team and roles](/setup/team/#how-access-actually-works).

**Nothing is shared between workspaces, ever.** If you run two portfolios as two workspaces, they
are two separate worlds even though you sign into both.

## What the AI can see

The [assistant](/help/assistant/) answers using your workspace — that is the point of it — but
under real limits:

- **It uses your permissions, not its own.** A cleaner asking about revenue is told they do not
  have access, not given a number.
- **The workspace comes from your session**, never from anything you or it can type. It cannot be
  argued into another workspace.
- **It is read-only, with exactly one exception**: it can *draft* a reply to a guest. It cannot
  send a message, change a price, alter a booking, take a listing live, or move money.

Guest messages, briefs and drafts are processed by a **third-party AI model provider** under
contract, as the [privacy policy](https://www.santara.ai/privacy/) describes. AI output can be
wrong — briefs, drafts and pricing signals are all things you review before acting on. Nothing is
sent to a guest without you pressing send.

## What leaves your workspace

| It goes to | What, and why |
| --- | --- |
| **Airbnb / Booking.com** | Availability, rates and restrictions out; bookings, guests, messages and reviews in — via our channel connectivity provider |
| **AI model provider** | The text needed to write a brief, draft a reply or score an opportunity |
| **Stripe** | Your card, for the subscription. Santara never sees the number |
| **Stripe, your own account** | Direct booking payments — see below |
| **Email** | Invitations, verification and reset codes, and anything you choose to send |

Nothing else. There is no advertising network and no data broker in this list.

## Money on your booking site

Payments from your [direct booking site](/setup/booking-site/) go **into your own Stripe account**,
not ours. Santara never holds guest money and never takes a commission on a booking, on any
channel.

The one thing added to a direct booking is the optional booking engine's **3% service fee, paid by
the guest** on top of the rate. It does not come out of your payout.

## Getting your data out

- **Reports** — every CSV on [the report library](/money/reports/#the-report-library) is generated
  from live data at the moment you ask for it. Reservations, revenue, occupancy, upsells, costs and
  owner statements.
- **Accounting** — owner statements export per period and per property.
- **Invoices** — from Stripe's own portal, via [Managing payment](/setup/billing/#managing-payment).
- **These docs** — every page is also markdown, if you want the manual itself
  ([Using these docs with AI tools](/help/for-ai-tools/)).

For a full export beyond the reports — or a deletion request — email **hello@santara.ai**. Say
which workspace.

## What deleting actually deletes

Worth reading before you press anything, because the blast radius differs:

| Action | What goes | What is untouched |
| --- | --- | --- |
| **Remove one listing** | That room's imported reservations, messages, guests and reviews | The listing on Airbnb or Booking.com |
| **Disconnect an account** | The same, for every listing on that connection; syncing stops | Everything on the channel's side |
| **Delete a property** | The property and its rooms | Nothing is refunded for the current month |
| **Remove a team member** | Their access, immediately, on every device | Work they did stays attributed to them |
| **Cancel the subscription** | Nothing, until the paid period ends | Your channel listings keep running on the channel |

Two of these surprise people:

- **Removing a listing and re-importing it brings the history back** on the next sync. It is not a
  destructive act in the way it sounds — the channel still has the data.
- **Deleting a team member does not delete their work.** Cleans they marked done and messages they
  sent stay in the record under their name. That is deliberate; an operational history that
  rewrites itself when somebody leaves is not a history.

Deleting a property that still has a connected listing is **refused** — disconnect its listings
first, so the channel side is cleaned up rather than left pointing at a room that no longer exists.

## If billing lapses

Your data does not vanish. An inactive subscription makes the workspace **read-only** — everything
is still there, you simply cannot change it until billing is sorted. Syncing is what stops first.
See [If a payment fails](/setup/billing/#if-a-payment-fails).

## Guest data is your responsibility too

Santara holds it; you decide who in your team can reach it. Two habits are worth building:

- **Invite people properly rather than sharing a login.** A shared login makes every access-control
  decision above meaningless, and destroys the record of who did what.
- **Scope people to the buildings they work on.** It costs nothing and it is the difference between
  a cleaner seeing one address and seeing your whole estate.
