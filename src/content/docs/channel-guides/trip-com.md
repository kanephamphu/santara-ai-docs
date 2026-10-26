---
title: "Connect Trip.com (Ctrip)"
description: "Connect Channex in Trip.com eBooking, enter your Hotel ID, and map rooms — usually per guest count."
sidebar:
  order: 4
  label: "Trip.com (Ctrip)"
---

How to connect Trip.com (Ctrip) to Santara AI. The setup inside Santara AI is the same for every channel ([Connect another channel](/channels/other-channels/)); this page covers what is specific to Trip.com (Ctrip).

## Before you start

- A **property with at least one room** in Santara AI.
- **No other channel manager or iCal link** on the property in Trip.com (Ctrip) — two systems updating one calendar overwrite each other.

## 1. Switch the connection on in Trip.com (Ctrip)

Trip.com (Ctrip) has to allow the connection first. Channex is Santara AI's connectivity partner — it is the name Trip.com (Ctrip) knows us by.

1. Sign in to **Trip.com eBooking**.
2. Open **Rates & Availability → Connectivity Settings**.
3. Search **Channex**, choose it, press **Continue**, then **Connect**.

If those options are missing from your account, email Trip.com at lodgingsupport@trip.com.

## 2. Connect in Santara AI

1. Open **Settings → Channels → Add a channel**, find **Trip.com (Ctrip)**, and press **Connect**.
2. Pick the property it is for.
3. Fill in the fields below, then press **Test connection**.
4. When the test passes, press **Connect and continue**.

![Step 2 in Santara AI: the Trip.com (Ctrip) setup fields, then Test connection.](/screens/channel-guides/trip-com.en.png)

| Field | What to enter |
| --- | --- |
| Hotel Code | Your Trip.com hotel code. |
| Send Property Notification | Optional. Tick it and a **Property Email** field appears — that address gets an email for every new booking. |
| Tax Setting For Bookings | **Inclusive** or **Exclusive** — whether booking totals include taxes. |

If **Test connection** fails, check the ID, then ask Trip.com (Ctrip) support to confirm the property is connected to Channex.

## 3. Map rooms and rates

- Usually **Multi-occupancy** — one price per guest count. If you only have one price for the room, map that same rate to every guest count.

Map **every** room and rate Trip.com (Ctrip) shows. One left unmapped gets no updates, and Trip.com (Ctrip) keeps selling it on its old availability.

## 4. Import and go live

Santara AI checks what is mapped, turns the channel on and brings across the stays Trip.com (Ctrip) already has. From then on, rates, availability and restrictions sync from Santara AI — see [Going live](/channels/going-live/).

## Good to know

- Upcoming bookings are imported — but only the ones Trip.com already handed to a channel manager. Some may arrive without full guest details, and Trip.com gives no way to tell which are missing. Check the extranet for stays made before you connected.
- Answer Trip.com (Ctrip) guests in Trip.com (Ctrip)'s own inbox — guest messages from Trip.com (Ctrip) do not come into Santara AI.

More fixes: [Channel troubleshooting](/channels/troubleshooting/).
