import { notFound } from "next/navigation";
import Link from "next/link";
import { Quote } from "@/components/Quote";
import { CATEGORIES, getCategory } from "@/data/categories";
import {
  getArticleBySlug,
  getArticleParams,
  getArticlesByCategory,
} from "@/lib/articles";
import type { CategorySlug } from "@/types/content";

export function generateStaticParams() {
  return getArticleParams();
}

export function generateMetadata({
  params,
}: {
  params: { category: string; slug: string };
}) {
  const article = getArticleBySlug(
    params.category as CategorySlug,
    params.slug,
  );
  if (!article) return {};
  return {
    title: article.title,
    description: `${article.publication} · ${article.type} · ${article.date}`,
  };
}

export default function ArticlePage({
  params,
}: {
  params: { category: string; slug: string };
}) {
  const cat = getCategory(params.category as CategorySlug);
  const article = cat
    ? getArticleBySlug(cat.slug, params.slug)
    : undefined;
  if (!cat || !article) notFound();

  const sameCategory = getArticlesByCategory(cat.slug).filter(
    (a) => a.id !== article.id,
  );

  return (
    <>
      <section className="border-b border-rule">
        <div className="mx-auto max-w-readable px-5 py-10 sm:px-8 sm:py-14">
          <p className="font-sans text-[12px] uppercase tracking-[0.22em] text-meta">
            <Link href={`/${cat.slug}/`} className="hover:text-rust">
              ← {cat.label}
            </Link>
          </p>
          <h1 className="mt-4 font-display text-[30px] leading-tight text-ink sm:text-[40px]">
            {article.title}
          </h1>
          <p className="mt-4 font-sans text-[13px] uppercase tracking-[0.12em] text-meta">
            {article.publication}
            <span className="px-2 text-rule">·</span>
            {article.type}
            <span className="px-2 text-rule">·</span>
            {article.date}
            <span className="px-2 text-rule">·</span>
            <span title="Credibility rating, 1–5. See /sources for the scale.">
              Credibility {article.credibility}/5
            </span>
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-readable px-5 py-10 sm:px-8 sm:py-14">
          <Quote
            quote={article.quote}
            attribution={article.attribution}
            documentNote={article.documentNote}
            size="lg"
            href={article.url || undefined}
            hrefLabel="Read full source"
            archiveHref={article.archiveUrl}
          />

          <div className="mt-10 border-t border-rule pt-6 font-sans text-[13px] leading-relaxed text-meta">
            <p>
              The text inside the quotation marks above is reproduced verbatim
              from the source named beneath it. This site does not paraphrase,
              summarize, or characterize the source&apos;s content. To request a
              correction, see{" "}
              <Link
                href="/legal/"
                className="text-rust underline-offset-4 hover:underline"
              >
                /legal
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {sameCategory.length > 0 && (
        <section className="border-t border-rule">
          <div className="mx-auto max-w-readable px-5 py-10 sm:px-8 sm:py-14">
            <p className="mb-4 font-sans text-[12px] uppercase tracking-[0.22em] text-meta">
              More in {cat.label}
            </p>
            <ul className="space-y-3">
              {sameCategory.map((a) => (
                <li key={a.id} className="border-t border-rule pt-3">
                  <Link
                    href={`/${cat.slug}/${a.slug}/`}
                    className="font-display text-[20px] leading-snug text-ink hover:text-rust"
                  >
                    {a.title}
                  </Link>
                  <p className="mt-1 font-sans text-[12px] uppercase tracking-[0.12em] text-meta">
                    {a.publication}
                    <span className="px-2 text-rule">·</span>
                    {a.date}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="border-t border-rule">
        <div className="mx-auto max-w-readable px-5 py-10 sm:px-8 sm:py-14">
          <p className="mb-4 font-sans text-[12px] uppercase tracking-[0.22em] text-meta">
            Other categories
          </p>
          <ul className="grid grid-cols-2 gap-2 font-sans text-[13px]">
            {CATEGORIES.filter((c) => c.slug !== cat.slug).map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/${c.slug}/`}
                  className="block border border-rule bg-paper px-3 py-2 hover:border-rust hover:text-rust"
                >
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
