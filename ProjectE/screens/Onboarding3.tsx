import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, TouchableOpacity, Image, TextInput } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

import Navigation from "../navigation";

import { api } from "../services/api";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useAuth } from "../services/auth";
import { createIconSetFromFontello } from "@expo/vector-icons";
import PhoneInput from "react-native-phone-number-input";

import tw from "twrnc";

export default function TabThreeScreen() {
  const auth = useAuth();

  const inputRef = useRef<TextInput>();

  const navigation = useNavigation();

  const onNext = async () => {
    navigation.navigate("Onboarding4", { phone: value });
  };
  // };

  return (
    <View
      style={[
        tw`flex-1 items-center justify-start `,
        { backgroundColor: "#6CB0FF" },
      ]}
    >
      <Image
        style={{ height: 100, width: 100, marginTop: 40 }}
        source={require("../assets/images/whitetextlogo.png")}
      />

      <Text
        style={{
          fontFamily: "Rubik-Medium",
          color: "#DBFFE7",
          fontSize: 28,
          textAlign: "center",
          marginTop: 30,
        }}
      >
        Stellar!
      </Text>

      <Text
        style={{
          fontFamily: "Rubik-Medium",
          color: "#FFFFFF",
          fontSize: 24,
          textAlign: "center",
          marginTop: 10,
        }}
      >
        What should I call you?
      </Text>

      <View style={tw`bg-transparent w-80 h-30 items-start mt-10`}>
        <TextInput
          style={{
            width: 320,
            borderRadius: 18,
            height: 60,
            backgroundColor: "#FFFFFF",
            textAlign: "center",
            color: "#4B6EF6",
            fontSize: 15,
            fontFamily: "Rubik-Regular",
          }}
          placeholder="First Name or Nickname"
          placeholderTextColor={"rgba(75,110,246, 0.70)"}
        />
        {/* <PhoneInput
          ref={phoneInput}
          defaultValue={value}
          defaultCode="US"
          layout="first"
          onChangeText={(text) => {
            setValue(text);
          }}
          textInputProps={{ ref: inputRef, placeholder: "(000) 000-0000" }}
          onChangeFormattedText={(text) => {
            setFormattedValue(text);
          }}
          autoFocus
          containerStyle={{
            width: 320,
            borderRadius: 10,
            backgroundColor: "rgba(0,0,0,.05)",
          }}
          textContainerStyle={{
            borderRadius: 18,
          }}
          countryPickerButtonStyle={{
            backgroundColor: "#CDC6FF",
            borderRadius: 5,
            display: "none",
          }}
        /> */}
      </View>

      <TouchableOpacity
        onPress={() => onNext()}
        style={[
          tw`bg-blue-300 w-80 h-15 items-center justify-center`,
          {
            backgroundColor: "#FFFFFF",
            borderRadius: "18",
            marginTop: "auto",
            marginBottom: 340,
          },
        ]}
      >
        <Text
          style={{ fontFamily: "Rubik-Medium", fontSize: 20, color: "#4B6EF6" }}
        >
          Call me that :)
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
