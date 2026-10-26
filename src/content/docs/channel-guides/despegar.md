---
title: "Connect Despegar"
description: "Add Channex in Despegar's extranet, copy the one-time API password, and map every room and rate."
sidebar:
  order: 12
  label: "Despegar"
---

How to connect Despegar to Santara AI. The setup inside Santara AI is the same for every channel ([Connect another channel](/channels/other-channels/)); this page covers what is specific to Despegar.

## Before you start

- A **property with at least one room** in Santara AI.
- **No other channel manager or iCal link** on the property in Despegar — two systems updating one calendar overwrite each other.

## 1. Switch the connection on in Despegar

Despegar has to allow the connection first. Channex is Santara AI's connectivity partner — it is the name Despegar knows us by.

1. In the Despegar extranet, open **General Settings → Channel Manager Connection**.
2. **Disable or remove** any old channel manager connection.
3. Press **Add channel manager / PMS**, choose **Channex**, and accept the terms.
4. Copy the **property ID**, **username** and **API password** Despegar shows.

![Despegar extranet: General Settings → Channel Manager Connection.](/channel-guides/extranet/despegar-menu.webp)

![Despegar's channel manager connections — switch off or remove the old ones.](/channel-guides/extranet/despegar-connections.webp)

![Choosing the channel manager in Despegar and accepting its terms.](/channel-guides/extranet/despegar-add.webp)

:::danger[Copy the API password now]
Despegar shows the API password only once. If you lose it, reset the connection in Despegar to get a new one. Your normal extranet password does not work here.
:::

## 2. Connect in Santara AI

1. Open **Settings → Channels → Add a channel**, find **Despegar**, and press **Connect**.
2. Pick the property it is for.
3. Fill in the fields below, then press **Test connection**.
4. When the test passes, press **Connect and continue**.

| Field | What to enter |
| --- | --- |
| Hotel ID | The Despegar property ID. |
| Username | The username Despegar showed. |
| Password | The **API password** — not your extranet password. |
| Min stay type | Despegar accepts only one kind; choose which to send. |

If **Test connection** fails, check the ID, then ask Despegar support to confirm the property is connected to Channex.

## 3. Map rooms and rates

- Map each of the channel's rooms to your room, and each of its rates to one of your rate plans.
- A 1-person rate on a double room is fine — Despegar can set extra-guest prices in its extranet.

Map **every** room and rate Despegar shows. One left unmapped gets no updates, and Despegar keeps selling it on its old availability.

## 4. Import and go live

Santara AI checks what is mapped, turns the channel on and brings across the stays Despegar already has. From then on, rates, availability and restrictions sync from Santara AI — see [Going live](/channels/going-live/).

## Good to know

- Answer Despegar guests in Despegar's own inbox — guest messages from Despegar do not come into Santara AI.

More fixes: [Channel troubleshooting](/channels/troubleshooting/).
