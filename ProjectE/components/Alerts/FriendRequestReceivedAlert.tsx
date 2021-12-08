import * as WebBrowser from "expo-web-browser";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import LoginSvgComponent from "../../assets/discard/loginSvgComponent.js";

import Colors from "../../constants/Colors";
import { MonoText } from "../StyledText";
// import { Text, View } from './Themed';
import { useFonts } from "expo-font";
import { api } from "../../services/api";
import { useNavigation, useRoute } from "@react-navigation/native";

import { Text, View, TextInput } from "react-native";
import { navigationRef } from "../../navigation";
import { store } from "../../store/store";
import { addChat, makeFriends } from "../../store/reducers/chat";
import { useAuth } from "../../services/auth";
import { addFriend } from "../../store/reducers/friends";

export default function FriendRequestReceivedAlert({ friendId }) {
  const navigation = useNavigation();
  const auth = useAuth();
  async function acceptRequest() {
    navigationRef.current?.goBack();
    if (auth.user.isAnonymous) {
      navigation.navigate("RegisterModal", {
        actionAfter: {
          name: "accept_friends_request",
          data: {
            uid: friendId,
          },
        },
      });
    } else {
      api.post("/friends/accept/" + friendId).then((res) => {
        store.dispatch(addChat(res.data.chat));
        store.dispatch(makeFriends());
        store.dispatch(addFriend(friendId));
      });
    }
  }
  async function rejectRequest() {
    navigationRef.current?.goBack();
    await api.post("/friends/decline/" + friendId);
  }
  return (
    <View style={styles.overallContainer}>
      <LoginSvgComponent />
      <View style={{ width: 260, paddingTop: 30, alignItems: "center" }}>
        <Text style={styles.firstText}>Wanna be Friends?</Text>

        {/* PROBABLY NEED AN IF STATEMENT (like if on certain page, display different text below) */}
        <Text style={styles.secondText}>
          This person loves chatting with you, accept their friend request to
          continue chatting with them forever
        </Text>

        <View style={{ flex: 1, flexDirection: "row" }}>
          <TouchableOpacity onPress={acceptRequest} style={styles.yesButton}>
            <Text style={styles.loginText}>YES</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={rejectRequest} style={styles.noButton}>
            <Text style={styles.loginText}>Nah</Text>
          </TouchableOpacity>
        </View>
      </View>
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
