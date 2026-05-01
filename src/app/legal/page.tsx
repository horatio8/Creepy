import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal, corrections & takedown",
  description:
    "Disclaimers, the corrections and takedown policy, and the editorial rules that govern every quotation on this site.",
};

export default function LegalPage() {
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
            Legal, corrections &amp; takedown
          </h1>
          <p className="mt-5 font-serif text-[19px] leading-relaxed text-ink/85">
            The editorial rules that govern this site, who runs it, and how to
            request a correction.
          </p>
        </div>
      </section>

      <section className="border-b border-rule">
        <div className="mx-auto max-w-readable px-5 py-10 sm:px-8 sm:py-14">
          <h2 className="font-display text-[24px] text-ink">
            Publisher disclosure
          </h2>
          <p className="mt-4 font-serif text-[18px] leading-relaxed text-ink/90">
            This site is published by{" "}
            <strong className="font-semibold">[Publisher Name]</strong>.
            Contact:{" "}
            <a
              href="mailto:corrections@creepycarlton.com"
              className="text-rust underline-offset-4 hover:underline"
            >
              corrections@creepycarlton.com
            </a>
            .
          </p>
          <p className="mt-3 font-serif text-[18px] leading-relaxed text-ink/90">
            This site is not produced or authorized by any candidate or
            candidate&apos;s committee. If, in the future, this site is
            published by a registered political committee, the appropriate
            FEC or South Carolina Ethics Commission disclaimer will appear
            here and in the footer.
          </p>
          <p className="mt-3 font-sans text-[13px] leading-relaxed text-meta">
            &ldquo;Creepy Carlton&rdquo; is the editorial title of this
            research compilation. The substantive claims on this site are
            direct quotations from the named sources.
          </p>
        </div>
      </section>

      <section className="border-b border-rule">
        <div className="mx-auto max-w-readable px-5 py-10 sm:px-8 sm:py-14">
          <h2 className="font-display text-[24px] text-ink">
            Corrections &amp; takedown policy
          </h2>
          <div className="mt-5 border-l-2 border-rust pl-5">
            <p className="font-serif text-[19px] italic leading-relaxed text-ink">
              If you are Mr. Walker or his representative and believe a
              quotation on this site misrepresents a source, email{" "}
              <a
                href="mailto:corrections@creepycarlton.com"
                className="not-italic text-rust underline-offset-4 hover:underline"
              >
                corrections@creepycarlton.com
              </a>
              . We will respond within 5 business days. If a quotation is shown
              to be inaccurate or has been retracted by its original publisher,
              we will correct or remove it and log the change on our{" "}
              <Link
                href="/sources/"
                className="not-italic text-rust underline-offset-4 hover:underline"
              >
                Sources &amp; Methodology
              </Link>{" "}
              page.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-rule">
        <div className="mx-auto max-w-readable px-5 py-10 sm:px-8 sm:py-14">
          <h2 className="font-display text-[24px] text-ink">
            Editorial rules
          </h2>
          <p className="mt-3 font-sans text-[13px] text-meta">
            These rules govern every page on the site.
          </p>
          <ol className="mt-5 list-decimal space-y-4 pl-5 font-serif text-[18px] leading-relaxed text-ink/90 marker:text-rust">
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
              No images of Mr. Walker appear anywhere on this site. The site is
              text-only by design.
            </li>
          </ol>
        </div>
      </section>

      <section className="border-b border-rule">
        <div className="mx-auto max-w-readable px-5 py-10 sm:px-8 sm:py-14">
          <h2 className="font-display text-[24px] text-ink">
            District clarification
          </h2>
          <p className="mt-4 font-serif text-[18px] leading-relaxed text-ink/90">
            Carlton Walker is a candidate for South Carolina House District 115.
            The reporting and court filings indexed on this site concern his
            prior 2024 run for House District 15 and the underlying personal
            history that surfaced during it. The site does not represent that
            the documented record concerns the District 115 race.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-readable px-5 py-10 sm:px-8 sm:py-14">
          <h2 className="font-display text-[24px] text-ink">
            Privacy &amp; analytics
          </h2>
          <p className="mt-4 font-serif text-[18px] leading-relaxed text-ink/90">
            This site sets no advertising cookies. It uses no third-party
            analytics that identify visitors. It loads no external trackers
            beyond the fonts served by Google Fonts.
          </p>
          <p className="mt-3 font-serif text-[18px] leading-relaxed text-ink/90">
            The site is published as static HTML with no user inputs, no
            comments, and no accounts. There is nothing for a visitor to log
            into.
          </p>
        </div>
      </section>
    </>
  );
}
