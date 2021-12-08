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
  const phoneInput = useRef<PhoneInput>(null);
  const inputRef = useRef<TextInput>();

  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const [text, onChangeText] = React.useState("");
  const [success, setSuccess] = useState(true);

  const navigation = useNavigation();

  const onNext = async () => {
    if (value !== "") {
      //check phone format and etc.
      //send codes using twilio
      navigation.navigate("Onboarding3", { phone: value });
    } else {
      console.log("err");
    }
  };

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
        Let's set you up
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
        What’s your phone?
      </Text>

      <View style={tw`bg-transparent w-80 h-30 items-start mt-10`}>
        <PhoneInput
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
        />
      </View>

      <TouchableOpacity
        onPress={() => onNext()}
        style={[
          tw`bg-blue-300 w-80 h-15 items-center justify-center`,
          {
            backgroundColor: "#FFFFFF",
            borderRadius: "18",
            marginTop: "auto",
            marginBottom: 320,
          },
        ]}
      >
        <Text
          style={{ fontFamily: "Rubik-Medium", fontSize: 20, color: "#4B6EF6" }}
        >
          Yah that's right
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
