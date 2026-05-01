# Creepy Carlton

A static, sourced index of public reporting and court filings concerning South
Carolina House District 115 candidate Carlton Walker.

The site is built per the editorial brief delivered to the project. The
defining rule: every substantive claim about Walker on this site appears
inside `""` quotation marks and is attributed to a named source on the same
screen. The site does not paraphrase or summarize.

## Stack

- Next.js 14 (App Router) with `output: "export"` — fully static HTML
- TypeScript, Tailwind CSS
- Google Fonts: Cormorant Garamond (display), Source Serif 4 (body),
  Inter (sans)
- No database, no analytics, no client-side state, no images of Walker

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output is written to `out/` as static HTML, ready to host on Vercel,
Netlify, S3, or any static host.

## Editorial rules

1. Quotes are reproduced verbatim. Ellipses (`…`) are visible.
2. No two quotes are concatenated to imply a single statement.
3. No quote appears without its source named on the same screen.
4. The site does not assert in its own voice that Walker did, said, or is
   anything beyond facts about his candidacy.
5. Topics are framed as topics, not verdicts.
6. No imagery of Walker.

The `<Quote>` component takes both `quote` and `attribution` as required
props — you cannot render one without the other.

## Pre-launch checklist

- [ ] Every quote verified word-for-word against its original source.
- [ ] Every source URL captured to archive.org and archive.today; the
      `archiveUrl` field on each article populated.
- [ ] District 115 / District 15 clarification visible above the fold.
- [ ] South Carolina-licensed lawyer review of the homepage, /custody,
      and /fraud.

## Adding articles

Append to `src/data/articles.ts`. Required fields: `id`, `slug`,
`category`, `title`, `source`, `publication`, `type`, `date`, `year`,
`url`, `credibility`, `quote`, `attribution`, `documentNote`. Categories
are defined in `src/data/categories.ts`.
