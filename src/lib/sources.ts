import type { Article } from "@/types/article";

export function getDomain(article: Article): string | null {
  const candidate = article.sourceUrl || article.articleUrl || "";
  if (!candidate) return null;
  try {
    return new URL(candidate).hostname.replace(/^www\./, "");
  } catch {
    return null;
  }
}

export function getInitials(name: string): string {
  return (
    name
      .replace(/[^A-Za-z0-9 ]/g, " ")
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((w) => w[0])
      .join("")
      .toUpperCase() || "?"
  );
}

export interface UniqueSource {
  name: string;
  domain: string | null;
  count: number;
}

export function uniquePublications(articles: Article[]): UniqueSource[] {
  const map = new Map<string, UniqueSource>();
  for (const article of articles) {
    const key = article.source;
    const existing = map.get(key);
    if (existing) {
      existing.count += 1;
      if (!existing.domain) existing.domain = getDomain(article);
    } else {
      map.set(key, {
        name: key,
        domain: getDomain(article),
        count: 1,
      });
    }
  }
  return Array.from(map.values()).sort((a, b) => b.count - a.count);
}
