import issuesData from "@/data/issues.json";
import type { Issue, IssuesFile } from "@/types/issue";

export function getIssues(): Issue[] {
  return [...((issuesData as IssuesFile).issues)].sort(
    (a, b) => a.order - b.order,
  );
}

export function getIssue(slug: string): Issue | undefined {
  return getIssues().find((i) => i.slug === slug);
}
