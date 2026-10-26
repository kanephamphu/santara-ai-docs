---
title: "Connect Traveloka"
description: "Connect Channex in the Traveloka extranet, use the letter-code property ID it gives you, and map the RETAIL rate per guest count."
sidebar:
  order: 5
  label: "Traveloka"
---

How to connect Traveloka to Santara AI. The setup inside Santara AI is the same for every channel ([Connect another channel](/channels/other-channels/)); this page covers what is specific to Traveloka.

## Before you start

- A **property with at least one room** in Santara AI.
- **No other channel manager or iCal link** on the property in Traveloka — two systems updating one calendar overwrite each other.

## 1. Switch the connection on in Traveloka

Traveloka has to allow the connection first. Channex is Santara AI's connectivity partner — it is the name Traveloka knows us by.

1. In the Traveloka extranet, open the **channel manager** section and choose **Channex**.
2. Note the **property ID** Traveloka gives for the connection. It is made of letters, like `LsBxFfgUQcuf` — not the number you see elsewhere in the extranet.

Or ask Traveloka's support team to connect it for you.

## 2. Connect in Santara AI

1. Open **Settings → Channels → Add a channel**, find **Traveloka**, and press **Connect**.
2. Pick the property it is for.
3. Fill in the fields below, then press **Test connection**.
4. When the test passes, press **Connect and continue**.

| Field | What to enter |
| --- | --- |
| Hotel ID | The letter-code property ID Traveloka gave you for the connection. |

If **Test connection** fails, check the ID, then ask Traveloka support to confirm the property is connected to Channex.

## 3. Map rooms and rates

- **Multi-occupancy** — one price per guest count. If you only have one price for the room, map that same rate to every guest count.
- Each room has **one rate to map: RETAIL**. Every other Traveloka rate is derived from it.

Map **every** room and rate Traveloka shows. One left unmapped gets no updates, and Traveloka keeps selling it on its old availability.

## 4. Import and go live

Santara AI checks what is mapped, turns the channel on and brings across the stays Traveloka already has. From then on, rates, availability and restrictions sync from Santara AI — see [Going live](/channels/going-live/).

:::note[Meal plans on Traveloka]
Traveloka sets meal plans on the **room**, not the rate, so the same room can appear more than once — once per meal plan. Map each one.
:::

## Good to know

- Booking amounts can arrive with or without tax and commission. To match Traveloka's hotel voucher, ask your Traveloka representative to change that setting in their extranet.
- Answer Traveloka guests in Traveloka's own inbox — guest messages from Traveloka do not come into Santara AI.

More fixes: [Channel troubleshooting](/channels/troubleshooting/).
