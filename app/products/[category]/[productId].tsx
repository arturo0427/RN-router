import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function ProductScreen() {
  const params = useLocalSearchParams();
  return (
    <View>
      <Text>ProductScreen</Text>
      <Text>{JSON.stringify(params)}</Text>
    </View>
  );
}
