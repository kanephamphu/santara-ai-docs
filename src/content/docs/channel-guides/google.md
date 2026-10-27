---
title: "Connect Google Hotels and Vacation Rentals"
description: "Free listings on Google: complete your property details, connect Google, choose where bookings go, and wait 1–4 weeks for Google to show the property."
sidebar:
  order: 36
  label: "Google Hotels and Vacation Rentals"
---

How to connect Google Hotels and Vacation Rentals to Santara AI. The setup inside Santara AI is the same for every channel ([Connect another channel](/channels/other-channels/)); this page covers what is specific to Google Hotels and Vacation Rentals.

## Before you start

- Google has **no extranet**: it shows only what your property sends it. Before connecting, fill in the property's **address, phone, map location, time zone, house rules, a cancellation policy, at least one facility, photos and a description**.
- **Vacation rentals need more**: a website address starting with `https://`, **at least 8 photos**, and the beds, bedrooms and bathrooms counts (asked in the form below).
- Google matches your property by **name, address and phone number** — make sure they match what Google Maps shows.
- A **property with at least one room** in Santara AI.

## 1. Connect in Santara AI

1. Open **Settings → Channels → Add a channel**, find **Google Hotel ARI**, and press **Connect**.
2. Pick the property it is for.
3. Fill in the fields below, then press **Test connection**.
4. When the test passes, press **Connect and continue**.

| Field | What to enter |
| --- | --- |
| Partner Account | Leave it as it is unless we have told you otherwise. |
| Use built-in IBE | Ticked: guests who click on Google land on a ready-made booking page. Unticked: fill in **Booking Link**. |
| Booking Link | Your own booking page, with placeholders Google fills in — for example `https://example.com/book?checkin=(CHECKIN_DATE)&nights=(LENGTH)`. Others: `(CHECKOUT_DATE)`, `(ADULTS)`, `(CURRENCY)`. |
| Beds count / Bedrooms count / Bathrooms count | Required for vacation rentals. |
| Send Property Notification | Optional. Tick it and a **Property Email** field appears — that address gets an email for every new booking. |

## 2. Map rooms and rates

- Tick the rooms and rates Google should show. You can change this any time.
- **Vacation rentals: one room type per connection.** Several apartments in one building each need their own Google connection, and properties at different addresses must be separate properties in Santara AI.

Map **every** room and rate Google Hotels and Vacation Rentals shows. One left unmapped gets no updates, and Google Hotels and Vacation Rentals keeps selling it on its old availability.

## 3. Import and go live

Santara AI checks what is mapped, turns the channel on and brings across the stays Google Hotels and Vacation Rentals already has. From then on, rates, availability and restrictions sync from Santara AI — see [Going live](/channels/going-live/).

## Good to know

- Google checks for new properties weekly: allow **about 1 week** for hotels and **up to 4 weeks** for vacation rentals before the property appears.
- These are Google's **free booking links**; vacation rentals show as a pin on the map when people search the area.

More fixes: [Channel troubleshooting](/channels/troubleshooting/).
