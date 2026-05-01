interface SourceBrandProps {
  name: string;
  domain?: string | null;
  variant?: "light" | "dark";
}

export function SourceBrand({
  name,
  domain,
  variant = "light",
}: SourceBrandProps) {
  const text = variant === "light" ? "text-[#2a2f4a]" : "text-bone";
  const ring =
    variant === "light"
      ? "border-[#dcd6c4]/70 bg-white"
      : "border-rule bg-surface";

  return (
    <div className="flex items-center gap-2.5 whitespace-nowrap">
      <span
        className={`flex h-7 w-7 shrink-0 items-center justify-center overflow-hidden rounded-md border ${ring}`}
      >
        {domain ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={`https://www.google.com/s2/favicons?domain=${domain}&sz=64`}
            alt=""
            width={20}
            height={20}
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
            style={{ width: 20, height: 20, objectFit: "contain" }}
          />
        ) : (
          <span
            aria-hidden
            className="text-[10px] font-bold tracking-tight text-[#2a2f4a]"
          >
            {initials(name)}
          </span>
        )}
      </span>
      <span className={`text-[14px] font-medium ${text}`}>{name}</span>
    </div>
  );
}

function initials(name: string): string {
  return (
    name
      .replace(/[^A-Za-z0-9 ]/g, " ")
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((w) => w[0])
      .join("")
      .toUpperCase() || "•"
  );
}
