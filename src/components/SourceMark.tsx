"use client";

import type { Article } from "@/types/article";
import { getDomain } from "@/lib/sources";
import { SourceLogo } from "./SourceLogo";

interface SourceMarkProps {
  article: Article;
  meta?: string;
  size?: "sm" | "md" | "lg";
  showDomain?: boolean;
  className?: string;
}

export function SourceMark({
  article,
  meta,
  size = "md",
  showDomain = false,
  className = "",
}: SourceMarkProps) {
  const domain = getDomain(article);

  const dim =
    size === "lg"
      ? { logo: 56, name: "text-lg sm:text-xl", meta: "text-[12px]" }
      : size === "sm"
        ? { logo: 24, name: "text-[13px]", meta: "text-[11px]" }
        : { logo: 36, name: "text-[15px]", meta: "text-[12px]" };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <SourceLogo
        source={article.source}
        domain={domain}
        size={dim.logo}
        rounded={size === "lg" ? "lg" : "md"}
      />
      <div className="min-w-0 leading-tight">
        <p
          className={`truncate font-bold tracking-tight text-navy ${dim.name}`}
        >
          {article.source}
        </p>
        <p className={`truncate text-slate ${dim.meta}`}>
          {meta ?? article.publicationType}
          {showDomain && domain ? (
            <>
              <span className="px-1 text-slate/50">·</span>
              <span className="font-mono">{domain}</span>
            </>
          ) : null}
        </p>
      </div>
    </div>
  );
}
