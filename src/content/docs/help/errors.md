---
title: What that message means
description: The exact words Santara AI puts on screen, what each one is actually telling you, and the fix. Search this page for the sentence you are looking at.
sidebar:
  order: 7
---

Messages here are quoted as the product writes them, so you can search this page for the sentence
in front of you. If yours is not here, work through
[When something looks wrong](/help/troubleshooting/) or
[Channel troubleshooting](/channels/troubleshooting/).

## Signing in

| Message | What it means | What to do |
| --- | --- | --- |
| *Invalid email or password.* | Exactly that. It never says which of the two was wrong, on purpose | Try again, or use *Forgot your password?* |
| *Too many failed attempts. Please try again later.* | Ten failed sign-ins locked the account for **15 minutes** | Wait it out, or reset your password — a reset clears the lock at once. See [If you are locked out](/setup/account/#if-you-are-locked-out) |
| *Please verify your email before logging in.* | The account exists but the six-digit code was never entered | Check your inbox, including spam. Ask for a new code if it expired |
| *An account with this email already exists.* | You registered before, perhaps for another workspace | Sign in instead — one login can belong to many workspaces |
| *That code is not right.* | Wrong reset or verification code | Re-read it. Five wrong tries burn the code |
| *This code has expired.* | Codes last **15 minutes** | Request a new one — you can do that once a minute |
| *Too many incorrect codes.* | Five wrong attempts on one code | Request a new one |
| *Your new password must be at least 12 characters.* | Length is the only rule | Use a longer one |
| *Please sign in again.* | Your session ended — usually a password change elsewhere, or a browser clearing cookies | Sign in. If it repeats, see [My session keeps expiring](/help/troubleshooting/#my-session-keeps-expiring) |

:::note
The lockout message is currently shown in English even when the rest of the sign-in page is in
Indonesian or Vietnamese.
:::

## Connecting a channel

| Message | What it means | What to do |
| --- | --- | --- |
| *Your browser blocked the popup. Please allow popups and try again.* | Airbnb authorises in a popup window | Allow popups for the site, then press *Connect Airbnb* again |
| *Authorization wasn't completed* | You closed Airbnb's window before approving. **Nothing was connected** | Press *Try again* |
| *This Airbnb account is already connected.* | The same Airbnb login is on another connection in this workspace | Disconnect the existing connection first, then reconnect. See [Add another account](/channels/listings/#add-another-account) |
| *This account is already connected — taking you to it.* | Same situation, resolved for you | Nothing. You land on the existing connection's page |
| *already connected* (on a listing row) | That listing is mapped to a room somewhere already | Pick a different listing, or unlink the existing one |
| *Could not load your Airbnb listings.* | We reached Airbnb but got nothing back | Press **Refresh** on the connection. If it repeats, reconnect the account |
| *Could not start the Airbnb connection.* | The handshake failed before Airbnb was reached | Try again; if it persists, [contact support](/help/support/) |
| *Could not start the import.* | The listings were read but the import job did not begin | Try again. Nothing was half-created |
| *Could not connect the Booking.com property.* | The Hotel ID was rejected, or the extranet step is incomplete | Re-check the Hotel ID and that our provider is enabled in your extranet — [Connect Booking.com](/channels/booking-com/) |

## Importing and reading rates

| Message | What it means | What to do |
| --- | --- | --- |
| *Set up — not live yet* | The normal, correct end of an import. Mapped and read; **the channel still runs its calendar** | Check prices and details, then [Go live](/channels/going-live/) |
| *We could not read this listing's price safely, so the room keeps its own. Nothing was guessed.* | The channel's pricing was ambiguous. The importer refuses rather than invent a number | Set a price on the room before going live |
| *Airbnb has not shared this listing's pricing yet.* | Airbnb has not handed the price over. Not an error | Nothing — it arrives on the next sync |
| *We removed the channel link for now… It re-links automatically once the price is readable.* | A zero or unreadable price would have been published to a live listing, so the link was held back | Give the room a real price. The link restores itself |
| *Worth checking on Airbnb — these looked unusual and we did not want to guess:* | Values that imported but looked odd | Open them on Airbnb and confirm. They still apply there |
| *Kept on Airbnb* | Settings we have no exact equivalent for | Nothing. They still work on Airbnb |

## Going live

| Message | What it means | What to do |
| --- | --- | --- |
| *Airbnb has not finished linking this listing yet. Try again in a minute.* | The channel's own setup is still in flight | Wait a minute, press **Go live** again |
| *The listing's currency has not synced yet. Try again shortly.* | Currency arrives separately and has not landed | Wait a few minutes, retry |
| *This room is missing its channel setup. Re-import the listing.* | The mapping is incomplete on our side | Remove that listing and import it again |
| *Airbnb did not confirm it went live.* | We asked; Airbnb did not answer yes | Retry once. If it repeats, [contact support](/help/support/) |
| *Some listings are not live yet. They stay set up and you can try again.* | A partial result. The rest **did** go live | Retry the ones that failed; nothing was lost |
| *Rooms are mapped, but the channel is not active yet.* | Booking.com has not activated the connection | Bookings, reviews and messages sync once activation succeeds |

## Booking.com rooms and rate plans

| Message | What it means | What to do |
| --- | --- | --- |
| *…stayed linked but not mapped — its rate plan doesn't price a guest count Booking.com accepts* | The rate plan's included-guest number does not match a occupancy Booking.com will take. We will not guess on a live listing | Open the room's rate plan, set its guest count to match, map it again |
| *…prices in one currency but this hotel bills in another. Mapping still works, but a price push will be refused until they match.* | A currency mismatch between rate plan and hotel | Fix the rate plan's currency before expecting prices to go out |
| *Saved here, but Booking.com didn't accept the rate mapping.* | Our side is correct; theirs did not take it | Save again. If it keeps failing, reconnect the property |
| *Saved here, but not sent to the channel yet — confirm this room's capacity first.* | A safety hold before writing to a live listing | Confirm the capacity, and check the unit count is right |
| *Your calendar is written to the live listing immediately…* | Not an error — a warning that confirming closes upcoming nights at the unit count shown | Check the unit count before confirming. One apartment is one unit |
| *Could not change the linked property.* | The re-link did not complete | Retry. Already-imported data stays where it is either way |

## Connection status words

These are states, not errors. The same vocabulary is used on every channel.

| Status | Meaning |
| --- | --- |
| **Not connected** | No channel account linked yet |
| **Not linked** | We can see the listing; it points at no room |
| **Linked — not mapped yet** | Same, said on the Booking.com screens |
| **Linked — rates not mapped** | Mapped for availability, but its rate plan is not matched |
| **Ready — not live** | Mapped and priced; waiting for you to press **Go live** |
| **Mapped — awaiting activation** | It points at a room; the channel is not handing over yet |
| **Live** | Rates and availability out, bookings and messages in |
| **Error** | Something failed — the row says which: *The rate import was blocked*, *Activation failed* |
| **Not synced yet** | Connected, but no sync has completed |

Nothing moves from *Ready* to *Live* on its own. See [Going live](/channels/going-live/).

## Billing

| Message | What it means | What to do |
| --- | --- | --- |
| *Your last payment didn't go through.* | Stripe could not charge the card | Update the card. Stripe retries on its own too |
| *Your subscription isn't active, so this workspace is read-only.* | Nothing is deleted; you just cannot make changes | Sort billing and everything resumes — [If a payment fails](/setup/billing/#if-a-payment-fails) |
| *Your card was declined, so nothing was charged and no listing was added.* | The extra-listing purchase failed cleanly | Update the card, then add the listing again |
| *This would add a listing beyond what your plan covers.* | You are at your paid listing count | Use **Add room**, which shows the price, or free a listing up — [Adding a listing mid-month](/setup/billing/#adding-a-listing-mid-month) |
| *Start your free trial first: add your card on the Billing page.* | An import would create listings and there is no card yet | Add a card. Nothing is charged that day |
| *The price changed while this was open* | The quote went stale while the dialog sat open | Confirm again to continue |
| *Only the workspace owner can change the plan.* | Co-hosts can read billing, not change it | Ask the owner |
| *Your plan is on agreed pricing — talk to us and we'll move it for you.* | You are on negotiated terms, not a published plan | [Contact support](/help/support/) |
| *That code isn't recognised.* / *…has expired.* / *…has been fully used.* | Promotion code problems, exactly as worded | Continue without it, or ask where you got it from |
| *Your plan already carries a discount* | Codes do not stack with an existing discount | Nothing — your price already includes it |

## Access and permissions

| Message | What it means | What to do |
| --- | --- | --- |
| A screen says you do not have access | Your role does not hold the capability that screen needs | Check you are in the right workspace (account menu), then ask an owner — [Team and roles](/setup/team/) |
| *Workspace setup is read-only for your role.* | Co-hosts and cleaners can see workspace settings, not change them | The owner changes them — [Invited as a co-host or manager](/start/invited-manager/) |
| *Workspace setup is managed by the workspace owner.* | Shown to cleaners on the settings page | Expected. Your own account settings still work |
| *Unsupported team role.* | An invitation named a role that cannot be invited | Only **host admin**, **co-host** and **cleaner** can be invited today |

## Things that look like errors and are not

| On screen | Why it is fine |
| --- | --- |
| An empty screen right after connecting | History imports run in the background and take a few minutes on a large account. Wait five minutes and refresh |
| No cleaning task for tomorrow | Turnovers are created the night before a checkout, for that date only |
| No notifications for a year of bookings | The first sync is quiet on purpose — imported history is not new bookings |
| Availability lower than you set | Availability is capped at the room's **unit count**. One apartment is one unit |
| Revenue lower than the extranet's | Ours is **net payout**; extranets usually show gross. Both are stored — [Money definitions](/daily/bookings/#money-definitions) |
