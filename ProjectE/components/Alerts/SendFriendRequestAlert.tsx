import * as WebBrowser from 'expo-web-browser';
import React, {useState} from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import LoginSvgComponent from '../../assets/loginSvgComponent.js';

import Colors from '../../constants/Colors';
import { MonoText } from '../StyledText';
// import { Text, View } from './Themed';
import { useFonts } from 'expo-font';
import { api } from '../../services/api';
import { useRoute } from '@react-navigation/native';

import { Text, View, TextInput } from 'react-native'
import { navigationRef } from '../../navigation';

export default function SendFriendRequestAlertId() {

  async function sendRequest() {
    navigationRef.current?.goBack()
    const friendId = await api.get('/friends/getFriendId/'+email)
    await api.post('/friends/add/' + friendId);
  }


  const [email, setEmail] = useState("")

  return (
    <View style={styles.overallContainer}>

      <LoginSvgComponent />
      <View style={{ width: 260, paddingTop: 30, alignItems: 'center' }}>
        <Text style={styles.firstText}>
          What's the email of the user that you want to be friends with?
        </Text>

        {/* PROBABLY NEED AN IF STATEMENT (like if on certain page, display different text below) */}
        <Text style={styles.secondText}>
          Enter their email to send them a friend request
        </Text>

        <View style={{ flex: 1, flexDirection: 'column' }}>

          <TextInput onChangeText={setEmail} value={email} placeholder='Email'/>
          <TouchableOpacity onPress={sendRequest} style={styles.yesButton}>
            <Text style={styles.loginText}>
              SEND
          </Text>
          </TouchableOpacity>
        </View>
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
  overallContainer: { //overall container
    height: 300,
    width: 330,
    backgroundColor: '#fff',
    borderRadius: 40,
    alignItems: 'center',
    shadowOffset: { width: 0, height: 1 },
    shadowColor: '#000000',
    shadowOpacity: 0.05,
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
