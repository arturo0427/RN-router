// app/onboarding/_layout.tsx
import { useAuthStore } from "@/utils/authStore";
import { Redirect, Stack } from "expo-router";

export default function OnboardingLayout() {
  const done = useAuthStore((s) => s.hasCompleteOnboarding);
  if (done) return <Redirect href="/sign-in" />; // o "/(tabs)"
  return <Stack screenOptions={{ headerShown: false }} />;
}
