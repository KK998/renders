import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface AppStore {
  isSearchOpen: boolean;
  toggleSearch: () => void;
}

export const useAppStore = create<AppStore>()(
  devtools(
    (set) => ({
      isSearchOpen: false,
      toggleSearch: () => set((p) => ({ isSearchOpen: !p.isSearchOpen })),
    }),
    {
      enabled: process.env.NODE_ENV === "development",
    }
  )
);
