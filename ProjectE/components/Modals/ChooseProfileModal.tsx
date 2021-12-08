import { useNavigation, useRoute } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import { Dimensions, View } from "react-native";
import { StyleSheet, TouchableOpacity, Image } from "react-native";
import LoginSvgComponent from "../../assets/discard/loginSvgComponent.js";
import { Text, TextInput } from "react-native";
import Login from "../Auth/Login";
import { api } from "../../services/api";
import { useAuth } from "../../services/auth";
import { ScrollView } from "react-native-gesture-handler";
import { navigationRef } from "../../navigation/index";

const { width, height } = Dimensions.get("screen");

export default function ChooseProfileModal() {
  const { params } = useRoute();
  const navigation = useNavigation();
  const auth = useAuth();

  var avatars = [
    "https://rapid.nyc3.digitaloceanspaces.com/avatars/01-dog.png",
    "https://rapid.nyc3.digitaloceanspaces.com/avatars/02-puppy.png",
    "https://rapid.nyc3.digitaloceanspaces.com/avatars/03-cat.png",
    "https://rapid.nyc3.digitaloceanspaces.com/avatars/04-cat.png",
    "https://rapid.nyc3.digitaloceanspaces.com/avatars/05-bear.png",
    "https://rapid.nyc3.digitaloceanspaces.com/avatars/06-panda.png",
    "https://rapid.nyc3.digitaloceanspaces.com/avatars/07-chick.png",
    "https://rapid.nyc3.digitaloceanspaces.com/avatars/08-hamster.png",
    "https://rapid.nyc3.digitaloceanspaces.com/avatars/09-bird.png",
    "https://rapid.nyc3.digitaloceanspaces.com/avatars/10-taco toucan.png",
    "https://rapid.nyc3.digitaloceanspaces.com/avatars/11-rabbit.png",
    "https://rapid.nyc3.digitaloceanspaces.com/avatars/12-ferrets.png",
    "https://rapid.nyc3.digitaloceanspaces.com/avatars/13-elephant.png",
    "https://rapid.nyc3.digitaloceanspaces.com/avatars/14-seal.png",
    "https://rapid.nyc3.digitaloceanspaces.com/avatars/15-penguin.png",
    "https://rapid.nyc3.digitaloceanspaces.com/avatars/16-turtle.png",
    "https://rapid.nyc3.digitaloceanspaces.com/avatars/17-otter.png",
    "https://rapid.nyc3.digitaloceanspaces.com/avatars/18-monkey.png",
    "https://rapid.nyc3.digitaloceanspaces.com/avatars/19-tiger.png",
    "https://rapid.nyc3.digitaloceanspaces.com/avatars/20-lion.png",
    "https://rapid.nyc3.digitaloceanspaces.com/avatars/21-cow.png",
    "https://rapid.nyc3.digitaloceanspaces.com/avatars/22-pig.png",
    "https://rapid.nyc3.digitaloceanspaces.com/avatars/23-fox.png",
    "https://rapid.nyc3.digitaloceanspaces.com/avatars/24-red panda.png",
    "https://rapid.nyc3.digitaloceanspaces.com/avatars/25-raccoon.png",
    "https://rapid.nyc3.digitaloceanspaces.com/avatars/26-squid.png",
    "https://rapid.nyc3.digitaloceanspaces.com/avatars/27-crocodile.png",
    "https://rapid.nyc3.digitaloceanspaces.com/avatars/28-shark.png",
    "https://rapid.nyc3.digitaloceanspaces.com/avatars/29-whale.png",
    "https://rapid.nyc3.digitaloceanspaces.com/avatars/30-killer whale.png",
  ];
  function changeProfilePic(url) {
    auth.user.updateProfile({ photoURL: url });
  }

  async function goBack(value) {
    params.changeProfilePicFunc(value);
    navigationRef.current?.goBack();
  }
  // useEffect(() => {
  //   async function getAvatars() {
  //     avatars = await (await api.get("avatars")).data.avatars;
  //     console.log("avatars", avatars)
  //   }
  //   getAvatars();
  // }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={{ zIndex: 999 }}>
        <View style={styles.overallContainer}>
          <LoginSvgComponent />
          <View style={{ width: 260, paddingTop: 20, alignItems: "center" }}>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                width: 325,
                flexWrap: "wrap",
                height: 80,
              }}
            >
              {avatars.map((value, index) => {
                console.log("value", value);
                return (
                  <TouchableOpacity onPress={() => goBack(value)}>
                    <Image
                      style={{
                        width: 60,
                        height: 60,
                        marginHorizontal: 10,
                        marginVertical: 10,
                      }}
                      source={{ uri: value }}
                    />
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
          <Text
            style={{
              color: "#4B6EF6",
              marginTop: 650,
              fontFamily: "Inter-ExtraBold",
              textDecorationLine: "underline",
              fontSize: 17,
            }}
          >
            or choose your own
          </Text>
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
    height: 705,
    width: 350,
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
    textAlign: "center",
    lineHeight: 30,
  },
  secondText: {
    fontSize: 14,
    fontFamily: "Inter-Medium",
    color: "#A9ACB0",
    paddingTop: 15,
    lineHeight: 23,
    textAlign: "center",
  },
  yesButton: {
    backgroundColor: "#3CDF7C",
    borderRadius: 6,
    height: 75,
    marginTop: 35,
    shadowOffset: { width: 2, height: 6 },
    shadowColor: "#3CDF7C",
    shadowOpacity: 0.27,
    justifyContent: "center",
    width: 110,
    marginRight: 30,
  },
  noButton: {
    backgroundColor: "#F24646",
    borderRadius: 6,
    height: 75,
    marginTop: 35,
    shadowOffset: { width: 2, height: 6 },
    shadowColor: "#F24646",
    shadowOpacity: 0.27,
    justifyContent: "center",
    width: 110,
  },
  loginText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    fontFamily: "Inter-Bold",
  },
});
