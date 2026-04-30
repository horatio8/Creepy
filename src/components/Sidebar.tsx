"use client";

import { useEffect } from "react";
import { FilterPanel } from "./FilterPanel";

interface SidebarProps {
  sources: string[];
  totalCount: number;
  filteredCount: number;
  open: boolean;
  onClose: () => void;
}

export function Sidebar({
  sources,
  totalCount,
  filteredCount,
  open,
  onClose,
}: SidebarProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <>
      <aside className="hidden lg:block lg:w-72 shrink-0">
        <div className="sticky top-[88px] max-h-[calc(100vh-104px)] overflow-y-auto rounded-lg border border-border bg-white p-5 shadow-card">
          <FilterPanel
            sources={sources}
            totalCount={totalCount}
            filteredCount={filteredCount}
          />
        </div>
      </aside>

      {open && (
        <div className="fixed inset-0 z-40 lg:hidden" role="dialog">
          <div
            className="absolute inset-0 bg-navy/50"
            onClick={onClose}
            aria-hidden
          />
          <div className="absolute inset-y-0 left-0 w-[88%] max-w-sm overflow-y-auto bg-white p-5 shadow-xl">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-h3 text-navy">Filters</p>
              <button
                type="button"
                onClick={onClose}
                className="rounded p-1 text-slate hover:bg-neutral-light hover:text-navy"
                aria-label="Close filters"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
            <FilterPanel
              sources={sources}
              totalCount={totalCount}
              filteredCount={filteredCount}
            />
          </div>
        </div>
      )}
    </>
  );
}
