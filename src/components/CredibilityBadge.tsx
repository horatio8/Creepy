"use client";

interface CredibilityBadgeProps {
  score: number;
  showLabel?: boolean;
  className?: string;
}

const LABELS: Record<number, string> = {
  1: "Speculative",
  2: "Limited corroboration",
  3: "Reported",
  4: "Multiple sources / documents",
  5: "Primary / official record",
};

export function CredibilityBadge({
  score,
  showLabel = false,
  className = "",
}: CredibilityBadgeProps) {
  const stars = "★".repeat(score) + "☆".repeat(Math.max(0, 5 - score));
  const tone =
    score >= 4
      ? "text-verified"
      : score >= 3
        ? "text-accent"
        : "text-warning";

  return (
    <span
      className={`inline-flex items-center gap-1 text-[12px] font-medium ${tone} ${className}`}
      title={LABELS[score] ?? `Credibility ${score}/5`}
    >
      <span className="tracking-tight">{stars}</span>
      {showLabel && <span className="text-slate">{LABELS[score]}</span>}
    </span>
  );
}
