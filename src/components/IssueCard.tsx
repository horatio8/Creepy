"use client";

import Link from "next/link";
import type { Issue } from "@/types/issue";
import { IssueIcon } from "./IssueIcon";

interface IssueCardProps {
  issue: Issue;
  index: number;
}

export function IssueCard({ issue, index }: IssueCardProps) {
  const num = String(index + 1).padStart(2, "0");
  return (
    <Link
      href={`/issue/${issue.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-card transition hover:-translate-y-0.5 hover:shadow-cardHover"
    >
      <span
        aria-hidden
        className="h-1 w-full"
        style={{ backgroundColor: issue.accent }}
      />
      <div className="flex h-full flex-col gap-4 p-6 sm:p-7">
        <div className="flex items-center justify-between">
          <span
            className="flex h-10 w-10 items-center justify-center rounded-xl"
            style={{
              backgroundColor: `${issue.accent}1A`,
              color: issue.accent,
            }}
          >
            <IssueIcon name={issue.icon} size={22} />
          </span>
          <span className="font-mono text-[11px] font-semibold tracking-wider text-slate">
            ISSUE {num}
          </span>
        </div>

        <h3 className="text-balance text-xl font-bold leading-tight text-navy sm:text-2xl">
          {issue.title}
        </h3>

        <p className="text-pretty text-[15px] leading-relaxed text-slate">
          {issue.headline}
        </p>

        <div className="mt-auto flex items-center justify-between pt-1">
          <span className="text-[12px] font-medium text-slate">
            {issue.articleIds.length} source
            {issue.articleIds.length === 1 ? "" : "s"}
          </span>
          <span
            className="inline-flex items-center gap-1 text-[13px] font-semibold transition group-hover:gap-1.5"
            style={{ color: issue.accent }}
          >
            Read the receipts
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
