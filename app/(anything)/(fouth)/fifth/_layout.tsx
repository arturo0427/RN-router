import { Slot } from "expo-router";
import { StyleSheet } from "react-native";

export default function Layout() {
  return <Slot />;

  // return (
  //   <View style={styles.container}>
  //     <Text>Fifth</Text>
  //   </View>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#7fb2dbff",
  },
});
