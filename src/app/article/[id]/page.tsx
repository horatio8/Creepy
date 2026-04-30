"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/Header";
import { ArticleDetail } from "@/components/ArticleDetail";
import { useArticle, useRelatedArticles } from "@/hooks/useArticles";

export default function ArticlePage() {
  const params = useParams<{ id: string }>();
  const article = useArticle(params?.id);
  const related = useRelatedArticles(article);

  if (!article) {
    return (
      <div className="min-h-screen bg-neutral-light">
        <Header showSearch={false} />
        <main className="mx-auto max-w-3xl px-4 py-16 text-center">
          <h1 className="text-h1 text-navy">Article not found</h1>
          <p className="mt-2 text-body text-slate">
            The requested article does not exist in this index.
          </p>
          <Link
            href="/"
            className="mt-6 inline-flex items-center gap-1 rounded-md bg-navy px-4 py-2 text-small font-medium text-white hover:bg-navy/90"
          >
            ← Back to index
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-light">
      <Header showSearch={false} />
      <ArticleDetail article={article} related={related} />
    </div>
  );
}
