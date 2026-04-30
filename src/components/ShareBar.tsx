"use client";

import { useEffect, useState } from "react";

interface ShareBarProps {
  title?: string;
  className?: string;
  variant?: "light" | "dark";
}

export function ShareBar({
  title = "Before you vote for Carlton Walker, read the record.",
  className = "",
  variant = "light",
}: ShareBarProps) {
  const [url, setUrl] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") setUrl(window.location.href);
  }, []);

  const text = encodeURIComponent(title);
  const shareUrl = encodeURIComponent(url);

  const links = [
    {
      label: "Text",
      href: `sms:?&body=${text}%20${shareUrl}`,
      icon: <SmsIcon />,
    },
    {
      label: "Email",
      href: `mailto:?subject=${text}&body=${text}%0A%0A${shareUrl}`,
      icon: <MailIcon />,
    },
    {
      label: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
      icon: <FbIcon />,
    },
    {
      label: "X",
      href: `https://twitter.com/intent/tweet?text=${text}&url=${shareUrl}`,
      icon: <XIcon />,
    },
  ];

  const handleCopy = async () => {
    if (!url) return;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* noop */
    }
  };

  const handleNative = async () => {
    if (typeof navigator === "undefined" || !navigator.share) {
      handleCopy();
      return;
    }
    try {
      await navigator.share({ title, text: title, url });
    } catch {
      /* user cancelled */
    }
  };

  const baseBtn =
    variant === "dark"
      ? "border-white/20 bg-white/10 text-white hover:bg-white/20"
      : "border-border bg-white text-navy hover:border-navy/30 hover:bg-neutral-light";

  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      <button
        type="button"
        onClick={handleNative}
        className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition ${baseBtn}`}
      >
        <ShareIcon /> Share this page
      </button>
      <div className="flex items-center gap-1">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Share via ${l.label}`}
            className={`flex h-10 w-10 items-center justify-center rounded-full border transition ${baseBtn}`}
          >
            {l.icon}
          </a>
        ))}
        <button
          type="button"
          onClick={handleCopy}
          aria-label="Copy link"
          className={`flex h-10 items-center gap-1.5 rounded-full border px-3 text-[12px] font-semibold transition ${baseBtn}`}
        >
          <LinkIcon />
          {copied ? "Copied" : "Copy link"}
        </button>
      </div>
    </div>
  );
}

function ShareIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M4 12v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7" />
      <path d="m16 6-4-4-4 4" />
      <path d="M12 2v13" />
    </svg>
  );
}
function SmsIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}
function FbIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 12a10 10 0 1 0-11.5 9.9V15h-2v-3h2V9.5A3.5 3.5 0 0 1 14 6h2v3h-2c-.6 0-1 .4-1 1v2h3l-.5 3H13v6.9A10 10 0 0 0 22 12z" />
    </svg>
  );
}
function XIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2H21l-6.55 7.49L22 22h-6.78l-4.78-6.36L4.94 22H2.18l7.02-8.02L2 2h6.93l4.32 5.78L18.244 2Zm-2.39 18h1.55L7.16 4H5.5l10.353 16Z" />
    </svg>
  );
}
function LinkIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}
