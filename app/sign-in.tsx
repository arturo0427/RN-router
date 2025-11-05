import { useAuthStore } from "@/utils/authStore";
import { Button, Text, TouchableOpacity, View } from "react-native";

export default function SignIn() {
  const { logIn } = useAuthStore();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          textTransform: "capitalize",
        }}
      >
        sign-in
      </Text>
      <TouchableOpacity
        style={{
          marginTop: 20,
          padding: 10,
          backgroundColor: "#007AFF",
          borderRadius: 5,
        }}
        onPress={logIn}
      >
        <Text style={{ color: "white" }}>Sign In</Text>
      </TouchableOpacity>
      <Button
        title="Test"
        onPress={() => {
          console.log("Press");
        }}
      />
    </View>
  );
}
