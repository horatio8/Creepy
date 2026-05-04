import type { Article } from "@/types/content";

export function getDomain(url: string | undefined): string | null {
  if (!url) return null;
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return null;
  }
}

export type LinkKind = "deep" | "root" | "search" | "empty";

export function getUrlKind(url: string | undefined): LinkKind {
  if (!url || !url.trim()) return "empty";
  try {
    const u = new URL(url);
    const path = u.pathname.replace(/\/+$/, "");
    if (!path) return "root";
    if (/casesearch|search/i.test(path)) return "search";
    return "deep";
  } catch {
    return "empty";
  }
}

export interface ResolvedLink {
  href?: string;
  label: string;
  note?: string;
}

export function resolveArticleLink(article: Article): ResolvedLink {
  const kind = getUrlKind(article.url);
  switch (kind) {
    case "deep":
      return { href: article.url, label: "Read full article" };
    case "search":
      return {
        href: article.url,
        label: "Open court records search",
        note: "Links to the South Carolina Judicial Branch case-search system. Use the case number above to retrieve the filing.",
      };
    case "root":
      return {
        href: article.url,
        label: `Visit ${article.publication}`,
        note: "Links to the publication's home page; the specific article URL is pending verification.",
      };
    case "empty":
    default:
      return {
        label: "Direct article URL not on file",
        note: "We have not located a citable URL for this source yet. The publication, type, and date above are accurate.",
      };
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
