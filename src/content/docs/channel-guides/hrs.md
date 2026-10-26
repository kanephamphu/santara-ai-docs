---
title: "Connect HRS"
description: "Ask HRS to connect Channex, enter your Hotel ID, and keep one rate plan per room type."
sidebar:
  order: 13
  label: "HRS"
---

How to connect HRS to Santara AI. The setup inside Santara AI is the same for every channel ([Connect another channel](/channels/other-channels/)); this page covers what is specific to HRS.

## Before you start

- You need **your own contract** with HRS, with the property's details and photos already in its extranet. Santara AI connects a property that is signed up; it cannot create one on HRS for you.
- A **property with at least one room** in Santara AI.
- **No other channel manager or iCal link** on the property in HRS — two systems updating one calendar overwrite each other.

## 1. Switch the connection on in HRS

HRS has to allow the connection first. Channex is Santara AI's connectivity partner — it is the name HRS knows us by.

1. Ask HRS support to connect your property to **Channex**.
2. Note the **Hotel ID** HRS gives you.

## 2. Connect in Santara AI

1. Open **Settings → Channels → Add a channel**, find **HRS**, and press **Connect**.
2. Pick the property it is for.
3. Fill in the fields below, then press **Test connection**.
4. When the test passes, press **Connect and continue**.

| Field | What to enter |
| --- | --- |
| Hotel ID | Your HRS Hotel ID. |

If **Test connection** fails, check the ID, then ask HRS support to confirm the property is connected to Channex.

## 3. Map rooms and rates

- Map a single room to HRS's single room.
- Keep **one rate plan per room type**. HRS holds availability per rate plan, so several rate plans on one room can oversell it.

Map **every** room and rate HRS shows. One left unmapped gets no updates, and HRS keeps selling it on its old availability.

## 4. Import and go live

Santara AI checks what is mapped, turns the channel on and brings across the stays HRS already has. From then on, rates, availability and restrictions sync from Santara AI — see [Going live](/channels/going-live/).

## Good to know

- Answer HRS guests in HRS's own inbox — guest messages from HRS do not come into Santara AI.

More fixes: [Channel troubleshooting](/channels/troubleshooting/).
