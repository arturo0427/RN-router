import { AuthContext } from "@/utils/authContext";
import React, { useContext } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  const authState = useContext(AuthContext);

  return (
    <View>
      <Text>HomeScreen</Text>
      <TouchableOpacity
        style={{
          backgroundColor: "#db2424ff",
          padding: 10,
          borderRadius: 5,
          marginVertical: 10,
          marginHorizontal: 20,
        }}
        onPress={authState.logOut}
      >
        <Text
          style={{
            fontSize: 18,
            color: "white",
            textAlign: "center",
          }}
        >
          Sign Out
        </Text>
      </TouchableOpacity>
    </View>
  );
}
