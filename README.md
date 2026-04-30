# Carlton Walker Opposition Research Portal

Private, password-protected research index that aggregates **links to** publicly
available coverage of Carlton Walker. The site does not host or republish
third-party content; it indexes and links to original sources for personal
research access.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- React Query (cache layer)
- Zustand (filter state)
- Supabase Auth (optional — falls back to a simple shared-password gate)
- Static `articles.json` for the index

## Local development

```bash
npm install
cp .env.example .env.local   # optional — see auth options below
npm run dev
```

Open http://localhost:3000.

## Auth options

The app supports three modes:

1. **Supabase** — set `NEXT_PUBLIC_SUPABASE_URL` and
   `NEXT_PUBLIC_SUPABASE_ANON_KEY`. The login screen uses
   `signInWithPassword`. Create a single user via the Supabase dashboard.
2. **Shared password** — set only `NEXT_PUBLIC_SHARED_PASSWORD` to a value of
   your choosing. The login form will accept that string and store an
   `authed` flag in `sessionStorage`.
3. **No auth (dev)** — leave both unset. The app is unguarded; useful for
   local development only. Do not deploy in this state.

A signed-out user is redirected to `/login`. Sign-out clears both the
Supabase session and the local session flag.

## Adding articles

Append entries to `src/data/articles.json` using the existing schema:

```jsonc
{
  "id": "16",
  "title": "...",
  "source": "...",
  "sourceUrl": "https://...",
  "publicationType": "Investigation",
  "datePublished": "2024-09",
  "articleUrl": "https://...",
  "category": "Election Coverage",
  "credibilityScore": 4,
  "summary": "...",
  "keyQuote": "..."
}
```

Categories must match those listed in `src/lib/categories.ts`.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — serve a built app
- `npm run lint` — run Next.js lint
- `npm run typecheck` — TypeScript only check

## Deployment

1. Push this repository to GitHub.
2. Import the repo into Vercel.
3. Set `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` (or
   `NEXT_PUBLIC_SHARED_PASSWORD`) in the Vercel project settings.
4. Deploy. `robots.txt` blocks all crawlers; the layout sets `noindex`.

## Privacy

- Notes are stored in browser `localStorage` only and never leave the device.
- No analytics or tracking scripts are included.
- HTTPS is enforced by Vercel.
