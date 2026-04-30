"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { Footer } from "@/components/Footer";
import { MobileNav } from "@/components/MobileNav";
import { CategoryTag } from "@/components/CategoryTag";
import { ExportButton } from "@/components/ExportButton";
import { SourceMark } from "@/components/SourceMark";
import { useArticles } from "@/hooks/useArticles";
import { useFilterStore } from "@/store/filterStore";
import { filterArticles, uniqueSources } from "@/lib/filterArticles";
import { useDebounced } from "@/hooks/useDebounced";
import { formatArticleDate } from "@/lib/dates";
import { CATEGORIES } from "@/lib/categories";
import type { CategoryName, SortKey } from "@/types/article";

const SORTS: { value: SortKey; label: string }[] = [
  { value: "date-desc", label: "Newest first" },
  { value: "date-asc", label: "Oldest first" },
  { value: "source-asc", label: "Source A–Z" },
  { value: "credibility-desc", label: "Highest credibility" },
];

export default function SourcesPage() {
  const articles = useArticles();
  const filters = useFilterStore();
  const sources = useMemo(() => uniqueSources(articles), [articles]);

  const [localQuery, setLocalQuery] = useState(filters.query);
  const debouncedQuery = useDebounced(localQuery, 200);

  const filtered = useMemo(
    () =>
      filterArticles(articles, {
        ...filters,
        query: debouncedQuery,
      }),
    [articles, filters, debouncedQuery],
  );

  return (
    <div className="min-h-screen bg-neutral-light pb-20 md:pb-0">
      <SiteHeader />

      <header className="border-b border-border bg-white">
        <div className="mx-auto max-w-screen-xl px-5 py-10 sm:px-8 md:py-14">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-alert">
            Source library
          </p>
          <h1 className="mt-2 text-balance text-3xl font-bold leading-tight text-navy sm:text-4xl md:text-5xl">
            All {articles.length} sources. One place. Open the originals.
          </h1>
          <p className="mt-4 max-w-2xl text-pretty text-base text-slate sm:text-lg">
            Every claim on this site links back to a public report. Read,
            verify, and share. We don&apos;t host these articles — we only point
            to them.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-screen-xl px-5 py-8 sm:px-8 md:py-12">
        <div className="mb-6 flex flex-col gap-3">
          <div className="relative">
            <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </span>
            <input
              type="search"
              value={localQuery}
              onChange={(e) => {
                setLocalQuery(e.target.value);
                filters.setQuery(e.target.value);
              }}
              placeholder="Search sources, headlines, quotes…"
              className="w-full rounded-full border border-border bg-white py-3 pl-11 pr-4 text-base text-navy placeholder:text-slate/70 focus:border-navy focus:outline-none focus:ring-4 focus:ring-navy/10"
              aria-label="Search sources"
            />
          </div>

          <div className="-mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0">
            <div className="flex w-max items-center gap-2 sm:w-auto sm:flex-wrap">
              <Pill
                label="All categories"
                active={filters.categories.length === 0}
                onClick={() =>
                  filters.categories.forEach((c) => filters.toggleCategory(c))
                }
              />
              {CATEGORIES.map((cat) => (
                <Pill
                  key={cat.name}
                  label={cat.short}
                  active={filters.categories.includes(
                    cat.name as CategoryName,
                  )}
                  color={cat.color}
                  onClick={() => filters.toggleCategory(cat.name as CategoryName)}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-slate">
              <span className="font-semibold text-navy">{filtered.length}</span>{" "}
              of {articles.length} sources
            </p>
            <div className="flex items-center gap-2">
              <select
                value={filters.sort}
                onChange={(e) => filters.setSort(e.target.value as SortKey)}
                className="rounded-full border border-border bg-white px-3 py-2 text-sm font-medium text-navy focus:border-navy focus:outline-none"
                aria-label="Sort"
              >
                {SORTS.map((s) => (
                  <option key={s.value} value={s.value}>
                    {s.label}
                  </option>
                ))}
              </select>
              <ExportButton articles={filtered} />
            </div>
          </div>

          {sources.length > 0 && (
            <details className="rounded-xl border border-border bg-white">
              <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 text-sm font-semibold text-navy">
                Filter by publication{" "}
                {filters.sources.length > 0 && (
                  <span className="rounded-full bg-alert px-2 py-0.5 text-[11px] font-bold text-white">
                    {filters.sources.length}
                  </span>
                )}
                <span className="text-slate">▾</span>
              </summary>
              <div className="grid grid-cols-2 gap-1 border-t border-border p-3 sm:grid-cols-3 md:grid-cols-4">
                {sources.map((source) => (
                  <label
                    key={source}
                    className="flex cursor-pointer items-center gap-2 rounded-md px-2 py-1.5 text-sm text-navy hover:bg-neutral-light"
                  >
                    <input
                      type="checkbox"
                      checked={filters.sources.includes(source)}
                      onChange={() => filters.toggleSource(source)}
                      className="h-4 w-4 rounded border-border accent-navy"
                    />
                    <span className="truncate">{source}</span>
                  </label>
                ))}
              </div>
            </details>
          )}
        </div>

        {filtered.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-border bg-white p-10 text-center">
            <p className="text-h3 text-navy">No sources match your filters.</p>
            <button
              type="button"
              onClick={() => {
                filters.reset();
                setLocalQuery("");
              }}
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-navy px-4 py-2 text-sm font-semibold text-white hover:bg-navy/90"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <ul className="grid gap-3 sm:grid-cols-2">
            {filtered.map((article) => (
              <li key={article.id}>
                <Link
                  href={`/article/${article.id}`}
                  className="group flex h-full flex-col gap-3 rounded-2xl border border-border bg-white p-5 shadow-card transition hover:-translate-y-0.5 hover:border-navy/30 hover:shadow-cardHover"
                >
                  <div className="flex items-start justify-between gap-3">
                    <SourceMark
                      article={article}
                      size="md"
                      meta={formatArticleDate(article.datePublished)}
                    />
                    <CategoryTag category={article.category} />
                  </div>
                  <h3 className="text-pretty text-lg font-bold leading-snug text-navy group-hover:text-alert">
                    {article.title}
                  </h3>
                  {article.summary && (
                    <p className="line-clamp-2 text-sm text-slate">
                      {article.summary}
                    </p>
                  )}
                  <span className="mt-auto pt-1 text-[13px] font-semibold text-navy group-hover:text-alert">
                    Read source →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </main>

      <Footer />
      <MobileNav />
    </div>
  );
}

function Pill({
  label,
  active,
  color,
  onClick,
}: {
  label: string;
  active: boolean;
  color?: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-1.5 text-[13px] font-medium transition ${
        active
          ? "border-navy bg-navy text-white"
          : "border-border bg-white text-slate hover:border-navy/30 hover:text-navy"
      }`}
    >
      {color && (
        <span
          className="h-1.5 w-1.5 rounded-full"
          style={{ backgroundColor: active ? "#ffffff" : color }}
        />
      )}
      {label}
    </button>
  );
}
