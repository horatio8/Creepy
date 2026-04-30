"use client";

import { getCategoryMeta } from "@/lib/categories";

interface CategoryTagProps {
  category: string;
  variant?: "solid" | "tint";
  className?: string;
}

export function CategoryTag({
  category,
  variant = "tint",
  className = "",
}: CategoryTagProps) {
  const meta = getCategoryMeta(category);
  const style =
    variant === "solid"
      ? { backgroundColor: meta.color, color: meta.textColor }
      : { backgroundColor: meta.bgTint, color: meta.color };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded px-1.5 py-1 text-[12px] font-medium ${className}`}
      style={style}
    >
      <span
        className="h-1.5 w-1.5 rounded-full"
        style={{
          backgroundColor: variant === "solid" ? meta.textColor : meta.color,
        }}
      />
      {category}
    </span>
  );
}
