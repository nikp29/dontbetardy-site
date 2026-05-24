# nottardy.app

Marketing + privacy site for **[Tardy](https://github.com/nikp29/tardy)** — a macOS menu
bar app that takes over your screen before every meeting so you're never late.

This site is **Gate 2** of Tardy's Google Calendar OAuth rollout: the public homepage +
privacy policy on a verified domain that Google requires before the sensitive
`calendar.readonly` scope can ship to Production. Static only, no backend.

## Stack

- [Astro](https://astro.build) (static output) + [Tailwind CSS v4](https://tailwindcss.com)
- Self-hosted fonts (DM Mono + Instrument Sans), pulled from the app
- Near-zero JS: a decorative hero countdown + scroll/copy helpers; everything else is HTML/CSS
- Deploys to **Vercel** (zero config)

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # → dist/
npm run preview  # serve the build
npm run check    # astro type/diagnostics check
```

## Structure

```
public/            fonts, favicon/OG, demo.mp4 / demo.webm / demo-poster.jpg, robots.txt
src/
  config.ts        links + GOOGLE_CALENDAR_AVAILABLE flag (see below)
  styles/global.css design tokens, fonts, atmosphere, shared utilities
  layouts/         BaseLayout (head/meta/nav/footer/bg), ProseLayout (privacy)
  components/       Nav, Hero, DemoVideo, Connections, Download, Footer
  pages/           index.astro, privacy.md
```

## Content flags

- **`GOOGLE_CALENDAR_AVAILABLE`** in `src/config.ts` — flip to `true` once Google OAuth
  verification lands. Switches the Google Calendar card from "Coming soon" to "Available
  now". One-line change, no layout edits.

## Demo video

`public/demo.{mp4,webm}` + `demo-poster.jpg` were transcoded from a screen recording with:

```bash
ffmpeg -i src.mov -an -vf "scale=1600:-2" -c:v libx264 -crf 24 -preset slow -movflags +faststart public/demo.mp4
ffmpeg -i src.mov -an -vf "scale=1600:-2" -c:v libvpx-vp9 -b:v 0 -crf 34 -row-mt 1 public/demo.webm
ffmpeg -i src.mov -vf "scale=1600:-2" -frames:v 1 -q:v 3 public/demo-poster.jpg
```

The original `.mov` is intentionally not committed.

## Privacy policy

`src/pages/privacy.md` ships with an accurate **draft** of the policy. Replace its body
with the final version drafted in Claude Cowork (legal plugin) before submitting for Google
verification. Editing copy never touches component code.

## Launch / verification checklist (out of repo)

1. Register **nottardy.app** via Vercel; connect this repo for git deploys.
2. Verify the domain in **Google Search Console** (DNS TXT via Vercel).
3. Rasterize `public/og.svg` → a richer `public/og.png` (1200×630) — optional polish.
4. OAuth consent screen: homepage `https://nottardy.app`, privacy
   `https://nottardy.app/privacy`, upload logo, scope justification, demo video.
5. Replace the privacy draft with the reviewed Cowork policy.
6. Flip `GOOGLE_CALENDAR_AVAILABLE` once verified.
