---
title: "Connect Expedia"
description: "Choose Channex for connectivity and bookings in Expedia's extranet, enter your property ID, map, and upcoming bookings come across."
sidebar:
  order: 3
  label: "Expedia"
---

How to connect Expedia to Santara AI. The setup inside Santara AI is the same for every channel ([Connect another channel](/channels/other-channels/)); this page covers what is specific to Expedia.

## Before you start

- A **property with at least one room** in Santara AI.
- **No other channel manager or iCal link** on the property in Expedia — two systems updating one calendar overwrite each other.

## 1. Switch the connection on in Expedia

Expedia has to allow the connection first. Channex is Santara AI's connectivity partner — it is the name Expedia knows us by.

1. In the Expedia extranet, open **Rooms and rates → Connectivity settings**. Expedia usually asks for a two-factor sign-in here.
2. Choose **Channex** for **both** options: connectivity **and** bookings.

![Expedia Partner Central: Rooms and rates → Connectivity settings.](/channel-guides/extranet/expedia-menu.webp)

![Expedia asks for an extra verification before it shows Connectivity settings.](/channel-guides/extranet/expedia-verify.webp)

## 2. Connect in Santara AI

1. Open **Settings → Channels → Add a channel**, find **Expedia**, and press **Connect**.
2. Pick the property it is for.
3. Fill in the fields below, then press **Test connection**.
4. When the test passes, press **Connect and continue**.

![Step 2 in Santara AI: the Expedia setup fields, then Test connection.](/screens/channel-guides/expedia.en.png)

| Field | What to enter |
| --- | --- |
| Hotel ID | Your Expedia Hotel ID. Expedia calls it your property ID. |
| Min Stay Type | Which minimum stay you send: **Arrival** or **Through**. Usually Arrival. |
| Send Property Notification | Optional. Tick it and a **Property Email** field appears — that address gets an email for every new booking. |
| Booking Amount | **Collect Amount** — what you charge the guest or the virtual card; it matches the VCC. **Total Amount** — what the guest paid, taxes and fees included. **Total Amount Excluding Tax** — for US properties. |

If **Test connection** fails, check the ID, then ask Expedia support to confirm the property is connected to Channex.

## 3. Map rooms and rates

- Expedia's rooms and rates are on the left; pick your matching room and rate on the right.

Map **every** room and rate Expedia shows. One left unmapped gets no updates, and Expedia keeps selling it on its old availability.

## 4. Import and go live

Santara AI checks what is mapped, turns the channel on and brings across the stays Expedia already has. From then on, rates, availability and restrictions sync from Santara AI — see [Going live](/channels/going-live/).

## Good to know

- Going live sends all rates, availability and restrictions in one full sync.
- **Upcoming Expedia bookings are imported.**
- **Guest messages** on Expedia can be answered from Santara AI.

More fixes: [Channel troubleshooting](/channels/troubleshooting/).
