/*
 ** This is the Layaut file
 */

import { useAuthStore } from "@/utils/authStore";
import { Stack } from "expo-router";

// const isLoggedIn = false;

export default function RootLayout() {
  const { isLoggedIn, hasCompleteOnboarding } = useAuthStore();
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
