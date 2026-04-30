"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { getSupabaseClient, isSupabaseConfigured } from "@/lib/supabase";

export default function LoginPage() {
  const router = useRouter();
  const sharedPassword = process.env.NEXT_PUBLIC_SHARED_PASSWORD;
  const supabaseEnabled = isSupabaseConfigured();
  const passwordOnly = !supabaseEnabled && Boolean(sharedPassword);
  const noAuth = !supabaseEnabled && !sharedPassword;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    if (noAuth) {
      finalize();
      return;
    }

    setSubmitting(true);

    if (passwordOnly) {
      if (password === sharedPassword) {
        finalize();
      } else {
        setError("Incorrect password.");
        setSubmitting(false);
      }
      return;
    }

    const client = getSupabaseClient();
    if (!client) {
      setError("Authentication is not configured.");
      setSubmitting(false);
      return;
    }

    const { error: authError } = await client.auth.signInWithPassword({
      email,
      password,
    });

    if (authError) {
      setError(authError.message);
      setSubmitting(false);
      return;
    }

    finalize();
  }

  function finalize() {
    if (typeof window !== "undefined") {
      window.sessionStorage.setItem("carlton-research:authed", "1");
    }
    router.replace("/");
    router.refresh();
  }

  return (
    <main className="grid min-h-screen place-items-center bg-neutral-light px-4">
      <div className="w-full max-w-md">
        <div className="mb-6 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-navy text-white">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </div>
          <h1 className="text-h1 text-navy">Research Portal</h1>
          <p className="mt-1 text-small text-slate">
            Private access. Single user only.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 rounded-lg border border-border bg-white p-6 shadow-card"
        >
          {!passwordOnly && !noAuth && (
            <label className="block">
              <span className="mb-1 block text-small font-medium text-navy">
                Email
              </span>
              <input
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-md border border-border bg-white px-3 py-2.5 text-body text-navy focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
              />
            </label>
          )}

          {!noAuth && (
            <label className="block">
              <span className="mb-1 block text-small font-medium text-navy">
                Password
              </span>
              <input
                type="password"
                required
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-md border border-border bg-white px-3 py-2.5 text-body text-navy focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
              />
            </label>
          )}

          {error && (
            <div className="rounded-md border border-alert/30 bg-alert/5 px-3 py-2 text-small text-alert">
              {error}
            </div>
          )}

          {noAuth && (
            <div className="rounded-md border border-warning/30 bg-warning/5 px-3 py-2 text-small text-amber-800">
              No auth configured. Click continue to enter — set
              NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SHARED_PASSWORD before
              deploying.
            </div>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="inline-flex w-full items-center justify-center rounded-md bg-navy px-4 py-2.5 text-body font-medium text-white transition hover:bg-navy/90 disabled:opacity-60"
          >
            {submitting ? "Signing in…" : noAuth ? "Continue" : "Sign in"}
          </button>
        </form>

        <p className="mt-4 text-center text-[11px] text-slate">
          This portal indexes public sources for personal research. No content
          is republished.
        </p>
      </div>
    </main>
  );
}
