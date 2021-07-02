import * as WebBrowser from 'expo-web-browser';
import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import LoginSvgComponent from '../assets/loginSvgComponent.js';
import FriendRequestsThumbsUp from '../assets/FriendRequestsThumbsUp.js';
import FriendRequestThumbsDown from '../assets/FriendRequestThumbsDown.js';
import BackArrowSvgComponent from '../assets/backArrowSvgComponent.js';

import Colors from '../constants/Colors';
import { MonoText } from '../StyledText';
// import { Text, View } from './Themed';
import { useFonts } from 'expo-font';
import { api } from '../services/api';
import { useRoute } from '@react-navigation/native';

import { Text, View, TextInput, Image } from 'react-native'
import { navigationRef } from '../navigation';
import { LinearGradient } from 'expo-linear-gradient';

export default function FriendRequests() {

  async function sendRequest() {
    navigationRef.current?.goBack()
    const friendId = await (await api.get(`/friends/getFriendId/${email}`)).data
    await api.post('/friends/add/' + friendId);
  }

  const [email, setEmail] = useState("")

  return (
    <View style={styles.overallContainer}>
      <View style={{ width: 50, backgroundColor: 'transparent', alignSelf: 'left', marginLeft: 30}}>
        <TouchableOpacity onPress={() => navigationRef.current?.goBack()}>
          <BackArrowSvgComponent />
        </TouchableOpacity>
      </View>

      <View style={{ width: 260, paddingTop: 30, alignItems: 'center' }}>
        <Text style={styles.firstText}>
          Friend Requests
        </Text>

        

        <View style={{ alignItems: 'center', flexDirection: 'row', marginTop: 30, marginRight: 30 }}>

        <Image
        //   style={[styles.profileImage, { width: props.user.photoURL ? 45 : 65 }]}
        style={styles.profileImage}
        //   source={props.user.photoURL ? { uri: props.user.photoURL } : require('../../assets/images/Profile-Male-PNG.png')}
        source={require('../assets/images/Profile-Male-PNG.png')}
          resizeMode="contain"
        />

        <Text style={styles.loginText}>
              Nick 
              {/* ^display name of user */}
          </Text>

          <TouchableOpacity >
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1.5, y: 0 }}
            colors={['#00DBD0', '#4EBFFF']}
            style={styles.yesButton}
            >
                <View style={{marginLeft: -12}}>
                <FriendRequestsThumbsUp />
                </View>
          </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity style={{backgroundColor: '#E7668D', height: 50, width: 80, justifyContent: 'center', borderRadius: 6, marginLeft: 10}}>
          <View style={{marginLeft: -12}}>
                <FriendRequestThumbsDown />
                </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>

//SHOULD USE FLATLIST TO RENDER A SCROLLING LIST
// <FlatList
// data={chats}
// contentContainerStyle={{ paddingTop: 35, paddingBottom: 45, alignItems: 'center' }}
// renderItem={({ item, index }) => (
//     <View key={item.id?.toString()} style={{ paddingTop: index !== 0 ? 20 : 0 }}>
//         <FriendsMessagesCard {...item} />
//     </View>
// )}
// extraData={[]}
// keyExtractor={item => item.id.toString()}
// />
  );
}



const styles = StyleSheet.create({
  overallContainer: { //overall container
    // paddingBottom: 50,
    // width: 360,
    // height: 500,
    // backgroundColor: '#fff',
    // borderRadius: 40,
    paddingTop: 50,
    alignItems: 'center',
    // shadowOffset: { width: 0, height: 1 },
    // shadowColor: '#000000',
    // shadowOpacity: 0.05,
  },
  firstText: {
    fontSize: 22,
    fontFamily: 'Inter-ExtraBold',
    color: '#4957FF',
    textAlign: 'center',
    lineHeight: 30
  },
  secondText: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: '#A9ACB0',
    paddingTop: 15,
    lineHeight: 23,
    textAlign: 'center'
  },
  yesButton: {
    // backgroundColor: '#3CDF7C',
    
    borderRadius: 6,
    height: 50,
    // marginTop: 35,
    shadowOffset: { width: 2, height: 6 },
    shadowColor: '#3CDF7C',
    shadowOpacity: 0.27,
    justifyContent: 'center',
    width: 80,
    

  },
  profileImage: {
    height: 65,
    width: 65,
    marginLeft: 30,
    marginRight: 20,
  },
  noButton: {
    backgroundColor: '#F24646',
    borderRadius: 6,
    height: 75,
    marginTop: 35,
    shadowOffset: { width: 2, height: 6 },
    shadowColor: '#F24646',
    shadowOpacity: 0.27,
    justifyContent: 'center',
    width: 110

  },
  loginText: {

    color: '#21293A',
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Inter-Bold',
    marginRight: 40,
    
  }



});
