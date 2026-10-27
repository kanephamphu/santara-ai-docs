---
title: Connect Booking.com
description: Add the connectivity provider in your extranet, enter your Hotel ID, map your rooms, and Santara AI activates the channel for you.
sidebar:
  order: 3
---

Booking.com works differently from Airbnb: there is no login popup. You give Booking.com
permission in your own extranet, then tell Santara AI which property to attach to.

![The Booking.com connect dialog — the extranet step, the Hotel ID, and the property to link it to.](/screens/connect-booking-com.en.png)

## 1. Enable the connection in your extranet

Booking.com has to let the connection in first. Santara AI connects through **Channex**, its
connectivity partner — that is the name you look for in Booking.com. This is best done by the
property owner: Booking.com sends a two-step sign-in code to the owner's phone.

1. Sign in at **account.booking.com**. Note the **property ID** at the top, beside the property's
   name — that is the Hotel ID you enter in step 2. Then open **Account → Connectivity provider**.

   ![Booking.com extranet: the property ID beside the name, and Account → Connectivity provider.](/channel-guides/extranet/booking-com-account-menu.webp)

2. Press **Search**.

   ![The Connectivity provider page — press Search.](/channel-guides/extranet/booking-com-connectivity-provider.webp)

3. Type the whole word **Channex** — a shorter search finds nothing — and choose **Channex.io**.

   ![Search for a provider: type Channex and pick Channex.io.](/channel-guides/extranet/booking-com-search-channex.webp)

4. Leave **Reservations, Rates & Availability** ticked and press **Next**.

   ![Channex.io selected, with Reservations, Rates & Availability ticked — press Next.](/channel-guides/extranet/booking-com-next.webp)

5. Tick the box to agree to the XML Service Agreement and press **Yes, I accept**. Nothing else on
   the form needs filling in.

   ![The XML Service Agreement: tick the box, then Yes, I accept.](/channel-guides/extranet/booking-com-agreement.webp)

6. The request now waits for confirmation — that is expected. Leave **Connect me to the provider
   automatically** selected. You can carry on in Santara AI straight away; the channel goes live
   once the connection is confirmed.

   ![Waiting for provider confirmation — carry on in Santara AI.](/channel-guides/extranet/booking-com-waiting.webp)

Nothing happens in Santara AI until this is done. The connect dialog has a checkbox confirming you
have done it, and it is there because skipping this step is the single most common reason a
Booking.com connection fails.

:::caution[Check your derived rates after connecting]
When a channel manager is connected, Booking.com can change settings on **derived rates** — the
minimum stay, for example. Check each derived rate in the extranet once you are connected.
:::

## 2. Enter your Hotel ID

**Settings → Channels → Connect Booking.com**.

Your **Hotel ID** is the number shown at the top of the extranet, beside the property name — for
example `1234567`. Optionally give the connection a display name.

## 3. Link it to a property

Choose the Santara AI property this hotel belongs to. The hotel connects **directly to that
property** — no new one is created — and any other rooms found in your extranet are added to it as
they are discovered.

No properties yet? Choose **New property — created from this hotel**, and it is created for you.
If the property is already on Airbnb, it is marked *already on Airbnb* — that is fine and expected;
one property sells on both.

Press **Connect property**. Unlike Airbnb, this happens immediately — there is no window to wait on.

## 4. Map your rooms

Santara AI asks Booking.com for the rooms on that hotel and shows them under **Your rooms**. For each
one, pick the Santara AI room it is.

If nothing appears, press **Find my rooms** again, or use **Connect a room to a property yourself**
and enter them by hand from the extranet's **Property → Rooms & rates** page:

- **Room name** — for example *Standard Double Room*
- **Room ID** — for example `437213702`
- **Rate ID(s)** — for example `25014098, 25014104`
- **Guests** — how many the room sleeps

Then press **Map, activate & sync**. Santara AI maps the rooms, activates the channel, and syncs
bookings, reviews and messages, showing each stage as it goes.

:::note[Telling rooms apart]
Booking.com shows its **default** room names, not names you customised in the extranet, so two
apartments can look identical. Match them by **Room ID** instead. Map **every** room and rate:
an unmapped rate — including an old **derived rate** that appears as mappable — makes its bookings
fail. If you don't need it, delete it in the extranet (a derived rate recreated there won't need
mapping).
:::

## What can hold a room back

| On screen | Meaning |
| --- | --- |
| *Linked — not mapped yet* | Booking.com knows the room; it points at no Santara AI room |
| *Mapped — awaiting activation* | Mapped, but the channel has not activated. Bookings sync after activation succeeds |
| *stayed linked but not mapped — its rate plan doesn't price a guest count Booking.com accepts* | The room's rate plan has no price for an occupancy Booking.com requires. Open the room's rate plan, price the occupancy, and map it again |
| *No rooms found yet* | Check the Hotel ID and that the connectivity provider was accepted, then refresh |

Santara AI will not guess an occupancy price on a live listing. That refusal is deliberate: a guessed
price on Booking.com sells real nights at the wrong rate.

## Stays imported when you connect

Stays Booking.com already had are brought across when the channel goes live, but Booking.com sends
them with **less detail** than a new booking: no taxes or fees, no guest email, address or phone, no
commission and no card details. Check the extranet for those. Bookings made after you connect arrive
in full.

## Rates on Booking.com

Booking.com does not expose your rates to a connectivity provider in a way that can be read back.
Prices you set in Santara AI are pushed **out** to Booking.com; nothing is imported **in**. Set your
prices here (or with [pricing rules](/money/pricing/)) and treat Santara AI as the source of truth.

## Changing or removing

- **Change property** — future reservations and messages land on the property you pick. Everything
  already imported stays where it is and your room mappings are kept.
- **Remove from Santara AI** on one room — removes its imported data here only.
- **Disconnect** — stops syncing and removes this property's imported Booking.com data. Your
  extranet is untouched. You can reconnect the same Hotel ID later.

:::caution[If the channel disappears]
*"This channel was removed on the channel manager side"* means the connection was cancelled
upstream — usually because the connectivity provider was removed in the extranet. Syncing has
stopped. Re-accept the provider in Booking.com, then disconnect and reconnect here.
:::
