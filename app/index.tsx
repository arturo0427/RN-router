/*
 ** This is the SCREEN
 */

import { Link, useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const router = useRouter();

  const numeroAleatorio = Math.floor(Math.random() * 10) + 1;

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={style.title}>Index Screen</Text>
      {/* <Link href="/second" push>
        Push to /second
      </Link> */}
      <TouchableOpacity
        style={style.button}
        onPress={() =>
          router.push({
            pathname: "/second",
            params: { name: "Arturo Buttom" },
          })
        }
      >
        <Text>Push to /second</Text>
      </TouchableOpacity>

      {/* <TouchableOpacity
        style={style.button}
        onPress={() => router.push("/(anything)/third")}
      >
        <Text> Push to /third</Text>
      </TouchableOpacity> */}
      <Link
        style={{ padding: 10, margin: 10, backgroundColor: "#857c7cff" }}
        href={{
          pathname: "/second",
          params: { name: "Arturo Link" },
        }}
        push
      >
        <Text> Replace to /second</Text>
      </Link>

      <TouchableOpacity
        style={style.button}
        onPress={() => router.push("/(anything)/(fouth)/fifth/sixth")}
      >
        <Text>Push to /Deeply</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={style.button}
        onPress={() =>
          router.push({
            pathname: "/proverbs/[id]",
            params: { id: numeroAleatorio.toString() },
          })
        }
      >
        <Text>Push to /proverbs/id</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={style.button}
        onPress={() =>
          router.push({
            pathname: "/products/[category]/[productId]",
            params: { category: "shoes", productId: "1234" },
          })
        }
      >
        <Text>Push to /products</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={style.button}
        onPress={() => router.push("/home")}
      >
        <Text>Push to /tabs</Text>
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
