"use client";

import { CATEGORIES } from "@/lib/categories";
import { useFilterStore } from "@/store/filterStore";
import type { CategoryName } from "@/types/article";

interface FilterPanelProps {
  sources: string[];
  totalCount: number;
  filteredCount: number;
}

export function FilterPanel({
  sources,
  totalCount,
  filteredCount,
}: FilterPanelProps) {
  const {
    categories,
    sources: selectedSources,
    dateFrom,
    dateTo,
    minCredibility,
    toggleCategory,
    toggleSource,
    setDateFrom,
    setDateTo,
    setMinCredibility,
    reset,
  } = useFilterStore();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-h3 text-navy">Filters</p>
          <p className="text-small text-slate">
            {filteredCount} of {totalCount} articles
          </p>
        </div>
        <button
          type="button"
          onClick={reset}
          className="rounded-md border border-border bg-white px-3 py-1.5 text-small font-medium text-slate hover:border-accent/40 hover:text-accent"
        >
          Clear all
        </button>
      </div>

      <FilterSection title="Categories">
        <div className="flex flex-col gap-1.5">
          {CATEGORIES.map((cat) => (
            <CheckboxRow
              key={cat.name}
              label={cat.name}
              accentColor={cat.color}
              checked={categories.includes(cat.name as CategoryName)}
              onChange={() => toggleCategory(cat.name as CategoryName)}
            />
          ))}
        </div>
      </FilterSection>

      <FilterSection title="Sources">
        <div className="flex flex-col gap-1.5 max-h-64 overflow-y-auto pr-1">
          {sources.map((source) => (
            <CheckboxRow
              key={source}
              label={source}
              checked={selectedSources.includes(source)}
              onChange={() => toggleSource(source)}
            />
          ))}
        </div>
      </FilterSection>

      <FilterSection title="Date range">
        <div className="grid grid-cols-2 gap-2">
          <label className="block">
            <span className="block text-small text-slate mb-1">From</span>
            <input
              type="date"
              value={dateFrom ?? ""}
              onChange={(e) => setDateFrom(e.target.value || null)}
              className="w-full rounded-md border border-border bg-white px-2 py-1.5 text-small text-navy focus:border-accent focus:outline-none"
            />
          </label>
          <label className="block">
            <span className="block text-small text-slate mb-1">To</span>
            <input
              type="date"
              value={dateTo ?? ""}
              onChange={(e) => setDateTo(e.target.value || null)}
              className="w-full rounded-md border border-border bg-white px-2 py-1.5 text-small text-navy focus:border-accent focus:outline-none"
            />
          </label>
        </div>
      </FilterSection>

      <FilterSection title="Minimum credibility">
        <div className="space-y-2">
          <input
            type="range"
            min={1}
            max={5}
            value={minCredibility}
            onChange={(e) => setMinCredibility(Number(e.target.value))}
            className="w-full accent-accent"
          />
          <div className="flex items-center justify-between text-small text-slate">
            <span>1</span>
            <span className="font-semibold text-navy">
              {minCredibility} / 5
            </span>
            <span>5</span>
          </div>
        </div>
      </FilterSection>
    </div>
  );
}

function FilterSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="mb-2 text-small font-semibold uppercase tracking-wide text-slate">
        {title}
      </p>
      {children}
    </div>
  );
}

function CheckboxRow({
  label,
  checked,
  onChange,
  accentColor,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
  accentColor?: string;
}) {
  return (
    <label className="flex cursor-pointer items-center gap-2 rounded px-1 py-1 text-body text-navy hover:bg-neutral-light">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 cursor-pointer rounded border-border accent-accent"
      />
      {accentColor && (
        <span
          className="h-2 w-2 rounded-full shrink-0"
          style={{ backgroundColor: accentColor }}
        />
      )}
      <span className="truncate">{label}</span>
    </label>
  );
}
