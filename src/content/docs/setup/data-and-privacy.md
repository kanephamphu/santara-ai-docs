---
title: Your data and privacy
description: What Santara AI holds, who inside your workspace can see it, what leaves it, how to get it out, and what happens when you delete something.
sidebar:
  order: 10
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

Passwords are stored as **PBKDF2 hashes with 310,000 iterations**, never as text. Nobody at Santara AI
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
- **Every change it makes is proposed first and waits for your approval.** It can read freely, but
  anything that changes something — sending a guest reply, creating a ticket, assigning a clean or
  a ticket, changing a ticket's status, or creating, updating or cancelling a reservation — appears
  as a card you confirm. Nothing happens until you press **Confirm**. It cannot change a price,
  take a listing live, or move money.

Guest messages, briefs and drafts are processed by a **third-party AI model provider** under
contract, as the [privacy policy](https://www.santara.ai/privacy/) describes. AI output can be
wrong — briefs, drafts and pricing signals are all things you review before acting on. Nothing is
sent to a guest unless you press send or confirm it — or turn on auto-reply, which you choose to do.

If you [connect ChatGPT or Claude](/help/ai-assistants/), that assistant reaches your workspace
through `mcp.santara.ai` with your permissions, and what it reads is processed by that assistant's
provider under your own account with them.

## When Santara AI staff open your workspace

To fix a problem you have reported, a member of Santara AI staff can open your workspace with
**admin access**. That access:

- **Lasts at most 2 hours**, then ends on its own. Staff can leave earlier.
- **Is recorded every time** — who opened which workspace, when, and why — in an audit log.
- **Is shown to them as a red banner** across the top of every screen for as long as it lasts,
  saying that changes they make are real.

Staff are never added to your team list, and they do not receive your notifications or briefs.

## What leaves your workspace

| It goes to | What, and why |
| --- | --- |
| **Your booking channels** — Airbnb, Booking.com, Google Hotel and the others you connect | Availability, rates and restrictions out, plus property content: photos, description, house and cancellation policies, facilities. Bookings, guests, messages and reviews come in. All via our channel connectivity provider |
| **AI model provider** | The text needed to write a brief, draft a reply or score an opportunity |
| **AI assistants you connect** — ChatGPT, Claude | What you or your team ask them about, through `mcp.santara.ai` — see [Connect ChatGPT, Claude or Grok](/help/ai-assistants/) |
| **Stripe** | Your card, for the subscription. Santara AI never sees the number |
| **Stripe, your own account** | Direct booking payments — see below |
| **Email** | Invitations, verification and reset codes, and anything you choose to send |

Nothing else. There is no advertising network and no data broker in this list.

## Money on your booking site

Payments from your [direct booking site](/setup/booking-site/) go **into your own Stripe account**,
not ours. Santara AI never holds guest money.

Santara AI takes **3% commission** on direct bookings.

## Getting your data out

- **Reports** — the owner statement and its expenses export as CSV with
  [Download CSV](/money/reports/#download-csv), for any period and any set of listings.
- **Invoices** — from Stripe's own portal, via [Managing payment](/setup/billing/#managing-payment).
- **These docs** — every page is also markdown, if you want the manual itself
  ([Using these docs with AI tools](/help/for-ai-tools/)).

For a full export beyond the reports — or to delete a whole workspace — email
**hello@santara.ai**. Say which workspace.

## What deleting actually deletes

Worth reading before you press anything, because the blast radius differs:

| Action | What goes | What is untouched |
| --- | --- | --- |
| **Remove one listing** | That room's imported reservations, messages, guests and reviews | The listing on Airbnb or Booking.com |
| **Disconnect an account** | The same, for every listing on that connection; syncing stops | Everything on the channel's side |
| **Delete a property** | The property, its rooms, its reservations, calendar and messages, and its connected listings in Santara AI | Nothing is refunded for the current month |
| **Remove a team member** | Their access, immediately, on every device | Work they did stays attributed to them |
| **Cancel the subscription** | Nothing, until the paid period ends | Your channel listings keep running on the channel |

Two of these surprise people:

- **Removing a listing and re-importing it brings the history back** on the next sync. It is not a
  destructive act in the way it sounds — the channel still has the data.
- **Deleting a team member does not delete their work.** Cleans they marked done and messages they
  sent stay in the record under their name. That is deliberate; an operational history that
  rewrites itself when somebody leaves is not a history.

Deleting a property that is still connected to a channel is **refused** — disconnect its channels
first, so the channel side is cleaned up rather than left pointing at a room that no longer exists.

## Deleting your account

You can delete your own account yourself, on the web: sign in at
[santara.ai/delete-account](https://www.santara.ai/delete-account/) and type your email to confirm.
The mobile app does not delete accounts.

What happens:

1. You are **signed out on every device** straight away, and the account can no longer sign in.
2. Our team reviews the request and **completes it within 30 days**.
3. Your name, email, phone number, photo and password are removed. Bookings, invoices and other
   records of the workspaces you worked in are **kept for accounting, anonymised** — without your
   personal details.

If you are the **only owner** of a workspace other people use, make someone else an owner first;
the request is refused until you do. Cannot sign in? Email **support@santara.ai** from your
account's address and the team will delete it for you.

## If billing lapses

Your data does not vanish, and nothing is deleted.

- **A free trial that ends without a card** keeps full access for **7 more days**. After that the
  workspace turns **read-only** — everything is still there, you simply cannot change it until you
  choose a plan.
- **A failed renewal** gets a short grace window to fix the card, then the workspace turns read-only
  the same way.
- **After 30 days read-only**, the background work is paused too: the daily brief, the nightly
  pricing sync and new bookings and messages coming in from your channels. Your listings keep
  running on the channels themselves.

Pay, and everything resumes — including the bookings and messages that arrived while it was
paused. See [If a payment fails](/setup/billing/#if-a-payment-fails).

## Guest data is your responsibility too

Santara AI holds it; you decide who in your team can reach it. Two habits are worth building:

- **Invite people properly rather than sharing a login.** A shared login makes every access-control
  decision above meaningless, and destroys the record of who did what.
- **Scope people to the buildings they work on.** It costs nothing and it is the difference between
  a cleaner seeing one address and seeing your whole estate.
