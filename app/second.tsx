/*
 ** This is the SCREEN
 */

import { Link, useLocalSearchParams, useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function SecondScreen() {
  const router = useRouter();
  const params = useLocalSearchParams<{ name?: string }>();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>
        Hello,
        <Text style={{ fontWeight: "bold" }}>
          {params.name ? ` ${params.name}!` : "No name provided."}
        </Text>
      </Text>
      <Text>Second Screen</Text>

      <TouchableOpacity
        style={{
          padding: 10,
          backgroundColor: "lightblue",
          marginTop: 10,
          borderRadius: 5,
        }}
        onPress={() => router.push("/third")}
      >
        <Text>Redirect to /third</Text>
      </TouchableOpacity>
      <Link
        style={{ padding: 10, margin: 10, backgroundColor: "#857c7cff" }}
        href="/"
        dismissTo
      >
        <Text> Dissmis to /</Text>
      </Link>
      {/* <Link
        style={{ padding: 10, margin: 10, backgroundColor: "#857c7cff" }}
        href="/second"
        replace
      >
        <Text> Replace to /</Text>
      </Link> */}
    </View>
  );
}
