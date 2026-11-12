---
title: Messages
description: Every guest conversation from every channel, sorted by what actually needs you, with an AI-written reply when you want one and an opt-in auto-reply.
sidebar:
  order: 2
---

One thread per guest conversation, from every connected channel. A reply you send here goes back
out through the channel the guest booked on — the guest sees it in the Airbnb, Booking.com or Expedia
app, as they expect to. Those three are the channels replies can go out on; see
[Supported channels](/channels/#supported-channels).

![The inbox: one thread per guest conversation, ordered by what needs answering rather than by when it arrived.](/screens/messages.en.png)

## The inbox

Threads are ordered by what needs attention, not by time. Each carries:

- **Urgency and tone** read from the guest's own words.
- **Why it is at the top** — an unanswered question, a complaint forming, an arrival today.
- **Reservation context** — dates, room, channel, and what the guest has already been told.

Threads with nothing outstanding fall down the list on their own.

### One status per thread

Every thread carries exactly one of three statuses:

| Status | Meaning |
| --- | --- |
| **Needs reply** | The guest wrote last and nobody has answered |
| **Waiting on guest** | You answered; the next move is theirs |
| **Handled** | Nothing outstanding |

Two buttons in the thread header set it by hand: **Mark handled** for a message that needs no
answer ("Perfect, thank you!"), and **Needs reply** to put one back on your list. A handled thread
becomes **Needs reply** again by itself the moment the guest writes.

### What the list shows

The **Show** filter opens on **Needs you**, so the inbox starts as a to-do list rather than a
history. The other filters are **Unread**, **Today** and **All**; each shows its count, and the
inbox remembers the one you used last in this browser.

Inside it, threads fall into three groups:

- **Pinned** — anything you pinned with **Pin to top**. A pin shows under every filter, and it is
  kept on your account, so it follows you to another device. Each person's pins are their own.
- **Needs you now** — unanswered, and the guest arrives or leaves today. Tags on the row say which:
  **Check-in today**, **Check-out today** or **Current guest**.
- **Everything else**, most recent first.

When the list is empty it says **Nothing needs you right now. Peace.** — that is the goal, not a
fault.

### Clearing the list in one go

Two buttons above the list work on everything at once, and each asks first:

- **Mark all as read** clears the unread dots. Read is not handled — anything waiting for your
  reply stays in **Needs you**.
- **Mark all handled** marks every thread in **Needs you** handled and read. A guest who writes
  again brings their thread back.

### Unread, the tab title and the sound

A thread with unread guest messages is bold with a dot, and opening it marks them read. **Read is
shared across the team**, not per person: when a teammate opens a thread, the dot goes for
everyone. Reading a thread does not mark it handled — that stays a decision.

The browser tab puts the count waiting for you in front of the page title — **(3)** — so you can
see it from another tab. It is the same number as the badge in the sidebar: unanswered guest
messages plus unread team chat.

A short chime plays when a guest message arrives. Turn it off under **Settings → Personal →
Notifications on this device** — the **Message sound** switch. The choice is kept per browser, so
muting your laptop leaves your phone alone.

## Reading a guest in their language

A guest who writes in German, Korean or French is shown to you **in your language**. The translated
text takes the place of the original in the bubble, and a line under it says **Translated from
German · Show original**. Show original puts the guest's own words back; **Show translation**
switches again. It works per message, so you can check one line without losing the rest.

![A guest writes in German on Airbnb; you read it in English, with a link back to the original. Your reply goes out as you wrote it.](/diagrams/message-translation.en.svg)

- **Your language** is the Language on your own profile (**Account**). If you have not set one, the
  workspace's [daily brief language](/setup/workspace/#operations-preferences) is used, then English.
  Translation is into **English, Indonesian, Vietnamese or Thai**.
- **Each teammate reads in their own language.** A Vietnamese co-host and an English owner open
  the same thread and each reads it their way; the guest sees neither.
- **It happens as you scroll.** There is no button: a message is translated just before it comes
  into view, then saved, so it is never translated twice.
- **Guest messages only.** Your replies go out exactly as you wrote them, and the inbox list shows
  the guest's original words in its preview.
- **Messages already in your language are left alone**, and so are ones with nothing to translate —
  an emoji, a link, a phone number.
- Very long messages are translated up to about 2,000 characters and end with "…"; Show original
  always has the whole text.

:::note[When a translation does not appear]
If a translation fails or comes back half-done, it is thrown away and the original is shown —
a wrong translation is worse than none. It is tried again later.
:::

## Replying

Type in the send box and send, or press **Write reply** and let the AI write the reply **into the
send box** for you. Nothing goes to the guest until you press **Send**.

While it works, four numbered steps show how far it has got:

1. **Read the conversation**
2. **Check details and plan the reply**
3. **Write the reply**
4. **Double-check and save**

The reply appears in the box as it is written. Press **Stop**, press **Esc**, or just start
typing to take over — whatever is already there stays yours to edit.

When it is done:

- **Shorter**, **Warmer** and **Undo** adjust the reply without starting again.
- **Needs your call before sending** lists the decisions only you can make — a late checkout, a
  discount. Pick your answers and press **Rewrite with my answers**.
- **Check these before sending** lists anything in the reply the AI did not find in what it read —
  a time, a price, a code. Check them before you send.
- **Sources read** shows what the reply is based on: the thread, the booking, the listing.

The **Refine** button next to **Write reply** opens two more controls: **Reply language** (it
starts on **Guest's language**) and a box to **Tell the AI what to say — e.g. offer a late
checkout**. Press Enter there to write the reply again with that steer.

Beside the box you also have:

- **[Templates](/setup/workspace/#message-templates)** — your own saved replies with placeholders
  (guest name, check-in time, door code) filled in from the stay.
- **Attach a file** — a photo or document, up to 5 MB.

If a message does not go through, it stays in the thread marked **Not sent**, with a **Retry**
button. Nothing is lost.

The quality of a reply depends on what the property knows. A property with no wifi password, no
check-in time and no address produces vague replies. Fill those in under
[Properties](/setup/properties/) and the replies get specific.

## Auto-reply

**Auto-reply** is the third tab of Messages, beside **Guest messages** and **Team**. It lets Santi
answer simple guest questions when you can't — check-in times, Wi-Fi, directions, house rules. It
is **off** until an owner or admin switches it on, and it has two modes:

| Mode | What happens |
| --- | --- |
| **Off** | Nothing is sent on its own. You reply as above. |
| **Practice** | Santi writes replies but sends nothing. They are logged so you can see what it would have said. |
| **Live** | Replies go to guests on the topics you allowed, after your delay. |

Start in Practice: after a while the tab shows how many of its replies you would have let through
unchanged, and **Start sending** moves you to Live. **Back to practice** goes the other way.

**Your rule** sets what it may do, as a sentence you edit:

- **Topics** — which subjects Santi may answer (check-in and check-out times, Wi-Fi, directions and
  parking, house rules, amenities, and more).
- **Hours** — during set hours, always, or only when nobody on the team is online.
- **Delay** — how long it waits before sending, so you can stop or edit it. Typing in the thread
  pauses it.
- **Language**, and what happens to everything else — a short holding reply, an alert to the team,
  or nothing.

Only an owner or admin can change these; everyone else sees them read-only. **Pause until morning**
stops it for the night, and **Resume** starts it again.

**Always left for you: money, date changes, complaints, emergencies, guests who can't get in.**
Santi also holds any answer it cannot back up with your property's details. None of that is a
setting.

Inside a guest thread, a line shows whether auto-reply covers it — for example **Santi answers this
thread until 07:00, after 5 min** — with **Change** to open the tab. A pending reply shows a
countdown with **Send now**, **Edit** and **Cancel**. **Try it** on the tab runs a sample guest
message through your rule without sending anything.

Auto-reply only works on channels that accept replies — Airbnb, Booking.com and Expedia.

## Complaints become tickets

When a thread reads as a complaint or a maintenance problem, a [ticket](/daily/tasks/#tickets)
opens for it — so the fix is tracked somewhere other than a conversation that scrolls away. The
ticket keeps the link back to the thread.

## History

Threads carry the conversation as the channel has it, including messages sent before you connected
Santara AI. Where a channel closes a thread after checkout, the history stays here.

## Team chat

The **Team** tab of Messages is a chat for the people working the property — co-hosts, managers,
cleaners — the conversation that otherwise happens in a WhatsApp group nobody can search later.
Start a group or message one teammate directly; files can be attached. It is separate from guest
messages, and guests cannot see it. Unread team chat counts toward the badge in the sidebar.

## What guests never see

- Your internal notes.
- Ticket titles, assignments and resolution plans.
- Anything in [Team chat](#team-chat), which is a separate conversation among staff.
- Auto-replies written in **Practice**.
