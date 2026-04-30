"use client";

import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { IssueCard } from "@/components/IssueCard";
import { PullQuote } from "@/components/PullQuote";
import { ShareBar } from "@/components/ShareBar";
import { Footer } from "@/components/Footer";
import { MobileNav } from "@/components/MobileNav";
import { getIssues } from "@/lib/issues";

export default function HomePage() {
  const issues = getIssues();
  const lead = issues[0];

  return (
    <div className="min-h-screen bg-neutral-light pb-20 md:pb-0">
      <SiteHeader variant="transparent" />
      <Hero />

      <main>
        <section
          id="issues"
          className="mx-auto max-w-screen-xl scroll-mt-20 px-5 py-16 sm:px-8 md:py-24"
        >
          <div className="mb-10 flex flex-col gap-3 md:mb-14 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-alert">
                The Five Issues
              </p>
              <h2 className="mt-2 max-w-2xl text-balance text-3xl font-bold leading-tight text-navy sm:text-4xl md:text-5xl">
                Voters deserve the full picture, not the campaign cut.
              </h2>
            </div>
            <p className="max-w-md text-pretty text-base text-slate">
              Each issue links to original reporting and public records. Tap
              any card to read the receipts.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {issues.map((issue, i) => (
              <IssueCard key={issue.slug} issue={issue} index={i} />
            ))}
          </div>
        </section>

        {lead && (
          <section className="bg-navy">
            <div className="mx-auto max-w-screen-xl px-5 py-16 sm:px-8 md:py-24">
              <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-rose-300">
                    What the court found
                  </p>
                  <h2 className="mt-2 text-balance text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
                    He runs on family court reform. The court ruled against
                    him.
                  </h2>
                  <p className="mt-5 text-pretty text-base leading-relaxed text-white/75 sm:text-lg">
                    Walker built his political brand on a story about being
                    wronged by the family court system. The 170-page court
                    order — and the reporting that followed it — describe
                    something very different.
                  </p>
                  <Link
                    href={`/issue/${lead.slug}`}
                    className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-navy transition hover:bg-white/90"
                  >
                    Read the full record
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.4"
                    >
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
                <PullQuote
                  size="lg"
                  quote={lead.pullQuote}
                  source={lead.pullQuoteSource}
                  accent="#fda4af"
                />
              </div>
            </div>
          </section>
        )}

        <section className="mx-auto max-w-screen-xl px-5 py-16 sm:px-8 md:py-24">
          <div className="mb-10">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-alert">
              Quick takeaways
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold leading-tight text-navy sm:text-4xl">
              In thirty seconds, here&apos;s what to know.
            </h2>
          </div>
          <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {issues.map((issue, idx) => (
              <li
                key={issue.slug}
                className="flex gap-4 rounded-2xl border border-border bg-white p-5 shadow-card"
              >
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg font-mono text-[12px] font-bold text-white"
                  style={{ backgroundColor: issue.accent }}
                >
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <p className="text-[12px] font-semibold uppercase tracking-wider text-slate">
                    {issue.shortLabel}
                  </p>
                  <p className="mt-1 text-pretty text-[15px] font-medium leading-snug text-navy">
                    {issue.takeaway}
                  </p>
                  <Link
                    href={`/issue/${issue.slug}`}
                    className="mt-2 inline-flex items-center gap-1 text-[13px] font-semibold"
                    style={{ color: issue.accent }}
                  >
                    Details
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.4"
                    >
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section
          id="share"
          className="bg-gradient-to-br from-alert to-rose-700 text-white"
        >
          <div className="mx-auto max-w-screen-xl px-5 py-16 sm:px-8 md:py-24">
            <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/80">
                  Spread the word
                </p>
                <h2 className="mt-2 text-balance text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
                  Most voters never see the full record. Make sure they do.
                </h2>
                <p className="mt-5 max-w-lg text-pretty text-base text-white/85 sm:text-lg">
                  Send this page to a neighbor, a family member, anyone in
                  House District 115. One link. Five issues. Fifteen public
                  sources.
                </p>
                <div className="mt-7">
                  <ShareBar variant="dark" />
                </div>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/10 p-6 text-white backdrop-blur sm:p-8">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/70">
                  Election day
                </p>
                <p className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
                  Know before you go.
                </p>
                <p className="mt-3 text-white/80">
                  Polls open early. Bring valid SC photo ID. Find your polling
                  place at{" "}
                  <a
                    href="https://scvotes.gov"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold underline"
                  >
                    scvotes.gov
                  </a>
                  .
                </p>
                <Link
                  href="/sources"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-alert transition hover:bg-white/90"
                >
                  See all 15 sources
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                  >
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileNav />
    </div>
  );
}
