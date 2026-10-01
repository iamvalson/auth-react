import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { AuthUser } from "../types/auth";

interface AuthState {
  user: AuthUser | null;
  accessToken: string | null;

  login: (user: AuthUser, accessToken: string) => void;
  logout: () => void;

  isAuthenticated: () => boolean;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      accessToken: null,

      login: (user, accessToken) => {
        set({
          user,
          accessToken,
        });
      },

      logout: () => {
        set({
          user: null,
          accessToken: null,
        });
      },

      isAuthenticated: () => {
        return Boolean(get().accessToken);
      },
    }),
    {
      name: "auth-storage",
    },
  ),
);
