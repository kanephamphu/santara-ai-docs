---
title: Connect Booking.com
description: Add the connectivity provider in your extranet, choose the property, enter your Hotel ID and map your rooms — mapping a room takes it live.
sidebar:
  order: 3
---

Booking.com works differently from Airbnb: there is no login popup. You give Booking.com
permission in your own extranet, then connect it to a property you already have in Santara AI.

## What you need

- **A property with at least one room** in Santara AI. Connecting Booking.com maps the rooms you
  already have — it does not create a property. Until you have one, the Booking.com tile shows
  **Add a property first**. Add it under [Properties](/setup/properties/).
- Access to the **Booking.com extranet** as the property owner.
- Your **Hotel ID** — the number at the top of the extranet, beside the property name.

The setup has three steps: **Choose property**, **Connect and map**, **Import**.

![The Booking.com connect step — the extranet checkbox and the Hotel ID.](/screens/connect-booking-com.en.png)

## 1. Enable the connection in your extranet

Booking.com has to let the connection in first. Santara AI connects through **Channex**, its
connectivity partner — that is the name you look for in Booking.com. This is best done by the
property owner: Booking.com sends a two-step sign-in code to the owner's phone.

1. Sign in at **account.booking.com**. Note the **property ID** at the top, beside the property's
   name — that is the Hotel ID you enter in step 3. Then open **Account → Connectivity provider**.

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

Nothing happens in Santara AI until this is done. The connect step has a checkbox confirming you
have done it, and it is there because skipping this step is the single most common reason a
Booking.com connection fails.

:::caution[Check your derived rates after connecting]
When a channel manager is connected, Booking.com can change settings on **derived rates** — the
minimum stay, for example. Check each derived rate in the extranet once you are connected.
:::

## 2. Choose property

**Settings → Channels → Add a channel**, then press **Connect** on the **Booking.com** tile. The
first step asks **Which property is this hotel?** Pick the Santara AI property, then press
**Continue**. Your Booking.com rooms are mapped into that property's rooms — no new property is
created. If the property is already on Airbnb, that is fine and expected; one property sells on
both.

## 3. Connect and map

**Connect.** Tick the box confirming you added the connectivity provider and accepted the
agreement in the extranet. Enter your **Hotel ID** (for example `1234567`) and, optionally, a
**Display name (optional)**. Press **Test connection** to check it first:

- *Booking.com accepted this Hotel ID.* — carry on.
- *Booking.com didn't accept this Hotel ID.* — check the number, and that the provider request in
  step 1 was accepted.

Then press **Connect Booking.com**. Unlike Airbnb, this happens immediately — there is no window
to wait on.

**Map.** Santara AI asks Booking.com for the hotel's rooms and lists them under **Your rooms**. For
each Booking.com room:

- choose the Santara AI room it is (**Choose a room…**);
- point each Booking.com rate at one of your rate plans, then **Save rate mapping**. Under **Rate
  plans on this room** you can add a plan on the spot (**+ Add rate plan**) or change which one is
  primary (**Make primary**).

Each room is mapped from its own row; with several rooms, **Map, activate & sync N rooms** maps
them all at once. When you are done, press **Continue**.

:::caution[Mapping a room takes it live]
There is no separate Go live step on Booking.com. Mapping a room sets it up and takes it live —
availability starts syncing right away. Read [Going live](/channels/going-live/) before you map.
:::

:::note[Telling rooms apart]
Booking.com shows its **default** room names, not names you customised in the extranet, so two
apartments can look identical. Match them by **Room ID** instead. Map **every** room and rate:
an unmapped rate — including an old **derived rate** that appears as mappable — makes its bookings
fail. If you don't need it, delete it in the extranet (a derived rate recreated there won't need
mapping).
:::

## 4. Import

Santara AI brings across the stays, messages and reviews the hotel already has (*Bringing your
bookings across*). You can leave the page — it keeps running. When it says *That's connected*,
**Open this channel** goes to the connection page.

## What can hold a room back

| On screen | Meaning |
| --- | --- |
| *Linked — not mapped yet* | Booking.com knows the room; it points at no Santara AI room |
| *Mapped — awaiting activation* | Mapped, but the channel has not activated yet. Bookings sync after activation succeeds |
| *Confirm capacity to continue* | Confirm how many identical units the property has, and its nightly rate — see [Going live](/channels/going-live/#check-these-things-first) |
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
