/*
 ** This is the Layaut file
 */

import { useAuthStore } from "@/utils/authStore";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { Platform } from "react-native";

// const isLoggedIn = false;

const isWeb = Platform.OS === "web";

if (!isWeb) {
  SplashScreen.preventAutoHideAsync();
}

export default function RootLayout() {
  const { isLoggedIn, hasCompleteOnboarding, _hasHydrated } = useAuthStore();

  useEffect(() => {
    if (_hasHydrated) {
      SplashScreen.hideAsync();
    }
  }, [_hasHydrated]);

  if (!_hasHydrated && !isWeb) {
    return null;
  }

  return (
    <Stack>
      {/** Protected Routes **/}
      <Stack.Protected guard={isLoggedIn}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack.Protected>

      {/** Unprotected Routes **/}
      <Stack.Protected guard={!isLoggedIn && hasCompleteOnboarding}>
        <Stack.Screen name="sign-in" />
        <Stack.Screen name="create-account" />
      </Stack.Protected>

      <Stack.Protected guard={!hasCompleteOnboarding}>
        <Stack.Screen name="onboarding" options={{ headerShown: false }} />
      </Stack.Protected>
    </Stack>
  );
}
