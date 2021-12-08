import React, { useState, useEffect } from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";

import { Text, View } from "../components/Themed";
import { useFonts } from "expo-font";
import OnBoardingSvgComponent from "../assets/onBoardingSvgComponent.js";
import Navigation from "../navigation";

import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../services/auth";

import tw from "twrnc";

export default function TabTwoScreen() {
  const navigation = useNavigation();

  return (
    <View style={tw`flex-1 items-center justify-center`}>
      <View style={tw`pt-36 pr-16 absolute`}>
        <OnBoardingSvgComponent />
      </View>
      <Text
        style={{
          fontFamily: "Nunito-Bold",
          color: "#6A5AE0",
          fontSize: 30,
          textAlign: "center",
          marginTop: 150,
        }}
      >
        Welcome to {"\n"}
        <Text
          style={{
            fontSize: 60,
            fontFamily: "Nunito-ExtraBold",
            color: "#6A5AE0",
            letterSpacing: 2.5,
          }}
        >
          ttyl
        </Text>
      </Text>

      <View style={tw`flex-row  w-75 h-70 mr-5 pt-10`}>
        {/* Column 1 */}
        <View style={tw`flex-col  items-center -ml-4`}>
          <Image
            style={tw`w-35 h-55`}
            source={require("../assets/images/onboardingimages/onboarding1image1.png")}
          ></Image>
          <Text
            style={[
              tw`w-40 text-center `,
              {
                fontFamily: "Nunito-ExtraBold",
                color: "#585858",
                fontSize: 17,
                marginTop: 15,
              },
            ]}
          >
            Answer quirky polls about friends
          </Text>
        </View>

        {/* Column 2 */}
        <View style={tw`flex-col  items-center ml-8`}>
          <Image
            style={tw`w-35 h-55`}
            source={require("../assets/images/onboardingimages/onboarding1image2.png")}
          ></Image>
          <Text
            style={[
              tw`w-40 text-center `,
              {
                fontFamily: "Nunito-ExtraBold",
                color: "#585858",
                fontSize: 17,
                marginTop: 15,
              },
            ]}
          >
            Get anonymous responses
          </Text>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate("Onboarding2")}
        style={[
          tw`bg-blue-300 w-80 h-15 items-center justify-center`,
          {
            backgroundColor: "#6A5AE0",
            borderRadius: "18",
            marginTop: "auto",
            marginBottom: 40,
          },
        ]}
      >
        <Text
          style={[tw`text-white`, { fontFamily: "Rubik-Medium", fontSize: 24 }]}
        >
          Play Now
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
