---
title: "Connect Agoda"
description: "Switch on channel manager mode in Agoda YCS, enter your Hotel ID, and map rooms per guest count."
sidebar:
  order: 2
  label: "Agoda"
---

How to connect Agoda to Santara AI. The setup inside Santara AI is the same for every channel ([Connect another channel](/channels/other-channels/)); this page covers what is specific to Agoda.

## Before you start

- You need **your own contract** with Agoda, with the property's details and photos already in its extranet. Santara AI connects a property that is signed up; it cannot create one on Agoda for you.
- A **property with at least one room** in Santara AI.
- **No other channel manager or iCal link** on the property in Agoda — two systems updating one calendar overwrite each other.

## 1. Switch the connection on in Agoda

Agoda has to allow the connection first. Channex is Santara AI's connectivity partner — it is the name Agoda knows us by.

1. In Agoda **YCS**, open **Settings → Property Settings → Optional Settings**.
2. Tick **Enable channel manager mode**.
3. Choose **Channex** from the list and **Save**.

Or ask Agoda support, in the extranet's messaging, to connect Channex for you.

![Agoda YCS: Settings → Property Settings → Optional settings, with Enable channel manager mode ticked and the provider chosen.](/channel-guides/extranet/agoda-ycs.webp)

## 2. Connect in Santara AI

1. Open **Settings → Channels → Add a channel**, find **Agoda**, and press **Connect**.
2. Pick the property it is for.
3. Fill in the fields below, then press **Test connection**.
4. When the test passes, press **Connect and continue**.

![Step 2 in Santara AI: the Agoda setup fields, then Test connection.](/screens/channel-guides/agoda.en.png)

| Field | What to enter |
| --- | --- |
| Hotel ID | Your Agoda Hotel ID. |
| Send Property Notification | Optional. Tick it and a **Property Email** field appears — that address gets an email for every new booking. |
| Tax Setting For Bookings | **Inclusive** — taxes included, commission taken off (your payout). **Inclusive With Commissions** — taxes and commission included (the guest's total). **Exclusive** — no taxes or commission (the US model). |

If **Test connection** fails, check the ID, then ask Agoda support to confirm the property is connected to Channex.

## 3. Map rooms and rates

- **Multi-occupancy** — one price per guest count. If you only have one price for the room, map that same rate to every guest count.

Map **every** room and rate Agoda shows. One left unmapped gets no updates, and Agoda keeps selling it on its old availability.

## 4. Import and go live

Santara AI checks what is mapped, turns the channel on and brings across the stays Agoda already has. From then on, rates, availability and restrictions sync from Santara AI — see [Going live](/channels/going-live/).

## Good to know

- Answer Agoda guests in Agoda's own inbox — guest messages from Agoda do not come into Santara AI.

More fixes: [Channel troubleshooting](/channels/troubleshooting/).
