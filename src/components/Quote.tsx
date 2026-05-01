import Link from "next/link";

interface QuoteProps {
  // Quote and attribution are inseparable. Both are required by design — see brief §9.3.
  quote: string;
  attribution: string;
  size?: "sm" | "md" | "lg";
  href?: string;
  hrefLabel?: string;
  archiveHref?: string;
  documentNote?: string;
}

export function Quote({
  quote,
  attribution,
  size = "md",
  href,
  hrefLabel = "Read full article",
  archiveHref,
  documentNote,
}: QuoteProps) {
  const text =
    size === "lg"
      ? "text-2xl leading-snug sm:text-3xl"
      : size === "sm"
        ? "text-base leading-snug sm:text-lg"
        : "text-xl leading-snug sm:text-[22px]";

  const padding =
    size === "lg" ? "p-7 sm:p-10" : size === "sm" ? "p-5 sm:p-6" : "p-6 sm:p-8";

  return (
    <figure
      className={`relative overflow-hidden border border-rule bg-cream font-serif text-ink ${padding}`}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute -top-4 left-3 select-none font-display text-[140px] leading-none text-rust/30 sm:left-5"
      >
        &ldquo;
      </span>

      <blockquote className={`relative ${text} font-medium`}>
        <span className="relative z-10">&ldquo;{quote}&rdquo;</span>
      </blockquote>

      <hr className="my-4 h-px w-12 border-0 bg-rust" />

      <figcaption className="font-sans text-[13px] uppercase tracking-[0.12em] text-meta sm:text-[14px]">
        <cite className="not-italic">{attribution}</cite>
      </figcaption>

      {documentNote && (
        <p className="mt-3 max-w-readable font-sans text-[13px] leading-relaxed text-meta">
          {documentNote}
        </p>
      )}

      {(href || archiveHref) && (
        <p className="mt-4 flex flex-wrap gap-x-5 gap-y-1 font-sans text-[13px]">
          {href && (
            <Link
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-rust underline-offset-4 hover:underline"
            >
              → {hrefLabel}
            </Link>
          )}
          {archiveHref && (
            <Link
              href={archiveHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-meta underline-offset-4 hover:text-ink hover:underline"
            >
              (archived copy)
            </Link>
          )}
        </p>
      )}
    </figure>
  );
}
