import Link from "next/link";
import { CATEGORIES } from "@/data/categories";

export function Footer() {
  return (
    <footer className="border-t border-rule bg-paper">
      <div className="mx-auto max-w-screen-xl px-5 py-10 sm:px-8 sm:py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-display text-2xl text-ink">Creepy Carlton</p>
            <p className="mt-3 max-w-md font-serif text-[15px] leading-relaxed text-ink/80">
              A sourced index of public reporting and court filings concerning
              South Carolina House District 115 candidate Carlton Walker.
            </p>
          </div>

          <nav aria-label="Categories" className="font-sans text-[14px]">
            <p className="mb-3 text-[12px] uppercase tracking-[0.18em] text-meta">
              Categories
            </p>
            <ul className="space-y-1.5">
              {CATEGORIES.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/${c.slug}/`}
                    className="text-ink hover:text-rust"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="About this site" className="font-sans text-[14px]">
            <p className="mb-3 text-[12px] uppercase tracking-[0.18em] text-meta">
              About this site
            </p>
            <ul className="space-y-1.5">
              <li>
                <Link href="/sources/" className="text-ink hover:text-rust">
                  Sources &amp; methodology
                </Link>
              </li>
              <li>
                <Link href="/legal/" className="text-ink hover:text-rust">
                  Legal &amp; corrections
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-10 border-t border-rule pt-6 font-sans text-[12px] leading-relaxed text-meta">
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
