export function parseArticleDate(value: string): Date | null {
  if (!value) return null;
  const trimmed = value.trim();
  if (!trimmed || /^earlier$/i.test(trimmed)) return null;

  // YYYY-MM-DD or YYYY-MM
  const ymd = /^(\d{4})-(\d{1,2})(?:-(\d{1,2}))?$/.exec(trimmed);
  if (ymd) {
    const [, y, m, d] = ymd;
    return new Date(Number(y), Number(m) - 1, d ? Number(d) : 1);
  }

  // YYYY
  if (/^\d{4}$/.test(trimmed)) {
    return new Date(Number(trimmed), 0, 1);
  }

  const parsed = new Date(trimmed);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

export function formatArticleDate(value: string): string {
  const parsed = parseArticleDate(value);
  if (!parsed) return value || "Date unknown";

  const hasMonth = /-\d{1,2}/.test(value);
  const hasDay = /-\d{1,2}-\d{1,2}/.test(value);

  if (hasDay) {
    return parsed.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }
  if (hasMonth) {
    return parsed.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
    });
  }
  return String(parsed.getFullYear());
}
