---
title: "Connect Vrbo"
description: "Connect Vrbo with your Vrbo login (and SMS code), after removing any old channel manager and iCal links, then map listing by listing."
sidebar:
  order: 9
  label: "Vrbo"
---

How to connect Vrbo to Santara AI. The setup inside Santara AI is the same for every channel ([Connect another channel](/channels/other-channels/)); this page covers what is specific to Vrbo.

## Before you start

- **The Vrbo account must not be API-connected to other software.** If a previous PMS or channel manager was connected, ask Vrbo support: *"Please disconnect my account from my current channel manager, I will control the extranet manually."* Connect only after they confirm.
- **Remove every iCal link** on your Vrbo listings (from Airbnb or another system). iCal keeps overwriting what Santara AI sends.
- Have the **account owner's phone** nearby — Vrbo may send an SMS code.
- A **property with at least one room** in Santara AI.

![A Vrbo account still connected to other software — ask Vrbo to convert it before you connect.](/channel-guides/extranet/vrbo-api-connected.webp)

## 1. Connect in Santara AI

1. Open **Settings → Channels → Add a channel**, find **VRBO**, and press **Connect**.
2. Pick the property it is for.
3. Enter your Vrbo **username** and **password**.
4. Press **Authenticate** — not Test connection.
5. If Vrbo sends an **SMS code** to the account owner, enter it.
6. Press **Test connection**. Your Vrbo listings appear on the mapping screen.

| Field | What to enter |
| --- | --- |
| Username | Your Vrbo username. |
| Password | Your Vrbo password. |

## 2. Map rooms and rates

- Vrbo maps **listing by listing**: pick a room and rate for each listing you want connected.

Map **every** room and rate Vrbo shows. One left unmapped gets no updates, and Vrbo keeps selling it on its old availability.

## 3. Import and go live

Santara AI checks what is mapped, turns the channel on and brings across the stays Vrbo already has. From then on, rates, availability and restrictions sync from Santara AI — see [Going live](/channels/going-live/).

:::caution[Changing your Vrbo password disconnects it]
If the Vrbo account's password changes, the connection drops. Reconnect with the new password.
:::

## Good to know

- Rates, availability, restrictions and bookings (new, changed, cancelled) sync.
- Currencies: **USD, CAD, EUR, AUD, NZD, JPY, SGD, BRL, MXN, GBP**.
- **Guest messages and reviews are not supported** on Vrbo.

More fixes: [Channel troubleshooting](/channels/troubleshooting/).
