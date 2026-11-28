---
title: Today and the daily brief
description: The screen you open each morning — who is arriving, what needs a decision, and the brief written out for you and your team.
sidebar:
  order: 1
---

**Today** is the default screen. It has two tabs: **Brief**, which opens first and is the day
written out in sentences, and **Overview**, which is the numbers and today's schedule.

![Today, on the Brief tab: "28 things need you today", the Needs you now and Today bands, and beside them Today's numbers with the workload gauge and the Tomorrow card.](/screens/today.en.png)

## The brief

The **Brief** tab. The brief is generated for your workspace each day and emailed to you — at **06:00** in the
workspace timezone by default, or whichever hour you pick — in the **language** you set under
[workspace settings](/setup/workspace/#operations-preferences). The same brief is on this screen,
and it is refreshed as the day moves. It reads in this order:

1. **The headline** — the date, the workspace, how many listings and its timezone; then one
   sentence, such as **28 things need you today**; then today's arrivals, departures and
   turnovers. **Share** and **Regenerate** sit beside it.
2. **What needs you**, in three bands named for *when* the work is due, so you can read down and
   stop when the clock stops mattering:
   - **Needs you now** · *time-boxed*
   - **Today** · *tied to a check-in or checkout*
   - **For information** · *no deadline*

   Each row is one guest or problem — a maintenance issue, an unassigned turnover, a guest message
   waiting, a complaint building over three messages — with what happened, what to do, and a
   button for it (**Open**, **Message**, **Assign**). The headline counts the rows in the first two
   bands, plus the offers below that are ready to send; *For information* rows have nothing to do,
   so they are not counted.
3. **Upsell Opportunities** — under the bands: late checkouts, early check-ins and extra nights
   the calendar can actually take, each with the price and the message to send. **Review offers**
   opens them all.
4. **Today's numbers** — on the right. The **Workload** gauge shows how much of your cleaners' day
   is already spoken for; open it to see how the number is made. Under it, if your role can see
   money: **Revenue**, **Occupancy** and **Avg nightly rate** for today, each with the month to
   date and the change.
5. **Tomorrow** — tomorrow's arrivals, departures and turnovers, with a line on whether it is a
   heavier or lighter day.
6. **Cleaning, three days out** — grouped by [cleaning cluster](/daily/tasks/#cleaning-clusters).
   Each cluster has a **Share** menu with that day's plan already written — send it to Zalo,
   WhatsApp, Messenger, Telegram, SMS or email, or copy it. Cleaners with an email address also
   receive their own Cleaner Brief email automatically, without revenue in it.

**Regenerate** rebuilds the brief from the latest bookings and messages; offers and actions wait
until it finishes.

Nothing in the brief is sent to a guest or a cleaner on its own: every message waits for you to
send it.

### Marking it reviewed

Press **Mark all reviewed**, at the foot of the brief, when you have been through it. It is a signal to the rest of the team that
someone has looked, not a completion score — nothing is hidden once you do.

### Sharing it

**Share** writes a message for the channel you pick — email, WhatsApp or a text message — with
today's highlights and a link to the full brief. Each channel gets copy written for it rather than
the same paragraph pasted three times.

The link opens the full brief in Santara AI, so recipients need an account with access to this
workspace. For a cleaner who should not see the estate, share the **cluster message** instead: it
contains only their jobs.

### Language and timing

The brief is written in the workspace's language and sent at the hour you choose (06:00 unless you
change it), both set under [Workspace settings](/setup/workspace/). Its idea of "today" comes from
the workspace timezone —
which matters more than it sounds, because a brief generated in the wrong timezone reports
yesterday's checkouts.

**Revenue means net payout** — what the channel actually pays you. It is labelled as such wherever
it appears. See [Reports](/money/reports/) for the full picture.

## Overview

The **Overview** tab — **Your hosting at a glance** — is the estate in one page rather than the day
in sentences. From the top:

| Panel | What it shows |
| --- | --- |
| Check-ins, check-outs, turnovers and stays | Who is moving, for **Today**, **Tomorrow** or the **Next 7 days** |
| **Next 7 days** | A bar a day for check-ins, check-outs and turnovers, with occupancy as a line |
| **Inbox** | How many guests are **Waiting for your reply**, and the oldest wait |
| **Team today** | Each cleaner with their units and jobs, and what is **Unassigned** |
| **Revenue · *month*** | **Booked this month**, **Occupancy**, **Avg nightly rate** and **RevPAR**, each against the previous month — only for roles that can see money |
| **Reviews** | Reviews waiting for a reply, those below 4 stars, and the latest one |
| **Where the next 3 months are heading** | Nights booked now and where each month will likely end, against last year, with a **Raise**, **Lower** or **Hold** hint for the price |
| **Upcoming stays** | The next reservations, with guest, listing, dates, channel and status |
| **Listings** | How booked each listing is over the next 30 days, with **Review pricing** on the weak ones |

When anyone is waiting, a line such as *"3 guests waiting on a reply"* at the foot opens
[Messages](/daily/messages/). Someone whose day is their own job list — a cleaner, a technician —
sees only today's timeline and cleaning here, with no money.

## Notifications

Anything that needs you while you are not looking at this screen produces a notification in the
bell menu. There are sixteen kinds, and they are the things that genuinely change your day:

| | |
| --- | --- |
| **Bookings** | A new booking, a changed booking, a cancellation, and **Overbooked** — a room sold past its available units, so one stay has to move |
| **Cleaning** | A clean assigned to you, a clean finished |
| **Tickets** | A ticket opened, assigned to you, in progress, or done |
| **Channels** | A channel connected; a channel that didn't accept an update; a channel sync warning |
| **Guest requests** | A guest asking for an extra from the [guidebook](/setup/guidebook/) |
| **AI assistants** | An outside assistant that needs your approval, or that made a change |

Notifications are addressed by **who can act on them**, not by name, so a manager added next month
sees the ones that were always meant for their role. More in
[Workspace settings](/setup/workspace/#notifications).
