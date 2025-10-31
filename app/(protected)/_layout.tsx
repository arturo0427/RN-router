/*
 ** This is the Layaut file
 */

import { AuthContext } from "@/utils/authContext";
import { Redirect, Stack } from "expo-router";
import { useContext } from "react";

const isLoggedIn = false;

// \home.tsx

export default function RootLayout() {
  const authState = useContext(AuthContext);

  if (!authState.isReady) return null;

  if (!authState.isLoggedIn) return <Redirect href="/login" />;

  return (
    <Stack>
      <Stack.Screen name="home" options={{ title: "Home" }} />
    </Stack>
  );
}
