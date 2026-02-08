# Waten Real Estate — Concept Redesign

A responsive concept redesign of [Waten Real Estate](https://www.waten.com/) (Saudi Arabia) built with React and Tailwind CSS. Keeps Waten's branding and copy while improving structure, clarity, and conversion.

---

## How to use this to get the role

### 1. Deploy a live link

**Vercel (recommended):** Import this repo at [vercel.com](https://vercel.com) → Deploy. Use the URL in PROPOSAL.md and your email.

### 2. Fill in PROPOSAL.md and CASE_STUDY.md

Add your **live preview URL**, **name**, **email**, and **phone/LinkedIn** at the bottom of both files. Send PROPOSAL.md or CASE_STUDY.md as a PDF or paste into your email.

### 3. Send a short email

**Subject:** Concept redesign for Waten — [Your name]

**Body:** 2–3 sentences: concept redesign that keeps their brand and improves structure (Arabic/RTL, clear CTAs, trust elements, filters). Live link: [URL]. Happy to walk them through or hand off the code. Attach PROPOSAL.md or CASE_STUDY.md as a PDF if helpful.

### 4. Optional: Record a Loom walkthrough

A 3–5 minute screen recording showing the live site and key changes (Hero, Why Waten, filters, Arabic toggle, before/after section) can help busy stakeholders review without a call. Add the Loom link to your email.

---

## Handoff notes (for Waten)

### Project structure

```
src/
├── components/     # React components (Header, Hero, About, Projects, etc.)
├── context/        # LanguageContext (EN/AR toggle)
├── App.jsx         # Main app layout
├── main.jsx        # Entry point
└── index.css       # Global styles
```

### How to edit content

- **Copy:** Edit the JSX strings directly in each component (e.g. `src/components/Hero.jsx`, `src/components/About.jsx`)
- **Translations:** Edit `src/context/LanguageContext.jsx` — `translations.en` and `translations.ar`
- **Projects:** Edit `projects` array in `src/components/FeaturedProjects.jsx`
- **Team:** Edit `team` array in `src/components/Team.jsx`
- **Trust metrics / testimonials:** Edit `src/components/TrustElements.jsx`
- **Colours:** Edit `tailwind.config.js` — `theme.extend.colors.waten`

### Contact form — receive submissions

1. Sign up at [formspree.io](https://formspree.io) (free tier)
2. Create a new form and copy the form ID (e.g. `xyzabc`)
3. In Vercel → Project → Settings → Environment Variables:
   - Name: `VITE_FORMSPREE_ID`
   - Value: your form ID
4. Redeploy. Submissions will go to your Formspree email.

### Analytics (optional)

Add Google Tag Manager or GA4 snippet to `index.html` (there's a placeholder comment). Or use Vercel Analytics if enabled on your project.

### Hide concept banner

In `src/components/ConceptBanner.jsx`, set `SHOW_BANNER = false`.

---

## Sections in this build

- **Hero** — Urban Spaces, Elevated; primary CTAs
- **Why Waten** — Benefit-driven section (Transparency, Quality, Innovation, Kingdom-Wide)
- **About** — Company copy + 3 pillars
- **Projects** — Murabbaa Residence, Plaza Dan, Princess Sara; filter UI (city/type/status) + search bar
- **Trust** — Metrics (15+ years, 12+ projects), testimonials, partner logos placeholder
- **Team** — Placeholder cards
- **Contact** — Form (Formspree-ready), address, email
- **Before/After** — Redesign overview
- **FAQ** — Expandable Q&A
- **Footer** — CTA strip, quick links, social icons

### Features

- **Arabic / RTL** — Language toggle in header
- **Sticky header** + **Floating CTA** on scroll
- **Responsive** — Mobile-first layout
- **Lazy loading** — Images load on scroll
- **Brand palette** — #E9E1D2, #F5F1E8, #111111, #3A332A

---

## Run locally

```bash
npm install
npm run dev
```

Open **http://localhost:5173**.

## Build

```bash
npm run build
npm run preview
```

Output in `dist/` (Vercel/Netlify uses this).

---

## Deploy on Vercel

1. [vercel.com](https://vercel.com) → Add New → Project → Import this repo
2. Leave build settings as default (Vite auto-detected)
3. Add `VITE_FORMSPREE_ID` in Environment Variables if using the contact form
4. Deploy. Add the URL to PROPOSAL.md and CASE_STUDY.md.
