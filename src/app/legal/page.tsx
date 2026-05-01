import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal & corrections",
  description:
    "Disclaimers, the corrections policy, and the editorial rules that govern every quotation on this site.",
};

export default function LegalPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-rule bg-paper">
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 30% 0%, rgba(200,58,58,0.08), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-readable px-5 py-12 sm:px-8 sm:py-20">
          <p className="font-sans text-[11px] uppercase tracking-[0.28em] text-ash">
            <Link href="/" className="hover:text-blood">
              ← Home
            </Link>
          </p>
          <p className="mt-6 font-sans text-[11px] uppercase tracking-[0.28em] text-blood">
            <span aria-hidden className="mr-3">◆</span>
            About the record
          </p>
          <h1 className="mt-3 font-display text-[40px] leading-[1.05] text-bone sm:text-[56px]">
            Legal &amp; corrections
          </h1>
          <p className="mt-6 font-serif text-[19px] italic leading-relaxed text-ash">
            The editorial rules that govern this site and the policy for
            correcting quotations shown to be inaccurate.
          </p>
        </div>
      </section>

      <section className="border-b border-rule bg-void">
        <div className="mx-auto max-w-readable px-5 py-12 sm:px-8 sm:py-16">
          <h2 className="font-display text-[28px] text-bone">Disclosure</h2>
          <p className="mt-5 font-serif text-[18px] leading-relaxed text-bone/90">
            This site is not produced or authorized by any candidate or
            candidate&apos;s committee. If, in the future, this site is
            published by a registered political committee, the appropriate
            FEC or South Carolina Ethics Commission disclaimer will appear
            here and in the footer.
          </p>
          <p className="mt-4 font-sans text-[13px] leading-relaxed text-moss">
            &ldquo;Creepy Carlton&rdquo; is the editorial title of this
            research compilation. The substantive claims on this site are
            direct quotations from the named sources.
          </p>
        </div>
      </section>

      <section className="border-b border-rule bg-paper">
        <div className="mx-auto max-w-readable px-5 py-12 sm:px-8 sm:py-16">
          <h2 className="font-display text-[28px] text-bone">
            Corrections policy
          </h2>
          <p className="mt-5 font-serif text-[18px] leading-relaxed text-bone/90">
            If a quotation on this site is shown to be inaccurate, or has been
            retracted by its original publisher, it will be corrected or
            removed and the change will be logged on our{" "}
            <Link
              href="/sources/"
              className="text-blood underline-offset-4 hover:underline"
            >
              Sources &amp; Methodology
            </Link>{" "}
            page.
          </p>
        </div>
      </section>

      <section className="border-b border-rule bg-void">
        <div className="mx-auto max-w-readable px-5 py-12 sm:px-8 sm:py-16">
          <h2 className="font-display text-[28px] text-bone">
            Editorial rules
          </h2>
          <p className="mt-3 font-sans text-[13px] text-ash">
            These rules govern every page on the site.
          </p>
          <ol className="mt-6 list-decimal space-y-4 pl-5 font-serif text-[18px] leading-relaxed text-bone/90 marker:text-blood">
            <li>
              No quotation on this site is edited beyond ellipses for length.
              Any ellipsis is shown plainly &ldquo;…&rdquo;.
            </li>
            <li>
              No two quotations are concatenated to imply a single statement.
            </li>
            <li>
              No quotation appears without its source named on the same screen.
            </li>
            <li>
              The site does not assert in its own voice that Mr. Walker did,
              said, or is anything beyond: he is a candidate, his name, the
              district, the dates of his campaigns, and the fact that the
              linked sources exist.
            </li>
            <li>
              Topics are framed as topics — for example,{" "}
              &ldquo;Civil Fraud Complaint&rdquo; — not as verdicts.
            </li>
            <li>
              Where a source describes an allegation, complaint, charge, or
              filing, this site does not imply guilt.
            </li>
            <li>
              No images of Mr. Walker appear anywhere on this site. The site
              is text-only by design.
            </li>
          </ol>
        </div>
      </section>

      <section className="border-b border-rule bg-paper">
        <div className="mx-auto max-w-readable px-5 py-12 sm:px-8 sm:py-16">
          <h2 className="font-display text-[28px] text-bone">
            District clarification
          </h2>
          <p className="mt-5 font-serif text-[18px] leading-relaxed text-bone/90">
            Carlton Walker is a candidate for South Carolina House District
            115. The reporting and court filings indexed on this site concern
            his prior 2024 run for House District 15 and the underlying
            personal history that surfaced during it. The site does not
            represent that the documented record concerns the District 115
            race.
          </p>
        </div>
      </section>

      <section className="bg-void">
        <div className="mx-auto max-w-readable px-5 py-12 sm:px-8 sm:py-16">
          <h2 className="font-display text-[28px] text-bone">
            Privacy &amp; analytics
          </h2>
          <p className="mt-5 font-serif text-[18px] leading-relaxed text-bone/90">
            This site sets no advertising cookies. It uses no third-party
            analytics that identify visitors. It loads no external trackers
            beyond the fonts served by Google Fonts.
          </p>
          <p className="mt-4 font-serif text-[18px] leading-relaxed text-bone/90">
            The site is published as static HTML with no user inputs, no
            comments, and no accounts. There is nothing for a visitor to log
            into.
          </p>
        </div>
      </section>
    </>
  );
}
