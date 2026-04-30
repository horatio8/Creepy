"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { getSupabaseClient, isSupabaseConfigured } from "@/lib/supabase";

interface AuthGateProps {
  children: React.ReactNode;
}

export function AuthGate({ children }: AuthGateProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [status, setStatus] = useState<"loading" | "authed" | "anon">(
    "loading",
  );

  useEffect(() => {
    let active = true;

    const sharedPassword = process.env.NEXT_PUBLIC_SHARED_PASSWORD;
    const supabase = getSupabaseClient();

    async function check() {
      if (typeof window !== "undefined") {
        const flag = window.sessionStorage.getItem("carlton-research:authed");
        if (flag === "1") {
          if (active) setStatus("authed");
          return;
        }
      }

      if (!isSupabaseConfigured() && !sharedPassword) {
        if (active) setStatus("authed");
        return;
      }

      if (supabase) {
        const { data } = await supabase.auth.getSession();
        if (!active) return;
        if (data.session) {
          window.sessionStorage.setItem("carlton-research:authed", "1");
          setStatus("authed");
        } else {
          setStatus("anon");
        }
        return;
      }

      if (active) setStatus("anon");
    }

    check();

    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    if (status === "anon" && pathname !== "/login") {
      router.replace("/login");
    }
  }, [status, pathname, router]);

  if (status === "loading") {
    return (
      <div className="grid min-h-screen place-items-center bg-neutral-light">
        <div className="text-small text-slate">Loading…</div>
      </div>
    );
  }

  if (status === "anon" && pathname !== "/login") {
    return null;
  }

  return <>{children}</>;
}
