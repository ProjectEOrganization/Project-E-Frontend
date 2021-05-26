import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import LoginSvgComponent from '../assets/loginSvgComponent.js';
import RandomChatTopBarSvgComponent from '../assets/randomChatTopBarSvgComponent.js';
const { width, height } = Dimensions.get('screen')
import Colors from '../../constants/Colors';
import { MonoText } from '../StyledText';
import ThreeDotsSvg from '../assets/threeDotsSvg.js'
// import { Text, View } from './Themed';
import { useFonts } from 'expo-font';
import { Text, View, TextInput, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { api } from '../services/api';
import { useNavigation } from '@react-navigation/core';
import { useEffect, useRef } from 'react';
import { Tooltip } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuth } from '../services/auth';
import { useSelector } from '../hooks/useSelector';
import { IChat } from '../store/reducers/chat';

export default function RandomChatTopBar(props: IChat) {
  const { top } = useSafeAreaInsets();
  const auth = useAuth();
  const user = useSelector(state => state.chat.queue.user);

  const navigation = useNavigation();

  const friendRef = useRef(null);

  const sendFriendRequest = () => {
    if (!user.isAnonymous && auth.user?.uid && !auth.user.isAnonymous) {
      api.post(`/friends/add/${user?.uid}`)
      .then(() => navigation.navigate('FriendRequestSentModal'))
    } else if (user.isAnonymous && auth.user?.uid) {
      navigation.navigate('TheyNoAccountModal');
    } else {
      navigation.navigate('RegisterModal');
    }
  }

  useEffect(() => {
    async function fetchData() {
      const newFriendRef = await AsyncStorage.getItem('newFriendRef');
      if (newFriendRef == "true") {
        console.log("friendRef true");
      } else {
        console.log("friendRef false");
        friendRef.current?.toggleTooltip();
        await AsyncStorage.setItem('newFriendRef', 'true')
          .catch(error => console.log(error));
      }
    }
    fetchData();
  }, [])

  return (
    <View style={[styles.topBar, { paddingTop: top + 10 }]}>
      <Image
        style={{ height: 60, width: 60 }}
        source={props.user.photoURL ? { uri: props.user.photoURL } : require('../assets/images/Profile-Male-PNG.png')}
        resizeMode="contain"
      />
      <View style={styles.userNameText}>
        <Text style={styles.secondText}>You are chatting with</Text>
        <Text numberOfLines={1} adjustsFontSizeToFit style={styles.firstText}>{user?.isFriends ? user?.displayName : user?.secretDisplayName}</Text>
        <Text style={[{ color: user?.isActive == true ? 'green' : 'red' }]}>{user?.isActive == 1 ? 'Active' : 'Offline'}</Text>
      </View>

      <View style={{ width: 120 }}>
        {user?.isFriends ? null : (
          <>
            <TouchableOpacity onPress={sendFriendRequest} style={styles.loginButton}>
              {/* <Tooltip ref={friendRef} popover={<Text>Send friend request</Text>}> */}
              <RandomChatTopBarSvgComponent />
              <Text style={styles.loginText}>Let's be {"\n"}Friends</Text>
              {/* </Tooltip> */}
            </TouchableOpacity>

          </>
        )}
      </View>
          <TouchableOpacity onPress={() => navigation.navigate('ReportBlockModal')} style={{transform: [{ rotate: '90deg' }], marginLeft: -10, marginRight: -10}}>
      <ThreeDotsSvg />
      </TouchableOpacity>

    </View >
  );
}

const styles = StyleSheet.create({
  topBar: {
    paddingBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowOffset: { width: 0, height: 6 },
    shadowColor: '#000000',
    shadowOpacity: 0.05,
  },
  userNameText: {
    flexShrink: 1,
    marginTop: 10,
    marginHorizontal: 15,
    width: width - 60 - 120,
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
    paddingHorizontal: 0,
    paddingVertical: 10,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: '#4B00FF',
    shadowOpacity: 0.27,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginRight: 20
    
    
  },
  loginText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 10,
    fontFamily: 'Inter-SemiBold',
    marginLeft: 10,
  },
});
