"use client";

import { useEffect, useState } from "react";
import { useFilterStore } from "@/store/filterStore";
import { useDebounced } from "@/hooks/useDebounced";

export function SearchBar() {
  const storeQuery = useFilterStore((s) => s.query);
  const setQuery = useFilterStore((s) => s.setQuery);
  const [local, setLocal] = useState(storeQuery);
  const debounced = useDebounced(local, 300);

  useEffect(() => {
    setQuery(debounced);
  }, [debounced, setQuery]);

  useEffect(() => {
    if (storeQuery !== local && storeQuery === "") setLocal("");
  }, [storeQuery, local]);

  return (
    <div className="relative w-full">
      <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate">
        <SearchIcon />
      </span>
      <input
        type="search"
        value={local}
        onChange={(e) => setLocal(e.target.value)}
        placeholder="Search titles, sources, summaries, quotes..."
        className="w-full rounded-lg border border-border bg-white py-2.5 pl-10 pr-10 text-body text-navy placeholder:text-slate/70 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
        aria-label="Search articles"
      />
      {local && (
        <button
          type="button"
          onClick={() => {
            setLocal("");
            setQuery("");
          }}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1 text-slate hover:bg-neutral-light hover:text-navy"
          aria-label="Clear search"
        >
          <CloseIcon />
        </button>
      )}
    </div>
  );
}

function SearchIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}
