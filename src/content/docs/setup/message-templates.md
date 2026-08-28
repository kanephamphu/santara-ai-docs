---
title: Message templates
description: The replies you send often, written once, with the guest's own details filled in.
sidebar:
  order: 4
---

**Settings → Message Templates**. A template is a reply you send often, with **variables** that
fill themselves in from the stay — so "your door code is 4417" is typed once, not four hundred
times.

Templates are **scoped to the workspace**, so an answer your team agreed on is the answer everyone
sends.

## Variables

Write a placeholder in braces and it resolves when the template is used:

```
Hi {guest_name}, we're excited to welcome you to {property_name}.
Check-in starts at {check_in_time}. Your door code is {door_code}.
```

Available values come from the guest, their reservation, and the property behind it — name,
property, check-in and check-out times, door code, wifi, amount due.

**A variable is only as good as the property behind it.** `{door_code}` on a property with no door
code recorded produces nothing useful, which is one more reason to fill in
[stay information](/setup/properties/#stay-information-wifi-door-codes-access).

## Previewing against a real stay

Pick a real reservation, property or guest as the **context** while you write, and the preview
fills with live workspace values instead of placeholders. It is the difference between a template
that looks right and one you have actually seen produce a sentence.

## Where templates are used

- **In [Messages](/daily/messages/)** — insert one into any thread, edited before you send.
- **In AI drafts** — the assistant's suggested replies draw on your templates, so the phrasing
  stays yours rather than reverting to a generic voice.

Nothing is ever sent automatically. A template fills the box; you press send.

## The ones you start with

New workspaces get five, covering what almost everyone writes anyway:

| Template | When |
| --- | --- |
| **Welcome / arrival** | Before check-in: times, door code, how to get in |
| **Checkout reminder** | The day before: time, keys, anything to leave |
| **Late checkout offer** | When the calendar allows it — see [Upsells](/money/upsells/) |
| **Review request** | After a good stay |
| **Apology** | When something has gone wrong and you need to buy time honestly |

Edit them freely — a change applies to that saved template only, and the defaults are a starting
point rather than something the product keeps in step.

## Writing them per language

Templates are text, so a workspace serving guests in three languages wants three sets. Name them
so the language is obvious in the list; there is no automatic translation, and a machine-translated
apology is worse than a short one in English.
