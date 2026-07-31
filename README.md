# Fieldwork — Design Agency Homepage

A homepage for a fictional design & development studio, built for the
Next.js Developer Internship task-based assignment.

**Live demo:** _add your Vercel URL here after deploying_
**Repo:** _add your GitHub URL here_

## Tech stack

- **Next.js 14** (App Router)
- **React 18**, functional components only
- **TypeScript**
- **Tailwind CSS** for styling
- **next/font** for optimized, self-hosted Google Fonts (Fraunces, Inter, IBM Plex Mono)
- **next/image** for optimized image delivery
- **lucide-react** for the four service icons — the only external UI dependency
- A hand-built `Reveal` component (IntersectionObserver-based scroll animation, no library) for section fade-ins

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev

# 3. Open http://localhost:3000
```

To build for production:

```bash
npm run build
npm run start
```

## Project structure

```
app/
  layout.tsx      → fonts, SEO metadata, dark-mode init script
  page.tsx         → assembles all sections
  globals.css       → design tokens, base styles, reduced-motion handling
components/
  Header.tsx        → nav + dark mode toggle (client component)
  Hero.tsx           → hero section + capability marquee
  Services.tsx        → services grid
  Portfolio.tsx        → project grid with hover reveal
  Contact.tsx           → form with client-side validation + success state
  Footer.tsx
lib/
  content.ts             → services & portfolio data, separated from UI
public/images/            → project thumbnails (generated SVGs, swap for real assets)
```

## Design decisions

- **Concept:** the studio's identity is built around print-production
  craft — registration marks, contact-sheet-style portfolio hover states,
  monospace numbering — rather than a generic gradient-hero template.
- **Palette:** warm paper (`#EEEBE2`) / ink (`#17181C`) / clay-orange accent
  (`#D97757`), with a full dark-mode variant using the same tokens.
- **Motion:** sections fade up into view once as you scroll (`Reveal.tsx`),
  and the capability marquee in the hero loops continuously — both respect
  `prefers-reduced-motion`.
- **Type:** Fraunces (display/headlines), Inter (body), IBM Plex Mono
  (labels, numbers, captions) — three roles, not one font doing everything.
- **Dark mode:** toggled via a button in the header, persisted to
  `localStorage`, and initialized with an inline script in `<head>` so
  there's no flash of the wrong theme on load.

## Assumptions & additional features

- Portfolio images are procedurally generated SVG placeholders (no real
  client assets exist for a fictional agency) — swap the files in
  `public/images/` and update `lib/content.ts` to use real project photos.
- The contact form validates client-side (required fields, email format)
  and shows a success state, but does **not** call a real backend —
  wire `handleSubmit` in `components/Contact.tsx` to an API route, or a
  form service (Formspree, Resend, etc.) before using this in production.
- SEO metadata (title, description, keywords, Open Graph) is set in
  `app/layout.tsx` — update with real copy and an OG image before launch.
- Respects `prefers-reduced-motion` for the marquee and transitions.
- Responsive from ~360px mobile width up through desktop; tested at
  mobile, tablet, and desktop breakpoints.

## Deployment (Vercel)

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new), import the repo.
3. Framework preset: Next.js (auto-detected). No environment variables
   required.
4. Deploy — Vercel builds `npm run build` automatically.
