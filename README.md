# Carlton Walker Opposition Research Portal

Research index that aggregates **links to** publicly available coverage of
Carlton Walker. The site does not host or republish third-party content; it
indexes and links to original sources.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- React Query (cache layer)
- Zustand (filter state)
- Static `articles.json` for the index

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

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
3. Deploy. `robots.txt` blocks all crawlers; the layout sets `noindex`.

## Privacy

- Notes are stored in browser `localStorage` only and never leave the device.
- No analytics or tracking scripts are included.
