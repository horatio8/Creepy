"use client";

import Link from "next/link";
import type { Article } from "@/types/article";
import { CategoryTag } from "./CategoryTag";
import { CredibilityBadge } from "./CredibilityBadge";
import { useNotes } from "@/hooks/useNotes";
import { formatArticleDate } from "@/lib/dates";

interface ArticleDetailProps {
  article: Article;
  related: Article[];
}

export function ArticleDetail({ article, related }: ArticleDetailProps) {
  const { notes, setNotes } = useNotes(article.id);
  const date = formatArticleDate(article.datePublished);

  return (
    <div className="mx-auto max-w-4xl px-4 py-6 lg:px-8">
      <Link
        href="/"
        className="mb-4 inline-flex items-center gap-1 text-small font-medium text-slate hover:text-accent"
      >
        ← Back to research index
      </Link>

      <article className="rounded-lg border border-border bg-white p-6 shadow-card lg:p-8">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <CategoryTag category={article.category} />
          <CredibilityBadge score={article.credibilityScore} showLabel />
          <span className="text-small text-slate">·</span>
          <span className="text-small text-slate">
            {article.publicationType}
          </span>
        </div>

        <h1 className="mb-2 text-h1 text-navy">{article.title}</h1>

        <div className="mb-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-small text-slate">
          <span className="font-medium text-navy">{article.source}</span>
          <span>·</span>
          <span>{date}</span>
          {article.sourceUrl && (
            <>
              <span>·</span>
              <a
                href={article.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[12px] text-accent hover:underline"
              >
                {hostname(article.sourceUrl)}
              </a>
            </>
          )}
        </div>

        <div className="mb-6 space-y-4">
          <section>
            <h2 className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-slate">
              Summary
            </h2>
            <p className="text-body text-navy">{article.summary}</p>
          </section>

          {article.keyQuote && (
            <section>
              <h2 className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-slate">
                Key quote
              </h2>
              <blockquote className="rounded-md border-l-4 border-accent bg-neutral-light px-4 py-3 text-body italic text-navy">
                &ldquo;{article.keyQuote}&rdquo;
              </blockquote>
            </section>
          )}
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {article.articleUrl ? (
            <a
              href={article.articleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md bg-navy px-4 py-2.5 text-small font-medium text-white transition hover:bg-navy/90"
            >
              Open original source
              <ExternalIcon />
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 rounded-md border border-dashed border-border px-4 py-2.5 text-small text-slate">
              Direct URL not on file
            </span>
          )}
          {article.sourceUrl && (
            <a
              href={article.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-border bg-white px-4 py-2.5 text-small font-medium text-navy hover:border-accent/40 hover:text-accent"
            >
              Visit publication
              <ExternalIcon />
            </a>
          )}
        </div>

        <section className="mb-2">
          <div className="mb-2 flex items-center justify-between">
            <h2 className="text-[11px] font-semibold uppercase tracking-wider text-slate">
              Personal notes
            </h2>
            <span className="text-[11px] text-slate">
              Saved locally · Markdown supported
            </span>
          </div>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Jot context, follow-ups, citations, related case numbers…"
            rows={6}
            className="w-full rounded-md border border-border bg-white px-3 py-2 font-mono text-[12px] text-navy focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
          />
        </section>
      </article>

      {related.length > 0 && (
        <section className="mt-8">
          <h2 className="mb-3 text-h3 text-navy">
            Related in {article.category}
          </h2>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {related.map((rel) => (
              <Link
                key={rel.id}
                href={`/article/${rel.id}`}
                className="rounded-lg border border-border bg-white p-4 shadow-card transition hover:border-accent/40 hover:shadow-cardHover"
              >
                <p className="mb-1 line-clamp-2 text-body font-medium text-navy">
                  {rel.title}
                </p>
                <p className="text-small text-slate">
                  {rel.source} · {formatArticleDate(rel.datePublished)}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

function hostname(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

function ExternalIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <path d="M15 3h6v6" />
      <path d="m10 14 11-11" />
    </svg>
  );
}
