---
title: "Connect Tiket.com"
description: "Ask Tiket.com to connect Channex (or do it yourself), enter your Hotel ID, and map every room and rate."
sidebar:
  order: 6
  label: "Tiket.com"
---

How to connect Tiket.com to Santara AI. The setup inside Santara AI is the same for every channel ([Connect another channel](/channels/other-channels/)); this page covers what is specific to Tiket.com.

## Before you start

- A **property with at least one room** in Santara AI.
- **No other channel manager or iCal link** on the property in Tiket.com — two systems updating one calendar overwrite each other.

## 1. Switch the connection on in Tiket.com

Tiket.com has to allow the connection first. Channex is Santara AI's connectivity partner — it is the name Tiket.com knows us by.

1. Email Tiket.com support to ask for the **Channex** connection.
2. Note your **Tiket.com Hotel ID**.

If no channel manager is connected yet, you can choose Channex yourself in the extranet.

![Tiket.com extranet: Connectivity shows the connected channel manager and your Hotel ID.](/channel-guides/extranet/tiket-com-connectivity.webp)

## 2. Connect in Santara AI

1. Open **Settings → Channels → Add a channel**, find **Tiket.com**, and press **Connect**.
2. Pick the property it is for.
3. Fill in the fields below, then press **Test connection**.
4. When the test passes, press **Connect and continue**.

![Step 2 in Santara AI: the Tiket.com setup fields, then Test connection.](/screens/channel-guides/tiket-com.en.png)

| Field | What to enter |
| --- | --- |
| Hotel ID | Your Tiket.com Hotel ID. |
| Send Property Notification | Optional. Tick it and a **Property Email** field appears — that address gets an email for every new booking. |
| Min Stay Type | Which minimum stay you send: **Arrival** or **Through**. Usually Arrival. |

If **Test connection** fails, check the ID, then ask Tiket.com support to confirm the property is connected to Channex.

## 3. Map rooms and rates

- Map each of the channel's rooms to your room, and each of its rates to one of your rate plans.

Map **every** room and rate Tiket.com shows. One left unmapped gets no updates, and Tiket.com keeps selling it on its old availability.

## 4. Import and go live

Santara AI checks what is mapped, turns the channel on and brings across the stays Tiket.com already has. From then on, rates, availability and restrictions sync from Santara AI — see [Going live](/channels/going-live/).

## Good to know

- Answer Tiket.com guests in Tiket.com's own inbox — guest messages from Tiket.com do not come into Santara AI.

More fixes: [Channel troubleshooting](/channels/troubleshooting/).
