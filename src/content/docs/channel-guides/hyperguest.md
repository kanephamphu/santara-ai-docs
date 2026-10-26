---
title: "Connect HyperGuest"
description: "Ask HyperGuest to enable Channex, enter your property ID, and map — per guest count if you price that way."
sidebar:
  order: 23
  label: "HyperGuest"
---

How to connect HyperGuest to Santara AI. The setup inside Santara AI is the same for every channel ([Connect another channel](/channels/other-channels/)); this page covers what is specific to HyperGuest.

## Before you start

- A **property with at least one room** in Santara AI.
- **No other channel manager or iCal link** on the property in HyperGuest — two systems updating one calendar overwrite each other.

## 1. Switch the connection on in HyperGuest

HyperGuest has to allow the connection first. Channex is Santara AI's connectivity partner — it is the name HyperGuest knows us by.

1. Ask HyperGuest to enable the **Channex** interface.
2. They reply with your **property ID**.

## 2. Connect in Santara AI

1. Open **Settings → Channels → Add a channel**, find **HyperGuest**, and press **Connect**.
2. Pick the property it is for.
3. Fill in the fields below, then press **Test connection**.
4. When the test passes, press **Connect and continue**.

| Field | What to enter |
| --- | --- |
| Hotel ID | Your HyperGuest property ID. |

If **Test connection** fails, check the ID, then ask HyperGuest support to confirm the property is connected to Channex.

## 3. Map rooms and rates

- HyperGuest supports **multi-occupancy**. Price per guest count? Map each one. Only a price for the full room? Map just that guest count, or all of them — either works.
- Room and rate codes in HyperGuest can be anything readable (for example `DBL-Room`, `BAR`).

Map **every** room and rate HyperGuest shows. One left unmapped gets no updates, and HyperGuest keeps selling it on its old availability.

## 4. Import and go live

Santara AI checks what is mapped, turns the channel on and brings across the stays HyperGuest already has. From then on, rates, availability and restrictions sync from Santara AI — see [Going live](/channels/going-live/).

:::caution[Don't rename codes after mapping]
If you change a room or rate code in HyperGuest after mapping, map it again in Santara AI.
:::

## Good to know

- Answer HyperGuest guests in HyperGuest's own inbox — guest messages from HyperGuest do not come into Santara AI.

More fixes: [Channel troubleshooting](/channels/troubleshooting/).
