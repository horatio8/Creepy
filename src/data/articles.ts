import type { Article } from "@/types/content";

// Each entry reproduces a short, attributed quotation from a named source.
// The quote and attribution are inseparable — the Quote component requires both.
export const ARTICLES: Article[] = [
  {
    id: "cw-chronicles-i",
    slug: "carlton-walker-chronicles-myth-of-martyrdom",
    category: "custody",
    title: "The Carlton Walker Chronicles: Dispelling a Myth of Martyrdom",
    source: "Carolina Courier",
    publication: "Carolina Courier (Substack)",
    type: "Investigation",
    date: "2024",
    year: "2024",
    url: "https://carolinacourier.substack.com/p/the-carlton-walker-chronicles-dispelling-myth-martyrdom",
    credibility: 4,
    quote:
      "The Court has said openly that the child wants nothing to do with Carlton or his parents.",
    attribution: "Carolina Courier (Substack) · 2024",
    documentNote:
      "Long-form column citing the Amended Final Order in Charleston County Family Court case 2019-DR-10-1147.",
  },
  {
    id: "cw-chronicles-ii",
    slug: "carlton-walker-chronicles-ii-bad-daddy",
    category: "custody",
    title: "The Carlton Walker Chronicles II: You're a Bad Daddy",
    source: "Carolina Courier",
    publication: "Carolina Courier (Substack)",
    type: "Investigation",
    date: "2024",
    year: "2024",
    url: "https://carolinacourier.substack.com/p/the-carlton-walker-chronicles-ii",
    credibility: 4,
    quote:
      "What Carlton paints as righteous outrage, the Court recognized as the psychological and emotional abuse of a child.",
    attribution: "Carolina Courier (Substack) · 2024",
    documentNote:
      "Follow-up column referencing the Charleston County Family Court psychological evaluation in case 2019-DR-10-1147.",
  },
  {
    id: "mcadams-complaint",
    slug: "mcadams-fraud-complaint",
    category: "fraud",
    title:
      "Carlton Walker Sued by the Mother of His Child for Fraud & Dodging Child Support",
    source: "Carolina Courier",
    publication: "Carolina Courier (Substack)",
    type: "Investigation",
    date: "2024",
    year: "2024",
    url: "https://carolinacourier.substack.com",
    credibility: 4,
    quote:
      "According to the complaint, this wasn't just Carlton's typically sloppy bookkeeping, but an intentional scheme to keep his daughter and her mother from collecting what the courts had already ordered him to pay.",
    attribution: "Carolina Courier (Substack) · 2024",
    documentNote:
      "Reporting on a May 2023 complaint filed by Sylvia Ashley McAdams via Hopkins Law Firm in Charleston County.",
  },
  {
    id: "walker-answer",
    slug: "walker-answer-to-complaint",
    category: "fraud",
    title:
      "Defendant's Answer to Complaint — Walker v. McAdams (Court of Common Pleas)",
    source: "South Carolina Court of Common Pleas",
    publication: "S.C. Court of Common Pleas (Charleston County)",
    type: "Court filing — Defendant's Answer",
    date: "2023",
    year: "2023",
    url: "https://www.sccourts.org/caseSearch/",
    credibility: 5,
    quote:
      "The Defendants Helen R. Walker and James L. Walker, Jr. paid valuable consideration in the amount of $212,000.00 to Lee Carlton Walker in the form of loans and advances.",
    attribution: "S.C. Court of Common Pleas · Defendant's Answer · 2023",
    documentNote:
      "Court filing. Defendant's Answer to Complaint. Public record from the South Carolina Court of Common Pleas case search system.",
  },
  {
    id: "ai-candidate",
    slug: "artificially-intelligent-candidate",
    category: "ai-imagery",
    title:
      "Carlton Walker: The Artificially Intelligent Candidate for SC House of Representatives",
    source: "Carolina Courier",
    publication: "Carolina Courier (Substack)",
    type: "Investigation",
    date: "2024",
    year: "2024",
    url: "https://carolinacourier.substack.com",
    credibility: 4,
    quote:
      "Carlton Walker Was Confronted For His Attempts To Pass Off AI Generated Images As Authentic.",
    attribution: "Carolina Courier (Substack) · 2024",
    documentNote:
      "Investigation into AI-generated imagery circulated by Walker's campaign.",
  },
  {
    id: "fitsnews-family-court",
    slug: "lowcountry-house-candidate-family-court-reform",
    category: "campaign-conduct",
    title:
      "Watch: Lowcountry House Candidate Campaigns on Family Court Reform",
    source: "FITSNews",
    publication: "FITSNews",
    type: "News interview",
    date: "2024",
    year: "2024",
    url: "https://www.fitsnews.com",
    credibility: 3,
    quote:
      "Walker is now a residential builder, having previously worked as a skilled laborer.",
    attribution: "FITSNews · 2024",
    documentNote:
      "Interview-format coverage of Walker's family court reform platform.",
  },
  {
    id: "wcbd-yard-sign",
    slug: "yard-sign-taken",
    category: "campaign-conduct",
    title:
      "SC House Candidate Claims Yard Sign Was Taken by Someone Associated With His Opponent",
    source: "WCBD News 2",
    publication: "WCBD News 2",
    type: "Local news",
    date: "2024",
    year: "2024",
    url: "https://www.counton2.com",
    credibility: 3,
    quote: "It's election interference, Walker said.",
    attribution: "WCBD News 2 · 2024",
    documentNote:
      "Local news coverage of a campaign-sign incident on Red Bank Road, referred to SLED.",
  },
  {
    id: "abc-announcement",
    slug: "announces-run-district-15",
    category: "election-record",
    title:
      "Republican Carlton Walker Announces Run for South Carolina House District 15",
    source: "ABC News 4 / Holy City Sinner",
    publication: "ABC News 4 / Holy City Sinner",
    type: "News",
    date: "2023",
    year: "2023",
    url: "https://abcnews4.com",
    credibility: 3,
    quote:
      "Walker is a broker in charge with the We Love Real Estate Company.",
    attribution: "ABC News 4 / Holy City Sinner · 2023",
    documentNote:
      "Initial candidacy announcement coverage for the 2024 District 15 race.",
  },
  {
    id: "pc-jail",
    slug: "man-jailed-grass-trees",
    category: "property",
    title: "Man Jailed Over Grass, Trees",
    source: "Post and Courier",
    publication: "Post and Courier",
    type: "News",
    date: "n.d.",
    year: "n.d.",
    url: "https://www.postandcourier.com",
    credibility: 4,
    quote:
      "When North Charleston mobile home park owner Carlton Walker spent a night in jail earlier this month for a string of tickets — including for allowing the grass to grow.",
    attribution: "Post and Courier",
    documentNote:
      "Daily-newspaper report on a North Charleston code-enforcement matter, with city fines for tree work.",
  },
  {
    id: "myrtle-gatch",
    slug: "gil-gatch-consistently-inconsistent",
    category: "political-ties",
    title: "Rep. Gil Gatch: Consistently Inconsistent on Judges",
    source: "MyrtleBeachSC News",
    publication: "MyrtleBeachSC News",
    type: "Opinion column",
    date: "2024",
    year: "2024",
    url: "https://myrtlebeachsc.com",
    credibility: 3,
    quote:
      "The Carlton Walker family had previously been represented by Gatch in his family court debacle.",
    attribution: "MyrtleBeachSC News · 2024",
    documentNote:
      "Opinion column referencing Judge Daniel Martin and prior representation by South Carolina Rep. Gil Gatch.",
  },
  {
    id: "berkeley-sweep",
    slug: "republicans-sweep-berkeley-county",
    category: "election-record",
    title:
      "Republicans Sweep Berkeley County in High-Turnout Election",
    source: "Local SC News",
    publication: "Local SC News",
    type: "News",
    date: "2024-11",
    year: "2024",
    url: "",
    credibility: 3,
    quote:
      "JA Moore squeaked by Republican challenger Carlton Walker by 250 votes in the House District 15 race.",
    attribution: "Local SC News · November 2024",
    documentNote:
      "General election results coverage for SC House District 15, November 2024.",
  },
  {
    id: "live5-meet",
    slug: "meet-the-candidates-walker",
    category: "election-record",
    title: "Meet the Candidates: SC House District 15 — Carlton Walker",
    source: "Live 5 News",
    publication: "Live 5 News",
    type: "Video interview",
    date: "2024-10-19",
    year: "2024",
    url: "https://www.live5news.com",
    credibility: 3,
    quote: "Meet the Candidates: SC House District 15: Carlton Walker.",
    attribution: "Live 5 News · 19 October 2024",
    documentNote:
      "Candidate-profile video segment on the Charleston CBS affiliate.",
  },
  {
    id: "wcbd-primary",
    slug: "lowcountry-incumbents-primary",
    category: "election-record",
    title: "Lowcountry Incumbents Win Big in Statehouse Primary Races",
    source: "WCBD News 2",
    publication: "WCBD News 2",
    type: "News",
    date: "2024-06",
    year: "2024",
    url: "https://www.counton2.com",
    credibility: 3,
    quote:
      "Lowcountry incumbents win big in Statehouse primary races.",
    attribution: "WCBD News 2 · June 2024",
    documentNote:
      "Primary-results coverage noting Walker advanced to face JA Moore.",
  },
  {
    id: "ccp-guide",
    slug: "2024-charleston-county-election-guide",
    category: "election-record",
    title: "2024 Election Guide: Charleston County Races",
    source: "Charleston City Paper",
    publication: "Charleston City Paper",
    type: "Election guide",
    date: "2024",
    year: "2024",
    url: "https://charlestoncitypaper.com",
    credibility: 3,
    quote: "2024 Election Guide: Charleston County Races.",
    attribution: "Charleston City Paper · 2024",
    documentNote:
      "Election guide listing the District 15 candidates including Walker.",
  },
  {
    id: "ballotpedia",
    slug: "ballotpedia-profile",
    category: "election-record",
    title: "Carlton Walker — Ballotpedia Profile",
    source: "Ballotpedia",
    publication: "Ballotpedia",
    type: "Reference",
    date: "2024",
    year: "2024",
    url: "https://ballotpedia.org/Carlton_Walker",
    credibility: 5,
    quote:
      "Walker did not complete Ballotpedia's 2024 Candidate Connection survey.",
    attribution: "Ballotpedia · 2024",
    documentNote:
      "Reference encyclopedia profile with campaign-finance summary.",
  },
  {
    id: "transparency-usa",
    slug: "transparency-usa-profile",
    category: "election-record",
    title: "Carlton Walker — Transparency USA Profile",
    source: "Transparency USA",
    publication: "Transparency USA",
    type: "Reference",
    date: "2024",
    year: "2024",
    url: "https://www.transparencyusa.org",
    credibility: 5,
    quote:
      "Campaign finance reference data for Carlton Walker, 2024 election cycle.",
    attribution: "Transparency USA · 2024",
    documentNote:
      "Public-records aggregator with Walker's 2024 campaign finance filings.",
  },
];

