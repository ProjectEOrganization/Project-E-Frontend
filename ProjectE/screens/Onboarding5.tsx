import React, { useState, useEffect } from "react";
import { StyleSheet, TouchableOpacity, Image, Alert } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { useFonts } from "expo-font";
import SvgComponent from "../assets/discard/svgComponent.js";
import SvgComponent1 from "../assets/discard/svgComponent1.js";
import OnBoardingSvgComponent3 from "../assets/onBoardingSvgComponent3.js";
import Navigation from "../navigation";
import { LinearGradient } from "expo-linear-gradient";

import { api } from "../services/api";
import { useNavigation, useRoute } from "@react-navigation/native";
import TabOneScreen from "./FriendsScreen";
import { useAuth } from "../services/auth";
import { createIconSetFromFontello } from "@expo/vector-icons";

// import * as yourModuleName from 'module-name';

export default function TabThreeScreen() {
  const auth = useAuth();
  const { params } = useRoute();
  async function anonymousSignin() {
    await auth.signInAnonymously();
    var user = auth.user;
    await user
      .updateProfile({
        displayName: randomName,
        photoURL: photoURL,
      })
      .then((data) => {
        console.log(data);
      });
    navigation.navigate("RandomChat");
  }

  async function getRandomName() {
    const newRandomName = await (
      await api.get("/generate_display_name")
    ).data.name;
    // const avatars = await (await api.get("avatars")).data.avatars;
    // console.log("avatars: ", avatars);
    setRandomName(newRandomName);
    console.log(newRandomName);
    console.log(photoURL);
  }
  function register() {
    auth
      .signupWithPhoto(
        params.email,
        params.password,
        params.displayName,
        photoURL
      )
      // console.log(params)
      .then(() => {
        navigation.navigate("Friends");
      })
      .catch(() => {
        setSuccess(false);
      });
  }
  const navigation = useNavigation();

  const [randomName, setRandomName] = useState("Green Chinchilla");
  const [success, setSuccess] = useState(true);
  const [photoURL, setPhotoURL] = useState(
    "https://rapid.nyc3.digitaloceanspaces.com/avatars/01-dog.png"
  );

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title2}>Rapid</Text> */}
      {/* <SvgComponent /> */}

      <OnBoardingSvgComponent3 />
      {/* <Text style={styles.title1}>ONBOARDING 2 {"\n"}TO RAPID</Text> */}

      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
      {/* <EditScreenInfo path="/screens/TabTwoScreen.tsx" /> */}

      <Text style={styles.title}>Choose your Profile Pic</Text>
      <View
        style={{
          position: "absolute",
          top: 1260,
          left: 120,
          borderRadius: 100,
          borderWidth: 5,
          borderColor: "#4B6EF6",
        }}
      >
        <Image
          style={{
            margin: 20,
            position: "relative",
            top: -5,
            left: -3,
            width: 120,
            height: 120,
            padding: 0,
          }}
          source={
            photoURL
              ? { uri: photoURL }
              : require("../assets/images/Profile-Male-PNG.png")
          }
        />
      </View>
      <TouchableOpacity
        style={styles.yesButton}
        onPress={() =>
          navigation.navigate("ChooseProfileModal", {
            changeProfilePicFunc: setPhotoURL,
          })
        }
      >
        <Text style={styles.loginText}>Change</Text>
      </TouchableOpacity>

      {!success && (
        <Text
          style={{
            fontSize: 14,
            fontFamily: "Inter-Bold",
            color: "red",
            textAlign: "center",
            lineHeight: 23,
            position: "absolute",
            top: 1650,
            left: 40,
          }}
        >
          An account with this email has been created.
        </Text>
      )}

      {!success && (
        <TouchableOpacity
          style={styles.yesButton4}
          onPress={() =>
            navigation.navigate("ChooseProfileModal", {
              changeProfilePicFunc: setPhotoURL,
            })
          }
        >
          <Text style={styles.loginText}>Go Back</Text>
        </TouchableOpacity>
      )}
      {/* 
        <View 
        style={{position: 'absolute',
        top: 1380, 
        left: 0,
       
        width: 400}}>

          <Text style={styles.title3}>
            We'll call you
          </Text>

          <Text style={styles.title4}>
            {randomName}
          </Text>
          </View>

          <TouchableOpacity style={styles.yesButton2} onPress={getRandomName} >
            <Text style={styles.loginText2}>
              Randomize
          </Text>
          </TouchableOpacity> */}

      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={["#B3ECAE", "#00DBD0"]}
        style={styles.yesButton3}
      >
        <TouchableOpacity onPress={() => register()}>
          <Text style={styles.loginText3}>Let's Go!</Text>
        </TouchableOpacity>
      </LinearGradient>

      <Text style={styles.title5}>
        By pressing on ???Ready!???, you agree to our Terms of Service and {"\n"}{" "}
        acknowledge that you read our Privacy Policy
      </Text>

      {/* <View style={styles.container2}>
        <Text style={styles.title3}>
          Chat with random people and create
          everlasting friendships,
        <Text style={{ fontWeight: 'bold' }}> click below </Text>

        </Text >
      </View>

      <TouchableOpacity onPress={anonymousSignin}>
        <SvgComponent1 />
      </TouchableOpacity> */}

      {/* <View style={styles.container3}>
        <Text style={styles.title4}>
          Already have an account?
        <Text onPress={() => navigation.navigate('LoginModal')} style={{ fontFamily: 'Inter-SemiBold', color: '#4B00FF' }}> Log in </Text> */}
      {/* <Text onPress={anonymousSignin} style={{fontFamily: 'Inter-SemiBold', color: '#4B00FF'}}> Log in as a guest</Text> */}
      {/* </Text >
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // overall container
    flex: 1,
    alignItems: "center",
    marginTop: -950,
    paddingLeft: 80,
    backgroundColor: "#FFFFFF",
  },
  title: {
    position: "absolute",
    top: 1180,
    left: 40,
    alignSelf: "center",
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "Inter-ExtraBold",
    color: "#4957FF",
    letterSpacing: 1,
  },
  title1: {
    //Welcome to
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "right",
    fontFamily: "Inter-ExtraBold",
    color: "#4957FF",
    letterSpacing: 1,
    position: "absolute",
    top: 1100,
    left: 20,
  },
  title2: {
    //Welcome to
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "right",
    fontFamily: "Inter-ExtraBold",
    color: "#4957FF",
    letterSpacing: 1,
    position: "absolute",
    top: 1140,
    left: 110,
  },
  title3: {
    //Welcome to
    fontSize: 22,
    textAlign: "center",
    fontFamily: "Inter-SemiBold",
    color: "#6E6E6E",
    letterSpacing: 0,
    // position: 'absolute',
    // top: 1380,
    // left: 125
  },
  title4: {
    //Welcome to
    fontSize: 28,
    textAlign: "center",
    fontFamily: "Inter-ExtraBold",
    color: "#689CF6",
    letterSpacing: 0,
    marginTop: 10,
    // position: 'absolute',
    // top: 1420,
    // left: 0
  },
  yesButton: {
    backgroundColor: "#4957FF",
    borderRadius: 15,
    height: 60,
    shadowOffset: { width: 2, height: 6 },
    shadowColor: "#4957FF",
    shadowOpacity: 0.27,
    justifyContent: "center",
    width: 190,
    position: "absolute",
    top: 1450,
    left: 115,
  },
  yesButton4: {
    backgroundColor: "#4957FF",
    borderRadius: 15,
    height: 40,
    shadowOffset: { width: 2, height: 6 },
    shadowColor: "#4957FF",
    shadowOpacity: 0.27,
    justifyContent: "center",
    width: 140,
    position: "absolute",
    top: 1680,
    left: 125,
  },

  loginText: {
    color: "white",
    textAlign: "center",
    fontSize: 25,
    fontFamily: "Inter-ExtraBold",
  },
  yesButton2: {
    borderColor: "#4957FF",
    borderWidth: 3,
    borderRadius: 10,
    height: 35,
    shadowOffset: { width: 2, height: 6 },
    shadowColor: "#4957FF",
    shadowOpacity: 0.27,
    justifyContent: "center",
    width: 140,
    position: "absolute",
    top: 1465,
    left: 130,
  },
  loginText2: {
    color: "#4957FF",
    textAlign: "center",
    fontSize: 16,
    fontFamily: "Inter-ExtraBold",
  },

  yesButton3: {
    backgroundColor: "#50E3C2",
    borderRadius: 25,
    height: 70,
    shadowOffset: { width: 2, height: 6 },
    shadowColor: "#50E3C2",
    shadowOpacity: 0.27,
    justifyContent: "center",
    width: 325,
    position: "absolute",
    top: 1565,
    left: 50,
  },
  loginText3: {
    color: "white",
    textAlign: "center",
    fontSize: 25,
    fontFamily: "Inter-ExtraBold",
  },
  title5: {
    fontSize: 10,
    textAlign: "center",
    fontFamily: "Inter-Medium",
    color: "#A9ACB0",
    letterSpacing: 0,
    marginTop: 10,
    position: "absolute",
    top: 1720,
    left: 55,
  },
});
