"use client";

import { useState } from "react";
import { getInitials } from "@/lib/sources";

interface SourceLogoProps {
  source: string;
  domain?: string | null;
  size?: number;
  rounded?: "sm" | "md" | "lg" | "full";
  className?: string;
}

export function SourceLogo({
  source,
  domain,
  size = 32,
  rounded = "md",
  className = "",
}: SourceLogoProps) {
  const [step, setStep] = useState(0);

  const radius =
    rounded === "full"
      ? "9999px"
      : rounded === "lg"
        ? "12px"
        : rounded === "md"
          ? "8px"
          : "6px";

  const initials = getInitials(source);
  const requested = Math.max(64, Math.ceil(size * 2));

  const candidates = domain
    ? [
        `https://www.google.com/s2/favicons?domain=${domain}&sz=${requested}`,
        `https://icons.duckduckgo.com/ip3/${domain}.ico`,
      ]
    : [];

  const url = candidates[step];

  if (!url) {
    return (
      <span
        aria-label={`${source} logo`}
        className={`inline-flex shrink-0 select-none items-center justify-center bg-navy text-white ${className}`}
        style={{
          width: size,
          height: size,
          borderRadius: radius,
          fontSize: Math.max(10, size * 0.4),
          fontWeight: 700,
          letterSpacing: "0.02em",
        }}
      >
        {initials}
      </span>
    );
  }

  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center overflow-hidden border border-border bg-white ${className}`}
      style={{
        width: size,
        height: size,
        borderRadius: radius,
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={url}
        alt={`${source} logo`}
        width={size}
        height={size}
        loading="lazy"
        decoding="async"
        referrerPolicy="no-referrer"
        onError={() => setStep((s) => s + 1)}
        style={{
          width: size * 0.78,
          height: size * 0.78,
          objectFit: "contain",
        }}
      />
    </span>
  );
}
