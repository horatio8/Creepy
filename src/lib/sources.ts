import type { Article } from "@/types/content";

export function getDomain(url: string | undefined): string | null {
  if (!url) return null;
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return null;
  }
}

export interface UniquePublication {
  name: string;
  domain: string | null;
  count: number;
}

export function uniquePublications(articles: Article[]): UniquePublication[] {
  const map = new Map<string, UniquePublication>();
  for (const article of articles) {
    const key = article.publication;
    const existing = map.get(key);
    const domain = getDomain(article.url);
    if (existing) {
      existing.count += 1;
      if (!existing.domain && domain) existing.domain = domain;
    } else {
      map.set(key, { name: key, domain, count: 1 });
    }
  }
  return Array.from(map.values()).sort((a, b) => b.count - a.count);
}
