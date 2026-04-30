export type IssueIcon =
  | "gavel"
  | "scales"
  | "sparkle"
  | "warning"
  | "link";

export interface Issue {
  slug: string;
  order: number;
  icon: IssueIcon;
  accent: string;
  category: string;
  shortLabel: string;
  title: string;
  headline: string;
  summary: string;
  keyFacts: string[];
  pullQuote: string;
  pullQuoteSource: string;
  articleIds: string[];
  takeaway: string;
}

export interface IssuesFile {
  issues: Issue[];
}
