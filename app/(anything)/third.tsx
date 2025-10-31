/*
 ** This is the SCREEN
 */

import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function ThirdScreen() {
  return (
    <View style={styles.container}>
      <Text>Third Screen</Text>

      <Link
        style={{ padding: 10, margin: 10, backgroundColor: "#857c7cff" }}
        href="/"
        dismissTo
      >
        <Text> Dissmis to /</Text>
      </Link>
      <Link
        style={{ padding: 10, margin: 10, backgroundColor: "#857c7cff" }}
        href="/second"
        replace
      >
        <Text> Replace to /second</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#dbc37fff",
  },
});
