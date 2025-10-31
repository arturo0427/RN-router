import { AuthContext } from "@/utils/authContext";
import { useContext } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function LoginScreen() {
  const authState = useContext(AuthContext);

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text style={{ textAlign: "center" }}>login</Text>

      <TouchableOpacity
        style={{
          backgroundColor: "#268afcff",
          padding: 10,
          borderRadius: 5,
          marginVertical: 10,
          marginHorizontal: 20,
        }}
        onPress={authState.logIn}
      >
        <Text
          style={{
            fontSize: 18,
            color: "white",
            textAlign: "center",
          }}
        >
          Sign In
        </Text>
      </TouchableOpacity>
    </View>
  );
}
