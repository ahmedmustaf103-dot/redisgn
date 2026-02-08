# Waten Real Estate — Concept Redesign

A responsive concept redesign of [Waten Real Estate](https://www.waten.com/) (Saudi Arabia) built with React and Tailwind CSS. Keeps Waten’s branding and copy while improving structure and engagement.

---

## How to use this to get the role

### 1. Deploy a live link (critical)

People rarely run `npm install` — they click. Deploy so you can say: “Here’s a live concept: [link].”

**Vercel (recommended, free):**

1. Push this repo to GitHub.
2. Go to [vercel.com](https://vercel.com) → New Project → Import the repo.
3. Leave build settings as default (Vite is auto-detected). Deploy.
4. You’ll get a URL like `waten-redesign.vercel.app`. Use that in your email and in `PROPOSAL.md`.

**Netlify:** Same idea — connect repo, build command `npm run build`, publish directory `dist`.

### 2. Send a short email with the link

- **Subject:** “Concept redesign for Waten — [Your name]”
- **Body:** 2–3 sentences: you’ve put together a concept redesign that keeps their brand and improves structure (The Team section, clear CTA). Live link: [your URL]. Happy to walk them through it or hand off the code. Attach or paste the content of `PROPOSAL.md` if you want a one-pager.

### 3. Fill in PROPOSAL.md

Open `PROPOSAL.md` and add:

- Your live preview URL (after deploy).
- Your name, email, and phone/LinkedIn at the bottom.

You can send it as a PDF or paste it into the email.

### 4. Optional: hide the concept banner

The top banner says “This is a concept redesign.” To remove it (e.g. if they want to use the site as-is), in `src/components/ConceptBanner.jsx` set:

```js
const CONCEPT_BY = null;
```

---

## Sections in this build

- **Hero** — Waten header image, “Urban Spaces, Elevated.”, intro, View Projects / Get in Touch
- **About us** — Company copy + 3 pillars (Excellence & Sustainability, Commercial & Residential, Transparency & Innovation)
- **Projects** — Murabbaa Residence, Plaza Dan, Princess Sara with links to waten.com
- **Why Waten** — Transparency, Quality, Innovation, Kingdom-Wide
- **The Team** — Placeholder cards (replace with real team when ready)
- **Contact** — Office address, Hello@waten.com, contact form
- **Footer** — CTA strip + logo, address, email, ©

---

## Run locally

```bash
npm install
npm run dev
```

Open **http://localhost:5173** in your browser (or try **http://127.0.0.1:5173** if localhost doesn’t work).

**If the page won’t load:**
- Use the URL Vite prints in the terminal (e.g. `http://127.0.0.1:5174` if 5173 was in use).
- If the dev server fails with a port error, run: `npm run dev -- --port 3000` then open http://localhost:3000.
- Don’t open `index.html` directly (file://) — the app needs the dev server or a built `dist/` folder.

## Build

```bash
npm run build
npm run preview
```

Output is in `dist/` (e.g. for Vercel/Netlify).
