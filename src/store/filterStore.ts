"use client";

import { create } from "zustand";
import type {
  CategoryName,
  FilterState,
  SortKey,
} from "@/types/article";

interface FilterStore extends FilterState {
  setQuery: (query: string) => void;
  toggleCategory: (category: CategoryName) => void;
  toggleSource: (source: string) => void;
  setDateFrom: (date: string | null) => void;
  setDateTo: (date: string | null) => void;
  setMinCredibility: (score: number) => void;
  setSort: (sort: SortKey) => void;
  setView: (view: "grid" | "list") => void;
  reset: () => void;
}

const INITIAL: FilterState = {
  query: "",
  categories: [],
  sources: [],
  dateFrom: null,
  dateTo: null,
  minCredibility: 1,
  sort: "date-desc",
  view: "grid",
};

export const useFilterStore = create<FilterStore>((set) => ({
  ...INITIAL,
  setQuery: (query) => set({ query }),
  toggleCategory: (category) =>
    set((state) => ({
      categories: state.categories.includes(category)
        ? state.categories.filter((c) => c !== category)
        : [...state.categories, category],
    })),
  toggleSource: (source) =>
    set((state) => ({
      sources: state.sources.includes(source)
        ? state.sources.filter((s) => s !== source)
        : [...state.sources, source],
    })),
  setDateFrom: (dateFrom) => set({ dateFrom }),
  setDateTo: (dateTo) => set({ dateTo }),
  setMinCredibility: (minCredibility) => set({ minCredibility }),
  setSort: (sort) => set({ sort }),
  setView: (view) => set({ view }),
  reset: () => set({ ...INITIAL }),
}));
