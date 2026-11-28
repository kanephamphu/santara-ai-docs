---
title: Ask Santi
description: Santi, the assistant inside Santara AI — where it lives, the AI Agents crew, what it can read, what it can change, and what it will never do on your behalf.
sidebar:
  order: 1
---

Santi is the assistant built into the dashboard. It reads your workspace, so questions about your
actual business are fair:

- *Which rooms are empty next weekend?*
- *What did the Villa earn in July, net?*
- *Why isn't the Airbnb listing for Unit 3 live?*
- *Draft a reply to the guest asking about early check-in.*

![Ask Santi on its full page: the Ask Santi and Talk to a person tabs, four questions to start from, and the box to type in.](/screens/assistant.en.png)

:::note
Santi also has an app of its own, for your phone, at **santi.santara.ai** — same Santi, same
Santara AI account. See [The Santi app](/help/santi-app/), open it at
[santi.santara.ai](https://santi.santara.ai), or meet Santi and the crew at
[santara.ai/santi](https://www.santara.ai/santi/).
:::

## Where to find Santi

- **Beside the bell**, at the top of every screen. Click Santi and **Ask Santi** opens.
- **On phones**, Santi floats in the bottom-right corner instead. It opens the same panel.
- **Full page** — the link at the top of the panel opens `/dashboard/assistant`, the same chat in a
  larger frame, with **Ask Santi** and **Talk to a person** as two tabs at the top.

Santi's face tells you how things stand, from your real data: it looks **alert** when guest
messages are waiting for a reply, **sleepy** between 22:00 and 06:00, **waves** in the morning, and
is **calm** otherwise. Hover over it to read why.

## The AI Agents crew

Santi leads a crew of six agents, each looking after one part of the business:

| Agent | Looks after |
| --- | --- |
| **Sunny** · Brief agent | The Daily Brief, arrivals and departures |
| **Lulu** · Guests agent | Inbox, guests and reviews — drafts replies, you press Send |
| **Penny** · Pricing agent | Rates, revenue and empty nights |
| **Loop** · Sync agent | Channels, sync and availability |
| **Kiko** · Bookings agent | Reservations, the booking site and upsells |
| **Bubbles** · Cleaning agent | Cleans, turnovers and tickets |

On the screens an agent owns, it stands next to Santi in the top bar — click it to ask that agent
directly. When you ask Santi a question, Santi may hand it to up to two agents and you watch the
hand-off happen in the answer. Agents only **read**; anything that changes your data stays with
Santi and always asks you first.

**AI Agents** in the sidebar opens the crew's own page:

![The AI Agents page: Santi and the six agents with what each has to do, Needs you with Hand to Lulu and Hand to Loop, and the chat with two questions to start from.](/screens/agents.en.png)

- **The roster** starts with **Santi** · Orchestrator, whose number is how many items are in
  **Needs you**. Below it, each agent shows a number of things to do, a check when all is clear, or
  a dash when it **Couldn't check** its data. **Refresh** — the round arrow at the top right —
  checks again.
- **Needs you** lists what is waiting on you, most urgent first — guests waiting on a reply, things
  that need you today, channel connections that need attention, turnovers to clean today, empty
  nights ahead, upsell offers ready to send, new reviews. It shows two items at a time; **Show all
  ({count})** lists the rest.
- Each item has **Hand to {name}** (that agent looks into it and tells you what to do) and
  **Open** (goes to the screen).
- **The chat** below starts with two questions to try, and the box reads **Ask Santi…**. Pick an
  agent in the roster to chat with that agent alone — the box then says **Ask Lulu…**, and so on.

### A real morning on the AI Agents page

The picture above is the demo workspace exactly as the crew found it. Reading it top to bottom:

1. **Lulu shows 15** and **Needs you** says *15 guests waiting on a reply*. Press **Hand to Lulu** —
   Santi asks Lulu to read those threads, and Lulu reports what each guest wants. Then ask Santi
   to *draft the replies*: each draft is saved to the inbox after **Confirm**, and nothing is sent
   until you send it (or tell Santi *send it*, which needs **Confirm** again).
2. **Loop shows 1** — *No channels connected yet*. **Open** takes you to Settings → Channels.
   Santi will not connect a channel for you; that stays a step you take.
3. **Santi shows 5**, but only two items are on screen. **Show all (5)** brings in the other
   three: turnovers to clean today for Bubbles, empty nights ahead for Penny, and upsell offers
   ready to send for Kiko.
4. **Penny shows 8** — empty nights ahead. Ask Penny *which nights are empty and what did they
   sell for last year?* before you touch a price; changing it is still yours to do on Pricing.
5. **Sunny shows a check** — nothing waiting on Sunny today.

## What it can see

Your workspace, through the same permissions you have. It cannot see more than you can: a cleaner
asking about revenue gets told they do not have access, not a number.

It has no view of other workspaces, ever. Which workspace it is answering about comes from your
session, not from anything you or it can type.

## What it can do

Mostly it **reads**. It can also make these changes, each only after you confirm it:

- **Draft a reply to a guest** — saved to the inbox as a draft; nothing is sent.
- **Send a reply to a guest** — only when you say *send*, and only on Airbnb and Booking.com
  threads. On other channels it saves a draft instead.
- **Create a ticket.**
- **Assign a clean** to a cleaner, including one [without an account](/daily/tasks/#cleaners-without-an-account)
  it adds by name.
- **Assign a ticket** to a teammate.
- **Change a ticket's status** — to do, in progress, done or cancelled.
- **Add, change or cancel a booking** — workspace owner only, and only bookings made in Santara AI
  (direct, walk-in, phone). A booking that came from Airbnb, Booking.com or another channel has to
  be changed on that channel; the change syncs back.

Before any change it shows a card, **Confirm before I do this**, with exactly what it is about to
do. **Confirm** does it; **Don't** leaves everything as it was (**Not done — nothing was
changed.**). It proposes one change at a time, and whoever it assigns is notified as if you had
done it yourself. A card is valid for three minutes — after that, ask again and it re-checks first.

It cannot change a price or availability, take a listing live, connect a channel, or move money —
for those it points you to the right screen. Before writing to a guest it always reads the thread
first, and it never quotes a price or a night it has not looked up.

It acts with **your** permissions: if you cannot do something on screen, it cannot either.

## Conversations

Santi in the dashboard keeps **no conversation history**. A chat lives only in the open tab:
**Santi doesn't keep this chat — it clears when you reload or close the tab.** **New chat** clears
it on purpose. There is no list of past conversations to reopen and nothing to delete — if an
answer matters, copy it somewhere before you leave.

The [mobile app's assistant](/mobile/ai-assistant/) is the exception: it keeps your saved
conversations, per person and per workspace, so a co-host never sees yours.

## Checking an answer

Under an answer that used your data, Santi shows where it came from:

- **Data as of 09:42** — when the data behind the answer was read.
- **Source links** — the screens the figures came from, each with ↗. Click one to check a figure
  where it lives.
- **I couldn't match … to your data — check it before acting on it.** appears, in amber, only when
  a figure in the answer did not match anything Santi read. Treat that figure as unverified.

## Getting good answers

- **Name the thing.** "Villa Melati room 2" beats "the villa".
- **Give a period.** "Last month", "the next 30 days".
- **Ask why, not just what.** "Why is this listing not live" gets you the channel's actual reason.

## When it is wrong

It reads your data, so it is usually wrong for one of two reasons: the data is missing (a property
with no check-in time), or the question was ambiguous. Both are visible in the answer — it says
what it looked at. **I ran out of lookups before finishing** means the question needed more than
one answer can hold; ask for a smaller piece.

**Santi is busy right now. Try again in a minute.** is temporary. If you send many messages very
quickly you may see **Sorry, something went wrong** — wait a minute and try again.

If it is wrong about something that matters, [contact support](/help/support/) from the same
screen. The conversation goes with the message.

## Escalating to a person

**Talk to a person**, at the top of the panel (a tab beside **Ask Santi** on the full page), is a
real channel to the Santara AI team, separate from Santi. Your conversation with Santi is carried over so you do not repeat yourself.
