import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Dimensions, View } from "react-native";
import { Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import LoginSvgComponent from "../../assets/discard/loginSvgComponent.js";
import { navigationRef } from "../../navigation";
import YouAreNowFriendsAlert from "../Alerts/YouAreNowFriendsAlert";
const { width, height } = Dimensions.get("screen");

export default function TheyNoAccountModal() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={{ zIndex: 999 }}>
        <View style={styles.overallContainer}>
          <LoginSvgComponent />
          <View style={{ width: 260, paddingTop: 30, alignItems: "center" }}>
            <Text style={styles.firstText}>They are not logged in.</Text>

            {/* PROBABLY NEED AN IF STATEMENT (like if on certain page, display different text below) */}
            <Text style={styles.secondText}>
              This person doesn't have a Rapid Account. Tell them to create one
              to become friends.
            </Text>

            <TouchableOpacity
              onPress={() => navigationRef.current?.goBack()}
              style={styles.loginButton}
            >
              <Text style={styles.loginText}>Got it!</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          onTouchStart={navigation.goBack}
          style={{ width, height, position: "absolute" }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overallContainer: {
    //overall container
    height: 270,
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
    fontSize: 14,
    fontFamily: "Inter-Medium",
    color: "#A9ACB0",
    paddingTop: 15,
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
