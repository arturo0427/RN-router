// app/onboarding/final.tsx
import { useAuthStore } from "@/utils/authStore";
import { router } from "expo-router";
import { useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function OnboardingFinalScreen() {
  const completeOnboarding = useAuthStore((s) => s.completeOnboarding);
  const hasCompletedOnboarding = useAuthStore((s) => s.hasCompleteOnboarding);

  useEffect(() => {
    if (hasCompletedOnboarding) router.replace("/sign-in"); // o "/(tabs)"
  }, [hasCompletedOnboarding]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Onboarding Screen 2</Text>
      <TouchableOpacity
        onPress={completeOnboarding}
        style={{ marginTop: 20, padding: 10 }}
      >
        <Text>Complete onboarding</Text>
      </TouchableOpacity>
    </View>
  );
}
