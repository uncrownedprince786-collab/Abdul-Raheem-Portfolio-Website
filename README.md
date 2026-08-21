# Abdul Raheem — Portfolio

Single-page portfolio for **Abdul Raheem — Technical Project Manager | Agile Delivery | Scrum Master**.

Built with **Next.js (App Router) + Tailwind CSS v4 + TypeScript**. Fully static, fast, responsive, and SEO-ready.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Production build

```bash
npm run build
npm start
```

## Add your professional photo

1. Rename your photo to `profile.jpg`
2. Drop it into `public/images/` (a note in that folder explains the ideal crop)
3. Rebuild or redeploy — the hero section picks it up automatically, no code changes needed

Until then, an elegant "AR" monogram placeholder is shown.

## Deploy to Vercel

**Option A — from GitHub (recommended):**

1. Push this repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository
3. Vercel auto-detects Next.js — just click **Deploy**

**Option B — Vercel CLI:**

```bash
npm i -g vercel   # if not installed
vercel login
vercel link --project abdulraheemitmanager
vercel --prod
```

Live site: https://abdulraheem-pm.vercel.app

## Project structure

```
app/
  layout.tsx    → metadata, SEO tags, fonts, nav, JSON-LD
  page.tsx      → all page sections (hero, about, experience, projects, skills, education, contact)
  globals.css   → theme colors, reveal animations, timeline & hover effects
components/
  Nav.tsx           → sticky nav, elevates on scroll, mobile menu
  ScrollEffects.tsx → IntersectionObserver fade/slide-in reveals
public/images/    → your photo goes here (profile.jpg)
```

## Customizing content

All resume content lives in plain data arrays at the top of `app/page.tsx`
(`EXPERIENCE`, `PROJECTS`, `SKILL_GROUPS`, `CERTIFICATIONS`) — edit text there and the layout takes care of the rest.
