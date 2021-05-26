import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import LoginSvgComponent from '../../assets/loginSvgComponent.js';

import Colors from '../../constants/Colors';
import { MonoText } from '../StyledText';
import { useNavigation, useNavigationState } from '@react-navigation/native';
// import { Text, View } from './Themed';
import { useFonts } from 'expo-font';
import { Text, View, TextInput } from 'react-native'
import { navigationRef } from '../../navigation/index';
import { joinQueue, leaveQueue, skip, initQueue, addTopic } from '../../store/reducers/chat';
import { store } from '../../store/store';
import { api } from '../../services/api';
import { useEffect, useState } from 'react';


export default function YouAreNowChattingAlert(props) {

  const [displayName, setDisplayName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  
  useEffect(() => {
    async function getUser() {
      const response = await api.get(`/chat/${msg.uid}?isQueue=true`);
      setDisplayName(response.user.displayName);
      setPhotoURL(response.user.photoURL);
      console.log("msg", props.msg);
    }
    getUser();
  }, []);
  
  async function leaveQueueAction() {
    store.dispatch(leaveQueue())
    navigationRef.current?.goBack();
  }

  const skipAction = () => {
    navigationRef.current?.navigate('RandomChat');
    store.dispatch(joinQueue())
  }

  const joinChat = () => {
    store.dispatch(initQueue(props.msg.uid));
    store.dispatch(addTopic(props.msg.topic));
  }

  const navigation = useNavigation();

  
  <Text onPress={leaveQueueAction} style={{ fontFamily: 'Inter-SemiBold', color: '#250D4F', marginTop: 140, fontSize: 16 }}> Leave Queue </Text>

  return (
    <View style={styles.overallContainer}>


      <LoginSvgComponent />
      <View style={{ width: 260, paddingTop: 30, alignItems: 'center' }}>
        <Text style={styles.firstText}>
          You are now chatting with
        </Text>
        <Text style={styles.thirdText}>
        {displayName}
        </Text>

        {/* PROBABLY NEED AN IF STATEMENT (like if on certain page, display different text below) */}
        <Image
          style={{
            width: 80,
            height: 80,
            marginHorizontal: 10,
            marginTop: 20
          }}
          source={{uri: photoURL}}
        />

        <View style={{ flex: 1, flexDirection: 'row' }}>

          <TouchableOpacity  style={styles.yesButton} onPress={joinChat}>
            <Text style={styles.loginText} >
              Chat
          </Text>
          </TouchableOpacity>


          <TouchableOpacity  style={styles.noButton} onPress={skipAction}>
            <Text style={styles.loginText} >
              Skip
          </Text>
          </TouchableOpacity>


        </View>



      </View>
      <Text onPress={leaveQueueAction} style={{ fontFamily: 'Inter-SemiBold', color: '#250D4F', marginTop: 140, fontSize: 16 }}> Leave Queue </Text>


     

    </View>
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet'
  );
}

const styles = StyleSheet.create({
  overallContainer: { //overall container
    height: 375,
    width: 330,
    backgroundColor: '#fff',
    borderRadius: 40,
    alignItems: 'center',
    shadowOffset: { width: 0, height: 1 },
    shadowColor: '#000000',
    shadowOpacity: 0.05,
  },
  firstText: {
    fontSize: 20,
    fontFamily: 'Inter-SemiBold',
    color: '#689CF6',
    textAlign: 'center',
    lineHeight: 30
  },
  thirdText: {
    fontSize: 22,
    fontFamily: 'Inter-ExtraBold',
    color: '#493FFF',
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
    backgroundColor: '#3CDF7C',
    borderRadius: 6,
    height: 75,
    marginTop: 35,
    shadowOffset: { width: 2, height: 6 },
    shadowColor: '#3CDF7C',
    shadowOpacity: 0.27,
    justifyContent: 'center',
    width: 110,
    marginRight: 30

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
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Inter-Bold',

  }



});
