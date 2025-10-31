/*
 ** This is the Layaut file
 */

import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="home" />
      <Tabs.Screen name="aboutUs" />
    </Tabs>
  );
}
