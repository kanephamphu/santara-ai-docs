---
title: "Connect WebBeds"
description: "Ask WebBeds to connect Channex, enter your Hotel Code and max stay type, and map every room and rate."
sidebar:
  order: 31
  label: "WebBeds"
---

How to connect WebBeds to Santara AI. The setup inside Santara AI is the same for every channel ([Connect another channel](/channels/other-channels/)); this page covers what is specific to WebBeds.

## Before you start

- You need **your own contract** with WebBeds, with the property's details and photos already in its extranet. Santara AI connects a property that is signed up; it cannot create one on WebBeds for you.
- A **property with at least one room** in Santara AI.
- **No other channel manager or iCal link** on the property in WebBeds — two systems updating one calendar overwrite each other.

## 1. Switch the connection on in WebBeds

WebBeds has to allow the connection first. Channex is Santara AI's connectivity partner — it is the name WebBeds knows us by.

1. Ask WebBeds support to connect **Channex** (or do it in their interface).
2. Note your **WebBeds Hotel Code**.

## 2. Connect in Santara AI

1. Open **Settings → Channels → Add a channel**, find **WebBeds**, and press **Connect**.
2. Pick the property it is for.
3. Fill in the fields below, then press **Test connection**.
4. When the test passes, press **Connect and continue**.

![Step 2 in Santara AI: the WebBeds setup fields, then Test connection.](/screens/channel-guides/webbeds.en.png)

| Field | What to enter |
| --- | --- |
| Hotel Code | Your WebBeds hotel code. |
| Send Property Notification | Optional. Tick it and a **Property Email** field appears — that address gets an email for every new booking. |
| Min Stay Type | Which minimum stay you send: **Arrival** or **Through**. Usually Arrival. |

If **Test connection** fails, check the ID, then ask WebBeds support to confirm the property is connected to Channex.

## 3. Map rooms and rates

- Map each of the channel's rooms to your room, and each of its rates to one of your rate plans.

Map **every** room and rate WebBeds shows. One left unmapped gets no updates, and WebBeds keeps selling it on its old availability.

## 4. Import and go live

Santara AI checks what is mapped, turns the channel on and brings across the stays WebBeds already has. From then on, rates, availability and restrictions sync from Santara AI — see [Going live](/channels/going-live/).

## Good to know

- Answer WebBeds guests in WebBeds's own inbox — guest messages from WebBeds do not come into Santara AI.

More fixes: [Channel troubleshooting](/channels/troubleshooting/).
