import React, { useEffect } from "react";
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

import { navigationRef } from "../navigation";
import GemIcon from "../assets/icons/gemicon.js";

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

export default function RandomChatScreen() {
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

  const colors = ["#F09CA5", "#F09CE7", "#2DDBC0", "#F0C39C"];

  const random = Math.floor(Math.random() * colors.length);
  const random1 = colors[random];

  if (queue.status !== "found") {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "flex-start",
          backgroundColor: "#FAFCFF",
        }}
      >
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
              <Fontisto name="bell-alt" color={"#85ACD6"} size={20} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.topButtons}>
              <Ionicons name="settings-sharp" color={"#85ACD6"} size={20} />
            </TouchableOpacity>
          </View>
          <Image
            style={{ height: 80, width: 80, alignSelf: "center" }}
            source={require("../assets/images/bluetextlogo.png")}
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
        <View
          style={{
            width: "100%",
            height: 15,
            backgroundColor: "transparent",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            paddingHorizontal: 10,
            marginBottom: 20,
          }}
        >
          <Text
            style={{ fontFamily: "Rubik-Bold", fontSize: 13, color: "#4B6EF6" }}
          >
            XP
          </Text>
          <View
            style={{
              backgroundColor: "#B2E3FF",
              height: "70%",
              width: 280,
              borderRadius: 30,
            }}
          ></View>
          <View
            style={{
              backgroundColor: "white",
              height: 25,
              width: 26,
              borderRadius: 50,
              shadowOffset: { width: 0, height: 1 },
              shadowColor: "#000000",
              shadowOpacity: 0.2,
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            <Text
              style={{
                fontFamily: "Rubik-Bold",
                fontSize: 13,
                color: "#4B6EF6",
              }}
            >
              32
            </Text>
          </View>
        </View>

        <View
          style={{
            height: 200,
            width: "100%",
            backgroundColor: "transparent",
            flexDirection: "row",
            paddingHorizontal: 20,
            justifyContent: "space-around",
          }}
        >
          <View
            style={{ justifyContent: "center", backgroundColor: "transparent" }}
          >
            <View
              style={{
                backgroundColor: "#F6CA73",
                width: 140,
                height: 170,
                borderRadius: 20,
              }}
            ></View>
          </View>

          <View
            style={{
              justifyContent: "flex-end",
              backgroundColor: "transparent",
              flexDirection: "column",
              paddingBottom: 20,
            }}
          >
            <Text
              style={{
                fontFamily: "Rubik-Bold",
                fontSize: 28,
                color: "#4B6EF6",
                marginBottom: 5,
              }}
            >
              Caitlyn
            </Text>
            <Text
              style={{
                fontFamily: "Rubik-Medium",
                fontSize: 20,
                color: "#85ACD6",
                marginBottom: 28,
              }}
            >
              23 Friends
            </Text>

            <TouchableOpacity
              style={{
                width: 140,
                height: 50,
                backgroundColor: "#4B6EF6",
                borderRadius: 20,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: "Rubik-Medium",
                  fontSize: 20,
                  color: "white",
                }}
              >
                Edit Avatar
              </Text>
            </TouchableOpacity>
          </View>
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
          <TouchableOpacity
            style={{
              backgroundColor: "#4B6EF6",
              height: 80,
              width: 180,
              borderRadius: 20,
              alignItems: "center",
              justifyContent: "center",
              shadowOffset: { width: 0, height: 0 },
              shadowColor: "#95BAF7",
              shadowOpacity: 1,
              shadowRadius: 15,
              marginTop: 100,
            }}
            // onPress={() => store.dispatch(joinQueue())}
            onPress={() => navigation.navigate("FindingScreen")}
          >
            <Text
              style={{
                fontFamily: "Rubik-Bold",
                color: "white",
                fontSize: 38,
              }}
            >
              Start
            </Text>
          </TouchableOpacity>
        )}
      </View>
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
