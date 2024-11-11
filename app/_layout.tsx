import { Platform, View } from "react-native";
import { useFonts } from "expo-font";
import React from "react";
import { Slot } from "expo-router";
import { globalStyles } from "@/styles/global-styles";
import * as NavigationBar from "expo-navigation-bar";

const isAndroid = Platform.OS === "android";

if (isAndroid) {
  NavigationBar.setBackgroundColorAsync("black");
}

const RootLayout = () => {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={globalStyles.background}>
      <Slot />
    </View>
  );
};

export default RootLayout;
