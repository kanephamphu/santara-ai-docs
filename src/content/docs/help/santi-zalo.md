---
title: Santi on Zalo
description: Chat with Santi in Zalo — privately or in your team group. Link once with your Santara AI login; choices come as numbers you reply with.
sidebar:
  order: 2
---

Santi works in Zalo the same way it works [in Telegram](/help/santi-telegram/): ask questions,
approve changes, start and finish cleans, and send cleaning photos — each person with their **own**
Santara AI login, so Santi only sees and does what their role allows.

The one difference: **Zalo bots have no buttons.** Wherever Telegram shows buttons, Santi on Zalo
sends **numbered choices**, and you answer with the number:

> Here's the change: block Villa A for 1 night. Check it, then tap Yes.
>
> **[1] Yes   [2] No**

Reply **1**. That's it — the number counts exactly like tapping the button, and the same checks
apply (only the person who asked can confirm their own change).

## Connect

:::note[Start in a private chat]
Zalo doesn't let a bot write to you first. So the **first time**, open a **private chat with Bot
SantiAI** and message it there — even if your team uses Santi in a group. After you have linked,
Santi answers you in groups too.
:::

![Connecting Santi on Zalo: say hi, open the sign-in link and press Link Zalo, then ask anything.](/diagrams/santi-zalo-connect.en.svg)

1. Open **Bot SantiAI** on Zalo — your host or the Santara AI team shares its link or QR code — and
   send it anything, such as *"Hôm nay có gì?"*.
2. Santi replies with a **sign-in link**. Open it, sign in to Santara AI, and check the page names
   **your** Zalo account and **your** Santara AI account. Press **Link Zalo**.
3. Back in Zalo, Santi says you are linked and answers your first question.

The link works once and lasts 10 minutes. To disconnect later, send **/unlink**.

:::caution[Only link your own Zalo]
If someone sends you a sign-in link, close it. The page shows which Zalo account it will link — if
that isn't you, don't press the button.
:::

## Ask, approve, clean

Everything on [Santi on Telegram](/help/santi-telegram/) works here, with numbers instead of taps:

- **Questions** — write normally; Santi answers in your language.
- **Changes** — reply **1** for Yes, then **1** again for Confirm.
- **/jobs** — today's cleaning as a numbered list: *[1] ▶ Start · Villa A*, *[2] ✅ Done · Villa A*…
  Reply with the number to start or finish a clean.
- **Photos** — send them to Santi (in a group, write **@Santi** in the caption). Santi lists today's
  jobs with numbers; reply with the job's number and the photos are attached in Santara AI.

Numbers are valid for 15 minutes and always refer to Santi's **latest** list in that chat. If you
reply to an old list, send **/jobs** again for a fresh one.

## Your team group

![Adding Santi to a Zalo group: open the invite link and pick the group, a host sends /use, then mention @Santi and reply with numbers.](/diagrams/santi-zalo-group.en.svg)

**Add Santi to the group** (once, by anyone in the group — usually the host):

1. On your phone, open the invite link: **[https://bot.zaloplatforms.com/groups/invite/bot.VmIvWNvh](https://bot.zaloplatforms.com/groups/invite/bot.VmIvWNvh)**.
2. Zalo opens **Invite Bot SantiAI to a group**. Pick your team's group and confirm.
3. In the group, a **host, admin or co-host** sends **/use**. Santi replies that the group now
   works with your workspace.

**Then everyone can use it:**

4. Write **@Santi** at the start of a message, or send a **/command** such as **/jobs**.
5. When Santi sends numbered choices, reply with just the number — **2** taps "Done".
6. Each person links their own Zalo once, **in a private chat with Bot SantiAI** (see *Connect*
   above). Until then, Santi only answers them in the group with a reminder to message it privately.
7. Tap-mentioning works: Zalo writes **@Bot SantiAI** and Santi recognises it, as it does a typed
   **@Santi**.

As on Telegram, a normal team group only gets team things — cleaning, tickets and dates. Ask about
revenue, payouts or guest messages in a private chat with Santi. Zalo groups for bots are still in
Beta at Zalo, so if Santi misses a message in a group, start it with **@Santi** or use a
**/command**.

## Alerts

Linked people get Santi's notices — morning summary, new bookings and cancellations, guests waiting
more than two hours — in their **private** Zalo chat with Santi, never in a group.

## Commands

| Command | What it does |
|---|---|
| **/jobs** | Today's cleaning, numbered: reply to start or finish |
| **/use** | Connect this group to your workspace (hosts, admins, co-hosts) |
| **/help** | What Santi can do here |
| **/unlink** | Disconnect your Zalo account |
