import Link from "next/link";
import { Tile } from "@/components/Tile";
import { SourceBrand } from "@/components/SourceBrand";
import { CATEGORIES } from "@/data/categories";
import { ARTICLES } from "@/data/articles";
import { uniquePublications } from "@/lib/sources";
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

const STATS = [
  { value: "170", label: "Page court order" },
  { value: "$40k+", label: "In disputed fees" },
  { value: "1", label: "Night in jail" },
  { value: String(ARTICLES.length), label: "Public sources" },
];

export default function HomePage() {
  const categoryCount = CATEGORIES.length;
  const sourceCount = ARTICLES.length;
  const publications = uniquePublications(ARTICLES);

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
      <section className="relative overflow-hidden bg-paper">
        <span
          aria-hidden
          className="pointer-events-none absolute -right-40 top-1/2 h-[640px] w-[640px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(227,80,90,0.18),transparent_60%)] blur-2xl"
        />
        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blood/20 to-transparent"
        />
        <div className="relative mx-auto max-w-screen-xl px-6 py-16 sm:px-10 sm:py-24 md:py-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-rule/80 bg-paper/40 px-3.5 py-1.5 font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-bone backdrop-blur">
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-blood" />
            Voter brief · SC House District 115
          </span>

          <h1 className="mt-8 max-w-5xl text-balance font-sans text-[42px] font-extrabold leading-[1.04] tracking-[-0.02em] text-bone sm:text-[64px] md:text-[80px] lg:text-[88px]">
            Before you vote for{" "}
            <span className="name-grad">Carlton Walker</span>, read the record.
          </h1>

          <p className="mt-8 max-w-2xl font-sans text-[17px] leading-relaxed text-ash sm:text-[19px]">
            A family court documented years of abuse. A civil suit alleges
            fraud and dodged child support. Fake AI-generated campaign images.
            A night in jail over code violations. Every claim on this site
            links to a public source — read it for yourself.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link
              href="#categories"
              className="group inline-flex items-center gap-2 rounded-full bg-bone px-5 py-3 font-sans text-[14px] font-semibold text-paper transition hover:bg-white"
            >
              See the {numberWord(categoryCount)} categories
              <span
                aria-hidden
                className="inline-flex h-5 w-5 items-center justify-center rounded-full text-paper transition-transform group-hover:translate-x-0.5"
              >
                →
              </span>
            </Link>
            <Link
              href="#all-sources"
              className="inline-flex items-center gap-2 rounded-full border border-rule bg-paper/40 px-5 py-3 font-sans text-[14px] font-semibold text-bone backdrop-blur hover:border-bone/40"
            >
              All {sourceCount} sources
            </Link>
          </div>

          <dl className="mt-16 grid grid-cols-2 gap-x-8 gap-y-6 sm:max-w-3xl sm:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="border-t border-rule pt-4">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-sans text-[28px] font-bold leading-none tracking-tight text-bone sm:text-[34px]">
                  {stat.value}
                </dd>
                <p className="mt-2 font-sans text-[11px] uppercase tracking-[0.18em] text-ash">
                  {stat.label}
                </p>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-bonePaper text-[#2a2f4a]">
        <div className="mx-auto max-w-screen-xl px-6 py-12 sm:px-10 sm:py-16">
          <p className="mb-8 text-center font-sans text-[11px] font-semibold uppercase tracking-[0.28em] text-[#6b6e83]">
            As reported by
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-5 sm:gap-x-10">
            {publications.map((pub) => (
              <li key={pub.name}>
                <SourceBrand
                  name={pub.name}
                  domain={pub.domain}
                  variant="light"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="categories"
        className="scroll-mt-12 border-y border-rule bg-void"
      >
        <div className="mx-auto max-w-screen-xl px-6 py-16 sm:px-10 sm:py-20">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.28em] text-blood">
              The record, by category
            </p>
            <p className="max-w-md font-sans text-[15px] leading-relaxed text-ash">
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

      <section className="border-b border-rule bg-paper">
        <div className="mx-auto max-w-readable px-6 py-14 sm:px-10 sm:py-20">
          <p className="mb-5 font-sans text-[11px] font-semibold uppercase tracking-[0.28em] text-blood">
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

      <section className="border-b border-rule bg-void">
        <div className="mx-auto max-w-readable px-6 py-14 sm:px-10 sm:py-20">
          <p className="mb-5 font-sans text-[11px] font-semibold uppercase tracking-[0.28em] text-blood">
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

      <section id="all-sources" className="scroll-mt-12 bg-paper">
        <div className="mx-auto max-w-screen-xl px-6 py-14 sm:px-10 sm:py-20">
          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.28em] text-blood">
              All {sourceCount} sources
            </p>
            <p className="max-w-md font-sans text-[15px] leading-relaxed text-ash">
              Grouped by primary category. Every claim on this site links back
              to one of these.
            </p>
          </div>

          <div className="space-y-12">
            {CATEGORIES.map((category) => {
              const inCategory = ARTICLES.filter(
                (a) => a.category === category.slug,
              );
              if (inCategory.length === 0) return null;

              return (
                <section key={category.slug}>
                  <header className="mb-5 flex flex-wrap items-baseline justify-between gap-3 border-b border-rule pb-3">
                    <h3 className="font-sans text-[18px] font-semibold tracking-tight text-bone sm:text-[20px]">
                      <Link
                        href={`/${category.slug}/`}
                        className="hover:text-blood"
                      >
                        {category.label}
                      </Link>
                    </h3>
                    <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-ash">
                      {inCategory.length}{" "}
                      {inCategory.length === 1 ? "source" : "sources"}
                    </p>
                  </header>

                  <ul className="divide-y divide-rule">
                    {inCategory.map((article) => (
                      <li key={article.id}>
                        <Link
                          href={`/${article.category}/${article.slug}/`}
                          className="group flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:gap-6"
                        >
                          <div className="sm:w-56 sm:shrink-0">
                            <SourceBrand
                              name={article.publication}
                              domain={
                                article.url
                                  ? new URL(article.url).hostname.replace(
                                      /^www\./,
                                      "",
                                    )
                                  : null
                              }
                              variant="dark"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="font-sans text-[16px] font-semibold leading-snug text-bone group-hover:text-blood sm:text-[17px]">
                              {article.title}
                            </p>
                            <p className="mt-1 font-sans text-[12px] uppercase tracking-[0.14em] text-ash">
                              {article.type}
                              <span className="px-2 text-rule">·</span>
                              {article.date}
                            </p>
                          </div>
                          <span
                            aria-hidden
                            className="font-sans text-[13px] text-ash transition-colors group-hover:text-blood"
                          >
                            →
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

function numberWord(n: number): string {
  const words: Record<number, string> = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
  };
  return words[n] ?? String(n);
}
