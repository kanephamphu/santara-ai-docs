---
title: Guest guidebook and QR stickers
description: A QR sticker in every room that opens a guide to the stay — house info, local tips, extras to request, and the door code once the guest confirms their booking.
sidebar:
  order: 4
---

Print one QR sticker per room. A guest scans it with their phone camera and gets a page about their
stay, in their own language: check-in and check-out times, the Wi-Fi network, house rules,
amenities, your local recommendations, a map, and the extras you sell. Once they enter their
booking code, the same page shows the **door code**, the **Wi-Fi password** and **how
to get in**.

There is nothing to install and no account for the guest to create.

Open it from **Properties**, pick a property, then **Set up guidebook** on the **Guest guidebook**
card. A room's own page has the same card, with **Manage stickers**.

## What the guest sees

The page has two levels, and the difference between them is the whole design.

![The guest page from a room sticker, before confirming: the stay, the rules and one box for the booking code.](/screens/guidebook-guest.en.png)

| Anyone who scans the sticker | Only a guest who has confirmed their booking |
| --- | --- |
| Check-in and check-out times | Door code |
| Wi-Fi network name | Wi-Fi password |
| House rules, parking, pets | Check-in steps ("how to get in") |
| Amenities of the room | Prices of the extras, and the **Request** buttons |
| Local places and the map | A greeting with their name and dates |
| Which extras you offer | |
| A link to your [booking site](/setup/booking-site/), if it is published | |

:::caution[A sticker is a public link]
Anyone who photographs a sticker has its link — a previous guest, a delivery driver, a passer-by
at the gate. That is why nothing that opens a door is reachable from the link alone. If a sticker
goes missing or ends up somewhere it should not be, [replace its code](#qr-stickers): the printed
one stops working at once.
:::

The page opens in the guest's browser language — English, Indonesian or Vietnamese — and has a
language picker at the top. It is not listed by search engines.

Everything on it comes from what you have already filled in: times, Wi-Fi and codes from
[stay information](/setup/properties/#stay-information-wifi-door-codes-access), amenities from the
room, and extras from your [upsell settings](/money/upsells/).

## How a guest confirms their booking

The guest types the **booking code** from their confirmation — nothing else. Spaces, dashes and
capital letters do not matter. Codes shorter than six characters are never matched.

![The same page once the booking code is entered: a greeting, the door code (masked until tapped) and the Wi-Fi password.](/screens/guidebook-verified.en.png)

Access then follows the stay, in the property's own time zone:

- It **opens the day before arrival** and **closes at the end of checkout day**.
- A **cancelled** booking loses access immediately, even on a phone that was already showing the
  code.
- A sticker in a room accepts bookings for that room, and bookings in the building that no room has
  been attached to yet; the building's own sticker accepts any booking in the building.
- A guest who checks too early is told the date their details open, rather than that their booking
  cannot be found. Checking early does not count towards the wrong-attempt limit.

After five wrong attempts on the same phone, the guide asks that guest to wait 15 minutes. The limit
is counted per phone, so guests sharing your building's Wi-Fi do not lock each other out — only a
run of wrong attempts from many phones on one connection pauses it for everyone. **Not you? Sign out** clears the details from that phone, for a
shared device or a guest handing it back.

:::note[Bookings without a channel code]
A guest can confirm only a booking that carries a confirmation code from a channel. A stay you
created by hand has no code for them to type, so those guests see the public part of the guide but
cannot unlock the door code there — send it in a message as you do today.
:::

## QR stickers

Each building gets one sticker for the whole building — the lobby, the gate, a welcome desk — plus
one per room. They are created the first time you open the guidebook page.

Every sticker tile shows its QR code, its code, how many times it was scanned in the last 30 days,
and three actions:

| Action | What it does |
| --- | --- |
| **On / Off** | Off makes that sticker show "not available" until you switch it back. Nothing to reprint. |
| **Copy link** / **Open guide** | The same page without scanning — to send in a message or check what a guest sees. |
| **Replace code** | Gives the sticker a new code. **The printed sticker stops working immediately** and you print a new one. |

### Printing

**Print QR stickers** lays every switched-on sticker out on A4, three to a row. Each one carries the
property and room name and the line "Scan for your stay guide & Wi-Fi" in English, Vietnamese and
Indonesian, so one print works for every guest. Print at **100% scale**, cut along the dashed
lines, and put each sticker in its own room.

Every sticker also downloads as an **SVG**, which is what a print shop wants for labels or acrylic
stands.

## Local places

The **Local places** list is your own recommendations: restaurants, sights, pharmacies, the nearest
station.

- **Add place** — a name, a category (Eat & drink, Sights, Things to do, Shopping, Getting around,
  Essentials), a tip for guests, an address and an optional map link. It is published straight away.
- **Draft with AI** — suggests up to twelve well-known places near the building's address. They are
  saved as **drafts**, which guests never see. Open each one on the map before you publish it: AI
  can be wrong about places, and the map link is a search so a place that does not exist shows as
  one. The property needs an address for this to work.
- **Publish / Unpublish**, move up and down, edit, delete. Editing a name or tip removes that place's
  saved translations, so a guest never reads a translation of words you have since changed.
- **Translate for guests** — pick the language your places are written in, and the published ones
  are translated into the other two. Translations you already have are kept.

A building holds up to 60 places.

Guests see every place with its type — a coloured icon and label — and can filter the list by type. On a phone each place is one compact row with a **Map** button.

![Nearby places on a guest's phone, filtered by type, in the guest's language.](/screens/guidebook-places-phone.en.png)

## What guests see: the settings

The **What guests see** panel on the same page, per building:

- **Guidebook on for this building** — off makes every sticker in the building show "not
  available", without replacing any codes.
- **Welcome message** — one per language (EN, ID, VI). Leave a language empty to use the standard
  welcome.
- **Sections** — switch off Amenities; House rules, parking and pets; Map and directions; Local
  places; or Offers.
- **Show door code, Wi-Fi password and check-in steps to verified guests** — switch this off and the
  guide never shows access details, even to a confirmed guest.

Press **Save**. Only what you changed is stored.

## When a guest asks for an extra

A confirmed guest sees the extras you have switched on in **Upsells → Settings** — early check-in,
late checkout, one more night — priced exactly as those settings price them for that stay.

An extra is only offered when the calendar allows it:

| Extra | Needs |
| --- | --- |
| **Early check-in** | The night before arrival free, and arrival not yet past |
| **Late checkout** | Nobody staying in the room on checkout night |
| **One more night** | The same — the night after the stay free |

Nights you closed on the calendar count as unavailable. Anything else shows as "Not available for
your dates".

When the guest presses **Request**:

1. The request appears on **Upsells** as **Accepted**, at the price the guest was shown.
2. Everyone who can act on that room is notified in the [bell](/setup/workspace/#notifications).
3. **Nothing changes on the booking.** Confirm with the guest, then extend or adjust the stay in
   [Bookings](/daily/bookings/#cancellations-and-changes) as you would for any change.

A guest can request each extra once per stay. If you decline one on Upsells, it stays declined.

## The numbers

The top of the guidebook page counts the last 30 days:

| Number | Counts |
| --- | --- |
| **QR scans** | Opens that came from a printed sticker |
| **Page views** | Every other open, including a guest coming back to the page |
| **Guests verified** | Successful booking confirmations |
| **Offer requests** | Extras requested |

Days are counted in UTC, so a night-time scan in Bali or Hanoi can land on the next day.

## Who can change it

Seeing the guidebook page needs access to the property. Changing stickers, places or settings needs
permission to edit properties **and** access to the whole building — a teammate given only one room
of a building can look but not change what every room's guests see. See
[Team and roles](/setup/team/).
