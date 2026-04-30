"use client";

interface PullQuoteProps {
  quote: string;
  source: string;
  accent?: string;
  size?: "default" | "lg";
}

export function PullQuote({
  quote,
  source,
  accent = "#dc2626",
  size = "default",
}: PullQuoteProps) {
  const textSize =
    size === "lg"
      ? "text-2xl sm:text-3xl md:text-4xl"
      : "text-xl sm:text-2xl";

  return (
    <figure className="relative isolate rounded-2xl bg-navy p-6 text-white sm:p-10">
      <span
        aria-hidden
        className="absolute -top-3 left-6 select-none font-serif text-[120px] leading-none opacity-20 sm:left-10 sm:text-[160px]"
        style={{ color: accent }}
      >
        “
      </span>
      <blockquote
        className={`relative mt-2 text-pretty font-semibold leading-snug tracking-tight ${textSize}`}
      >
        {quote}
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-2 text-[12px] uppercase tracking-[0.18em] text-white/65">
        <span
          className="inline-block h-px w-8"
          style={{ backgroundColor: accent }}
        />
        {source}
      </figcaption>
    </figure>
  );
}
