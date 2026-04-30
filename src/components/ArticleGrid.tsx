"use client";

import type { Article } from "@/types/article";
import { ArticleCard } from "./ArticleCard";

interface ArticleGridProps {
  articles: Article[];
  view: "grid" | "list";
  notesIndex: Record<string, string>;
}

export function ArticleGrid({ articles, view, notesIndex }: ArticleGridProps) {
  if (articles.length === 0) {
    return (
      <div className="rounded-lg border border-dashed border-border bg-white p-12 text-center">
        <p className="text-h3 text-navy">No matching articles</p>
        <p className="mt-2 text-body text-slate">
          Try clearing filters or expanding the date range.
        </p>
      </div>
    );
  }

  return (
    <div
      className={
        view === "grid"
          ? "grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3"
          : "flex flex-col gap-3"
      }
    >
      {articles.map((article) => (
        <ArticleCard
          key={article.id}
          article={article}
          view={view}
          hasNotes={Boolean(notesIndex[article.id])}
        />
      ))}
    </div>
  );
}
