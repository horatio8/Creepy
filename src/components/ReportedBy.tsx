"use client";

import { SourceLogo } from "./SourceLogo";
import { uniquePublications } from "@/lib/sources";
import { useArticles } from "@/hooks/useArticles";

interface ReportedByProps {
  variant?: "light" | "dark";
}

export function ReportedBy({ variant = "light" }: ReportedByProps) {
  const articles = useArticles();
  const pubs = uniquePublications(articles);

  if (pubs.length === 0) return null;

  const dark = variant === "dark";

  return (
    <section
      aria-labelledby="reported-by"
      className={dark ? "bg-navy" : "border-y border-border bg-white"}
    >
      <div className="mx-auto max-w-screen-xl px-5 py-8 sm:px-8 sm:py-10">
        <p
          id="reported-by"
          className={`mb-5 text-center text-[11px] font-bold uppercase tracking-[0.22em] ${
            dark ? "text-white/65" : "text-slate"
          }`}
        >
          As reported by
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-4 sm:gap-x-8">
          {pubs.map((pub) => (
            <li
              key={pub.name}
              className={`flex items-center gap-2.5 ${
                dark ? "text-white/85" : "text-navy/85"
              }`}
            >
              <SourceLogo
                source={pub.name}
                domain={pub.domain}
                size={32}
                rounded="md"
              />
              <span className="text-sm font-semibold tracking-tight">
                {pub.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
