import type { CategoryName } from "@/types/article";

export interface CategoryMeta {
  name: CategoryName;
  short: string;
  color: string;
  textColor: string;
  bgTint: string;
}

export const CATEGORIES: CategoryMeta[] = [
  {
    name: "Family Court & Custody",
    short: "Family court",
    color: "#dc2626",
    textColor: "#ffffff",
    bgTint: "#fee2e2",
  },
  {
    name: "Child Support & Civil Fraud",
    short: "Civil fraud",
    color: "#ea580c",
    textColor: "#ffffff",
    bgTint: "#ffedd5",
  },
  {
    name: "AI-Generated Imagery",
    short: "Fake AI imagery",
    color: "#d97706",
    textColor: "#ffffff",
    bgTint: "#fef3c7",
  },
  {
    name: "Harassment Allegations",
    short: "Harassment",
    color: "#dc2626",
    textColor: "#ffffff",
    bgTint: "#fee2e2",
  },
  {
    name: "Property & Legal Issues",
    short: "Property & code",
    color: "#ca8a04",
    textColor: "#ffffff",
    bgTint: "#fef9c3",
  },
  {
    name: "Campaign Conduct",
    short: "Campaign conduct",
    color: "#65a30d",
    textColor: "#ffffff",
    bgTint: "#ecfccb",
  },
  {
    name: "Business Background",
    short: "Business",
    color: "#0891b2",
    textColor: "#ffffff",
    bgTint: "#cffafe",
  },
  {
    name: "Election Coverage",
    short: "Election news",
    color: "#6366f1",
    textColor: "#ffffff",
    bgTint: "#e0e7ff",
  },
  {
    name: "Political Connections",
    short: "Connections",
    color: "#8b5cf6",
    textColor: "#ffffff",
    bgTint: "#ede9fe",
  },
  {
    name: "Psychological Evaluations",
    short: "Psych evals",
    color: "#be185d",
    textColor: "#ffffff",
    bgTint: "#fce7f3",
  },
];

export function getCategoryMeta(name: string): CategoryMeta {
  const found = CATEGORIES.find((c) => c.name === name);
  if (found) return found;
  return {
    name: name as CategoryName,
    short: name,
    color: "#475569",
    textColor: "#ffffff",
    bgTint: "#e2e8f0",
  };
}
