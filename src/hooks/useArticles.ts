"use client";

import { useMemo } from "react";
import articlesData from "@/data/articles.json";
import type { Article, ArticlesFile } from "@/types/article";

export function useArticles(): Article[] {
  return useMemo(() => (articlesData as ArticlesFile).articles, []);
}

export function useArticle(id: string | undefined): Article | undefined {
  const articles = useArticles();
  return useMemo(
    () => (id ? articles.find((a) => a.id === id) : undefined),
    [articles, id],
  );
}

export function useRelatedArticles(article: Article | undefined): Article[] {
  const articles = useArticles();
  return useMemo(() => {
    if (!article) return [];
    return articles
      .filter(
        (a) => a.id !== article.id && a.category === article.category,
      )
      .slice(0, 4);
  }, [articles, article]);
}
