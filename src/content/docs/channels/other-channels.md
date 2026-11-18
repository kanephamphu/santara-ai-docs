---
title: Connect another channel
description: Agoda, Expedia, Trip.com, Traveloka and every other channel — pick a property, connect the channel, map its rooms, and watch the bookings come across.
sidebar:
  order: 4
---

Airbnb and Booking.com have their own flows ([Airbnb](/channels/airbnb/),
[Booking.com](/channels/booking-com/)). Every other channel connects the same way,
in a three-step setup inside Santara AI.

Most channels need a step **in their own extranet first** — switching the connection on and giving
you an ID. The [channel-by-channel connection guide](/channel-guides/) lists what each
one asks for.

## What you need

- A **property with at least one room** in Santara AI. A property with no rooms has nothing to map
  and cannot be picked. Until you have one, every channel tile shows **Add a property first** —
  connecting a channel maps the rooms you already have, it does not create them.
- Your **login or connection details for the channel**, exactly as they appear in that channel's
  extranet. Some channels also ask you to approve the connection on their side first.
- About **15 minutes**. The setup session times out after that; **Reopen** carries on where you
  left off, and nothing you already saved is lost.

## 1. Choose property

Open **Settings → Channels → Add a channel**, search the catalogue, and press **Connect** on the
channel. Then pick the property it is for.

A channel connects to **one property at a time**, with its rooms. To sell another property on the
same channel, connect it again and pick that property.

## 2. Connect and map

- **Sign in to the channel.** Santara AI shows that channel's own setup fields. Where the channel
  offers it, **Test connection** checks the details before anything is created. Then **Connect and
  continue**.
- **Map each room** to the matching room or listing on the channel, and choose which of your rate
  plans each channel rate feeds.
- On some channels this step shows a **mapping screen of its own**. It looks different from the
  rest of Santara AI, and only the property you picked is visible in it. When you have finished, press **I'm done**.

On some channels — Google Hotel Search and Hopper among them — there are no channel rooms to map:
the channel reads your rate plans as they are. There you tick the rate plans it should receive,
press **Save**, then the **Turn on** button with the channel's name — **Turn on Hopper**, for example. If the channel cannot go
live yet, Santara AI lists what is still missing — photos, a description, an address — and where to
fill it in.

:::caution[Mapping a room takes it live]
There is no separate Go live step on these channels. Mapping a room sets it up and takes it live
on the channel — availability starts syncing right away. Read [Going live](/channels/going-live/)
before you map.
:::

A room whose rate plan does not price a guest count the channel accepts stays **linked but not
mapped**, with a note saying which. Santara AI does not guess on a live listing — adjust the rate
plan's guest count and map it again.

## 3. Import

Santara AI checks what is mapped, then brings across the stays and reviews
the channel already has (and guest messages, on the channels that carry them). You can leave the
page — it keeps running. When it finishes, **Open this channel** goes to the connection's page.

If nothing is mapped yet, it says so: open the channel, map at least one room, and the import
starts from there.

## After connecting

The channel appears under **Settings → Channels → Connected**, with its mapped rooms and rates. From
there you can reopen its setup, and a channel that is connected but not live yet shows a note
saying so.

### Your listing content

Santara AI sends your property's content to the channel manager, so the channels that read it —
Google Hotel Search among them — show the listing you keep here:

| Content | Where it comes from |
| --- | --- |
| **Photos** | The property's and its rooms' photos, up to 30 |
| **Description** | The property page and the room descriptions |
| **House policy** | Your check-in and check-out times and house rules |
| **Cancellation policy** | Your booking site's cancellation policy |
| **Facilities** | The amenities ticked on each room page |

It is sent again whenever you save the property or a room, and when you add or remove photos. There
is nothing to press.

### Google Hotel Search

Before Google Hotel Search goes live, the channel checks that the property is complete. If it is
not, pressing **Save** or **Turn on** says *… can't go live yet. Still missing:* and lists what to add:

- *At least 8 photos.* — on the property or room page.
- *A property description.* — on the property page.
- *Street address.*, *Postal code.*, *State or province.*, *Phone number.* — on the property's
  **Settings** page.
- *At least one amenity.* — tick amenities on the room page.
- *A house policy.* — built from your check-in and check-out times; save the property page to send
  it.
- *A cancellation policy.* — taken from your booking site's cancellation policy; save the property
  page to send it.
- *Rates to show.* — tick at least one rate plan and save.

Fill them in, save, and press **Turn on** again. Other channels without room mapping, such as
Hopper, use the same checklist.

Once Google has published the property, its connection page has **Open your Google page**. Until
then it says the link appears there, usually within a few days of connecting. Below it, *Google's
Book button goes to:* shows where guests land. If that is the channel manager's generic page,
**Send Google guests to my booking site** points it at your own [booking site](/setup/booking-site/)
instead — the booking site has to be published with this property on it first.

Rates, availability and restrictions then sync exactly as they do for Airbnb and Booking.com. See
[How channel connections work](/channels/) for what moves in each direction.

:::note[Guest messages on these channels]
Replying from Santara AI works on **Expedia**, as well as Airbnb and Booking.com. On the other
channels in the catalogue, answer guests in the channel's own inbox.
:::

## Disconnecting

Disconnecting removes the channel and the reservations, messages and reviews it brought in. Your
property, rooms and rates in Santara AI stay exactly as they are. Reconnect any time: the stays the channel still has come back, plus anything upcoming. A stay that
starts and finishes while you are disconnected cannot be recovered.

:::note[Upcoming stays are kept]
Removing or disconnecting stops syncing — it does not cancel anything on the channel. Stays that
have not ended yet stay in Santara AI, so their nights remain blocked on your other channels and
nothing gets double-booked. Past stays, their messages and reviews are removed.
:::
