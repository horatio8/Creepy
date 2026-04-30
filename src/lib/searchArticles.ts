import type { Article } from "@/types/article";

export function matchesQuery(article: Article, query: string): boolean {
  if (!query) return true;
  const q = query.toLowerCase();
  const haystack = [
    article.title,
    article.summary,
    article.source,
    article.category,
    article.publicationType,
    article.keyQuote ?? "",
  ]
    .join(" · ")
    .toLowerCase();
  return haystack.includes(q);
}

export function highlightMatches(text: string, query: string): string {
  if (!query) return escapeHtml(text);
  const safeQuery = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp(`(${safeQuery})`, "ig");
  return escapeHtml(text).replace(re, "<mark>$1</mark>");
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
