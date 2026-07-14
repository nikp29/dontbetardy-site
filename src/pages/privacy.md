---
layout: ../layouts/ProseLayout.astro
title: "Privacy Policy — Tardy"
description: "How Tardy handles your calendar data: read-only, on-device, never transmitted."
path: "/privacy"
---

# Privacy Policy for Tardy

**Effective date:** July 14, 2026

Tardy is a free, open-source macOS menu-bar app that shows a full-screen reminder before each of your calendar meetings and gives you a one-click button to join the call. This policy explains what data Tardy accesses, how it is handled, and the choices you have. It is written in plain language, but it is also the binding privacy notice for the app.

Tardy is not affiliated with, endorsed by, or sponsored by Google, Apple, Zoom, Microsoft, Cisco, or any other company whose products it interoperates with.

## The short version

- Tardy runs entirely on your Mac. There is **no Tardy backend** — no servers, databases, or cloud infrastructure operated by us.
- Tardy reads your calendar (from Google Calendar and/or macOS Calendar) only to show you reminders and join buttons for your upcoming meetings.
- **Google Calendar access is strictly opt-in.** Tardy does not contact Google, request tokens, or read any Google data unless and until you explicitly click "Connect Google Account" in the app's Settings.
- **No calendar data, OAuth token, or personal information is ever sent to us or to any third party.** There are no analytics, no tracking, no telemetry, and no ads.
- You can revoke access at any time inside the app and/or at [myaccount.google.com/permissions](https://myaccount.google.com/permissions).

## Who we are

"Tardy," "we," "our," and "us" refer to the developer(s) of the Tardy macOS app, distributed via [tardy.nikhilpatel.xyz](https://tardy.nikhilpatel.xyz) and as open source at [github.com/nikp29/tardy](https://github.com/nikp29/tardy). Because Tardy is open source, you can read the full source code yourself to verify how data is handled.

For any privacy questions, contact: **nikp29@gmail.com**.

## What data Tardy accesses

Tardy needs to know about your upcoming meetings in order to remind you about them and to find the join link or dial-in number. To do that, it can read your calendar from one or both of the following sources, at your choice.

### 1. Google Calendar (via Google OAuth) — opt-in

Tardy does not access, request tokens for, or otherwise communicate with your Google account unless and until you explicitly click **Connect Google Account** in the app's Settings. Fresh installs never contact Google.

If you choose to connect a Google account, Tardy uses Google OAuth and requests **only** the following scope:

- `https://www.googleapis.com/auth/calendar.readonly`

This is a **read-only** scope. Tardy can read your calendars and events; it cannot create, modify, or delete events, and it does not request any other Google scope.

Under this scope, Tardy calls two Google Calendar API endpoints:

- **`calendarList.list`** — to enumerate the list of calendars in your account (name, ID, color) and show a per-calendar picker in Settings, so you can opt individual calendars in or out (for example, to silence a shared work calendar or a subscribed holidays calendar).
- **`events.list`** — to read upcoming events from each calendar you have opted in.

From each event, Tardy reads only the fields needed to show a meeting reminder and a join button: event titles, start and end times, locations, descriptions and conferencing data (such as Zoom, Google Meet, Microsoft Teams, or Webex links and detected dial-in numbers), and attendee response status. Tardy uses this information solely to schedule and display reminders on your Mac.

### 2. macOS Calendar (via Apple EventKit)

As an alternative or in addition to Google Calendar, you can let Tardy read your local macOS Calendar through Apple's EventKit framework. macOS will prompt you for permission the first time Tardy requests it; you can change or revoke this permission at any time in **System Settings → Privacy & Security → Calendars**. Tardy uses your macOS calendar data for the same purpose as Google Calendar data: to show reminders and join buttons for your upcoming meetings.

### What Tardy does not access

Tardy does not access your email, contacts, files, location, microphone, camera, browsing history, or any Google service other than Google Calendar via the read-only scope above.

## How Tardy handles your data

Everything Tardy does with your calendar happens on your Mac. Specifically:

**On-device only.** Calendar data is fetched directly from the Google Calendar API (or read from macOS via EventKit) **to your device** and is processed only in memory and local application state in order to schedule and display reminders.

**No transmission to us or to third parties.** Tardy does not send your calendar data, your OAuth token, or any personal information to any server we operate, and does not transmit it to any third party. There is no analytics SDK, no crash-reporting telemetry, no advertising network, and no profiling. Network requests from Tardy are limited to Google's API (for Google Calendar users) and to Apple's standard operating-system services.

**OAuth tokens stay on your device.** If you connect a Google account, the OAuth access and refresh tokens issued by Google are stored securely in the **macOS Keychain** on your Mac. They are used only to fetch your calendar from Google's API on your behalf. They are never sent to us or to any third party.

**Retention.** Calendar data is transient. It is held in memory only while needed to schedule and show reminders, and Tardy does not persist your calendar events to disk beyond what is required for normal in-memory operation and short-lived caches used by the app session. Quitting Tardy or disconnecting your Google account clears this data. Revoking access via your Google Account also invalidates the stored tokens.

**No sale or sharing.** We do not sell, rent, license, or share your personal information or Google user data with anyone, for any purpose.

## Google API Services User Data Policy

Tardy's use of information received from Google APIs adheres to the [Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy), including the **Limited Use** requirements.

> The use of information received from Google APIs — including raw and derived Google user data — will adhere to the [Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy), including the Limited Use requirements.

In particular:

- Tardy uses Google user data **only** to provide the user-facing feature described in this policy — displaying full-screen reminders for the user's own calendar events on the user's own Mac, with a one-click join button.
- Tardy **does not** use Google user data to serve advertisements of any kind, including retargeted or personalized advertising.
- Tardy **does not** sell Google user data.
- Tardy **does not** transfer Google user data to others, except as necessary to provide or improve the user-facing feature, to comply with applicable law, or as part of a merger, acquisition, or sale of assets with notice to users. Because Tardy operates entirely on your device with no backend, in practice no transfer of Google user data takes place.
- Tardy **does not** allow humans to read Google user data, except (a) with your affirmative agreement for specific items, (b) as necessary for security purposes (such as investigating abuse), (c) to comply with applicable law, or (d) where the data has been aggregated and anonymized so it cannot be used to identify any individual. In practice, because no Google user data ever leaves your Mac, no one at Tardy can read it.

## Your choices and controls

You are in control of Tardy's access to your calendar at all times.

**Inside Tardy.** You can disconnect your Google account from within the app at any time. Doing so removes the OAuth tokens from the macOS Keychain and clears the calendar data Tardy is holding in memory. You can also revoke Tardy's permission to read your macOS Calendar in **System Settings → Privacy & Security → Calendars**.

**At your Google Account.** You can revoke Tardy's access to your Google Calendar at any time by visiting [myaccount.google.com/permissions](https://myaccount.google.com/permissions) and removing Tardy from your list of connected apps. After you revoke access, any tokens previously issued to Tardy will no longer work.

**Uninstalling.** Removing the Tardy app from your Mac removes the application and its local data.

## Children's privacy

Tardy is a general-audience productivity tool and is not directed to children under 13. We do not knowingly collect personal information from children.

## Security

Because Tardy operates entirely on your Mac and does not transmit your data to us, the security of your calendar data depends primarily on the security of your device and your Google account. Tardy stores Google OAuth tokens in the macOS Keychain, which is access-controlled by macOS. We recommend keeping macOS up to date and protecting your device with a strong password and full-disk encryption (FileVault). No method of electronic storage is 100% secure, and we cannot guarantee absolute security.

## International users

Tardy processes calendar data locally on your device wherever you are located. Because we do not receive or store your data on our servers, your data is not transferred to or processed by us in any specific country.

## Changes to this policy

If we change this policy, we will update the "Effective date" at the top and post the revised policy at [tardy.nikhilpatel.xyz/privacy](https://tardy.nikhilpatel.xyz/privacy). Material changes that affect how Google user data is handled will be highlighted in the app or on the website. Your continued use of Tardy after a change takes effect means you accept the revised policy.

## Contact

For privacy questions, requests, or concerns about this policy or Tardy's handling of your data, contact:

**Email:** nikp29@gmail.com
**Website:** [tardy.nikhilpatel.xyz](https://tardy.nikhilpatel.xyz)
**Source code:** [github.com/nikp29/tardy](https://github.com/nikp29/tardy)
