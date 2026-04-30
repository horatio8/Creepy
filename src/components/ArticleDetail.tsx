"use client";

import Link from "next/link";
import type { Article } from "@/types/article";
import { CategoryTag } from "./CategoryTag";
import { CredibilityBadge } from "./CredibilityBadge";
import { formatArticleDate } from "@/lib/dates";
import { ShareBar } from "./ShareBar";

interface ArticleDetailProps {
  article: Article;
  related: Article[];
}

export function ArticleDetail({ article, related }: ArticleDetailProps) {
  const date = formatArticleDate(article.datePublished);

  return (
    <div className="mx-auto max-w-3xl px-5 py-8 sm:px-8 md:py-12">
      <Link
        href="/sources"
        className="inline-flex items-center gap-1 text-sm font-medium text-slate hover:text-navy"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
        >
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        All sources
      </Link>

      <article className="mt-6 rounded-2xl border border-border bg-white p-6 shadow-card sm:p-9">
        <div className="mb-5 flex flex-wrap items-center gap-2">
          <CategoryTag category={article.category} />
          <CredibilityBadge score={article.credibilityScore} />
          <span className="text-sm text-slate">·</span>
          <span className="text-sm text-slate">{article.publicationType}</span>
        </div>

        <h1 className="text-balance text-3xl font-extrabold leading-tight text-navy sm:text-4xl md:text-5xl">
          {article.title}
        </h1>

        <p className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-slate">
          <span className="font-semibold text-navy">{article.source}</span>
          <span>·</span>
          <span>{date}</span>
          {article.sourceUrl && (
            <>
              <span>·</span>
              <a
                href={article.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[12px] text-navy underline-offset-2 hover:underline"
              >
                {hostname(article.sourceUrl)}
              </a>
            </>
          )}
        </p>

        <div className="my-6 h-px w-full bg-border" />

        <section className="mb-6">
          <h2 className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-slate">
            Summary
          </h2>
          <p className="text-pretty text-[17px] leading-relaxed text-navy/90">
            {article.summary}
          </p>
        </section>

        {article.keyQuote && (
          <section className="mb-6">
            <h2 className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-slate">
              Key quote
            </h2>
            <blockquote className="rounded-xl border-l-4 border-alert bg-neutral-light px-5 py-4 text-pretty text-lg italic leading-snug text-navy">
              &ldquo;{article.keyQuote}&rdquo;
            </blockquote>
          </section>
        )}

        <div className="flex flex-wrap gap-2">
          {article.articleUrl ? (
            <a
              href={article.articleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white transition hover:bg-navy/90"
            >
              Open original source
              <ExternalIcon />
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 rounded-full border border-dashed border-border px-5 py-3 text-sm text-slate">
              Direct URL not on file
            </span>
          )}
          {article.sourceUrl && (
            <a
              href={article.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-3 text-sm font-semibold text-navy transition hover:border-navy/30"
            >
              Visit publication
              <ExternalIcon />
            </a>
          )}
        </div>

        <div className="mt-8 border-t border-border pt-6">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-slate">
            Share this source
          </p>
          <ShareBar title={article.title} />
        </div>
      </article>

      {related.length > 0 && (
        <section className="mt-10">
          <h2 className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-slate">
            More on {article.category}
          </h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {related.map((rel) => (
              <Link
                key={rel.id}
                href={`/article/${rel.id}`}
                className="rounded-xl border border-border bg-white p-4 shadow-card transition hover:border-navy/30 hover:shadow-cardHover"
              >
                <p className="line-clamp-2 text-base font-semibold leading-snug text-navy">
                  {rel.title}
                </p>
                <p className="mt-1 text-sm text-slate">
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
      strokeWidth="2.4"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <path d="M15 3h6v6" />
      <path d="m10 14 11-11" />
    </svg>
  );
}
