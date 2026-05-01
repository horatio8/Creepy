import Link from "next/link";

export function MobileBottomBar() {
  return (
    <nav
      aria-label="Site sections"
      className="fixed inset-x-0 bottom-0 z-30 border-t border-rule bg-paper md:hidden no-print"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <ul className="mx-auto grid max-w-md grid-cols-3 text-center font-sans text-[12px] uppercase tracking-[0.12em]">
        <li>
          <Link
            href="/#categories"
            className="block px-2 py-3 text-ink hover:text-rust"
          >
            Categories
          </Link>
        </li>
        <li className="border-x border-rule">
          <Link
            href="/sources/"
            className="block px-2 py-3 text-ink hover:text-rust"
          >
            Sources
          </Link>
        </li>
        <li>
          <Link
            href="/legal/"
            className="block px-2 py-3 text-ink hover:text-rust"
          >
            Legal
          </Link>
        </li>
      </ul>
    </nav>
  );
}
