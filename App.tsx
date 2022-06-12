import React from "react";
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  NativeModules,
  StatusBar,
} from "react-native";
import { ThemeProvider, createTheme } from "@rneui/themed";
const { StatusBarManager } = NativeModules;
import Home from "./src/pages/Home";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </SafeAreaView>
  );
}

const theme = createTheme({
  lightColors: {
    primary: "#a4e2f5",
  },
  darkColors: {
    primary: "#000",
  },
});

let statusBarHeight;
if (Platform.OS === "ios") {
  StatusBarManager.getHeight((height: number) => {
    statusBarHeight = height;
  });
} else {
  statusBarHeight = StatusBar.currentHeight;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: statusBarHeight,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
