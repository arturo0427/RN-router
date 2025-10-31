/*
 ** This is the SCREEN
 */

import { AuthContext } from "@/utils/authContext";
import { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const authState = useContext(AuthContext);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={style.title}>Index Screen</Text>

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
