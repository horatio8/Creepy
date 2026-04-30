"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface SiteHeaderProps {
  variant?: "transparent" | "solid";
}

const NAV = [
  { label: "Home", href: "/" },
  { label: "Issues", href: "/#issues" },
  { label: "Sources", href: "/sources" },
];

export function SiteHeader({ variant = "solid" }: SiteHeaderProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const transparent = variant === "transparent" && !scrolled;

  return (
    <header
      className={`sticky top-0 z-40 transition-colors ${
        transparent
          ? "bg-transparent"
          : "border-b border-border bg-white/95 backdrop-blur"
      }`}
    >
      <div className="mx-auto flex max-w-screen-xl items-center gap-4 px-5 py-3 sm:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <span
            className={`flex h-9 w-9 items-center justify-center rounded-lg font-bold ${
              transparent
                ? "bg-white/15 text-white backdrop-blur"
                : "bg-navy text-white"
            }`}
          >
            CW
          </span>
          <span
            className={`hidden text-[13px] font-semibold leading-tight sm:block ${
              transparent ? "text-white" : "text-navy"
            }`}
          >
            The Walker
            <br />
            Record
          </span>
        </Link>

        <nav className="ml-auto hidden items-center gap-1 md:flex">
          {NAV.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href.split("#")[0] || "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  transparent
                    ? "text-white/90 hover:bg-white/10"
                    : active
                      ? "bg-navy text-white"
                      : "text-slate hover:bg-neutral-light hover:text-navy"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/#share"
            className={`ml-1 inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition ${
              transparent
                ? "bg-white text-navy hover:bg-white/90"
                : "bg-alert text-white hover:bg-alert/90"
            }`}
          >
            Share
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={`ml-auto inline-flex h-10 w-10 items-center justify-center rounded-lg md:hidden ${
            transparent
              ? "text-white hover:bg-white/10"
              : "text-navy hover:bg-neutral-light"
          }`}
          aria-label="Open menu"
          aria-expanded={open}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-white md:hidden">
          <nav className="mx-auto flex max-w-screen-xl flex-col px-5 py-2 sm:px-8">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border-b border-border py-3 text-base font-medium text-navy last:border-0"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

function MenuIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}
function CloseIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}
