import { StyleSheet, Text, View } from "react-native";

export default function Layout() {
  //   return <Slot />;

  return (
    <View style={styles.container}>
      <Text>Nothing to see here!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#db7f7fff",
  },
});
