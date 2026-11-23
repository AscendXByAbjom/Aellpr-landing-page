# Aellpr — landing page

Conversion-focused landing page for **Aellpr** (Send · Go · Business AI), plus the
Go & Send **Terms & Conditions** and **Privacy Policy** pages. Motion is refined and subtle,
built for performance on every device.

**Stack:** Next.js 16 (App Router, TypeScript) · Tailwind CSS v4 · no animation libraries

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

Deploy on Vercel with the default settings (no environment variables are needed yet).

## Where to change things

| What | File |
| --- | --- |
| All landing copy | `content/site.ts` |
| **CTA destinations** (currently open the "coming soon" dialog) | `ctas` in `content/site.ts` — set `{ href: "https://…" }` to link out |
| Coming-soon dialog text / notify form toggle | `comingSoon` in `content/site.ts` |
| Waitlist submissions (stub — stores nothing) | `app/api/waitlist/route.ts` |
| Legal placeholders (contact email, effective date) | `content/legal/meta.ts` |
| Legal text | `content/legal/terms.ts`, `content/legal/privacy.ts` — generated from `reference/Aellpr_Go_and_Send_Terms_and_Conditions_Updated.docx` and `reference/changes/AELLPR_Go_and_Send_Privacy_Policy_Updated.docx`, then the old carrier wording replaced with "commuter" and the contact email turned into the `{{contactEmail}}` token (re-apply both if you regenerate) |
| Colours, type scale, utilities | `app/globals.css` |
| Fonts | `lib/fonts.ts` |
| Logos | `public/brand/` (trimmed from `reference/logos/`); main logo via `components/brand/Wordmark.tsx`; Send/Go/AI logos in the product pills |
| Production domain (SEO, sitemap) | `site.url` in `content/site.ts` |

## Page structure

`app/page.tsx` composes the chapters in `components/sections/`:
Hero → Everyday (statement + route marquee) → Three ways → Send & Go (steps beside a phone
and route map) → Business AI → How it works (tabs) → Trust → FAQ → Final CTA → Footer.

Most sections are server components. The only client JavaScript is the header, the CTA
buttons and coming-soon dialog, the Send/Go step switcher, the How-it-works tabs, the
legal contents list, and one shared IntersectionObserver (`components/motion/RevealObserver.tsx`).

## Motion (all in `app/globals.css`)

Only `opacity` and `transform` are animated, so motion stays on the GPU compositor.

| Effect | How to use |
| --- | --- |
| Fade-up when scrolled into view | `data-reveal` (or `data-reveal="fade"`); stagger with `style={delay(120)}` |
| Headline lines fade up in turn | `<Title lines={[…]} />` (`components/motion/Title.tsx`) |
| Hero entrance at first paint | `data-enter` — CSS only, doesn't wait for JavaScript |
| SVG line draws in | `data-draw` + `pathLength={1}` inside a `data-reveal` element |
| Gentle parallax | `data-parallax` + `style={parallax(5)}` — CSS scroll-driven animation; browsers without support just show it still |

Anyone with `prefers-reduced-motion` gets a fully static page. In-page links use native
smooth scrolling (no scroll hijacking). The FAQ is a native `<details>` accordion and the
dialog is a native `<dialog>`.

### Section size hints — update if you change a section's length

Below-the-fold sections use `content-visibility: auto`, so the browser skips laying them out
until they're near the screen (this roughly halved main-thread work on mobile). Each one
has a measured height hint (`--cis`) in `app/globals.css`. If you add or remove a lot of
content, update that section's hint (its rendered height minus its own vertical padding) so
nav links still land exactly on target.

The screens shown in the phone mockups are illustrative design previews, not live data.
