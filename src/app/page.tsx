"use client";

import { useMemo, useState } from "react";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { Toolbar } from "@/components/Toolbar";
import { ArticleGrid } from "@/components/ArticleGrid";
import { useArticles } from "@/hooks/useArticles";
import { useAllNotes } from "@/hooks/useNotes";
import { useFilterStore } from "@/store/filterStore";
import { filterArticles, uniqueSources } from "@/lib/filterArticles";

export default function HomePage() {
  const articles = useArticles();
  const notesIndex = useAllNotes();
  const filters = useFilterStore();
  const [filtersOpen, setFiltersOpen] = useState(false);

  const sources = useMemo(() => uniqueSources(articles), [articles]);
  const filtered = useMemo(
    () => filterArticles(articles, filters),
    [articles, filters],
  );

  return (
    <div className="min-h-screen bg-neutral-light">
      <Header onToggleFilters={() => setFiltersOpen((v) => !v)} />

      <div className="mx-auto flex max-w-screen-2xl gap-6 px-4 py-6 lg:px-8">
        <Sidebar
          sources={sources}
          totalCount={articles.length}
          filteredCount={filtered.length}
          open={filtersOpen}
          onClose={() => setFiltersOpen(false)}
        />

        <main className="min-w-0 flex-1">
          <SectionIntro filteredCount={filtered.length} total={articles.length} />
          <Toolbar filtered={filtered} total={articles.length} />
          <ArticleGrid
            articles={filtered}
            view={filters.view}
            notesIndex={notesIndex}
          />
        </main>
      </div>
    </div>
  );
}

function SectionIntro({
  filteredCount,
  total,
}: {
  filteredCount: number;
  total: number;
}) {
  return (
    <section className="mb-6 rounded-lg border border-border bg-white p-5 shadow-card">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="text-h1 text-navy">Research index</h1>
          <p className="mt-1 max-w-2xl text-body text-slate">
            Curated links to public coverage of Carlton Walker — former
            candidate for SC House District 15, candidate for District 115.
            This portal indexes original sources; it does not host or republish
            their content.
          </p>
        </div>
        <div className="rounded-md border border-border bg-neutral-light px-3 py-2 text-right">
          <p className="text-[11px] uppercase tracking-wide text-slate">
            Indexed
          </p>
          <p className="text-h2 text-navy">{total}</p>
          <p className="text-[11px] text-slate">
            {filteredCount} match current filters
          </p>
        </div>
      </div>
    </section>
  );
}
