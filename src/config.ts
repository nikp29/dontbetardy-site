// Central site config — single source of truth for links + feature flags.

export const SITE = {
  name: "nottardy",
  url: "https://nottardy.app",
  tagline: "Don't be tardy.",
  description:
    "Tardy is a macOS menu bar app that takes over your screen before every meeting, so you never miss the start. Reads your calendar, surfaces the join link, and counts you down.",
  contactEmail: "nikp29@gmail.com",

  github: "https://github.com/nikp29/tardy",
  // Latest .dmg — GitHub Releases "latest" redirect (asset name pattern may need adjusting at release time).
  dmgUrl: "https://github.com/nikp29/tardy/releases/latest",
  brewTap: "brew tap nikp29/tardy",
  brewCask: "brew install --cask tardy",

  minMacOS: "macOS 14 (Sonoma)",
} as const;

// Flip to `true` once Google OAuth verification lands — turns the Google Calendar
// card from "Coming soon" to "Available now". One-line change, no layout edits.
export const GOOGLE_CALENDAR_AVAILABLE = false;
