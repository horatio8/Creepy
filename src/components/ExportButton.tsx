"use client";

import { useEffect, useRef, useState } from "react";
import type { Article } from "@/types/article";
import { downloadCSV, downloadJSON, printReport } from "@/lib/exportData";

interface ExportButtonProps {
  articles: Article[];
}

export function ExportButton({ articles }: ExportButtonProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        disabled={articles.length === 0}
        className="inline-flex items-center gap-1.5 rounded-md border border-border bg-white px-3 py-2 text-small font-medium text-navy hover:border-accent/40 hover:text-accent disabled:opacity-50"
      >
        <DownloadIcon />
        Export
        <ChevronIcon />
      </button>
      {open && (
        <div className="absolute right-0 top-full z-20 mt-1 w-48 overflow-hidden rounded-md border border-border bg-white shadow-cardHover">
          <MenuItem
            onClick={() => {
              downloadJSON(articles);
              setOpen(false);
            }}
          >
            Download JSON
          </MenuItem>
          <MenuItem
            onClick={() => {
              downloadCSV(articles);
              setOpen(false);
            }}
          >
            Download CSV
          </MenuItem>
          <MenuItem
            onClick={() => {
              printReport(articles);
              setOpen(false);
            }}
          >
            Printable PDF report
          </MenuItem>
        </div>
      )}
    </div>
  );
}

function MenuItem({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="block w-full px-3 py-2 text-left text-small text-navy hover:bg-neutral-light"
    >
      {children}
    </button>
  );
}

function DownloadIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <path d="m7 10 5 5 5-5" />
      <path d="M12 15V3" />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
