import * as WebBrowser from "expo-web-browser";
import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import LoginSvgComponent from "../../assets/discard/loginSvgComponent.js";
import { useAuth } from "../../services/auth";
import Colors from "../../constants/Colors";
import { MonoText } from "../StyledText";
// import { Text, View } from './Themed';
import { useFonts } from "expo-font";
import { Text, View, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { api } from "../../services/api";
import { store } from "../../store/store";
import { addChat, makeFriends } from "../../store/reducers/chat";
import { addFriend } from "../../store/reducers/friends";

export default function Register({
  path,
  actionAfter,
}: {
  path: string;
  actionAfter?: any;
}) {
  const navigation = useNavigation();
  const auth = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");

  const onRegister = async () => {
    if (email !== "" && password !== "" && displayName !== "") {
      auth
        .signup(email, password, displayName)
        .then(() => {
          if (actionAfter?.name === "accept_friends_request") {
            const friendId = actionAfter.data?.uid;
            api.post("/friends/accept/" + friendId).then((res) => {
              store.dispatch(addChat(res.data.chat));
              store.dispatch(makeFriends());
              store.dispatch(addFriend(friendId));
            });
          }
        })
        .then(() => {
          navigation.goBack();
          console.log(
            `${email}: ${password} has signed up. You can now login and authenticate with this user.`
          );
        });
    } else {
      console.log("rip");
    }
  };

  return (
    <View style={styles.overallContainer}>
      <LoginSvgComponent />
      <View style={{ width: 260, paddingTop: 30 }}>
        <Text style={styles.firstText}>Create a New Account</Text>

        {/* PROBABLY NEED AN IF STATEMENT (like if on certain page, display different text below) */}
        <Text style={styles.secondText}>
          Login or create an account to add friends and chat with them
        </Text>
        <TextInput
          // onBlur={() => setFocused({ email: false, password: false })}
          // onFocus={() => setFocused({ email: false, password: true })}
          // onChangeText={text => setPassword(text)}
          autoCapitalize={"none"}
          autoCorrect={false}
          secureTextEntry={false}
          accessibilityElementsHidden={true}
          contextMenuHidden={true}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          placeholderTextColor="#85ACD6"
          style={{
            // borderColor: isAuth == false ? 'red' : isAuth === true ? 'green' : 'transparent',
            // borderWidth: isAuth == false ? 2 : isAuth === true ? 2 : 0,
            backgroundColor: "#F1F6FC",

            height: 48,
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
            marginTop: 35,
          }}
        />

        <TextInput
          // onBlur={() => setFocused({ email: false, password: false })}
          // onFocus={() => setFocused({ email: false, password: true })}
          // onChangeText={text => setPassword(text)}
          autoCapitalize={"none"}
          autoCorrect={false}
          secureTextEntry={true}
          accessibilityElementsHidden={true}
          contextMenuHidden={true}
          onChangeText={(text) => setPassword(text)}
          placeholder="Password"
          placeholderTextColor="#85ACD6"
          style={{
            // borderColor: isAuth == false ? 'red' : isAuth === true ? 'green' : 'transparent',
            // borderWidth: isAuth == false ? 2 : isAuth === true ? 2 : 0,
            backgroundColor: "#F1F6FC",

            height: 48,
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
            marginTop: 15,
          }}
        />

        <Text
          style={{
            fontFamily: "Inter-SemiBold",
            fontSize: 15,
            marginTop: 25,
            color: "#4957FF",
          }}
        >
          {" "}
          What do your friends call you?
        </Text>
        <TextInput
          // onBlur={() => setFocused({ email: false, password: false })}
          // onFocus={() => setFocused({ email: false, password: true })}
          // onChangeText={text => setPassword(text)}
          autoCapitalize={"none"}
          autoCorrect={false}
          secureTextEntry={false}
          accessibilityElementsHidden={true}
          contextMenuHidden={true}
          placeholder="Display Name"
          onChangeText={(text) => setDisplayName(text)}
          placeholderTextColor="#85ACD6"
          style={{
            // borderColor: isAuth == false ? 'red' : isAuth === true ? 'green' : 'transparent',
            // borderWidth: isAuth == false ? 2 : isAuth === true ? 2 : 0,
            backgroundColor: "#F1F6FC",

            height: 48,
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
            marginTop: 15,
          }}
        />

        <TouchableOpacity style={styles.loginButton} onPress={onRegister}>
          <Text style={styles.loginText}>Create Account</Text>
        </TouchableOpacity>

        <Text
          style={{
            fontSize: 10,
            color: "#A9ACB0",
            marginTop: 40,
            fontFamily: "Inter-Medium",
          }}
        >
          By signing up, you agree to our Terms of Service and acknowledge that
          you read our Privacy Policy
        </Text>

        <Text
          onPress={() => {
            navigation.goBack();
            setTimeout(() => {
              navigation.navigate("LoginModal", { actionAfter });
            }, 300);
          }}
          style={{
            fontSize: 15,
            color: "#A9ACB0",
            marginTop: 25,
            marginLeft: 15,
            fontFamily: "Inter-Medium",
          }}
        >
          Already have an account?{" "}
          <Text
            numberOfLines={1}
            adjustsFontSizeToFit
            style={{ color: "#4B00FF", fontFamily: "Inter-SemiBold" }}
          >
            Log in
          </Text>
        </Text>
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
    minHeight: 600,
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
    fontSize: 17,
    fontFamily: "Inter-Medium",
    color: "#A9ACB0",
    paddingTop: 15,
    lineHeight: 23,
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
  },
  loginText: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    fontFamily: "Inter-Bold",
  },
});
