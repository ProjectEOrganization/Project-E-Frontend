import React, { useState, useEffect, useRef, Component } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
  ScrollView,
  Dimensions,
} from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

import Navigation from "../navigation";

import { api } from "../services/api";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useAuth } from "../services/auth";

import tw from "twrnc";

const { width } = Dimensions.get("window");

export default function TabThreeScreen() {
  const auth = useAuth();

  const navigation = useNavigation();

  // useEffect(() => {
  //   setTimeout(() => {
  //     ScrollView.scrollTo(x: 30)
  // });

  const onNext = async () => {
    if (true) {
      navigation.navigate("RandomChat");
    } else {
      // setSuccess(false)
    }
  };

  // this.scrollView.scrollTo({ x: -30 });

  return (
    <View
      style={[
        tw`flex-1 items-center justify-start `,
        { backgroundColor: "#EFEEFC" },
      ]}
    >
      <Image
        style={{ height: "100%", width: "100%" }}
        source={require("../assets/images/pageback4.png")}
      />

      <Image
        style={{ height: 100, width: 100, marginTop: 40, position: "absolute" }}
        source={require("../assets/images/bluetextlogo.png")}
      />

      <View
        style={{
          backgroundColor: "white",
          height: 576,
          width: 362,
          borderRadius: 35,
          position: "absolute",
          top: 220,
          flex: 1,
          alignItems: "center",
          justifyContent: "start",
        }}
      >
        <Text
          style={[
            styles.textStyle,
            {
              color: "#009B70",
              fontSize: 24,
              fontFamily: "Rubik-Bold",
              marginTop: 27,
            },
          ]}
        >
          Let's get creative!
        </Text>

        <Text
          style={[
            styles.textStyle,
            {
              color: "#6C79FF",
              fontSize: 22,
              fontFamily: "Rubik-Medium",
              marginTop: 30,
            },
          ]}
        >
          Create your avatar
        </Text>

        <Text
          style={[
            styles.textStyle,
            {
              color: "#868595",
              fontSize: 15,
              fontFamily: "Rubik-Regular",
              marginTop: 20,
              lineHeight: 21,
            },
          ]}
        >
          Collect more avatars and cosmetics {"\n"}by playing more, making new
          friends{"\n"}and more
        </Text>
        <View style={{ height: 200, marginTop: 30 }}>
          <ScrollView
            horizontal={true}
            decelerationRate={0}
            snapToInterval={width - 60}
            snapToAlignment={"center"}
            contentInset={{ top: 0, left: 30, bottom: 0, right: 30 }}
            contentOffset={{ x: 300, y: 0 }}
            contentContainerStyle={{ flexGrow: 1, height: 50 }}
          >
            <View style={styles.first} />
            <View style={styles.second} />
            <View style={styles.third} />
          </ScrollView>
        </View>

        <TouchableOpacity
          onPress={() => onNext()}
          style={[
            tw`bg-blue-300 w-80 h-15 items-center justify-center`,
            {
              backgroundColor: "#4B6EF6",
              borderRadius: "20",
              marginTop: "auto",
              marginBottom: 20,
            },
          ]}
        >
          <Text
            style={{
              fontFamily: "Rubik-Medium",
              fontSize: 20,
              color: "#FFFFFF",
            }}
          >
            I'm ready!!
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: "Rubik-Medium",
    textAlign: "center",
  },
  first: {
    backgroundColor: "#FFCCEF",
    width: width - 80,
    margin: 10,
    height: 170,
    borderRadius: 10,
  },
  second: {
    backgroundColor: "#CCE4FF",
    width: width - 80,
    margin: 10,
    height: 170,
    borderRadius: 10,
  },
  third: {
    backgroundColor: "#FFFDCC",
    width: width - 80,
    margin: 10,
    height: 170,
    borderRadius: 10,
  },
});
