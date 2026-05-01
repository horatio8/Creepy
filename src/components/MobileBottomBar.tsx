import Link from "next/link";

export function MobileBottomBar() {
  return (
    <nav
      aria-label="Site sections"
      className="fixed inset-x-0 bottom-0 z-30 border-t border-rule bg-void/95 backdrop-blur-sm md:hidden no-print"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blood/40 to-transparent"
      />
      <ul className="mx-auto grid max-w-md grid-cols-3 text-center font-sans text-[11px] uppercase tracking-[0.18em]">
        <li>
          <Link
            href="/#categories"
            className="block px-2 py-3.5 text-bone hover:text-blood"
          >
            Categories
          </Link>
        </li>
        <li className="border-x border-rule">
          <Link
            href="/sources/"
            className="block px-2 py-3.5 text-bone hover:text-blood"
          >
            Sources
          </Link>
        </li>
        <li>
          <Link
            href="/legal/"
            className="block px-2 py-3.5 text-bone hover:text-blood"
          >
            Legal
          </Link>
        </li>
      </ul>
    </nav>
  );
}
