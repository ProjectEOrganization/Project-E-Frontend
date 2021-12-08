import * as WebBrowser from "expo-web-browser";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import LoginSvgComponent from "../../assets/discard/loginSvgComponent.js";

import Colors from "../../constants/Colors";
import { MonoText } from "../StyledText";
// import { Text, View } from './Themed';
import { useFonts } from "expo-font";
import { Text, View, TextInput } from "react-native";
import { navigationRef } from "../../navigation";

export default function RejectedAlert({ path }: { path: string }) {
  return (
    <View style={styles.overallContainer}>
      <LoginSvgComponent />
      <View style={{ width: 260, paddingTop: 30, alignItems: "center" }}>
        <Text style={styles.firstText}>:(</Text>
        {/* PROBABLY NEED AN IF STATEMENT (like if on certain page, display different text below) */}
        <Text style={styles.secondText}>
          This person loves chatting with you, but they aren’t ready for a new
          friendship
        </Text>
        <TouchableOpacity
          onPress={() => navigationRef.current?.goBack()}
          style={styles.loginButton}
        >
          <Text style={styles.loginText}>Alright!</Text>
        </TouchableOpacity>
      </View>

      {/* <View
          style={[styles.codeHighlightContainer, styles.homeScreenFilename]}
          >
          <MonoText>{path}</MonoText>
        </View> */}

      {/* <Text
          style={styles.getStartedText}
          >
          Change any of the text, save the file, and your app will automatically update.
        </Text>
      </View>

      <View style={styles.helpContainer}>
        <TouchableOpacity onPress={handleHelpPress} style={styles.helpLink}>
          <Text style={styles.helpLinkText} >
            Tap here if your app doesn't automatically update after making changes
          </Text>
        </TouchableOpacity> */}
    </View>
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    "https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet"
  );
}

const styles = StyleSheet.create({
  overallContainer: {
    //overall container
    height: 250,
    width: 330,
    backgroundColor: "#fff",
    borderRadius: 40,
    alignItems: "center",
    shadowOffset: { width: 0, height: 1 },
    shadowColor: "#000000",
    shadowOpacity: 0.05,
  },
  firstText: {
    fontSize: 22,
    fontFamily: "Inter-ExtraBold",
    color: "#4957FF",
  },
  secondText: {
    fontSize: 13.6,
    fontFamily: "Inter-Medium",
    color: "#A9ACB0",
    paddingTop: 16,
    lineHeight: 23,
    textAlign: "center",
  },
  loginButton: {
    backgroundColor: "#4B00FF",
    borderRadius: 6,
    height: 50,
    marginTop: 35,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: "#4B00FF",
    shadowOpacity: 0.27,
    justifyContent: "center",
    width: "100%",
  },
  loginText: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    fontFamily: "Inter-Bold",
  },
});
