"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { Footer } from "@/components/Footer";
import { MobileNav } from "@/components/MobileNav";
import { ArticleDetail } from "@/components/ArticleDetail";
import { useArticle, useRelatedArticles } from "@/hooks/useArticles";

export default function ArticlePage() {
  const params = useParams<{ id: string }>();
  const article = useArticle(params?.id);
  const related = useRelatedArticles(article);

  if (!article) {
    return (
      <div className="min-h-screen bg-neutral-light pb-20 md:pb-0">
        <SiteHeader />
        <main className="mx-auto max-w-3xl px-5 py-16 text-center sm:px-8">
          <h1 className="text-3xl font-bold text-navy">Source not found</h1>
          <p className="mt-2 text-base text-slate">
            The requested source isn&apos;t in our index.
          </p>
          <Link
            href="/sources"
            className="mt-6 inline-flex items-center gap-1 rounded-full bg-navy px-4 py-2 text-sm font-semibold text-white hover:bg-navy/90"
          >
            ← All sources
          </Link>
        </main>
        <Footer />
        <MobileNav />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-light pb-20 md:pb-0">
      <SiteHeader />
      <ArticleDetail article={article} related={related} />
      <Footer />
      <MobileNav />
    </div>
  );
}
