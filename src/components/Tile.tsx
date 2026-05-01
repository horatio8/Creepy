import Link from "next/link";
import type { Article, Category } from "@/types/content";

interface TileProps {
  article: Article;
  category: Category;
  count: number;
}

export function Tile({ article, category, count }: TileProps) {
  return (
    <article className="flex h-full flex-col border border-rule bg-paper p-6 transition-colors hover:bg-cream/60 sm:p-7">
      <p className="mb-4 font-sans text-[12px] uppercase tracking-[0.18em] text-rust">
        {category.label}
      </p>

      <blockquote className="font-serif text-[19px] leading-snug text-ink sm:text-[21px]">
        <span className="font-display text-rust">&ldquo;</span>
        {article.quote}
        <span className="font-display text-rust">&rdquo;</span>
      </blockquote>

      <p className="mt-5 font-sans text-[13px] uppercase tracking-[0.12em] text-meta">
        <cite className="not-italic">{article.attribution}</cite>
      </p>

      <div className="mt-6 flex items-center justify-between border-t border-rule pt-4 font-sans text-[13px]">
        <Link
          href={`/${category.slug}/`}
          className="text-rust underline-offset-4 hover:underline"
        >
          → Read {count} {count === 1 ? "article" : "articles"}
        </Link>
        <Link
          href={`/${category.slug}/${article.slug}/`}
          className="text-meta underline-offset-4 hover:text-ink hover:underline"
        >
          Source detail
        </Link>
      </div>
    </article>
  );
}
