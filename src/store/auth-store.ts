import { create } from "zustand";
import { persist } from "zustand/middleware";
import { User } from "@/types/user";

interface AuthState {
  token: string | null;
  user: User | null;

  hasHydrated: boolean;

  setAuth: (token: string, user: User) => void;
  logout: () => void;
  setHasHydrated: (state: boolean) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,

      user: null,

      hasHydrated: false,

      setHasHydrated: (state) =>
        set({
          hasHydrated: state,
        }),

      setAuth: (token, user) =>
        set({
          token,
          user,
        }),

      logout: () =>
        set({
          token: null,
          user: null,
        }),
    }),
    {
      name: "skillora-auth",

      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    }
  )
);
