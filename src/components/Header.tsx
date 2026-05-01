import Link from "next/link";
import { CATEGORIES } from "@/data/categories";

export function Header() {
  const navCategories = CATEGORIES.filter((c) => c.showInNav);

  return (
    <header className="relative border-b border-rule bg-paper/85 backdrop-blur-sm">
      <span
        aria-hidden
        className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-blood/40 to-transparent"
      />
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-baseline justify-between gap-x-8 gap-y-2 px-5 py-5 sm:px-8">
        <Link
          href="/"
          aria-label="Creepy Carlton — home"
          className="group flex items-baseline gap-2 font-gothic leading-none"
        >
          <span
            aria-hidden
            className="h-2 w-2 self-center rounded-full bg-blood/80 group-hover:bg-blood"
          />
          <span className="text-[26px] tracking-tight text-bone group-hover:text-blood sm:text-[30px]">
            Creepy <em className="italic text-blood">Carlton</em>
          </span>
        </Link>
        <nav className="hidden items-baseline gap-5 font-sans text-[13px] uppercase tracking-[0.14em] text-ash md:flex">
          {navCategories.map((c) => (
            <Link
              key={c.slug}
              href={`/${c.slug}/`}
              className="hover:text-bone"
            >
              {c.navLabel}
            </Link>
          ))}
        </nav>
        <nav
          aria-label="Mobile sections"
          className="font-sans text-[12px] uppercase tracking-[0.14em] text-ash md:hidden"
        >
          <Link href="/#categories" className="hover:text-bone">
            Categories
          </Link>
        </nav>
      </div>
    </header>
  );
}
