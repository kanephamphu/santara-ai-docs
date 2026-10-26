---
title: "Connect Hotel Trader"
description: "Ask Hotel Trader to connect Channex, enter your Hotel ID, and map every room and rate."
sidebar:
  order: 21
  label: "Hotel Trader"
---

How to connect Hotel Trader to Santara AI. The setup inside Santara AI is the same for every channel ([Connect another channel](/channels/other-channels/)); this page covers what is specific to Hotel Trader.

## Before you start

- You need **your own contract** with Hotel Trader, with the property's details and photos already in its extranet. Santara AI connects a property that is signed up; it cannot create one on Hotel Trader for you.
- A **property with at least one room** in Santara AI.
- **No other channel manager or iCal link** on the property in Hotel Trader — two systems updating one calendar overwrite each other.

## 1. Switch the connection on in Hotel Trader

Hotel Trader has to allow the connection first. Channex is Santara AI's connectivity partner — it is the name Hotel Trader knows us by.

1. Ask Hotel Trader support to connect your property to **Channex**.
2. Note the **Hotel ID** Hotel Trader gives you.

## 2. Connect in Santara AI

1. Open **Settings → Channels → Add a channel**, find **HotelTrader**, and press **Connect**.
2. Pick the property it is for.
3. Fill in the fields below, then press **Test connection**.
4. When the test passes, press **Connect and continue**.

![Step 2 in Santara AI: the Hotel Trader setup fields, then Test connection.](/screens/channel-guides/hotel-trader.en.png)

| Field | What to enter |
| --- | --- |
| Hotel Code | Your Hotel Trader hotel code. |
| Send Property Notification | Optional. Tick it and a **Property Email** field appears — that address gets an email for every new booking. |

If **Test connection** fails, check the ID, then ask Hotel Trader support to confirm the property is connected to Channex.

## 3. Map rooms and rates

- Map each of the channel's rooms to your room, and each of its rates to one of your rate plans.

Map **every** room and rate Hotel Trader shows. One left unmapped gets no updates, and Hotel Trader keeps selling it on its old availability.

## 4. Import and go live

Santara AI checks what is mapped, turns the channel on and brings across the stays Hotel Trader already has. From then on, rates, availability and restrictions sync from Santara AI — see [Going live](/channels/going-live/).

## Good to know

- Answer Hotel Trader guests in Hotel Trader's own inbox — guest messages from Hotel Trader do not come into Santara AI.

More fixes: [Channel troubleshooting](/channels/troubleshooting/).
