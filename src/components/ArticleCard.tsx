"use client";

import Link from "next/link";
import type { Article } from "@/types/article";
import { formatArticleDate } from "@/lib/dates";
import { CategoryTag } from "./CategoryTag";
import { CredibilityBadge } from "./CredibilityBadge";

interface ArticleCardProps {
  article: Article;
  view: "grid" | "list";
  hasNotes?: boolean;
}

export function ArticleCard({ article, view, hasNotes }: ArticleCardProps) {
  const date = formatArticleDate(article.datePublished);

  if (view === "list") {
    return (
      <Link
        href={`/article/${article.id}`}
        className="group block rounded-lg border border-border bg-white p-5 shadow-card transition hover:border-accent/40 hover:shadow-cardHover"
      >
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex-1 min-w-0">
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <CategoryTag category={article.category} />
              <CredibilityBadge score={article.credibilityScore} />
              {hasNotes && <NoteFlag />}
            </div>
            <h3 className="mb-1 line-clamp-2 text-h3 text-navy group-hover:text-accent">
              {article.title}
            </h3>
            <p className="text-small text-slate">
              {article.source} · {article.publicationType} · {date}
            </p>
          </div>
          <span className="text-small font-medium text-accent group-hover:underline shrink-0">
            View details →
          </span>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/article/${article.id}`}
      className="group flex h-full min-h-[240px] flex-col rounded-lg border border-border bg-white p-6 shadow-card transition hover:border-accent/40 hover:shadow-cardHover"
    >
      <div className="mb-3 flex items-start justify-between gap-2">
        <CategoryTag category={article.category} />
        <CredibilityBadge score={article.credibilityScore} />
      </div>
      <h3 className="mb-2 line-clamp-2 text-h3 text-navy group-hover:text-accent">
        {article.title}
      </h3>
      <p className="mb-3 text-small text-slate">
        {article.source} · {date}
      </p>
      <p className="mb-3 line-clamp-3 text-body text-slate">
        {article.summary}
      </p>
      {article.keyQuote && (
        <blockquote className="mb-3 border-l-2 border-border pl-3 text-small italic text-navy/80 line-clamp-2">
          &ldquo;{article.keyQuote}&rdquo;
        </blockquote>
      )}
      <div className="mt-auto flex items-center justify-between gap-3 pt-2">
        <span className="text-small font-medium text-accent group-hover:underline">
          View details →
        </span>
        {hasNotes && <NoteFlag />}
      </div>
    </Link>
  );
}

function NoteFlag() {
  return (
    <span className="inline-flex items-center gap-1 rounded bg-amber-50 px-2 py-0.5 text-[11px] font-medium text-amber-700">
      <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
      Notes
    </span>
  );
}
