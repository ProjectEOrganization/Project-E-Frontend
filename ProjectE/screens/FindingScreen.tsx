import React, { useEffect, useRef } from "react";
import {
  ActivityIndicator,
  Button,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Image,
} from "react-native";
import { Text, View } from "../components/Themed";
import RandomChatTopBar from "../components/RandomChatTopBar";
import { useNavigation, useNavigationState } from "@react-navigation/native";
import FriendsChatScreenBottomBar from "../components/Friends/FriendsChatScreenBottomBar";
import FriendsChatBox from "../components/Friends/FriendsChatBox";
import { useAuth } from "../services/auth";
import { useSocket } from "../services/socket";
import { useSelector } from "../hooks";
import { RootState, store } from "../store";
import { initQueue, joinQueue, leaveQueue } from "../store/reducers/chat";
import { LogBox } from "react-native";
import AnimatedEllipsis from "react-native-animated-ellipsis";
import { api } from "../services/api";
import { TouchableOpacity } from "react-native-gesture-handler";
import { createSelector } from "reselect";
import TopicStarter from "../components/TopicStarter";
import { FontAwesome5, Fontisto, Ionicons } from "@expo/vector-icons";
import QueueSvgComponent from "../assets/queueSvgComponent.js";

import FindingPageBack from "../assets/findingpageback.js";

import { navigationRef } from "../navigation";
import GemIcon from "../assets/icons/gemicon.js";
import LottieView from "lottie-react-native";

LogBox.ignoreLogs(["Animated: `useNativeDriver`"]);

const queueMessagesSelector = createSelector(
  (state: RootState) => state.chat.queue,
  (queue) => {
    if (Array.isArray(queue.messages)) {
      return queue.messages;
    }
    return [];
  }
);

export default function FindingScreen() {
  const auth = useAuth();
  const queue = useSelector((state) => state.chat.queue);
  const navigation = useNavigation();

  const queueMessages = useSelector(queueMessagesSelector);

  // useEffect(() => {
  //   if (connected === true && queue.status === 'idle') {
  //     store.dispatch(joinQueue())
  //   }
  // }, [connected, auth, queue])

  function leaveQueueAction() {
    store.dispatch(leaveQueue());
  }

  if (queue.status !== "found") {
    return (
      <>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "flex-start",
            backgroundColor: "#6C79FF",
          }}
        >
          <View
            style={{
              position: "absolute",
              top: 140,
              backgroundColor: "transparent",
            }}
          >
            <FindingPageBack />
          </View>
          {/* top bar view */}
          <View
            style={{
              width: "100%",
              marginTop: 40,
              backgroundColor: "transparent",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 10,
            }}
          >
            <View
              style={{ flexDirection: "row", backgroundColor: "transparent" }}
            >
              <TouchableOpacity
                style={[styles.topButtons, { marginLeft: 20, marginRight: 13 }]}
              >
                <FontAwesome5 name="arrow-left" color={"#6C79FF"} size={20} />
              </TouchableOpacity>
            </View>
            <Image
              style={{
                height: 80,
                width: 80,
                alignSelf: "center",
                marginLeft: 35,
              }}
              source={require("../assets/images/whitetextlogo.png")}
            />
            <TouchableOpacity
              style={{
                backgroundColor: "white",
                height: 40,
                width: 90,
                borderRadius: 50,
                shadowOffset: { width: 0, height: 1 },
                shadowColor: "#000000",
                shadowOpacity: 0.2,
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                marginRight: 20,
              }}
            >
              <Text
                style={{
                  color: "#4B6EF6",
                  fontFamily: "Rubik-Bold",
                  fontSize: 16,
                  paddingRight: 6,
                }}
              >
                500
              </Text>
              <GemIcon />
            </TouchableOpacity>
          </View>

          {/* {queue.status === "searching" && (
          <TouchableOpacity onPress={leaveQueueAction}>
            <Text
              style={{
                fontFamily: "Inter-SemiBold",
                color: "white",
                marginTop: 30,
                fontSize: 16,
              }}
            >
              {" "}
              Leave Queue{" "}
            </Text>
          </TouchableOpacity>
        )} */}

          {queue.status === "idle" && (
            <View
              style={{
                flexDirection: "column",
                justifyContent: "flex-start",
                height: 600,
                alignItems: "center",
                backgroundColor: "transparent",
              }}
            >
              <Text
                style={{
                  color: "#FFFFFF",
                  fontFamily: "Nunito-ExtraBold",
                  fontSize: 50,
                  textAlign: "center",
                }}
              >
                Finding someone awesome
              </Text>
              <LottieView
                style={{
                  width: 250,
                  height: 250,
                  marginBottom: 30,
                }}
                source={require("../assets/animations/loading.json")}
                autoPlay
              />
              <Text
                style={{
                  color: "#FFFFFF",
                  fontFamily: "Rubik-Bold",
                  fontSize: 20,
                  paddingRight: 6,
                  textAlign: "center",
                }}
              >
                Actively Searching...
              </Text>
            </View>
          )}
        </View>
      </>
    );
  }

  if (queue.status === "found") {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        style={styles.container}
      >
        <RandomChatTopBar user={queue.user} />
        {queue.topic && (
          <View
            style={{
              position: "relative",
              backgroundColor: "transparent",
              top: 20,
              zIndex: 999,
            }}
          >
            <TopicStarter topic={queue.topic} colors={queue.topic.colors} />
          </View>
        )}
        <FriendsChatBox messages={queueMessages} />
        <FriendsChatScreenBottomBar
          chatId={queue?.chatId}
          recipientId={queue.user?.uid}
          isQueue={true}
        />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // overall container
    backgroundColor: "#F1F6FC",
    height: "100%",
  },
  topButtons: {
    backgroundColor: "white",
    height: 40,
    width: 40,
    borderRadius: 50,
    shadowOffset: { width: 0, height: 1 },
    shadowColor: "#000000",
    shadowOpacity: 0.2,
    alignItems: "center",
    justifyContent: "center",
  },
});
