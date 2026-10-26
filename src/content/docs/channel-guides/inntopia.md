---
title: "Connect Inntopia"
description: "Add a Channex cross-reference code to each Inntopia product, enter your Hotel ID, and map the RACK rate per room."
sidebar:
  order: 24
  label: "Inntopia"
---

How to connect Inntopia to Santara AI. The setup inside Santara AI is the same for every channel ([Connect another channel](/channels/other-channels/)); this page covers what is specific to Inntopia.

## Before you start

- You need **your own contract** with Inntopia, with the property's details and photos already in its extranet. Santara AI connects a property that is signed up; it cannot create one on Inntopia for you.
- A **property with at least one room** in Santara AI.
- **No other channel manager or iCal link** on the property in Inntopia — two systems updating one calendar overwrite each other.

## 1. Switch the connection on in Inntopia

Inntopia has to allow the connection first. Channex is Santara AI's connectivity partner — it is the name Inntopia knows us by.

1. Sign in to Inntopia and open the **Products** tab.
2. For each product, press the settings button on the right and choose **Cross-reference codes**.
3. Set **Remote system** to **Channex**.
4. Set **Cross-reference code** to the Inntopia product ID — the number in brackets in the product's name.
5. Save with the blue check box, close, and repeat for the next product.

![Inntopia Products tab, with the settings button on each product.](/channel-guides/extranet/inntopia-products.webp)

![Inntopia cross-reference code: Remote System Channex, code = the product ID in brackets.](/channel-guides/extranet/inntopia-cross-reference.webp)

## 2. Connect in Santara AI

1. Open **Settings → Channels → Add a channel**, find **Inntopia**, and press **Connect**.
2. Pick the property it is for.
3. Fill in the fields below, then press **Test connection**.
4. When the test passes, press **Connect and continue**.

| Field | What to enter |
| --- | --- |
| Hotel ID | Your Inntopia Hotel ID. |

If **Test connection** fails, check the ID, then ask Inntopia support to confirm the property is connected to Channex.

## 3. Map rooms and rates

- **Per room** — one price for the room, whoever stays. Map your full-occupancy rate.
- Map the **RACK** rate only.

Map **every** room and rate Inntopia shows. One left unmapped gets no updates, and Inntopia keeps selling it on its old availability.

## 4. Import and go live

Santara AI checks what is mapped, turns the channel on and brings across the stays Inntopia already has. From then on, rates, availability and restrictions sync from Santara AI — see [Going live](/channels/going-live/).

## Good to know

- Answer Inntopia guests in Inntopia's own inbox — guest messages from Inntopia do not come into Santara AI.

More fixes: [Channel troubleshooting](/channels/troubleshooting/).
