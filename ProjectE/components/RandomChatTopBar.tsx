import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import LoginSvgComponent from '../assets/loginSvgComponent.js';
import RandomChatTopBarSvgComponent from '../assets/randomChatTopBarSvgComponent.js';

import Colors from '../../constants/Colors';
import { MonoText } from '../StyledText';
// import { Text, View } from './Themed';
import { useFonts } from 'expo-font';
import { Text, View, TextInput, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { api } from '../services/api';
import { useNavigation } from '@react-navigation/core';
import {useEffect, useRef} from 'react';
import { Tooltip } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function RandomChatTopBar({ user }) {
  const { top } = useSafeAreaInsets();

  const navigation = useNavigation();

  const friendRef = useRef(null);

  const sendFriendRequest = () => {
    api.post(`/friends/add/${user?.uid}`)
      .then(() => navigation.navigate('FriendRequestSentModal'))
  }

  useEffect(() => {
    async function fetchData() {
      const newFriendRef = await AsyncStorage.getItem('newFriendRef');
      if (newFriendRef == "true") {
        console.log("friendRef true");
        // await AsyncStorage.clear()
        //   .catch(error => console.log(error));
      } else {
        console.log("friendRef false");
        friendRef.current?.toggleTooltip();
        await AsyncStorage.setItem('newFriendRef', 'true')
          .catch(error => console.log(error));
      }
    }
    fetchData();
  })

  return (
    <View style={[styles.topBar, { paddingTop: top + 10 }]}>
      <Image
        style={{ height: 60, width: 60 }}
        source={require('../assets/images/Profile-Male-PNG.png')}
      />
      <View style={styles.userNameText}>
        <Text style={styles.secondText}>You are chatting with</Text>
        <Text style={styles.firstText}>{user?.displayName}</Text>
        <Text style={[{ color: user?.isActive == true ? 'green' : 'red' }]}>{user?.isActive == 1 ? 'Active' : 'Offline'}</Text>
      </View>
      <View>
        <TouchableOpacity onPress={sendFriendRequest} style={styles.loginButton}>
          {/* <Tooltip ref={friendRef} popover={<Text>Send friend request</Text>}> */}
            <RandomChatTopBarSvgComponent />
            <Text style={styles.loginText}>Let's be Friends</Text>
          {/* </Tooltip> */}
        </TouchableOpacity>
      </View>
    </View>
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet'
  );
}

const styles = StyleSheet.create({
  topBar: {
    paddingBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    shadowOffset: { width: 0, height: 6 },
    shadowColor: '#000000',
    shadowOpacity: 0.05,
  },
  userNameText: {
    marginRight: 15,
    marginTop: 10,
  },
  firstText: {
    fontSize: 20,
    fontFamily: 'Inter-ExtraBold',
    color: '#21293A',
  },
  secondText: {
    fontSize: 10,
    fontFamily: 'Inter-Medium',
    color: '#5D5D5D',
  },
  loginButton: {
    backgroundColor: '#4B00FF',
    marginTop: 10,
    borderRadius: 30,
    paddingHorizontal: 10,
    paddingVertical: 10,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: '#4B00FF',
    shadowOpacity: 0.27,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginRight: -10,
  },
  loginText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 10,
    fontFamily: 'Inter-SemiBold',
    marginLeft: 10,
  },
});
