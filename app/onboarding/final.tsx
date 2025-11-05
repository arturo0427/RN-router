import { useAuthStore } from "@/utils/authStore";
import { Text, TouchableOpacity, View } from "react-native";

export default function FinalScreen() {
  const { completeOnboarding } = useAuthStore();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Onboarding Screen 2</Text>
      <TouchableOpacity
        onPress={completeOnboarding}
        style={{
          marginTop: 20,
          backgroundColor: "lightblue",
          padding: 10,
          borderRadius: 5,
        }}
      >
        <Text>Complete Onboarding</Text>
      </TouchableOpacity>
    </View>
  );
}
