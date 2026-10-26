---
title: "Connect Hostelworld"
description: "Email Hostelworld to connect Channex, enter the property ID, and map each room at its maximum occupancy."
sidebar:
  order: 10
  label: "Hostelworld"
---

How to connect Hostelworld to Santara AI. The setup inside Santara AI is the same for every channel ([Connect another channel](/channels/other-channels/)); this page covers what is specific to Hostelworld.

## Before you start

- A **property with at least one room** in Santara AI.
- **No other channel manager or iCal link** on the property in Hostelworld — two systems updating one calendar overwrite each other.

## 1. Switch the connection on in Hostelworld

Hostelworld has to allow the connection first. Channex is Santara AI's connectivity partner — it is the name Hostelworld knows us by.

1. Email Hostelworld support to connect **Channex**.
2. They reply when it is enabled, with your **property ID**.

## 2. Connect in Santara AI

1. Open **Settings → Channels → Add a channel**, find **Hostelworld**, and press **Connect**.
2. Pick the property it is for.
3. Fill in the fields below, then press **Test connection**.
4. When the test passes, press **Connect and continue**.

![Step 2 in Santara AI: the Hostelworld setup fields, then Test connection.](/screens/channel-guides/hostelworld.en.png)

| Field | What to enter |
| --- | --- |
| Hotel ID | Your Hostelworld Hotel ID. Hostelworld sends it as your property ID. |
| Min Stay Type | Which minimum stay you send: **Arrival** or **Through**. Usually Arrival. |
| Send Property Notification | Optional. Tick it and a **Property Email** field appears — that address gets an email for every new booking. |
| Booking Amount | **With Commission** or **Without Commission** — how booking totals arrive. |

If **Test connection** fails, check the ID, then ask Hostelworld support to confirm the property is connected to Channex.

## 3. Map rooms and rates

- Hostelworld prices each room at its **maximum occupancy**: a double sends the 2-person price, a 4-bed room the 4-person price. It cannot sell a double as a single.
- **Dorm beds** send the 1-person price.

Map **every** room and rate Hostelworld shows. One left unmapped gets no updates, and Hostelworld keeps selling it on its old availability.

## 4. Import and go live

Santara AI checks what is mapped, turns the channel on and brings across the stays Hostelworld already has. From then on, rates, availability and restrictions sync from Santara AI — see [Going live](/channels/going-live/).

## Good to know

- Hostelworld does not support **closed to arrival** or **closed to departure** — those restrictions are not sent.
- Answer Hostelworld guests in Hostelworld's own inbox — guest messages from Hostelworld do not come into Santara AI.

More fixes: [Channel troubleshooting](/channels/troubleshooting/).
