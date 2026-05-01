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
      <section className="border-b border-rule">
        <div className="mx-auto max-w-readable px-5 py-10 sm:px-8 sm:py-14">
          <p className="font-sans text-[12px] uppercase tracking-[0.22em] text-meta">
            <Link href="/" className="hover:text-rust">
              ← All categories
            </Link>
          </p>
          <h1 className="mt-4 font-display text-[34px] leading-[1.1] text-ink sm:text-[44px]">
            {cat.label}
          </h1>
          <p className="mt-5 font-serif text-[18px] leading-relaxed text-ink/85">
            {cat.contextLine}
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-5 py-10 sm:px-8 sm:py-16">
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

          <p className="mt-12 max-w-readable border-t border-rule pt-6 font-sans text-[13px] leading-relaxed text-meta">
            All claims on this page are quoted directly from the linked sources.
            To request a correction, see{" "}
            <Link
              href="/legal/"
              className="text-rust underline-offset-4 hover:underline"
            >
              /legal
            </Link>
            .
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
    <article className="border-t border-rule pt-8">
      <Link
        href={href}
        className="group block font-display text-[26px] leading-tight text-ink hover:text-rust sm:text-[30px]"
      >
        {title}
      </Link>

      <p className="mt-3 font-sans text-[13px] uppercase tracking-[0.12em] text-meta">
        {publication}
        <span className="px-2 text-rule">·</span>
        {type}
        <span className="px-2 text-rule">·</span>
        {date}
        <span className="px-2 text-rule">·</span>
        <span title="Credibility rating, 1–5. See /sources for the scale.">
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
          className="text-meta underline-offset-4 hover:text-ink hover:underline"
        >
          Source detail →
        </Link>
      </p>
    </article>
  );
}
