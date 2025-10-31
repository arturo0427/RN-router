/*
 ** This is the Layaut file
 */

import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="proverbs/[id]"
        options={{ title: "Proverbs", animation: "fade" }}
      />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
