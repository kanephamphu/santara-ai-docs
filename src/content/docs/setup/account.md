---
title: Your account and security
description: The settings that belong to you rather than to a workspace — name, language, timezone, password — and what to do when you cannot get in.
sidebar:
  order: 8
---

Almost everything in Santara AI belongs to a **workspace**. Two things do not: your account and your
security. They follow you between every workspace you belong to, and nobody else can change them —
not even the owner of the workspace you work in.

## Where it lives

Open the **account menu at the foot of the sidebar**, then **Personal account**. It is deliberately
not one of the Settings tabs: the tabs along the top of Settings are the *workspace's* setup, and
your password is not the workspace's business.

Both blocks sit on the same page:

| Block | What it holds |
| --- | --- |
| **Personal Settings** | Your name, email, profile photo, language, timezone |
| **Security Settings** | Your password |

## Language and timezone

- **Language** changes the interface **for you**. English, Bahasa Indonesia and Tiếng Việt.
- **Timezone** is your own display preference.

Neither of these changes anything for anyone else — and neither of them is what drives the daily
brief. The brief follows the **workspace** language and the **workspace** timezone, so that one
team gets one brief in one language at one hour. If your dates look wrong across the whole product,
it is the workspace timezone you want, not this one. See
[Workspace settings](/setup/workspace/#timezone).

A Vietnamese-speaking manager working in a workspace whose brief goes out in Indonesian is a
supported, ordinary arrangement.

## Your profile photo

PNG, JPG, WEBP or GIF, up to 5 MB. It appears in the team list, the account menu and against work
you have done. Worth setting if more than two people use the workspace — a cleaning board where
every avatar is a grey circle is harder to read than it sounds.

Do not confuse it with the **workspace avatar**, which is the logo shown in the sidebar and the
workspace switcher. That one is the owner's, on the Workspace tab.

## Changing your password

**Security Settings** → current password, new password, confirm.

- **At least 12 characters.** There are no character-class rules; length is what matters.
- **Your current session stays signed in.** Everything else does not — every other session on
  every other device is revoked the moment the password changes. That is the point: if somebody
  else has your session, changing your password ends it.

You do not need your old password to be "expired" and there is no forced rotation. Change it when
you have a reason to.

:::note[Two-factor authentication]
Not available yet. Sign-in today is email and password, with email verification at registration and
the lockout below. If 2FA is a requirement for you, say so through
[support](/help/support/) — that is how it gets prioritised.
:::

## If you forgot your password

Use **Forgot your password?** on the sign-in screen.

1. Enter your email. If an account exists you get a **six-digit code** — the screen says the same
   thing either way, so it cannot be used to find out who has an account.
2. The code **expires in 15 minutes**, and five wrong attempts burn it. Ask for a new one.
3. You can request a new code **once a minute**.
4. Setting the new password **signs out every device, including the one you are on**, and clears
   any lockout. Sign in again with the new password.

## If you are locked out

After **ten failed sign-in attempts** the account locks for **fifteen minutes**, and the screen
says *"Too many failed attempts. Please try again later."*

Three things worth knowing:

- **Waiting works.** The lock lifts on its own; nobody has to unlock it for you.
- **Resetting your password clears it immediately** — that is the fast path if you are locked out
  because you genuinely do not remember the password.
- **The workspace owner cannot unlock you**, because this is your account and not their workspace.
  Support can help if something is genuinely stuck.

:::caution[This message may appear in English]
The lockout message is currently shown in English even when the rest of the sign-in page is in
Indonesian or Vietnamese. It means what it says above.
:::

## Staying signed in

A session lasts **30 days** and renews as you use the product, so day-to-day you are not asked to
sign in again. You are signed out when:

- you sign out yourself,
- you change your password (every device except the one you changed it on),
- you reset your password (every device, including that one),
- an owner removes you from the workspace — which ends your access to *that workspace*
  immediately, everywhere, but does not touch your account.

If you are being signed out constantly, it is almost always the browser blocking cookies for the
site, or two accounts signed in across two tabs. See
[When something looks wrong](/help/troubleshooting/#my-session-keeps-expiring).

## Verifying your email

New accounts confirm their email with a six-digit code before the first sign-in — the same
15-minute, five-attempt rules as the reset code. Until it is confirmed, signing in returns
*"Please verify your email before logging in."*

## One login, several workspaces

You have **one account** and it can belong to any number of workspaces, with a different role in
each. Someone can be the owner of their own workspace and a cleaner in somebody else's, on the same
login. Switch between them from the account menu.

Never share a login instead of inviting somebody properly. Every clean marked done, message sent
and ticket closed is attributed to an account, and that attribution is what settles arguments
later. See [Team and roles](/setup/team/).
