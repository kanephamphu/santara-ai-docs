---
title: "Connect Hotelbeds"
description: "Choose Channex in Maxiroom, connect with your Hotelbeds username and password, pick a contract, and map — one connection per contract."
sidebar:
  order: 11
  label: "Hotelbeds"
---

How to connect Hotelbeds to Santara AI. The setup inside Santara AI is the same for every channel ([Connect another channel](/channels/other-channels/)); this page covers what is specific to Hotelbeds.

## Before you start

- A **property with at least one room** in Santara AI.
- **No other channel manager or iCal link** on the property in Hotelbeds — two systems updating one calendar overwrite each other.

## 1. Switch the connection on in Hotelbeds

Hotelbeds has to allow the connection first. Channex is Santara AI's connectivity partner — it is the name Hotelbeds knows us by.

1. Sign in to the **Maxiroom** extranet and choose **Channex** from the list of channel managers.

If it is not there, open a Hotelbeds support ticket to connect Channex. Channex must be the only channel manager connected.

## 2. Connect in Santara AI

1. Open **Settings → Channels → Add a channel**, find **Hotelbeds**, and press **Connect**.
2. Pick the property it is for.
3. Fill in the fields below, then press **Test connection**.
4. When the test passes, press **Connect and continue**.

| Field | What to enter |
| --- | --- |
| Username and password | The ones Hotelbeds gave you. They are often the same — that is normal. |
| Contract | Appears after Test connection. Pick the contract this connection is for. |
| Update availability / rates / restrictions | What is sent. Leave all three on unless your contract fixes prices or allotments. |

If **Test connection** fails, check the ID, then ask Hotelbeds support to confirm the property is connected to Channex.

## 3. Map rooms and rates

- Hotelbeds' rooms are listed; map each to your room and rate.
- Do **not** send prices to rates marked **FIT** or similar contract rates — they reject them.

Map **every** room and rate Hotelbeds shows. One left unmapped gets no updates, and Hotelbeds keeps selling it on its old availability.

## 4. Import and go live

Santara AI checks what is mapped, turns the channel on and brings across the stays Hotelbeds already has. From then on, rates, availability and restrictions sync from Santara AI — see [Going live](/channels/going-live/).

:::note[One connection per contract]
With four Hotelbeds contracts, connect Hotelbeds four times — once per contract.
:::

## Good to know

- Answer Hotelbeds guests in Hotelbeds's own inbox — guest messages from Hotelbeds do not come into Santara AI.

## Hotelbeds errors

| Error | What to do |
| --- | --- |
| *This request is out of the contract period* | Ask Hotelbeds to extend the contract past two years. |
| *day … has no inventory loaded* | Ask Hotelbeds to load prices on every date two years ahead. |
| *This change is not permitted as it does not agree with the signed contract* | Turn off **Update rates** for this connection. |
| *Minimum allotment activated …* | The contract has allotments you cannot close. Ask Hotelbeds for a contract without them — allotments can cause overbookings. |

More fixes: [Channel troubleshooting](/channels/troubleshooting/).
