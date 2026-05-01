import Link from "next/link";
import type { Article, Category } from "@/types/content";

interface TileProps {
  article: Article;
  category: Category;
  count: number;
}

export function Tile({ article, category, count }: TileProps) {
  return (
    <article className="group relative flex h-full flex-col bg-paper p-6 transition-colors duration-300 hover:bg-surface sm:p-8">
      <span
        aria-hidden
        className="pointer-events-none absolute right-3 top-2 select-none font-display text-[110px] leading-none text-blood/10 transition-colors duration-300 group-hover:text-blood/20 sm:text-[140px]"
      >
        &ldquo;
      </span>

      <p className="relative mb-5 font-sans text-[11px] uppercase tracking-[0.22em] text-blood">
        {category.label}
      </p>

      <blockquote className="relative font-display text-[22px] leading-[1.25] text-bone sm:text-[26px]">
        &ldquo;{article.quote}&rdquo;
      </blockquote>

      <p className="relative mt-6 font-sans text-[12px] uppercase tracking-[0.18em] text-ash">
        <cite className="not-italic">{article.attribution}</cite>
      </p>

      <div className="relative mt-7 flex items-center justify-between border-t border-rule pt-4 font-sans text-[13px]">
        <Link
          href={`/${category.slug}/`}
          className="text-blood underline-offset-4 hover:underline"
        >
          → Read {count} {count === 1 ? "article" : "articles"}
        </Link>
        <Link
          href={`/${category.slug}/${article.slug}/`}
          className="text-moss underline-offset-4 hover:text-bone hover:underline"
        >
          Source detail
        </Link>
      </div>
    </article>
  );
}
