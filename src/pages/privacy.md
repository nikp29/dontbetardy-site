---
layout: ../layouts/ProseLayout.astro
title: "Privacy Policy — nottardy"
description: "How Tardy handles your calendar data: read-only, on-device, never transmitted."
path: "/privacy"
---

# Privacy Policy

<p class="lead">Last updated: 2026-05-24</p>

<div class="draft-note">⚠️ Draft starter — accurate to how Tardy behaves, but replace this body with the reviewed policy drafted in Claude Cowork (legal plugin) before submitting for Google verification.</div>

Tardy is a macOS menu bar app that reminds you before your calendar meetings start. This
policy explains what data Tardy accesses and how it is handled. **Tardy has no servers** —
it runs entirely on your Mac.

## What data Tardy accesses

- **Google Calendar data** (only if you connect a Google account): using the
  `https://www.googleapis.com/auth/calendar.readonly` scope. Tardy reads your calendar
  list and upcoming event details (title, time, conference/join links, dial-in numbers,
  attendee response). It is **strictly read-only** — Tardy never creates, edits, or
  deletes events.
- **macOS Calendar data** (optional): read locally through Apple's EventKit framework,
  with your system permission.

## How your data is handled

- Calendar data is fetched directly to your device and used **only in memory** to schedule
  and display reminders.
- **Your calendar data, OAuth tokens, and personal information are never transmitted to us
  or any third party.** There are no analytics, no tracking, no advertising.
- OAuth tokens are stored securely in the **macOS Keychain** on your device and never leave
  it.
- Calendar data is transient — it is not persisted beyond what's needed to show reminders.
  Disconnecting your account or quitting Tardy clears it.

## Revoking access

You can revoke Tardy's access to your Google account at any time at
[myaccount.google.com/permissions](https://myaccount.google.com/permissions), and/or by
disconnecting inside the app.

## Google API Services User Data Policy

Tardy's use of information received from Google APIs adheres to the
[Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy),
including the **Limited Use** requirements. Tardy does not use Google user data for
advertising, does not sell it, and does not transfer it except as needed to provide its
on-device reminder feature.

## Not affiliated with Google

Tardy is an independent project and is not affiliated with, endorsed by, or sponsored by
Google.

## Contact

Questions about this policy? Email [nikp29@gmail.com](mailto:nikp29@gmail.com).
