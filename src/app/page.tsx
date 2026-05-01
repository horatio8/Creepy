import Link from "next/link";
import { Tile } from "@/components/Tile";
import { CATEGORIES } from "@/data/categories";
import { ARTICLES } from "@/data/articles";
import type { CategorySlug } from "@/types/content";

// One representative quote per category drives the homepage tile grid.
const TILE_ARTICLE_IDS: Record<CategorySlug, string> = {
  custody: "cw-chronicles-i",
  fraud: "mcadams-complaint",
  "ai-imagery": "ai-candidate",
  property: "pc-jail",
  "campaign-conduct": "wcbd-yard-sign",
  "political-ties": "myrtle-gatch",
  "election-record": "berkeley-sweep",
};

// Walker's Answer to Complaint is also surfaced on the homepage as its own
// tile because the brief calls for the primary court filing to lead the
// fraud category alongside the reporting that referenced it.
const COURT_FILING_TILE_ID = "walker-answer";

export default function HomePage() {
  const tiles = CATEGORIES.map((category) => {
    const id = TILE_ARTICLE_IDS[category.slug];
    const article = ARTICLES.find((a) => a.id === id);
    if (!article) return null;
    const count = ARTICLES.filter((a) => a.category === category.slug).length;
    return { category, article, count };
  }).filter((t): t is NonNullable<typeof t> => Boolean(t));

  // Insert the court filing tile right after the fraud category tile.
  const courtFiling = ARTICLES.find((a) => a.id === COURT_FILING_TILE_ID);
  const fraudCategory = CATEGORIES.find((c) => c.slug === "fraud");
  const tilesWithFiling: Array<{
    key: string;
    article: (typeof ARTICLES)[number];
    category: (typeof CATEGORIES)[number];
    count: number;
  }> = [];
  for (const t of tiles) {
    tilesWithFiling.push({
      key: t.article.id,
      article: t.article,
      category: t.category,
      count: t.count,
    });
    if (t.category.slug === "fraud" && courtFiling && fraudCategory) {
      tilesWithFiling.push({
        key: courtFiling.id,
        article: courtFiling,
        category: fraudCategory,
        count: ARTICLES.filter((a) => a.category === "fraud").length,
      });
    }
  }

  return (
    <>
      <section className="border-b border-rule">
        <div className="mx-auto max-w-screen-xl px-5 py-12 sm:px-8 sm:py-20">
          <h1 className="max-w-4xl text-balance font-display text-[34px] leading-[1.1] text-ink sm:text-[44px] md:text-[56px]">
            Carlton Walker is a candidate for South Carolina House District 115.
            This is the public record.
          </h1>

          <p className="mt-6 max-w-2xl font-serif text-[19px] italic leading-relaxed text-ink/85 sm:text-[20px]">
            Every quotation on this page is reproduced verbatim from the source
            named beneath it. Click any tile to read the full article.
          </p>

          <p className="mt-6 max-w-2xl font-sans text-[14px] leading-relaxed text-meta">
            The reporting and filings below concern Walker&apos;s prior 2024
            campaign for District 15 and the underlying personal history that
            surfaced during it.
          </p>

          <p className="mt-8 font-sans text-[12px] uppercase tracking-[0.18em] text-meta">
            <Link
              href="#categories"
              className="hover:text-rust"
            >
              ↓ Browse the seven categories
            </Link>
          </p>
        </div>
      </section>

      <section id="categories" className="scroll-mt-12 border-b border-rule">
        <div className="mx-auto max-w-screen-xl px-5 py-12 sm:px-8 sm:py-16">
          <p className="mb-8 font-sans text-[12px] uppercase tracking-[0.22em] text-meta">
            The record, by category
          </p>
          <div className="grid grid-cols-1 gap-px border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-4">
            {tilesWithFiling.map((t) => (
              <Tile
                key={t.key}
                article={t.article}
                category={t.category}
                count={t.count}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-rule bg-cream/40">
        <div className="mx-auto max-w-readable px-5 py-12 sm:px-8 sm:py-16">
          <p className="mb-4 font-sans text-[12px] uppercase tracking-[0.22em] text-meta">
            How to read this site
          </p>
          <p className="font-serif text-[19px] leading-relaxed text-ink">
            Every quotation on this site is reproduced verbatim from the named
            source. Links to the original articles and court filings are
            provided beneath each entry. The site does not characterize
            Mr. Walker; it presents what other sources have said. If a quote is
            later corrected or retracted by its publisher, this site will
            reflect that update on the{" "}
            <Link
              href="/sources/"
              className="text-rust underline-offset-4 hover:underline"
            >
              Sources &amp; Methodology
            </Link>{" "}
            page.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-readable px-5 py-12 sm:px-8 sm:py-16">
          <p className="mb-4 font-sans text-[12px] uppercase tracking-[0.22em] text-meta">
            From the candidate&apos;s own site
          </p>
          <figure className="border-l-2 border-rust pl-5 font-serif">
            <blockquote className="text-[19px] italic leading-relaxed text-ink">
              &ldquo;After I stopped a judge from being promoted in 2024, that
              judge retaliated by taking away my right to see my daughter.&rdquo;
            </blockquote>
            <figcaption className="mt-3 font-sans text-[13px] uppercase tracking-[0.12em] text-meta">
              <cite className="not-italic">
                votecarltonwalker.com — Walker&apos;s campaign site
              </cite>
            </figcaption>
          </figure>
          <p className="mt-5 font-sans text-[13px] leading-relaxed text-meta">
            We reproduce the candidate&apos;s framing in his own words alongside
            the documented record. See{" "}
            <Link
              href="/sources/"
              className="text-rust underline-offset-4 hover:underline"
            >
              Sources &amp; Methodology
            </Link>{" "}
            for the full statement and context.
          </p>
        </div>
      </section>
    </>
  );
}
