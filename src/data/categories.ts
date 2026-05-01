import type { Category, CategorySlug } from "@/types/content";

export const CATEGORIES: Category[] = [
  {
    slug: "custody",
    label: "Family Court & Custody",
    navLabel: "Custody",
    short: "Custody",
    description:
      "Reporting and court records concerning Charleston County Family Court case 2019-DR-10-1147.",
    contextLine:
      "Two articles concern the custody case Charleston County Family Court 2019-DR-10-1147 and the 170-page Amended Final Order.",
    showInNav: true,
  },
  {
    slug: "fraud",
    label: "Child Support & Civil Fraud",
    navLabel: "Fraud",
    short: "Fraud",
    description:
      "Reporting and court filings concerning a 2023 civil complaint filed by Sylvia Ashley McAdams.",
    contextLine:
      "One article and one court filing concern a May 2023 complaint filed in Charleston County by Sylvia Ashley McAdams via Hopkins Law Firm.",
    showInNav: true,
  },
  {
    slug: "ai-imagery",
    label: "AI-Generated Campaign Imagery",
    navLabel: "AI Imagery",
    short: "AI imagery",
    description:
      "Reporting concerning AI-generated images circulated as campaign content.",
    contextLine:
      "One article concerns the use of AI-generated images in Walker's campaign materials.",
    showInNav: true,
  },
  {
    slug: "property",
    label: "Property & Code Violations",
    navLabel: "Property",
    short: "Property",
    description:
      "Reporting concerning code-violation citations and a jail booking in North Charleston.",
    contextLine:
      "One article concerns a North Charleston code-enforcement matter.",
    showInNav: true,
  },
  {
    slug: "campaign-conduct",
    label: "Campaign Conduct",
    navLabel: "Campaign",
    short: "Campaign",
    description:
      "Reporting concerning campaign-trail incidents and platform statements.",
    contextLine:
      "Two articles concern campaign-trail incidents and platform statements.",
    showInNav: false,
  },
  {
    slug: "political-ties",
    label: "Political Connections",
    navLabel: "Political ties",
    short: "Political ties",
    description:
      "Reporting concerning the Walker family's prior representation by Rep. Gil Gatch.",
    contextLine:
      "One opinion column concerns the Walker family's prior representation by South Carolina Rep. Gil Gatch.",
    showInNav: false,
  },
  {
    slug: "election-record",
    label: "Election Coverage & Results",
    navLabel: "Elections",
    short: "Elections",
    description:
      "News coverage and reference profiles documenting Walker's 2023–2024 candidacy and 2024 general election result.",
    contextLine:
      "Seven articles and reference profiles document Walker's 2023–2024 candidacy and the November 2024 general election result.",
    showInNav: false,
  },
];

export function getCategory(slug: CategorySlug): Category | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}
