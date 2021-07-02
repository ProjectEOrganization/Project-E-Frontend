import * as React from "react";
import {
  Button,
  Dimensions,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import FriendsChat from "../components/Friends/FriendsChat";

import { Text, View } from "../components/Themed";
import BackArrowSvgComponent from "../assets/backArrowSvgComponent.js";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import FriendsPageSwitch from "../components/Friends/FriendsPageSwitch";
import ThreeDotsSvg from "../assets/threeDotsSvg.js";
import NotificationIcon from '../assets/notificationIcon.js'
import { useAuth } from "../services/auth";
import { api } from "../services/api";
import { useSocket } from "../services/socket";
import FriendsMessagesCard from "../components/Friends/FriendsMessagesCard";
import IndividualFriendChat from "../components/Friends/IndividualFriendChat";
import FriendsChatList from "../components/Friends/FriendsChatList";
import navigationRef from "../navigation/index";
import { Tooltip, SearchBar } from "react-native-elements";
import { useRef, useEffect } from "react";
import { store } from "../store";
import { leaveQueue } from "../store/reducers/chat";

const { width } = Dimensions.get("screen");

export default function FriendsScreen() {
  let username = "Anonymous";
  let testNotification = 1;
  const auth = useAuth();

  const tooltipRef = useRef(null);

  const navigation = useNavigation();

  const scrollRef = React.useRef<ScrollView | null>(null);

  const [route, setRoute] = React.useState<"messages" | "friends">("messages");

  const [search, setSearch] = React.useState("");

  React.useEffect(() => {
    if (route === "messages")
      scrollRef.current?.scrollTo({ x: 0, animated: true });
    else if (route === "friends")
      scrollRef.current?.scrollTo({ x: width, animated: true });
  }, [route]);

  useEffect(() => {
    tooltipRef.current?.toggleTooltip();
  }, []);

    return (
      <View style={styles.container}>
      <View
        style={{
          marginTop: 65,
          backgroundColor: "transparent",
          flexDirection: "row",
          marginLeft: 125,
        }}
      >
        {/* <ThreeDotsSvg /> */}

        <TouchableOpacity
          onPress={() => navigation.navigate("AcceptFriendRequestsModal")}
          style={{
            backgroundColor: '#FAFCFF',
            width: 40,
            height: 40,
            marginLeft: 40,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 30,
            shadowOffset: { width: 0, height: 3 },
            shadowColor: '#000000',
            shadowOpacity: 0.19,
            shadowRadius: 15
          }}
        >
            
           {testNotification > 0 && <View style={styles.notifications}>
          
        </View>}
         <NotificationIcon />
        
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("SendFriendRequestModal")}
          style={{
            backgroundColor: '#FAFCFF',
            width: 135,
            height: 43,
            marginLeft: 20,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 30,
            shadowOffset: { width: 0, height: 3 },
            shadowColor: '#000000',
            shadowOpacity: 0.19,
            shadowRadius: 15
          }}
        >
          <Text
            style={{
              marginLeft: 0,
              fontFamily: "Inter-Bold",
              color: "#85ACD6",
              fontSize: 15
            }}
          >
            Add Friend +
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          marginTop: 60,
          backgroundColor: "transparent",
          paddingHorizontal: 35,
        }}
      >
        <Text
          style={{
            fontFamily: "Inter-ExtraBold",
            fontSize: 27,
            color: "#4B6EF6",
          }}
        >
          Hello {auth.user?.displayName || username}!
        </Text>

        {/* <Text selectable>{auth.user?.uid}</Text> */}
        {/* <FriendsPageSwitch onChange={(route) => setRoute(route)} /> */}
        <View
          style={{
            marginTop: 10,
            backgroundColor: "transparent",
            marginLeft: -10,
          }}
        >
          <SearchBar
            placeholder="Search Friends..."
            onChangeText={setSearch}
            value={search}
            lightTheme={true}
            containerStyle={{
              shadowOffset: { width: 0, height: 6 },
              shadowColor: "black", //black, aad1f0, borderTopWidth: 0.5, borderBottomWidth: 0.5, borderLeftWidth: 0.5, borderRightWidth: 0.5
              shadowOpacity: 0.1,
              backgroundColor: "transparent",
              borderTopWidth: 0,
              borderBottomWidth: 0,
              
            }}
            inputContainerStyle={{
              backgroundColor: "white",
              borderRadius: 30,
              borderColor: "rgba(133, 172, 214, 0.3)",
              borderWidth: 0.5,
              borderBottomWidth: 0.5,
              height: 45,
              width: 330
            }}
            placeholderTextColor="#85ACD6"
            searchIcon={{
              color: '#85ACD6'
            }}
          />
        </View>
      </View>

      <FriendsChatList search={search} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFCFF",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
  },
  notifications: {
    backgroundColor: '#4EBFFF',
    width: 15,
    height: 15,
    borderRadius: 10,
    top: 0,
    left: 28,
  
    position: 'absolute'
  },
});
