export type CategorySlug =
  | "custody"
  | "fraud"
  | "ai-imagery"
  | "property"
  | "campaign-conduct"
  | "political-ties"
  | "election-record";

export interface Category {
  slug: CategorySlug;
  label: string;
  navLabel: string;
  short: string;
  description: string;
  contextLine: string;
  showInNav: boolean;
}

export type CredibilityLevel = 1 | 2 | 3 | 4 | 5;

export interface Article {
  id: string;
  slug: string;
  category: CategorySlug;
  title: string;
  source: string;
  publication: string;
  type: string;
  date: string;
  year: string;
  url: string;
  archiveUrl?: string;
  credibility: CredibilityLevel;
  quote: string;
  attribution: string;
  documentNote: string;
}
