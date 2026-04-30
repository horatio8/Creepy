import type { Article, FilterState } from "@/types/article";
import { matchesQuery } from "./searchArticles";
import { parseArticleDate } from "./dates";

export function filterArticles(
  articles: Article[],
  filters: FilterState,
): Article[] {
  const dateFrom = filters.dateFrom ? new Date(filters.dateFrom) : null;
  const dateTo = filters.dateTo ? new Date(filters.dateTo) : null;
  if (dateTo) dateTo.setHours(23, 59, 59, 999);

  const filtered = articles.filter((article) => {
    if (!matchesQuery(article, filters.query)) return false;

    if (
      filters.categories.length > 0 &&
      !filters.categories.includes(article.category)
    ) {
      return false;
    }

    if (
      filters.sources.length > 0 &&
      !filters.sources.includes(article.source)
    ) {
      return false;
    }

    if (article.credibilityScore < filters.minCredibility) return false;

    if (dateFrom || dateTo) {
      const parsed = parseArticleDate(article.datePublished);
      if (!parsed) return false;
      if (dateFrom && parsed < dateFrom) return false;
      if (dateTo && parsed > dateTo) return false;
    }

    return true;
  });

  return sortArticles(filtered, filters.sort);
}

export function sortArticles(
  articles: Article[],
  sort: FilterState["sort"],
): Article[] {
  const copy = [...articles];
  switch (sort) {
    case "date-asc":
      return copy.sort((a, b) => dateValue(a) - dateValue(b));
    case "source-asc":
      return copy.sort((a, b) => a.source.localeCompare(b.source));
    case "credibility-desc":
      return copy.sort(
        (a, b) =>
          b.credibilityScore - a.credibilityScore || dateValue(b) - dateValue(a),
      );
    case "date-desc":
    default:
      return copy.sort((a, b) => dateValue(b) - dateValue(a));
  }
}

function dateValue(article: Article): number {
  const parsed = parseArticleDate(article.datePublished);
  return parsed ? parsed.getTime() : 0;
}

export function uniqueSources(articles: Article[]): string[] {
  return Array.from(new Set(articles.map((a) => a.source))).sort((a, b) =>
    a.localeCompare(b),
  );
}
