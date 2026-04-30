export type CategoryName =
  | "Family Court & Custody"
  | "Child Support & Civil Fraud"
  | "AI-Generated Imagery"
  | "Harassment Allegations"
  | "Property & Legal Issues"
  | "Campaign Conduct"
  | "Business Background"
  | "Election Coverage"
  | "Political Connections"
  | "Psychological Evaluations";

export interface Article {
  id: string;
  title: string;
  source: string;
  sourceUrl?: string;
  publicationType: string;
  datePublished: string;
  articleUrl: string;
  category: CategoryName;
  credibilityScore: number;
  summary: string;
  keyQuote?: string;
}

export interface ArticlesFile {
  articles: Article[];
}

export type SortKey =
  | "date-desc"
  | "date-asc"
  | "source-asc"
  | "credibility-desc";

export interface FilterState {
  query: string;
  categories: CategoryName[];
  sources: string[];
  dateFrom: string | null;
  dateTo: string | null;
  minCredibility: number;
  sort: SortKey;
  view: "grid" | "list";
}
