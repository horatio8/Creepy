"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto max-w-screen-xl px-5 py-10 sm:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-h3 text-navy">The Walker Record</p>
            <p className="mt-1 max-w-md text-sm text-slate">
              An independent voter information project. Every claim links to a
              public source. No content from those sources is hosted or
              republished here.
            </p>
          </div>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
            <Link
              href="/"
              className="text-sm font-medium text-slate hover:text-navy"
            >
              Home
            </Link>
            <Link
              href="/#issues"
              className="text-sm font-medium text-slate hover:text-navy"
            >
              The Issues
            </Link>
            <Link
              href="/sources"
              className="text-sm font-medium text-slate hover:text-navy"
            >
              Sources
            </Link>
            <Link
              href="/#share"
              className="text-sm font-medium text-slate hover:text-navy"
            >
              Share
            </Link>
          </nav>
        </div>
        <div className="mt-8 border-t border-border pt-5 text-[11px] leading-relaxed text-slate">
          <p>
            Information presented here is drawn from publicly available
            reporting and public records. Allegations described in pending or
            decided court matters are characterized as reported in those
            sources. Outbound links open the original publishers; this site
            does not host or modify their content.
          </p>
          <p className="mt-2">
            © {new Date().getFullYear()} The Walker Record · Not produced or
            authorized by any candidate or candidate&apos;s committee.
          </p>
        </div>
      </div>
    </footer>
  );
}
