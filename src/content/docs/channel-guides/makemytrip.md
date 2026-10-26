---
title: "Connect MakeMyTrip and Goibibo"
description: "Ask MakeMyTrip to connect Channex, enter your Hotel ID and access token, and map rooms per guest count."
sidebar:
  order: 8
  label: "MakeMyTrip and Goibibo"
---

How to connect MakeMyTrip and Goibibo to Santara AI. The setup inside Santara AI is the same for every channel ([Connect another channel](/channels/other-channels/)); this page covers what is specific to MakeMyTrip and Goibibo.

## Before you start

- You need **your own contract** with MakeMyTrip, with the property's details and photos already in its extranet. Santara AI connects a property that is signed up; it cannot create one on MakeMyTrip for you.
- A **property with at least one room** in Santara AI.
- **No other channel manager or iCal link** on the property in MakeMyTrip and Goibibo — two systems updating one calendar overwrite each other.

## 1. Switch the connection on in MakeMyTrip and Goibibo

MakeMyTrip and Goibibo has to allow the connection first. Channex is Santara AI's connectivity partner — it is the name MakeMyTrip and Goibibo knows us by.

1. Ask MakeMyTrip support, in the extranet's messaging, to connect **Channex**.
2. They give you an **access token**. Keep it with your **Hotel ID**.

## 2. Connect in Santara AI

1. Open **Settings → Channels → Add a channel**, find **Make My Trip**, and press **Connect**.
2. Pick the property it is for.
3. Fill in the fields below, then press **Test connection**.
4. When the test passes, press **Connect and continue**.

![Step 2 in Santara AI: the MakeMyTrip and Goibibo setup fields, then Test connection.](/screens/channel-guides/makemytrip.en.png)

| Field | What to enter |
| --- | --- |
| Hotel ID | Your MakeMyTrip Hotel ID. |
| Access Token | The token MakeMyTrip gave you when Channex was connected. |
| Send Property Notification | Optional. Tick it and a **Property Email** field appears — that address gets an email for every new booking. |
| Sync B2B Rate Type / Sync MyBiz Rate Type | Optional. Also send prices to MakeMyTrip's B2B or MyBiz rates; a **Modifier (%)** field appears to adjust them. |
| Booking Amount | **Payout Amount** or **Total Amount**. |

If **Test connection** fails, check the ID, then ask MakeMyTrip and Goibibo support to confirm the property is connected to Channex.

## 3. Map rooms and rates

- Usually **Multi-occupancy** — one price per guest count. If you only have one price for the room, map that same rate to every guest count.

Map **every** room and rate MakeMyTrip and Goibibo shows. One left unmapped gets no updates, and MakeMyTrip and Goibibo keeps selling it on its old availability.

## 4. Import and go live

Santara AI checks what is mapped, turns the channel on and brings across the stays MakeMyTrip and Goibibo already has. From then on, rates, availability and restrictions sync from Santara AI — see [Going live](/channels/going-live/).

## Good to know

- Answer MakeMyTrip and Goibibo guests in MakeMyTrip and Goibibo's own inbox — guest messages from MakeMyTrip and Goibibo do not come into Santara AI.

More fixes: [Channel troubleshooting](/channels/troubleshooting/).
