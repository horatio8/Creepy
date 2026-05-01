import Link from "next/link";
import { CATEGORIES } from "@/data/categories";

export function Footer() {
  return (
    <footer className="relative border-t border-rule bg-void">
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blood/30 to-transparent"
      />
      <div className="mx-auto max-w-screen-xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-display text-[28px] leading-none text-bone">
              Creepy <em className="italic text-blood">Carlton</em>
            </p>
            <p className="mt-4 max-w-md font-serif text-[15px] leading-relaxed text-ash">
              A sourced index of public reporting and court filings concerning
              South Carolina House District 115 candidate Carlton Walker.
            </p>
          </div>

          <nav aria-label="Categories" className="font-sans text-[14px]">
            <p className="mb-3 text-[11px] uppercase tracking-[0.2em] text-moss">
              Categories
            </p>
            <ul className="space-y-1.5">
              {CATEGORIES.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/${c.slug}/`}
                    className="text-bone hover:text-blood"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="About this site" className="font-sans text-[14px]">
            <p className="mb-3 text-[11px] uppercase tracking-[0.2em] text-moss">
              About this site
            </p>
            <ul className="space-y-1.5">
              <li>
                <Link href="/sources/" className="text-bone hover:text-blood">
                  Sources &amp; methodology
                </Link>
              </li>
              <li>
                <Link href="/legal/" className="text-bone hover:text-blood">
                  Legal &amp; corrections
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-12 border-t border-rule pt-6 font-sans text-[12px] leading-relaxed text-moss">
          <p>
            This site is not produced or authorized by any candidate or
            candidate&apos;s committee.
          </p>
          <p className="mt-2">
            &ldquo;Creepy Carlton&rdquo; is the editorial title of this
            research compilation. The substantive claims on this site are
            direct quotations from the named sources.
          </p>
          <p className="mt-2">
            © {new Date().getFullYear()} Creepy Carlton.
          </p>
        </div>
      </div>
    </footer>
  );
}
