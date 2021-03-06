import React, { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, TextInput } from "react-native";

import { Text, View } from "../../components/Themed";
import { Image, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";
import Login from "../../components/Auth/Login";
import Register from "../../components/Auth/Register";
import { useNavigation } from "@react-navigation/native";
import BackArrowSvgComponent from "../../assets/discard/backArrowSvgComponent.js";
import { ScrollView } from "react-native";
import { useAuth } from "../../services/auth";

// import * as yourModuleName from 'module-name';

export default function Security() {
  let [fontsLoaded] = useFonts({
    "Inter-Medium": require("../../assets/fonts/Inter/Inter-Medium.ttf"),
    "Inter-Bold": require("../../assets/fonts/Inter/Inter-Bold.ttf"),
    "Inter-Regular": require("../../assets/fonts/Inter/Inter-Regular.ttf"),
    "Inter-SemiBold": require("../../assets/fonts/Inter/Inter-SemiBold.ttf"),
  });

  const [currentPassword, setCurrentPassword] = useState("");

  const [newPassword, setNewPassword] = useState("");

  const [passwordSuccess, setPasswordSuccess] = useState(false);

  const [passwordLoading, setPasswordLoading] = useState(false);

  const navigation = useNavigation();
  const auth = useAuth();

  const changePassword = async () => {
    auth
      .signin(auth.user.email, currentPassword)
      .then(async function () {
        if (!!newPassword) {
          setPasswordLoading(true);
          await auth.user.updatePassword(newPassword);
          // await auth.init(auth.user);
          setNewPassword("");
          setPasswordSuccess(true);
          setPasswordLoading(false);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    return () => {
      setPasswordSuccess(false);
    };
  }, []);

  if (!fontsLoaded) {
    return <View />;
  } else {
    return (
      <ScrollView style={styles.container}>
        {/* <View style={{width: 300, backgroundColor: 'rgba(52, 52, 52, 0.0)', }}> */}
        {/* onPress={() => navigation.navigate('TabTwoScreen')} */}
        {/* <TouchableOpacity onPress={() => navigation.navigate('TabTwo')} >
        <BackArrowSvgComponent />
        </TouchableOpacity> */}

        {/* DEELETE FOR PRODUCTION */}
        {/* <TouchableOpacity onPress={() => navigation.navigate('RegisterTesting')} >
        <Text> TESTING REGISTER COMPONENT</Text>
        </TouchableOpacity> */}

        {/* </View> */}
        <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
          <BackArrowSvgComponent />
        </TouchableOpacity>
        <Text style={styles.title1}>Security</Text>

        {/* <Login />
        <Register /> */}

        {/* Settings text */}
        <View
          style={{
            width: "90%",
            height: "70%",
            marginTop: 80,
            backgroundColor: "transparent",
          }}
        >
          <Text style={styles.settingsText}>Change Password</Text>
          <Text
            style={{
              fontFamily: "Inter-SemiBold",
              color: "#4B00FF",
              paddingBottom: 10,
            }}
          >
            Current Password
          </Text>
          <TextInput
            // onBlur={() => setFocused({ email: false, password: false })}
            // onFocus={() => setFocused({ email: false, password: true })}
            // onChangeText={text => setPassword(text)}
            autoCapitalize={"none"}
            autoCorrect={false}
            accessibilityElementsHidden={true}
            contextMenuHidden={true}
            placeholder="Password"
            value={currentPassword}
            onChangeText={(password) => setCurrentPassword(password)}
            placeholderTextColor="#85ACD6"
            style={{
              // borderColor: isAuth == false ? 'red' : isAuth === true ? 'green' : 'transparent',
              // borderWidth: isAuth == false ? 2 : isAuth === true ? 2 : 0,
              backgroundColor: "#FFFFFF",
              height: 48,
              // borderBottomColor: focused.password ? '#4F3FEB' : 'rgba(0,0,0,.06)',
              borderWidth: 0,
              shadowOffset: { width: 0, height: 2 },
              shadowColor: "black",
              shadowOpacity: 0.16,
              // height: 44,
              width: "70%",
              borderRadius: 6,
              fontSize: 13,
              paddingHorizontal: 20,
              textAlign: "left",
              marginTop: 10,
            }}
          />

          <Text
            style={{
              fontFamily: "Inter-SemiBold",
              color: "#4B00FF",
              marginTop: 25,
            }}
          >
            New Password
          </Text>

          <TextInput
            // onBlur={() => setFocused({ email: false, password: false })}
            // onFocus={() => setFocused({ email: false, password: true })}
            // onChangeText={text => setPassword(text)}
            autoCapitalize={"none"}
            autoCorrect={false}
            accessibilityElementsHidden={true}
            contextMenuHidden={true}
            placeholder="Password"
            value={newPassword}
            onChangeText={(password) => setNewPassword(password)}
            placeholderTextColor="#85ACD6"
            style={{
              // borderColor: isAuth == false ? 'red' : isAuth === true ? 'green' : 'transparent',
              // borderWidth: isAuth == false ? 2 : isAuth === true ? 2 : 0,
              backgroundColor: "#FFFFFF",
              height: 48,
              // borderBottomColor: focused.password ? '#4F3FEB' : 'rgba(0,0,0,.06)',
              borderWidth: 0,
              shadowOffset: { width: 0, height: 2 },
              shadowColor: "black",
              shadowOpacity: 0.16,
              // height: 44,
              width: "70%",
              borderRadius: 6,
              fontSize: 13,
              paddingHorizontal: 20,
              textAlign: "left",
              marginTop: 10,
            }}
          />

          {passwordSuccess && (
            <Text
              style={{
                fontSize: 14,
                fontFamily: "Inter-SemiBold",
                color: "green",
                paddingTop: 5,
                lineHeight: 23,
              }}
            >
              Password change successful!
            </Text>
          )}

          <TouchableOpacity style={styles.loginButton} onPress={changePassword}>
            {!passwordLoading ? (
              <Text style={[styles.loginText]}>Change</Text>
            ) : (
              <ActivityIndicator color="white" size="small" />
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // overall container
    flex: 1,
    paddingTop: "22%",
    backgroundColor: "#F1F6FC",
    paddingLeft: 25,
  },
  container2: {
    //text part
    flex: 1,
    width: 300,

    justifyContent: "center",
    paddingTop: "13%",

    backgroundColor: "#F5F7F9",
    flexDirection: "row",
  },
  container3: {
    //bottom login text part
    flex: 1,
    width: 300,

    justifyContent: "center",

    backgroundColor: "#F5F7F9",
    flexDirection: "row",
  },
  title1: {
    //Settings
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Inter-SemiBold",
    color: "#21293A",
    marginTop: -20,
    marginLeft: 135,
  },
  settingsText: {
    //Rapid
    fontSize: 17,
    fontFamily: "Inter-Bold",
    color: "#59606E",
    paddingBottom: 30,
  },

  text1: {
    color: "#6F8BA4",
    fontSize: 14,
    paddingTop: 20,
  },
  text2: {
    color: "#E53D53",
    fontSize: 14,
  },
  loginButton: {
    backgroundColor: "#4B00FF",
    borderRadius: 6,
    height: 45,
    marginTop: 20,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: "#4B00FF",
    shadowOpacity: 0.27,
    justifyContent: "center",
    width: "40%",
  },
  loginText: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    fontFamily: "Inter-Bold",
  },
});
