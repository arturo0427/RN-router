/*
 ** This is the SCREEN
 */

import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={style.title}>Index Screen</Text>
    </View>
  );
}

const style = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    paddingVertical: 10,
  },
  button: {
    padding: 10,
    backgroundColor: "lightblue",
    marginTop: 10,
    borderRadius: 5,
    fontWeight: "semibold",
  },
});
