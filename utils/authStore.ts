import * as SecureStore from "expo-secure-store";
import { Platform } from "react-native";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const isWeb = Platform.OS === "web";

type UserState = {
  isLoggedIn: boolean;
  shouldCreateAccount: boolean;
  hasCompleteOnboarding: boolean;
  logIn: () => void;
  logOut: () => void;
  completeOnboarding: () => void;
  resetOnboarding: () => void;
};

// export const useAuthStore = createStore(
//   persist<UserState>(
//     (set) => ({
//       isLoggedIn: false,
//       shouldCreateAccount: false,
//       logIn: () => {
//         set((state) => {
//           return {
//             ...state,
//             isLoggedIn: true,
//           };
//         });
//       },
//       logOut: () => {
//         set((state) => {
//           return {
//             ...state,
//             isLoggedIn: false,
//           };
//         });
//       },
//     }),
//     {
//       name: "auth-store",
//       storage: createJSONStorage(() => ({
//         setItem,
//         getItem,
//         removeItem: deleteItemAsync,
//       })),
//     }
//   )
// );

export const useAuthStore = create(
  persist<UserState>(
    (set) => ({
      isLoggedIn: false,
      shouldCreateAccount: false,
      hasCompleteOnboarding: false,
      logIn: () => set((s) => ({ ...s, isLoggedIn: true })),
      logOut: () => set((s) => ({ ...s, isLoggedIn: false })),
      completeOnboarding: () =>
        set((s) => ({ ...s, hasCompleteOnboarding: true })),
      resetOnboarding: () =>
        set((s) => ({ ...s, hasCompleteOnboarding: false })),
    }),
    {
      name: "auth-store",
      storage: isWeb
        ? createJSONStorage(() => ({
            getItem: async (name: string) =>
              window.localStorage.getItem(name) ?? null,
            setItem: async (name: string, value: string) =>
              window.localStorage.setItem(name, value),
            removeItem: async (name: string) =>
              window.localStorage.removeItem(name),
          }))
        : createJSONStorage(() => ({
            getItem: SecureStore.getItem,
            setItem: SecureStore.setItem,
            removeItem: SecureStore.deleteItemAsync,
          })),
    }
  )
);
