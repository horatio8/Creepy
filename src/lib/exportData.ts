import type { Article } from "@/types/article";

export function downloadJSON(articles: Article[]): void {
  const blob = new Blob([JSON.stringify({ articles }, null, 2)], {
    type: "application/json",
  });
  triggerDownload(blob, `carlton-walker-research-${stamp()}.json`);
}

export function downloadCSV(articles: Article[]): void {
  const headers = [
    "id",
    "title",
    "source",
    "publicationType",
    "datePublished",
    "category",
    "credibilityScore",
    "articleUrl",
    "summary",
    "keyQuote",
  ];
  const lines = [headers.join(",")];
  for (const a of articles) {
    const row = a as unknown as Record<string, unknown>;
    lines.push(headers.map((key) => csvCell(row[key])).join(","));
  }
  const blob = new Blob([lines.join("\n")], {
    type: "text/csv;charset=utf-8;",
  });
  triggerDownload(blob, `carlton-walker-research-${stamp()}.csv`);
}

export function printReport(articles: Article[]): void {
  const win = window.open("", "_blank", "noopener,noreferrer");
  if (!win) return;
  const html = renderPrintHtml(articles);
  win.document.write(html);
  win.document.close();
  win.focus();
  setTimeout(() => win.print(), 400);
}

function renderPrintHtml(articles: Article[]): string {
  const rows = articles
    .map(
      (a) => `
        <article class="entry">
          <header>
            <span class="cat">${escapeHtml(a.category)}</span>
            <span class="cred">Credibility ${a.credibilityScore}/5</span>
          </header>
          <h2>${escapeHtml(a.title)}</h2>
          <p class="meta">${escapeHtml(a.source)} &middot; ${escapeHtml(a.publicationType)} &middot; ${escapeHtml(a.datePublished)}</p>
          <p>${escapeHtml(a.summary)}</p>
          ${a.keyQuote ? `<blockquote>&ldquo;${escapeHtml(a.keyQuote)}&rdquo;</blockquote>` : ""}
          ${a.articleUrl ? `<p class="url">${escapeHtml(a.articleUrl)}</p>` : ""}
        </article>`,
    )
    .join("");

  return `<!doctype html><html><head><meta charset="utf-8" />
    <title>Carlton Walker Research Report</title>
    <style>
      body { font: 12px/1.5 -apple-system, Segoe UI, Roboto, sans-serif; color: #1a1f36; max-width: 720px; margin: 32px auto; padding: 0 24px; }
      h1 { font-size: 22px; margin-bottom: 4px; }
      .header-meta { color: #475569; font-size: 11px; margin-bottom: 24px; }
      .entry { padding: 16px 0; border-top: 1px solid #e2e8f0; page-break-inside: avoid; }
      .entry header { display: flex; justify-content: space-between; font-size: 11px; color: #475569; margin-bottom: 4px; }
      .entry h2 { font-size: 14px; margin: 4px 0; }
      .meta { color: #475569; font-size: 11px; margin: 0 0 8px; }
      blockquote { border-left: 3px solid #e2e8f0; padding-left: 12px; color: #1a1f36; margin: 8px 0; font-style: italic; }
      .url { font-family: ui-monospace, monospace; font-size: 10px; color: #3b82f6; word-break: break-all; }
      .cat { font-weight: 600; }
    </style></head>
    <body>
      <h1>Carlton Walker Opposition Research</h1>
      <div class="header-meta">${articles.length} sources &middot; Generated ${new Date().toLocaleString()}</div>
      ${rows}
    </body></html>`;
}

function csvCell(value: unknown): string {
  if (value == null) return "";
  const str = String(value).replace(/"/g, '""');
  return `"${str}"`;
}

function stamp(): string {
  const d = new Date();
  return `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, "0")}${String(d.getDate()).padStart(2, "0")}`;
}

function triggerDownload(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
