import * as SecureStore from "expo-secure-store";
import { Platform } from "react-native";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const isWeb = Platform.OS === "web";

type UserState = {
  isLoggedIn: boolean;
  _hasHydrated: boolean;
  shouldCreateAccount: boolean;
  hasCompleteOnboarding: boolean;
  logIn: () => void;
  logOut: () => void;
  resetOnboarding: () => void;
  completeOnboarding: () => void;
  setHasHydrated: (value: boolean) => void;
};

export const useAuthStore = create(
  persist<UserState>(
    (set) => ({
      isLoggedIn: false,
      _hasHydrated: false,
      shouldCreateAccount: false,
      hasCompleteOnboarding: false,
      logIn: () => set((s) => ({ ...s, isLoggedIn: true })),
      logOut: () => set((s) => ({ ...s, isLoggedIn: false })),
      completeOnboarding: () =>
        set((s) => ({ ...s, hasCompleteOnboarding: true })),
      resetOnboarding: () =>
        set((s) => ({ ...s, hasCompleteOnboarding: false })),
      setHasHydrated: (value: boolean) => {
        set((state) => {
          return {
            ...state,
            _hasHydrated: value,
          };
        });
      },
    }),
    {
      name: "auth-store",
      storage: isWeb
        ? createJSONStorage(() => localStorage)
        : createJSONStorage(() => ({
            setItem: (key: string, value: string) =>
              SecureStore.setItemAsync(key, value),
            getItem: (key: string) => SecureStore.getItemAsync(key),
            removeItem: (key: string) => SecureStore.deleteItemAsync(key),
          })),
      onRehydrateStorage: () => {
        return (state) => {
          state?.setHasHydrated(true);
        };
      },
    }
  )
);
