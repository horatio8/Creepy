"use client";

import type { IssueIcon as IssueIconType } from "@/types/issue";

interface IssueIconProps {
  name: IssueIconType;
  className?: string;
  size?: number;
}

export function IssueIcon({ name, className = "", size = 24 }: IssueIconProps) {
  const props = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
  };

  switch (name) {
    case "gavel":
      return (
        <svg {...props}>
          <path d="m14 13-7.5 7.5a2.12 2.12 0 0 1-3-3L11 10" />
          <path d="m16 16 6-6" />
          <path d="m8 8 6-6" />
          <path d="m9 7 8 8" />
          <path d="m21 11-8-8" />
        </svg>
      );
    case "scales":
      return (
        <svg {...props}>
          <path d="M12 3v18" />
          <path d="M5 7h14" />
          <path d="M5 7 2 14a4 4 0 0 0 6 0L5 7Z" />
          <path d="M19 7l-3 7a4 4 0 0 0 6 0L19 7Z" />
          <path d="M8 21h8" />
        </svg>
      );
    case "sparkle":
      return (
        <svg {...props}>
          <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063L2.5 12l6-2.063A2 2 0 0 0 9.937 8.5L12 2.5l2.063 6A2 2 0 0 0 15.5 9.937L21.5 12l-6 2.063A2 2 0 0 0 14.063 15.5L12 21.5l-2.063-6Z" />
        </svg>
      );
    case "warning":
      return (
        <svg {...props}>
          <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
          <path d="M12 9v4" />
          <path d="M12 17h.01" />
        </svg>
      );
    case "link":
      return (
        <svg {...props}>
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
      );
  }
}
