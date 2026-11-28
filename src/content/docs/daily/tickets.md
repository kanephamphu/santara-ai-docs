---
title: Issues (tickets)
description: The Issues tab of Tasks — complaints and maintenance tracked from To do to Done, most of them opened by the product rather than by you.
sidebar:
  order: 4
---

A **ticket** is anything that needs fixing or chasing: a broken air-conditioner, a guest
complaint, an airport pickup to arrange. Tickets live on the **Issues** tab of
[Tasks](/daily/tasks/) — **Tasks → Issues**. There is no separate Tickets item in the sidebar any
more; an old Tickets link opens this tab.

Tickets are internal. **Guests never see one**, even the ones opened from their own message.

![The Issues tab as a board: To do, In progress and Done columns, each card showing its category, the property and room, and who it is assigned to.](/screens/tickets.en.png)

## They open themselves

Most tickets are not created by a person. A guest message that reads as a complaint or a
maintenance problem opens one automatically, linked back to the thread and the property — so the
fix is tracked somewhere other than a conversation that scrolls away.

Three rules keep that from becoming noise:

- **One thread, one ticket, ever.** However many times the classification runs, a conversation
  that already produced a ticket never produces a second.
- **Only the last fortnight.** A thread nobody has touched in two weeks is history, not a job.
- **No flood on day one.** Connecting a year of message history does not open three hundred
  tickets — only the recent ones somebody can still act on.

You can also open one by hand: **New ticket** on the Issues tab, **New ticket** from a guest
conversation in [Messages](/daily/messages/) (where **Fill with AI** reads the conversation and
fills in the fields for you to check), or the **+** at the top of the **To do** column.

## The board

Tickets move through four statuses:

| Status | Meaning |
| --- | --- |
| **To do** | Open, nobody has started |
| **In progress** | Somebody is on it |
| **Done** | Fixed |
| **Cancelled** | Not happening |

Switch between **Board** and **List**. The board has three columns — **To do**, **In progress** and
**Done** — and you drag a card to change its status. **Done** lists the most recent first, grouped
by date, and loads older ones as you scroll; cancelled tickets sit behind **Show cancelled** under
the board. The list is a table with **Ticket**, **Category**, **Status**, **Priority**, **Assignee**
and **Due**.

Above it: **Search tickets**, a priority filter (**All priorities**), and an **Overdue** toggle that
shows only tickets past their due date.

Each card shows its category, the property (and room), its due date — marked **Overdue** once it
has passed — and who it is assigned to. A card nobody has yet shows **Assign** — or **Unassigned**,
if you cannot assign tickets.

## Working one

Open a ticket for the whole record:

| | |
| --- | --- |
| **Status** | To do, In progress, Done or Cancelled |
| **Priority** | Low, Medium, High or Urgent |
| **Category** | Complaint, Maintenance, Airport transfer or Other |
| **Assignee** | A teammate or a cleaner. They get a notification when it lands on them |
| **Due date** | When it has to be done by. Past it, the ticket shows as **Overdue** |
| **Property and unit** | Carried from the message it came from |
| **The guest thread** | **Raised in** links back to the conversation, so you can reply without losing the context |
| **Photos** | **Before** and **After** evidence, 5 MB each |
| **Scheduled from / to** | A date range — see below |
| **History** | Every change: created, status, assigned, due date set or cleared, AI plan generated |

When the assignee moves a ticket to **In progress** or **Done**, whoever assigned it is notified.

An **Airport transfer** ticket also carries the **Pickup time**. The guest's name and phone appear
on it the day before pickup.

### Scheduling the work

**Scheduled from / Scheduled to** records the days the work takes — a two-day repair, say. It is
separate from the **Due date**, which is what marks a ticket **Overdue**.

It does not block the nights. If the room genuinely cannot be sold, close the dates on the
[calendar](/daily/calendar/#block-or-unblock-dates) as well.

### The AI resolution plan

Press **Generate detail with AI** and you get a summary, the likely cause, an action plan, a
suggested reply to the guest, parts or vendors, and an estimated resolution time — generated from
the ticket, the property and its history. It is a starting point for whoever does the work,
particularly useful for handing a job to someone who has not seen that building before.

It drafts. It does not order parts, message the guest, or close the ticket.

## How long closed tickets stay on the board

Open tickets always show. **Done** tickets load as you scroll the Done column. **Cancelled** ones
stay on the board for **30 days after their last update**, then drop off it so the board stays
about current work. In the list, finished tickets sit behind **Show done & cancelled**. Nothing is
deleted: the ticket and its history are still there.

## Who can see them

Tickets follow the same [capability rules](/setup/team/) as everything else. A teammate who only
handles repairs sees just the Issues tab. A member without ticket access is told so plainly rather
than shown an empty list they would report as broken. If you believe you should have access and do
not, ask an owner or manager on the workspace.
