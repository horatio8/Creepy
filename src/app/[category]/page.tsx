import { notFound } from "next/navigation";
import Link from "next/link";
import { Quote } from "@/components/Quote";
import { CATEGORIES, getCategory } from "@/data/categories";
import { getArticlesByCategory } from "@/lib/articles";
import type { CategorySlug } from "@/types/content";

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ category: c.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { category: string };
}) {
  const cat = getCategory(params.category as CategorySlug);
  if (!cat) return {};
  return { title: cat.label };
}

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const cat = getCategory(params.category as CategorySlug);
  if (!cat) notFound();

  const articles = getArticlesByCategory(cat.slug);

  return (
    <>
      <section className="relative overflow-hidden border-b border-rule bg-paper">
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 20% 0%, rgba(200,58,58,0.07), transparent 55%)",
          }}
        />
        <div className="relative mx-auto max-w-readable px-5 py-12 sm:px-8 sm:py-20">
          <p className="font-sans text-[11px] uppercase tracking-[0.28em] text-ash">
            <Link href="/" className="hover:text-blood">
              ← All categories
            </Link>
          </p>
          <p className="mt-6 font-sans text-[11px] uppercase tracking-[0.28em] text-blood">
            <span aria-hidden className="mr-3">◆</span>
            Category {String(CATEGORIES.findIndex((c) => c.slug === cat.slug) + 1).padStart(2, "0")}
          </p>
          <h1 className="mt-3 font-display text-[40px] leading-[1.05] text-bone sm:text-[56px]">
            {cat.label}
          </h1>
          <p className="mt-6 font-serif text-[18px] italic leading-relaxed text-ash">
            {cat.contextLine}
          </p>
        </div>
      </section>

      <section className="bg-void">
        <div className="mx-auto max-w-3xl px-5 py-12 sm:px-8 sm:py-16">
          <ul className="space-y-12">
            {articles.map((article) => (
              <li key={article.id}>
                <ArticleCard
                  href={`/${cat.slug}/${article.slug}/`}
                  title={article.title}
                  publication={article.publication}
                  type={article.type}
                  date={article.date}
                  credibility={article.credibility}
                  quote={article.quote}
                  attribution={article.attribution}
                  documentNote={article.documentNote}
                  externalUrl={article.url}
                  archiveUrl={article.archiveUrl}
                />
              </li>
            ))}
          </ul>

          <p className="mt-14 max-w-readable border-t border-rule pt-6 font-sans text-[13px] leading-relaxed text-moss">
            All claims on this page are quoted directly from the linked
            sources.
          </p>
        </div>
      </section>
    </>
  );
}

function ArticleCard({
  href,
  title,
  publication,
  type,
  date,
  credibility,
  quote,
  attribution,
  documentNote,
  externalUrl,
  archiveUrl,
}: {
  href: string;
  title: string;
  publication: string;
  type: string;
  date: string;
  credibility: number;
  quote: string;
  attribution: string;
  documentNote: string;
  externalUrl?: string;
  archiveUrl?: string;
}) {
  return (
    <article className="border-t border-rule pt-10">
      <Link
        href={href}
        className="group block font-display text-[28px] leading-[1.15] text-bone hover:text-blood sm:text-[32px]"
      >
        {title}
      </Link>

      <p className="mt-3 font-sans text-[12px] uppercase tracking-[0.16em] text-ash">
        {publication}
        <span className="px-2 text-rule">·</span>
        {type}
        <span className="px-2 text-rule">·</span>
        {date}
        <span className="px-2 text-rule">·</span>
        <span title="Credibility rating, 1–5.">
          Credibility {credibility}/5
        </span>
      </p>

      <div className="mt-5">
        <Quote
          quote={quote}
          attribution={attribution}
          documentNote={documentNote}
          href={externalUrl || undefined}
          archiveHref={archiveUrl}
        />
      </div>

      <p className="mt-3 font-sans text-[13px]">
        <Link
          href={href}
          className="text-moss underline-offset-4 hover:text-bone hover:underline"
        >
          Source detail →
        </Link>
      </p>
    </article>
  );
}
