import { ARTICLES } from "@/data/articles";
import type { Article, CategorySlug } from "@/types/content";

export function getArticles(): Article[] {
  return ARTICLES;
}

export function getArticlesByCategory(category: CategorySlug): Article[] {
  return ARTICLES.filter((a) => a.category === category);
}

export function getArticleBySlug(
  category: CategorySlug,
  slug: string,
): Article | undefined {
  return ARTICLES.find((a) => a.category === category && a.slug === slug);
}

export function getArticleParams(): Array<{ category: string; slug: string }> {
  return ARTICLES.map((a) => ({ category: a.category, slug: a.slug }));
}
