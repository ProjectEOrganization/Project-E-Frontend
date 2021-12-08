import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import { Dimensions, View } from "react-native";
import { Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import LoginSvgComponent from "../../assets/discard/loginSvgComponent.js";
import { navigationRef } from "../../navigation";
import YouAreNowFriendsAlert from "../Alerts/YouAreNowFriendsAlert";
import { api } from "../../services/api";

const { width, height } = Dimensions.get("screen");

export default function ReportDetailModal({ uid }: { uid: string }) {
  const navigation = useNavigation();

  const [reason, setReason] = useState("");

  function report() {
    api
      .post("/report/" + uid, { reason: reason })
      .then(() => navigationRef.current?.goBack());
    console.log("report test");
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={{ zIndex: 999 }}>
        <View style={styles.overallContainer}>
          <LoginSvgComponent />
          <View style={{ width: 260, paddingTop: 30, alignItems: "center" }}>
            <Text style={styles.firstText}>Report this user</Text>

            {/* PROBABLY NEED AN IF STATEMENT (like if on certain page, display different text below) */}
            <Text style={styles.secondText}>
              Explain why this user is reported.
            </Text>

            <TextInput
              onChangeText={(text) => setReason(text)}
              value={reason}
              autoCapitalize={"none"}
              autoCorrect={true}
              multiline={true}
              secureTextEntry={false}
              accessibilityElementsHidden={true}
              contextMenuHidden={true}
              placeholder="Report Details.."
              placeholderTextColor="#85ACD6"
              style={{
                // borderColor: isAuth == false ? 'red' : isAuth === true ? 'green' : 'transparent',
                // borderWidth: isAuth == false ? 2 : isAuth === true ? 2 : 0,
                backgroundColor: "#F1F6FC",

                height: 98,
                // borderBottomColor: focused.password ? '#4F3FEB' : 'rgba(0,0,0,.06)',
                borderWidth: 0,
                shadowOffset: { width: 0, height: 2 },
                shadowColor: "black",
                shadowOpacity: 0.16,
                // height: 44,
                width: "100%",
                borderRadius: 6,
                fontSize: 15,
                paddingHorizontal: 20,
                textAlign: "left",
                marginTop: 20,
              }}
            />

            <TouchableOpacity
              onPress={() => report()}
              style={styles.loginButton1}
            >
              <Text style={styles.loginText}>Submit Report</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View
        onTouchStart={navigation.goBack}
        style={{ width, height, position: "absolute" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  overallContainer: {
    //overall container
    height: 300,
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
    backgroundColor: "#FF7F7F",
    borderRadius: 6,
    height: 50,
    marginTop: 35,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: "#FF7F7F",
    shadowOpacity: 0.27,
    justifyContent: "center",
    width: "100%",
  },
  loginButton1: {
    backgroundColor: "#8b0000",
    borderRadius: 6,
    height: 50,
    marginTop: 15,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: "#FF7F7F",
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
