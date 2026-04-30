"use client";

import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(255,255,255,.6) 0, transparent 40%), radial-gradient(circle at 80% 60%, rgba(220,38,38,.7) 0, transparent 50%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"
      />

      <div className="relative mx-auto max-w-screen-xl px-5 pb-16 pt-14 sm:px-8 md:pb-24 md:pt-20 lg:pt-28">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80 backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-alert" />
          Voter brief · SC House District 115
        </div>

        <h1 className="max-w-4xl text-balance text-[34px] font-extrabold leading-[1.05] tracking-tight sm:text-[44px] md:text-[58px] lg:text-[72px]">
          Before you vote for{" "}
          <span className="bg-gradient-to-r from-rose-300 to-amber-200 bg-clip-text text-transparent">
            Carlton Walker
          </span>
          , read the record.
        </h1>

        <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-white/75 sm:text-lg md:text-xl">
          A family court documented years of abuse. A civil suit alleges fraud
          and dodged child support. Fake AI-generated campaign images. A night
          in jail over code violations. Every claim on this site links to a
          public source — read it for yourself.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link
            href="#issues"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-navy shadow-lg shadow-black/20 transition hover:bg-white/90"
          >
            See the five issues
            <ArrowRight />
          </Link>
          <Link
            href="/sources"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
          >
            All 15 sources
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-4 sm:max-w-2xl sm:grid-cols-4">
          <Stat value="170" label="Page court order" />
          <Stat value="$40k+" label="In disputed fees" />
          <Stat value="1" label="Night in jail" />
          <Stat value="15" label="Public sources" />
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="border-t border-white/15 pt-3">
      <p className="text-2xl font-bold sm:text-3xl">{value}</p>
      <p className="mt-1 text-[11px] uppercase tracking-wider text-white/60">
        {label}
      </p>
    </div>
  );
}

function ArrowRight() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="transition-transform group-hover:translate-x-0.5"
    >
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}
