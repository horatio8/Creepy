"use client";

import Link from "next/link";
import { SearchBar } from "./SearchBar";

interface HeaderProps {
  onToggleFilters?: () => void;
  showSearch?: boolean;
}

export function Header({ onToggleFilters, showSearch = true }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-screen-2xl items-center gap-3 px-4 py-3 lg:px-8">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span
            className="flex h-8 w-8 items-center justify-center rounded-md bg-navy text-white"
            aria-hidden
          >
            <FileIcon />
          </span>
          <div className="hidden md:block">
            <p className="text-small font-semibold leading-tight text-navy">
              Carlton Walker
            </p>
            <p className="text-[11px] leading-tight text-slate">
              Opposition Research Portal
            </p>
          </div>
        </Link>

        {showSearch && (
          <div className="flex-1 mx-2 max-w-2xl">
            <SearchBar />
          </div>
        )}

        <div className="ml-auto flex items-center gap-2">
          {onToggleFilters && (
            <button
              type="button"
              onClick={onToggleFilters}
              className="lg:hidden inline-flex items-center gap-1.5 rounded-md border border-border bg-white px-3 py-2 text-small font-medium text-navy hover:border-accent/40 hover:text-accent"
              aria-label="Toggle filters"
            >
              <FilterIcon />
              <span className="hidden sm:inline">Filters</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
}

function FileIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M14 3v4a1 1 0 0 0 1 1h4" />
      <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z" />
    </svg>
  );
}

function FilterIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M3 6h18M6 12h12M10 18h4" />
    </svg>
  );
}
