import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  KeyboardAvoidingView,
  Dimensions,
  Platform,
} from "react-native";
import { Text, View } from "../components/Themed";
import BackArrowSvgComponent from "../assets/discard/backArrowSvgComponent.js";
import { useFonts } from "expo-font";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import FriendsPageSwitch from "../components/Friends/FriendsPageSwitch";
import ThreeDotsSvg from "../assets/discard/threeDotsSvg.js";
import FriendsChatBox from "../components/Friends/FriendsChatBox";
import FriendsChatScreenBottomBar from "../components/Friends/FriendsChatScreenBottomBar";
import { api } from "../services/api";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { useAuth } from "../services/auth";
import { useSocket } from "../services/socket";
import { RootState, store } from "../store";
import { fetchMessages, IChat, IMessage } from "../store/reducers/chat";
import { useSelector } from "../hooks";
import { createSelector } from "reselect";
import { fetchFriends } from "../store/reducers/friends";
import { batch } from "react-redux";
import { backend } from "../services/backend";

const { width, height } = Dimensions.get("screen");

type ParamList = {
  FriendsChatScreen: IChat;
};

export default function FriendsChatScreen() {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<ParamList, "FriendsChatScreen">>();

  const loading = useSelector((state) => state.chat.loadingMessages);

  const chatSelector = createSelector(
    (state: RootState) => state.chat.chats,
    (chat) => chat[route.params.id]
  );

  const chat = useSelector(chatSelector);

  const chatMessagesSelector = createSelector(
    (state: RootState) => state.chat.chats[route.params.id],
    (chat) => {
      if (Array.isArray(chat?.messages)) {
        return chat.messages;
      }
      return [];
    }
  );

  const chatMessages = useSelector(chatMessagesSelector);

  useEffect(() => {
    store.dispatch(
      fetchMessages({ chatId: route.params.id, userId: route.params.user.uid })
    );
  }, []);

  useEffect(() => {
    if (chatMessages.length > 0) {
      backend.chat.setAsRead({
        chatId: route.params.id,
        lastMessageId: chatMessages[0]?.id,
      });
    }
  }, [chatMessages, route.params.id]);

  const Header = () => (
    <View
      style={{
        marginTop: 20,
        backgroundColor: "transparent",
        flexDirection: "row",
        alignItems: "center",
        height: 60,
        marginHorizontal: 20,
      }}
    >
      <View style={{ width: 50, backgroundColor: "transparent" }}>
        <TouchableOpacity onPress={() => navigation.navigate("Friends")}>
          <BackArrowSvgComponent />
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexGrow: 1,
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "transparent",
        }}
      >
        <Image
          style={[
            {
              width: chat.user.photoURL ? 40 : 65,
              height: chat.user.photoURL ? 40 : 65,
            },
          ]}
          source={
            chat.user.photoURL
              ? { uri: chat.user.photoURL }
              : require("../assets/images/Profile-Male-PNG.png")
          }
          resizeMode="contain"
        />
        <Text
          style={{
            fontSize: 20,
            fontFamily: "Inter-SemiBold",
            color: "#21293A",
            marginLeft: 15,
            marginTop: -5,
          }}
        >
          {chat?.user?.displayName}
        </Text>
      </View>
      <View
        style={{
          transform: [{ rotate: "90deg" }],
          backgroundColor: "transparent",
        }}
      >
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("RemoveFriendModal", {
              chatId: route.params.id,
              friendId: route.params.user.uid,
            })
          }
        >
          <ThreeDotsSvg />
        </TouchableOpacity>
      </View>
    </View>
  );

  const { top } = useSafeAreaInsets();
  if (!chat) return null;
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={[styles.container, { flex: 1, width: "100%", paddingTop: top }]}
    >
      <Header />
      {loading ? <LoadingScreen /> : <FriendsChatBox messages={chatMessages} />}
      <FriendsChatScreenBottomBar
        chatId={chat?.id}
        recipientId={chat.user?.uid}
      />
    </KeyboardAvoidingView>
  );
}

const LoadingScreen = () => {
  return (
    <View style={{ width, flexGrow: 1, backgroundColor: "transparent" }}>
      <View style={[styles.loading]}>
        <ActivityIndicator size="small" color="#4B00FF" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#F1F6FC",
    height,
  },
  loading: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
});
