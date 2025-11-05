import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function OnboardingFirstScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Onboarding Screen 1</Text>
      <Link
        asChild
        push
        href="/onboarding/final"
        style={{
          marginTop: 20,
          backgroundColor: "lightblue",
          padding: 10,
          borderRadius: 5,
        }}
      >
        <Text>Go to screen 2</Text>
      </Link>
    </View>
  );
}
