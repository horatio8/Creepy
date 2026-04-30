"use client";

import type { SortKey } from "@/types/article";
import { useFilterStore } from "@/store/filterStore";
import { ExportButton } from "./ExportButton";
import type { Article } from "@/types/article";

interface ToolbarProps {
  filtered: Article[];
  total: number;
}

const SORT_OPTIONS: { value: SortKey; label: string }[] = [
  { value: "date-desc", label: "Newest first" },
  { value: "date-asc", label: "Oldest first" },
  { value: "source-asc", label: "Source A–Z" },
  { value: "credibility-desc", label: "Credibility (high → low)" },
];

export function Toolbar({ filtered, total }: ToolbarProps) {
  const { sort, setSort, view, setView } = useFilterStore();

  return (
    <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
      <p className="text-body text-slate">
        Showing{" "}
        <span className="font-semibold text-navy">{filtered.length}</span> of{" "}
        <span className="font-semibold text-navy">{total}</span> articles
      </p>

      <div className="flex flex-wrap items-center gap-2">
        <label className="flex items-center gap-2">
          <span className="sr-only">Sort by</span>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortKey)}
            className="rounded-md border border-border bg-white px-3 py-2 text-small font-medium text-navy focus:border-accent focus:outline-none"
            aria-label="Sort articles"
          >
            {SORT_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </label>

        <div className="inline-flex overflow-hidden rounded-md border border-border bg-white">
          <ViewBtn
            active={view === "grid"}
            onClick={() => setView("grid")}
            label="Grid view"
          >
            <GridIcon />
          </ViewBtn>
          <ViewBtn
            active={view === "list"}
            onClick={() => setView("list")}
            label="List view"
          >
            <ListIcon />
          </ViewBtn>
        </div>

        <ExportButton articles={filtered} />
      </div>
    </div>
  );
}

function ViewBtn({
  active,
  onClick,
  children,
  label,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      aria-pressed={active}
      className={`px-2.5 py-2 ${active ? "bg-navy text-white" : "text-slate hover:bg-neutral-light"}`}
    >
      {children}
    </button>
  );
}

function GridIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
    </svg>
  );
}

function ListIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
    </svg>
  );
}
