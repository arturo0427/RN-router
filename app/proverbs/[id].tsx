import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const proverbs = [
  {
    id: "1",
    proverb: "Fall seven times, stand up eight.",
    source: "Japanese Proverb",
  },
  {
    id: "2",
    proverb: "He who has a why to live can bear almost any how.",
    source: "German Proverb",
  },
  {
    id: "3",
    proverb: "A calm sea does not make a skilled sailor.",
    source: "African Proverb",
  },
  {
    id: "4",
    proverb:
      "The best time to plant a tree was twenty years ago; the second best time is now.",
    source: "Chinese Proverb",
  },
  {
    id: "5",
    proverb: "Little by little, the bird builds its nest.",
    source: "Haitian Proverb",
  },
  {
    id: "6",
    proverb: "Do not fear going forward slowly; fear only standing still.",
    source: "Chinese Proverb",
  },
  {
    id: "7",
    proverb:
      "If you want to go fast, go alone. If you want to go far, go together.",
    source: "African Proverb",
  },
  {
    id: "8",
    proverb: "Where there is no struggle, there is no strength.",
    source: "African American Proverb",
  },
  {
    id: "9",
    proverb: "The future depends on what you do today.",
    source: "Indian Proverb",
  },
  {
    id: "10",
    proverb: "No pressure, no diamonds.",
    source: "Scottish Proverb",
  },
];

export default function ProverbScreen() {
  const params = useLocalSearchParams<{ id: string }>();
  const proverbItem = proverbs.find((item) => item.id === params.id);

  if (!proverbItem) {
    return (
      <View>
        <Text>Proverb not found</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Proverb Screen</Text>
      <Text>{proverbItem.proverb}</Text>
    </View>
  );
}
