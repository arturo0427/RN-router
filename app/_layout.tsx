/*
 ** This is the Layaut file
 */

import { AuthProvider } from "@/utils/authContext";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack>
        <Stack.Screen
          name="(protected)"
          options={{ headerShown: false, animation: "fade" }}
        />
        <Stack.Screen name="login" options={{ animation: "fade" }} />
      </Stack>
    </AuthProvider>
  );
}
