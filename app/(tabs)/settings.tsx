import { useAuthStore } from "@/utils/authStore";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function SettingsScreen() {
  const { logOut } = useAuthStore();
  return (
    <View>
      <Text>SettingsScreen</Text>
      <TouchableOpacity
        style={{
          marginTop: 20,
          padding: 10,
          backgroundColor: "#e21e1eff",
          borderRadius: 5,
        }}
        onPress={logOut}
      >
        <Text style={{ color: "white" }}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}
