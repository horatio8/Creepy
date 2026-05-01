import Link from "next/link";
import { ARTICLES, WALKER_OWN_STATEMENT } from "@/data/articles";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sources & methodology",
  description:
    "How this site selects sources, what the credibility scale means, the full list of cited outlets and primary documents, and Walker's own framing in his own words.",
};

const CREDIBILITY_SCALE: Array<{ value: number; label: string; note: string }> =
  [
    {
      value: 5,
      label: "Primary record / public document",
      note: "Court filings, Ballotpedia profiles, official campaign-finance records.",
    },
    {
      value: 4,
      label: "Established daily / long-form investigation",
      note: "Daily-newspaper reporting; long-form work that cites primary documents.",
    },
    {
      value: 3,
      label: "Local broadcast / staff-reported beat coverage",
      note: "Local TV news, alt-weekly election guides, working political press.",
    },
    {
      value: 2,
      label: "Opinion column / editorial framing",
      note: "Columns and opinion pieces by named authors.",
    },
    {
      value: 1,
      label: "Single-author or aggregator coverage",
      note: "Aggregator posts and items without independent reporting.",
    },
  ];

interface SourceRow {
  outlet: string;
  type: string;
  count: number;
  note: string;
}

function buildSourceTable(): SourceRow[] {
  const map = new Map<string, SourceRow>();
  for (const a of ARTICLES) {
    const existing = map.get(a.publication);
    if (existing) {
      existing.count += 1;
    } else {
      map.set(a.publication, {
        outlet: a.publication,
        type: a.type,
        count: 1,
        note: SOURCE_NOTES[a.publication] ?? "",
      });
    }
  }
  return Array.from(map.values()).sort(
    (a, b) => b.count - a.count || a.outlet.localeCompare(b.outlet),
  );
}

const SOURCE_NOTES: Record<string, string> = {
  "Carolina Courier (Substack)":
    "Substack publication. Long-form, editorial in framing. Multiple cites. Treated as one voice among many; primary documents and mainstream press lead the record.",
  "S.C. Court of Common Pleas (Charleston County)":
    "Public-record court filings retrieved through the South Carolina Judicial Branch case-search system.",
  FITSNews:
    "South Carolina political news site. Interview-format coverage.",
  "WCBD News 2": "Charleston NBC affiliate. Local broadcast news beat.",
  "ABC News 4 / Holy City Sinner":
    "Charleston ABC affiliate, with reposts via Holy City Sinner.",
  "Post and Courier":
    "Charleston daily newspaper. Documentary daily-press reporting.",
  "MyrtleBeachSC News":
    "Regional outlet. Opinion column referencing public records.",
  "Local SC News": "General-election results coverage, November 2024.",
  "Live 5 News": "Charleston CBS affiliate. Candidate-profile video segment.",
  "Charleston City Paper": "Charleston alt-weekly. Election guide.",
  Ballotpedia: "Reference encyclopedia of US elections.",
  "Transparency USA":
    "Nonpartisan campaign-finance aggregator of state-level disclosures.",
};

const PRIMARY_DOCS = [
  {
    label: "S.C. Judicial Branch — Public Index (case search)",
    url: "https://www.sccourts.org/caseSearch/",
    note: "Search for Charleston County Court of Common Pleas filings, including the Defendant's Answer in Walker v. McAdams.",
  },
  {
    label: "Charleston County Family Court — case 2019-DR-10-1147",
    url: "https://www.sccourts.org/caseSearch/",
    note: "Underlying custody matter; Amended Final Order (170 pages) referenced in Carolina Courier reporting.",
  },
  {
    label: "Ballotpedia — Carlton Walker",
    url: "https://ballotpedia.org/Carlton_Walker",
    note: "Reference profile and campaign-finance summary.",
  },
  {
    label: "Transparency USA — Carlton Walker",
    url: "https://www.transparencyusa.org",
    note: "Itemized state-level campaign-finance filings.",
  },
  {
    label: "votecarltonwalker.com",
    url: "https://votecarltonwalker.com",
    note: "The candidate's own campaign site. Linked here so visitors can read his framing in his own words.",
  },
];

export default function SourcesPage() {
  const rows = buildSourceTable();

  return (
    <>
      <section className="border-b border-rule">
        <div className="mx-auto max-w-readable px-5 py-10 sm:px-8 sm:py-14">
          <p className="font-sans text-[12px] uppercase tracking-[0.22em] text-meta">
            <Link href="/" className="hover:text-rust">
              ← Home
            </Link>
          </p>
          <h1 className="mt-4 font-display text-[34px] leading-tight text-ink sm:text-[44px]">
            Sources &amp; methodology
          </h1>
          <p className="mt-5 font-serif text-[19px] leading-relaxed text-ink/85">
            How this site selects sources, what the credibility scale means,
            and the full list of cited outlets and primary documents.
          </p>
        </div>
      </section>

      <section className="border-b border-rule">
        <div className="mx-auto max-w-readable px-5 py-10 sm:px-8 sm:py-14">
          <h2 className="font-display text-[24px] text-ink">Methodology</h2>
          <div className="mt-4 space-y-4 font-serif text-[18px] leading-relaxed text-ink/90">
            <p>
              Articles were selected based on their relation to Carlton
              Walker&apos;s 2024 candidacy for South Carolina House District 15
              and the personal history that surfaced during it. The site
              reproduces a single short, verbatim quotation from each source.
              No quote on the site is paraphrased or summarized.
            </p>
            <p>
              Carolina Courier, a Substack publication, is the source of
              several long-form investigations indexed here. The brief
              underlying this site flags Carolina Courier as &ldquo;editorial
              in framing.&rdquo; The site treats it as one voice among many,
              and leads — wherever possible — with primary documents (court
              filings, Ballotpedia, public records) and established daily
              press.
            </p>
            <p>
              Each entry carries a credibility rating from 1 to 5. The scale
              is below.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-rule">
        <div className="mx-auto max-w-readable px-5 py-10 sm:px-8 sm:py-14">
          <h2 className="font-display text-[24px] text-ink">
            Credibility scale
          </h2>
          <ul className="mt-5 divide-y divide-rule border border-rule bg-paper">
            {CREDIBILITY_SCALE.map((row) => (
              <li
                key={row.value}
                className="grid grid-cols-[auto_1fr] gap-x-4 px-4 py-3 sm:px-5 sm:py-4"
              >
                <span className="font-display text-[20px] text-rust">
                  {row.value}
                </span>
                <div>
                  <p className="font-serif text-[17px] text-ink">
                    {row.label}
                  </p>
                  <p className="mt-1 font-sans text-[13px] text-meta">
                    {row.note}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-rule">
        <div className="mx-auto max-w-readable px-5 py-10 sm:px-8 sm:py-14">
          <h2 className="font-display text-[24px] text-ink">Source list</h2>
          <p className="mt-3 font-sans text-[13px] text-meta">
            All outlets cited on this site, in order of frequency.
          </p>
          <div className="mt-5 overflow-x-auto border border-rule bg-paper">
            <table className="w-full font-sans text-[14px]">
              <thead className="bg-cream/60 text-left text-[12px] uppercase tracking-[0.12em] text-meta">
                <tr>
                  <th className="px-4 py-3">Outlet</th>
                  <th className="px-4 py-3">Type</th>
                  <th className="px-4 py-3 text-right">Cites</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-rule text-ink">
                {rows.map((row) => (
                  <tr key={row.outlet} className="align-top">
                    <td className="px-4 py-3 font-medium">
                      {row.outlet}
                      {row.note && (
                        <p className="mt-1 font-serif text-[14px] font-normal italic leading-snug text-meta">
                          {row.note}
                        </p>
                      )}
                    </td>
                    <td className="px-4 py-3 text-meta">{row.type}</td>
                    <td className="px-4 py-3 text-right tabular-nums">
                      {row.count}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="border-b border-rule">
        <div className="mx-auto max-w-readable px-5 py-10 sm:px-8 sm:py-14">
          <h2 className="font-display text-[24px] text-ink">
            Primary documents
          </h2>
          <p className="mt-3 font-sans text-[13px] text-meta">
            Direct links to the underlying records. These lead the site&apos;s
            authority.
          </p>
          <ul className="mt-5 space-y-5">
            {PRIMARY_DOCS.map((doc) => (
              <li key={doc.label} className="border-t border-rule pt-4">
                <a
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display text-[20px] text-ink hover:text-rust"
                >
                  {doc.label}
                </a>
                <p className="mt-1 font-mono text-[12px] text-meta">
                  {doc.url}
                </p>
                <p className="mt-2 font-serif text-[16px] leading-relaxed text-ink/85">
                  {doc.note}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-rule">
        <div className="mx-auto max-w-readable px-5 py-10 sm:px-8 sm:py-14">
          <h2 className="font-display text-[24px] text-ink">
            From the candidate, in his own words
          </h2>
          <p className="mt-3 font-sans text-[13px] text-meta">
            We quote Walker&apos;s framing alongside the documented record so
            visitors can read both.
          </p>
          <figure className="mt-5 border-l-2 border-rust pl-5 font-serif">
            <blockquote className="text-[20px] italic leading-relaxed text-ink">
              &ldquo;{WALKER_OWN_STATEMENT.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-3 font-sans text-[13px] uppercase tracking-[0.12em] text-meta">
              <cite className="not-italic">
                {WALKER_OWN_STATEMENT.attribution}
              </cite>
            </figcaption>
          </figure>
          <p className="mt-5 font-sans text-[13px]">
            <a
              href={WALKER_OWN_STATEMENT.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-rust underline-offset-4 hover:underline"
            >
              → Visit votecarltonwalker.com
            </a>
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-readable px-5 py-10 sm:px-8 sm:py-14">
          <h2 className="font-display text-[24px] text-ink">Corrections log</h2>
          <p className="mt-3 font-serif text-[18px] leading-relaxed text-ink/85">
            No corrections have been logged.
          </p>
          <p className="mt-3 font-sans text-[13px] leading-relaxed text-meta">
            If a quote on this site is shown to be inaccurate or has been
            retracted by its original publisher, the change and date will be
            recorded here. To request a correction, see{" "}
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
