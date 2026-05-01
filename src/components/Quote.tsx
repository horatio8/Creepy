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
      ? "text-[26px] leading-[1.35] sm:text-[32px]"
      : size === "sm"
        ? "text-[17px] leading-[1.45] sm:text-[19px]"
        : "text-[20px] leading-[1.4] sm:text-[23px]";

  const padding =
    size === "lg"
      ? "p-7 pt-12 sm:p-12 sm:pt-16"
      : size === "sm"
        ? "p-5 pt-9 sm:p-6 sm:pt-10"
        : "p-6 pt-11 sm:p-8 sm:pt-12";

  return (
    <figure
      className={`relative overflow-hidden border border-rule bg-surface font-serif text-bone ${padding}`}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute -top-6 left-2 select-none font-display text-[180px] leading-none text-blood/20 sm:left-5 sm:text-[220px]"
      >
        &ldquo;
      </span>
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-24 right-3 select-none font-display text-[180px] leading-none text-blood/10 sm:-bottom-28 sm:right-6 sm:text-[220px]"
      >
        &rdquo;
      </span>

      <blockquote className={`relative ${text}`}>
        <span className="relative z-10 font-medium tracking-[0.005em]">
          &ldquo;{quote}&rdquo;
        </span>
      </blockquote>

      <hr className="my-5 h-px w-12 border-0 bg-blood/80" />

      <figcaption className="font-sans text-[12px] uppercase tracking-[0.18em] text-ash sm:text-[13px]">
        <cite className="not-italic">{attribution}</cite>
      </figcaption>

      {documentNote && (
        <p className="mt-4 max-w-readable font-sans text-[13px] leading-relaxed text-moss">
          {documentNote}
        </p>
      )}

      {(href || archiveHref) && (
        <p className="mt-5 flex flex-wrap gap-x-5 gap-y-1 font-sans text-[13px]">
          {href && (
            <Link
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blood underline-offset-4 hover:underline"
            >
              → {hrefLabel}
            </Link>
          )}
          {archiveHref && (
            <Link
              href={archiveHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-moss underline-offset-4 hover:text-bone hover:underline"
            >
              (archived copy)
            </Link>
          )}
        </p>
      )}
    </figure>
  );
}
