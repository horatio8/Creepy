import Link from "next/link";
import { Tile } from "@/components/Tile";
import { CATEGORIES } from "@/data/categories";
import { ARTICLES } from "@/data/articles";
import type { CategorySlug } from "@/types/content";

const TILE_ARTICLE_IDS: Record<CategorySlug, string> = {
  custody: "cw-chronicles-i",
  fraud: "mcadams-complaint",
  "ai-imagery": "ai-candidate",
  property: "pc-jail",
  "campaign-conduct": "wcbd-yard-sign",
  "political-ties": "myrtle-gatch",
  "election-record": "berkeley-sweep",
};

const COURT_FILING_TILE_ID = "walker-answer";

export default function HomePage() {
  const tiles = CATEGORIES.map((category) => {
    const id = TILE_ARTICLE_IDS[category.slug];
    const article = ARTICLES.find((a) => a.id === id);
    if (!article) return null;
    const count = ARTICLES.filter((a) => a.category === category.slug).length;
    return { category, article, count };
  }).filter((t): t is NonNullable<typeof t> => Boolean(t));

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
      <section className="relative overflow-hidden border-b border-rule bg-paper">
        <span
          aria-hidden
          className="pointer-events-none absolute -top-20 left-1/2 h-80 w-[120%] -translate-x-1/2 rounded-[100%] bg-blood/[0.08] blur-3xl"
        />
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(200,58,58,0.08), transparent 55%)",
          }}
        />
        <div className="relative mx-auto max-w-screen-xl px-5 py-16 sm:px-8 sm:py-24 md:py-28">
          <p className="mb-8 font-sans text-[11px] uppercase tracking-[0.32em] text-blood">
            <span aria-hidden className="mr-3">◆</span>
            A sourced index
          </p>

          <h1 className="max-w-5xl text-balance font-display text-[40px] leading-[1.04] text-bone sm:text-[56px] md:text-[72px]">
            Carlton Walker is a candidate for South Carolina House District 115.{" "}
            <em className="block text-blood/95 italic haunt sm:inline">
              This is the public record.
            </em>
          </h1>

          <p className="mt-8 max-w-2xl font-serif text-[19px] italic leading-relaxed text-ash sm:text-[21px]">
            Every quotation on this page is reproduced verbatim from the source
            named beneath it. Click any tile to read the full article.
          </p>

          <p className="mt-6 max-w-2xl font-sans text-[13px] leading-relaxed text-moss">
            The reporting and filings below concern Walker&apos;s prior 2024
            campaign for District 15 and the underlying personal history that
            surfaced during it.
          </p>

          <p className="mt-10 font-sans text-[11px] uppercase tracking-[0.28em] text-ash">
            <Link href="#categories" className="hover:text-blood">
              ↓ Browse the seven categories
            </Link>
          </p>
        </div>
      </section>

      <Ornament />

      <section
        id="categories"
        className="scroll-mt-12 border-b border-rule bg-void"
      >
        <div className="mx-auto max-w-screen-xl px-5 py-14 sm:px-8 sm:py-20">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <p className="font-sans text-[11px] uppercase tracking-[0.28em] text-blood">
              The record, by category
            </p>
            <p className="max-w-md font-serif text-[15px] italic leading-relaxed text-ash">
              Eight tiles. Each is a verbatim quotation from a named source.
            </p>
          </div>
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

      <Ornament />

      <section className="border-b border-rule bg-paper">
        <div className="mx-auto max-w-readable px-5 py-14 sm:px-8 sm:py-20">
          <p className="mb-5 font-sans text-[11px] uppercase tracking-[0.28em] text-blood">
            How to read this site
          </p>
          <p className="font-serif text-[20px] leading-relaxed text-bone">
            Every quotation on this site is reproduced verbatim from the named
            source. Links to the original articles and court filings are
            provided beneath each entry. The site does not characterize
            Mr. Walker; it presents what other sources have said.
          </p>
        </div>
      </section>

      <section className="bg-void">
        <div className="mx-auto max-w-readable px-5 py-14 sm:px-8 sm:py-20">
          <p className="mb-5 font-sans text-[11px] uppercase tracking-[0.28em] text-blood">
            From the candidate&apos;s own site
          </p>
          <figure className="border-l-2 border-blood pl-6 font-serif">
            <blockquote className="text-[22px] italic leading-relaxed text-bone sm:text-[24px]">
              &ldquo;After I stopped a judge from being promoted in 2024, that
              judge retaliated by taking away my right to see my daughter.&rdquo;
            </blockquote>
            <figcaption className="mt-4 font-sans text-[12px] uppercase tracking-[0.18em] text-ash">
              <cite className="not-italic">
                votecarltonwalker.com — Walker&apos;s campaign site
              </cite>
            </figcaption>
          </figure>
          <p className="mt-6 font-sans text-[13px] leading-relaxed text-moss">
            We reproduce the candidate&apos;s framing in his own words alongside
            the documented record.
          </p>
        </div>
      </section>
    </>
  );
}

function Ornament() {
  return (
    <div
      aria-hidden
      className="flex items-center justify-center bg-paper py-6"
    >
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-rule" />
      <span className="px-4 font-display text-[14px] text-blood/60">◆</span>
      <span className="h-px w-16 bg-gradient-to-l from-transparent to-rule" />
    </div>
  );
}
