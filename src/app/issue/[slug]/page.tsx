"use client";

import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import { Footer } from "@/components/Footer";
import { MobileNav } from "@/components/MobileNav";
import { PullQuote } from "@/components/PullQuote";
import { ShareBar } from "@/components/ShareBar";
import { IssueIcon } from "@/components/IssueIcon";
import { SourceMark } from "@/components/SourceMark";
import { getIssue, getIssues } from "@/lib/issues";
import { useArticles } from "@/hooks/useArticles";
import { formatArticleDate } from "@/lib/dates";

export default function IssuePage() {
  const params = useParams<{ slug: string }>();
  const issue = getIssue(params?.slug ?? "");
  const articles = useArticles();

  if (!issue) {
    notFound();
  }

  const linked = issue.articleIds
    .map((id) => articles.find((a) => a.id === id))
    .filter((a): a is NonNullable<typeof a> => Boolean(a));

  const others = getIssues().filter((i) => i.slug !== issue.slug);
  const currentIndex = getIssues().findIndex((i) => i.slug === issue.slug);
  const next = getIssues()[(currentIndex + 1) % getIssues().length];

  return (
    <div className="min-h-screen bg-neutral-light pb-20 md:pb-0">
      <SiteHeader />

      <header
        className="relative overflow-hidden text-white"
        style={{
          background: `linear-gradient(135deg, #1a1f36 0%, ${issue.accent} 220%)`,
        }}
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, rgba(255,255,255,.6) 0, transparent 40%)",
          }}
        />
        <div className="relative mx-auto max-w-screen-md px-5 pb-12 pt-10 sm:px-8 md:pb-20 md:pt-16">
          <Link
            href="/#issues"
            className="inline-flex items-center gap-1 text-sm font-medium text-white/80 hover:text-white"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            All issues
          </Link>

          <div className="mt-6 flex items-center gap-3">
            <span
              className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 backdrop-blur"
              style={{ color: "#ffffff" }}
            >
              <IssueIcon name={issue.icon} size={24} />
            </span>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/80">
                Issue {String(issue.order).padStart(2, "0")}
              </p>
              <p className="text-sm font-medium text-white/85">
                {issue.shortLabel}
              </p>
            </div>
          </div>

          <h1 className="mt-6 text-balance text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            {issue.title}
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-white/85 sm:text-lg">
            {issue.headline}
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-screen-md px-5 py-12 sm:px-8 md:py-16">
        <article className="space-y-10">
          <section className="text-[17px] leading-relaxed text-navy/90">
            <p className="text-pretty">{issue.summary}</p>
          </section>

          <PullQuote
            quote={issue.pullQuote}
            source={issue.pullQuoteSource}
            accent={issue.accent}
            size="lg"
          />

          <section>
            <h2 className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-slate">
              The facts
            </h2>
            <ul className="space-y-2.5">
              {issue.keyFacts.map((fact) => (
                <li key={fact} className="flex gap-3">
                  <span
                    aria-hidden
                    className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ backgroundColor: issue.accent }}
                  />
                  <span className="text-pretty text-[16px] leading-relaxed text-navy">
                    {fact}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <section
            className="rounded-2xl border-l-4 bg-white p-5 shadow-card sm:p-6"
            style={{ borderLeftColor: issue.accent }}
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate">
              Why it matters
            </p>
            <p className="mt-2 text-pretty text-lg font-semibold leading-snug text-navy">
              {issue.takeaway}
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-slate">
              Sources for this issue
            </h2>
            <div className="grid gap-3">
              {linked.map((article) => (
                <Link
                  key={article.id}
                  href={`/article/${article.id}`}
                  className="group flex flex-col gap-3 rounded-xl border border-border bg-white p-4 shadow-card transition hover:border-navy/30 hover:shadow-cardHover sm:p-5"
                >
                  <SourceMark
                    article={article}
                    size="md"
                    meta={`${article.publicationType} · ${formatArticleDate(article.datePublished)}`}
                  />
                  <p className="text-pretty text-[16px] font-semibold leading-snug text-navy group-hover:text-alert">
                    {article.title}
                  </p>
                </Link>
              ))}
            </div>
          </section>

          <section className="rounded-2xl bg-navy p-6 text-white sm:p-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/70">
              Pass it on
            </p>
            <p className="mt-2 text-balance text-xl font-semibold leading-snug sm:text-2xl">
              Most voters in District 115 will never see this. Help them.
            </p>
            <div className="mt-5">
              <ShareBar variant="dark" title={`${issue.title} — The Walker Record`} />
            </div>
          </section>
        </article>

        {next && (
          <Link
            href={`/issue/${next.slug}`}
            className="mt-12 flex items-center justify-between rounded-2xl border border-border bg-white p-5 shadow-card transition hover:border-navy/30 hover:shadow-cardHover sm:p-6"
          >
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate">
                Next issue
              </p>
              <p className="mt-1 text-pretty text-lg font-semibold leading-snug text-navy">
                {next.title}
              </p>
            </div>
            <span
              className="ml-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white"
              style={{ backgroundColor: next.accent }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </span>
          </Link>
        )}

        <div className="mt-8 flex flex-wrap gap-2">
          {others.slice(0, 4).map((o) => (
            <Link
              key={o.slug}
              href={`/issue/${o.slug}`}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3 py-1.5 text-[12px] font-medium text-slate transition hover:border-navy/30 hover:text-navy"
            >
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: o.accent }}
              />
              {o.shortLabel}
            </Link>
          ))}
        </div>
      </main>

      <Footer />
      <MobileNav />
    </div>
  );
}
