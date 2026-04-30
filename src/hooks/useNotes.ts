"use client";

import { useCallback, useEffect, useState } from "react";

const STORAGE_PREFIX = "carlton-research:notes:";

export function useNotes(articleId: string): {
  notes: string;
  setNotes: (value: string) => void;
  loaded: boolean;
} {
  const [notes, setNotesState] = useState<string>("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const stored = window.localStorage.getItem(STORAGE_PREFIX + articleId);
      setNotesState(stored ?? "");
    } catch {
      setNotesState("");
    }
    setLoaded(true);
  }, [articleId]);

  const setNotes = useCallback(
    (value: string) => {
      setNotesState(value);
      if (typeof window === "undefined") return;
      try {
        if (value) {
          window.localStorage.setItem(STORAGE_PREFIX + articleId, value);
        } else {
          window.localStorage.removeItem(STORAGE_PREFIX + articleId);
        }
      } catch {
        /* ignore */
      }
    },
    [articleId],
  );

  return { notes, setNotes, loaded };
}

export function useAllNotes(): Record<string, string> {
  const [all, setAll] = useState<Record<string, string>>({});
  useEffect(() => {
    if (typeof window === "undefined") return;
    const next: Record<string, string> = {};
    for (let i = 0; i < window.localStorage.length; i += 1) {
      const key = window.localStorage.key(i);
      if (!key || !key.startsWith(STORAGE_PREFIX)) continue;
      const id = key.slice(STORAGE_PREFIX.length);
      const val = window.localStorage.getItem(key);
      if (val) next[id] = val;
    }
    setAll(next);
  }, []);
  return all;
}
