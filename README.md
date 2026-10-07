# Kris Engelhardt — portfolio

One-page studio-style portfolio built with Next.js (App Router). It uses plain CSS Modules and one font (Geist, self-hosted via `next/font`). Only the mobile menu runs client-side JavaScript.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Before launch

1. **Screenshots** live in `public/work/` (desktop 1440×900, mobile 390×844) and are set per project in `content/projects.ts` with `image` / `mobileImage`. Leave out `mobileImage` for a desktop-only card.
2. **Photo**: save a portrait (4:5) as `public/kris.jpg`. It replaces the "KE" placeholder in About automatically.
3. **Live links**: set `url` on a project to show a "Visit site" button on its page.
4. **Domain**: defaults to `https://krisengelhardt.com`. Override with `NEXT_PUBLIC_SITE_URL` in `.env.local` if needed.

## Where things live

| What | File |
| --- | --- |
| Name, role, email, nav | `content/site.ts` |
| Projects (homepage cards + `/work/[slug]` pages) | `content/projects.ts` |
| Homepage sections and copy | `app/page.tsx` |
| Colour, spacing, shared link/button styles | `app/globals.css` (`:root`) |
| Case study template | `app/work/[slug]/page.tsx` |

## Design notes

- Warm off-white (`#f4f1ea`), near-black ink, one muted terracotta accent (`#9a4f2f`) used only for tags and step numbers.
- Big tight headings, thin rules above each section, underline-draw link hovers, a slow image zoom on project hover.
- Sections: Hero → Selected work → What I do → About → How I work → Contact.
