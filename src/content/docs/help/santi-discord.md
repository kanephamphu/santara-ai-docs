---
title: Santi on Discord
description: Use Santi in Discord with slash commands — privately or in your team's server. Link once with your Santara AI login, then ask, approve changes, start and finish cleans, and send cleaning photos.
sidebar:
  order: 3
---

Santi is on Discord too. It's the same Santi as in [the Santi app](/help/santi-app/) and
[on Telegram](/help/santi-telegram/), with the same Santara AI account behind it.

On Discord you talk to Santi with **slash commands**: type **/** and pick one of Santi's. Santi
doesn't read ordinary chat messages, so **/santi** is how you ask it something.

Everyone uses their **own** Santara AI login, so Santi only ever sees and does what your role in the
workspace allows. A cleaner can start and finish their own cleans; they can't block dates or read
revenue.

## Connect in two minutes

![Connecting Santi on Discord: add Santi, ask with /santi and open the private sign-in link, then Santi answers.](/diagrams/santi-discord-connect.en.svg)

1. Open **[the add link](https://discord.com/oauth2/authorize?client_id=1572558251818487960)**. Choose
   **Add to My Apps** to use Santi anywhere in Discord, or **Add to Server** to put it in your team's
   server. Press **Authorize**.
2. In a chat with Santi (or any channel), type **/santi**, pick it and write your question —
   *"What's on today?"*.
3. Santi answers with **Sign in with Santara**, marked *Only you can see this*. Open it, sign in to
   Santara AI, and check the page: it names **your** Discord account and **your** Santara AI account.
   Press **Link Discord**.
4. Santi messages you that you are linked — and answers the question you asked first.

:::caution[Only link your own Discord]
If someone sends you a link to sign in, close it. The page says which Discord account it will link
— if that isn't you, don't press the button.
:::

The link works once and lasts 10 minutes; if it expires, send **/santi** again for a new one. To
disconnect later, send **/unlink**.

## Ask anything

**/santi** takes one question, written the way you would to a colleague — *"Who arrives
tomorrow?"*, *"Draft a reply to Anna"*, *"Is villa 2 free next weekend?"*. Santi reads your live
Santara AI data, answers in your language and keeps it short.

### Changes ask first

When you ask for a change — block dates, send a guest reply, assign a clean — Santi shows exactly
what will change with **Yes** and **No** buttons. Tap **Yes**, then **Confirm**. Nothing changes
before that, and only the person who asked can confirm. Big changes, such as cancelling a booking,
are confirmed in the Santi app instead.

## Cleaning: Start, Done and photos

Send **/jobs** and you get today's cleans with a button for each:

- **▶ Start** when you begin a clean.
- **✅ Done** when it's finished. The host sees it in Santara AI straight away.

A cleaner sees only their own jobs. A host or co-host sees everyone's (with more than 8 open jobs
the list comes without buttons — open the job in Santara AI instead).

**Photos:** send **/photo** and attach the picture. Santi asks **"Which job is this photo for?"**;
tap the job and it's attached in Santara AI, then Santi offers **✅ Done**. Send one **/photo** per
picture, up to 10 per job.

## Your team's server

![Santi in a Discord server: a host sends /use, anyone sends /jobs, and tapping Done updates Santara AI.](/diagrams/santi-discord-server.en.svg)

1. Add Santi to the server with **[the add link](https://discord.com/oauth2/authorize?client_id=1572558251818487960)**
   → **Add to Server** (you need permission to manage the server).
2. In the team channel, a **host, admin or co-host** sends **/use**. The channel now works with that
   workspace.
3. Anyone in the channel uses **/santi**, **/jobs** or **/photo**.

Everyone in a channel reads Santi's answers, so a normal team channel gets only **team things** —
cleaning, tickets and dates. Revenue, payouts and guest messages are answered in a **private chat**
with Santi instead. A channel for managers only can be set up with **/use managers**.

Each person still links their own Discord once: the first time they use Santi, the sign-in link
appears for them alone.

## Alerts

Linked people also get Santi's notices as **direct messages** from Santi (never in a server): the
morning summary, new bookings and cancellations, and guests who have waited more than two hours for
a reply.

## Commands

| Command | What it does |
|---|---|
| **/santi** | Ask Santi anything |
| **/jobs** | Today's cleaning with ▶ Start / ✅ Done |
| **/photo** | Send a cleaning photo and pick its job |
| **/use** | Connect this channel to your workspace (hosts, admins, co-hosts) |
| **/help** | What Santi can do here |
| **/workspace** | See your workspace, or switch with a button or **/workspace** *name* (private chat) |
| **/unlink** | Disconnect your Discord account |

## If something doesn't work

- **Santi doesn't answer a normal message.** On Discord, Santi only answers slash commands — use
  **/santi** with your question.
- **Santi's commands don't appear when you type /.** Add Santi first with the add link above.
- **It says the channel isn't connected.** A host or co-host sends **/use** in that channel.
- **"You don't have access to this workspace."** Ask the host to add you to the workspace in
  Santara AI ([Team](/setup/team/)).
- **A button says you can't change that job.** It's assigned to someone else — ask the host to
  assign it to you.
- **The sign-in link expired.** Send **/santi** again for a new one.
