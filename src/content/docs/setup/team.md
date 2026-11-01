---
title: Team and roles
description: Invite co-hosts, managers and cleaners, and give each of them exactly the part of the workspace they need.
sidebar:
  order: 6
---

**Settings → Team**. The tab is shown only to **host admins**, because only they can invite people
or change roles.

## Inviting someone

Press **Invite teammate**. Fill in a **Name** (required), the **Role** and their **Access**. The
**Email (optional)** field decides how the invitation travels:

- **With an email**, the invitation goes to their inbox. *They open the link, set a password and
  they're in. No separate sign-up.*
- **Without one** — *No email? Leave it blank and send the link on Zalo or WhatsApp yourself.* The
  invitation shows as **Link only**. The person types their email and a password on the page the
  link opens, and is sent a **6-digit code** to prove the address before the account is created.

After **Send invite** the link is shown with **Share**, **Copy link** and **WhatsApp** buttons.
Either way the link opens a single page at `santara.ai/join/…`. Somebody who **already has a
Santara AI account** just enters their existing password there and joins — the same login works in
every workspace they belong to.

Open invitations stay under **Invitations** until they are used, each showing **Expires {date}** —
a link lasts a week. Each one has three buttons:

- **Copy link** — copy it again to send.
- **New link** — makes a fresh link. **The old one stops working**, so use this when a link went to
  the wrong chat.
- **Cancel invite** — the link stops working.

An expired link tells the person to ask you for a new one.

One person can hold different roles in different workspaces. Their login is theirs; the access is
per workspace.

![The team screen: who is in the workspace, their role, and what they can reach.](/screens/team.en.png)

## The three roles

| Role | Sees | Typical use |
| --- | --- | --- |
| **Host admin** | Everything: full portfolio visibility and billing | You, and anyone you trust with the money |
| **Co-host** | Scoped workflow access for daily operations | A partner, a manager, a maintenance lead |
| **Cleaner** | Their own assigned cleans, and enough about the building to find it | Your cleaning staff |

There is no separate "property manager" role, and you do not need one: a **co-host scoped to two
buildings** is a property manager. Scope is the second half of every invitation — see below.

The **primary host cannot be removed** from the workspace, which is what stops a workspace ending
up with nobody who can pay for it.

## How access actually works

Access is not a list of screens per job title. Every screen **and every API route** asks for a
named **capability** — `stay.read`, `pricing.write`, `guest.message.send`, and so on — and a role
is a bundle of capabilities, optionally narrowed to certain buildings and rooms.

Two consequences worth knowing:

- **Hiding a menu item is not the security.** The route enforces the same capability the navigation
  reads, so a link someone types by hand is refused, not just hidden.
- **Data classes are separate from screens.** Door codes, guest contact details and financial
  figures are each their own class. A cleaner can be told which building a job is in without being
  given its door code, and a manager can run operations without seeing owner payouts.

## Scoping to buildings

Every member has an **Access** setting: which buildings, and which rooms inside them, they can work
on. Either:

- **All buildings, including ones added later** — the right choice for a partner, and it does not
  need revisiting each time you buy something.
- **A selection** — pick the buildings and rooms. The summary reads *"3 buildings · 7 rooms"*, and
  a member with no access at all is told so plainly rather than shown an empty dashboard they will
  report as broken.

Scoped members see their buildings' work and nothing about the rest of your estate — not the
calendar, not the revenue, not the guests.

**Host admins always have access to every building**, including ones added later. That is not a
setting, and it is why the role is the one you hand out most carefully.

## What a cleaner experiences

They sign in and see the cleans assigned to them, on the days they happen, with the address and the
access notes for those buildings. They mark work done, optionally with a photo. That is the whole
product for them, on purpose. In the [Android app](/mobile/getting-started/) they get only the
**Today**, **Tasks** and **More** tabs.

If you would rather not give a cleaner an account at all, share the
[cleaning cluster message](/daily/tasks/#cleaning-clusters) from the daily brief instead — it
contains their jobs and nothing else.

## Removing someone

Remove them from the team and their access ends immediately, on every device. Work they did — cleans
marked done, messages sent, tickets resolved — stays attributed to them in the history.

## Your own account

Your name, language, timezone and password are **yours**, not the workspace's, and they follow you
between every workspace you belong to. They live behind the account menu at the foot of the
sidebar rather than on the Settings tabs — see [Your account and security](/setup/account/). For
what the workspace shares, see [Workspace settings](/setup/workspace/).
