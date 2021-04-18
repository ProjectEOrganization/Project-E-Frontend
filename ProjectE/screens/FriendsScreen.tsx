import * as React from 'react';
import { Button, Dimensions, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FriendsChat from '../components/Friends/FriendsChat';

import { Text, View } from '../components/Themed';
import BackArrowSvgComponent from '../assets/backArrowSvgComponent.js';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import FriendsPageSwitch from '../components/Friends/FriendsPageSwitch';
import ThreeDotsSvg from '../assets/threeDotsSvg.js';
import { useAuth } from '../services/auth';
import { api } from '../services/api';
import { useSocket } from '../services/socket';
import FriendsMessagesCard from '../components/Friends/FriendsMessagesCard';
import IndividualFriendChat from '../components/Friends/IndividualFriendChat';
import FriendsChatList from '../components/Friends/FriendsChatList';
import navigationRef from '../navigation/index';
import { Tooltip } from 'react-native-elements';
import { useRef, useEffect } from 'react';
import { store } from '../store';
import { leaveQueue } from '../store/reducers/chat';

const { width } = Dimensions.get('screen');

export default function FriendsScreen() {
  let username = 'Anonymous';

  const tooltipRef = useRef(null);

  useEffect(() => {
    tooltipRef.current?.toggleTooltip();
  });

  const navigation = useNavigation();

  const scrollRef = React.useRef<ScrollView | null>(null);

  const auth = useAuth();

  const [route, setRoute] = React.useState<"messages" | "friends">("messages")

  React.useEffect(() => {
    if (route === 'messages') scrollRef.current?.scrollTo({ x: 0, animated: true })
    else if (route === 'friends') scrollRef.current?.scrollTo({ x: width, animated: true })
  }, [route])



  return (
    <View style={styles.container}>
      <ScrollView>

        <View
          style={{
            marginTop: 80,
            backgroundColor: 'transparent',
            flexDirection: 'row',
            marginLeft: 30

          }}
        >
          <ThreeDotsSvg />
          <TouchableOpacity onPress={() => navigation.navigate('SendFriendRequestModal')} >
            <Text style={{
              marginLeft: 220, fontFamily: 'Inter-SemiBold', color: '#21293A'
            }}>Add Friend +</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            marginTop: 60,
            backgroundColor: 'transparent',
            paddingHorizontal: 35,
          }}
        >
          <Text
            style={{
              fontFamily: 'Inter-SemiBold',
              fontSize: 25,
              color: '#21293A',
            }}
          >
            Hello {auth.user?.displayName || username}!
          </Text>
          <Text selectable>{auth.user?.uid}</Text>
          {/* <FriendsPageSwitch onChange={(route) => setRoute(route)} /> */}
        </View>

        <ScrollView ref={scrollRef} scrollEnabled={false} horizontal pagingEnabled contentContainerStyle={{ flexDirection: 'row', width: width * 2, marginTop: 35, paddingBottom: 45 }}>
          <View style={{ backgroundColor: 'transparent', width, paddingLeft: (width * 0.15) / 2 }}>
            <FriendsChatList />
          </View>
          <View style={{ backgroundColor: 'transparent', width, paddingHorizontal: 35 }}>
            <FriendsChat />
          </View>
        </ScrollView>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F6FC',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
  },
});
