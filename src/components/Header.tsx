import Link from "next/link";
import { CATEGORIES } from "@/data/categories";

const NAV_TAIL = [
  { href: "/sources/", label: "Sources" },
  { href: "/legal/", label: "Legal" },
];

export function Header() {
  const navCategories = CATEGORIES.filter((c) => c.showInNav);

  return (
    <header className="border-b border-rule bg-paper">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-baseline justify-between gap-x-8 gap-y-2 px-5 py-5 sm:px-8">
        <Link
          href="/"
          className="font-display text-[28px] leading-none text-ink hover:text-rust sm:text-[34px]"
          aria-label="Creepy Carlton — home"
        >
          Creepy Carlton
        </Link>
        <nav className="hidden items-baseline gap-5 font-sans text-[14px] tracking-wide text-ink md:flex">
          {navCategories.map((c) => (
            <Link
              key={c.slug}
              href={`/${c.slug}/`}
              className="hover:text-rust"
            >
              {c.navLabel}
            </Link>
          ))}
          <span aria-hidden className="h-3 w-px bg-rule" />
          {NAV_TAIL.map((n) => (
            <Link key={n.href} href={n.href} className="hover:text-rust">
              {n.label}
            </Link>
          ))}
        </nav>
        <nav
          aria-label="Mobile sections"
          className="font-sans text-[13px] text-meta md:hidden"
        >
          <Link href="#categories" className="hover:text-rust">
            Categories
          </Link>
          <span className="px-2 text-rule">·</span>
          <Link href="/sources/" className="hover:text-rust">
            Sources
          </Link>
          <span className="px-2 text-rule">·</span>
          <Link href="/legal/" className="hover:text-rust">
            Legal
          </Link>
        </nav>
      </div>
    </header>
  );
}
