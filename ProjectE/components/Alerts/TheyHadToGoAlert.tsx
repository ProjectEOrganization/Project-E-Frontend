import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import LoginSvgComponent from '../../assets/loginSvgComponent.js';

import Colors from '../../constants/Colors';
import { MonoText } from '../StyledText';
// import { Text, View } from './Themed';
import { useFonts } from 'expo-font';
import { Text, View, TextInput } from 'react-native'
import { store } from '../../store/store';
import { joinQueue, leaveQueue, skip, skipQueue } from '../../store/reducers/chat';
import { batch } from 'react-redux';
import { navigationRef } from '../../navigation/index';

export default function TheyHadToGoAlert({ path }: { path: string }) {
  const onPress = () => {
    navigationRef.current?.goBack();
    store.dispatch(skipQueue())
  }

  async function leaveQueueAction() {
    store.dispatch(leaveQueue())
    navigationRef.current?.goBack();
  }

  return (
    <View style={styles.overallContainer}>


      <LoginSvgComponent />
      <View style={{ width: 260, paddingTop: 30, alignItems: 'center', flexGrow: 1 }}>
        <Text style={styles.firstText}>
          They had to go :(
        </Text>

        {/* PROBABLY NEED AN IF STATEMENT (like if on certain page, display different text below) */}
        <Text style={styles.secondText}>
          This person loved chatting with you, but they had to go do something else
        </Text>




        <TouchableOpacity onPress={onPress} style={styles.loginButton}>
          <Text style={styles.loginText} >
            Next Person
          </Text>
        </TouchableOpacity>

        <View style={{ justifyContent: 'center', flexGrow: 1 }}>
          <Text onPress={leaveQueueAction} style={{ fontFamily: 'Inter-SemiBold', color: '#250D4F', fontSize: 16 }}> Leave Queue </Text>
        </View>
      </View>

      {/* <View
          style={[styles.codeHighlightContainer, styles.homeScreenFilename]}
          >
          <MonoText>{path}</MonoText>
        </View> */}

      {/* <Text
          style={styles.getStartedText}
          >
          Change any of the text, save the file, and your app will automatically update.
        </Text>
      </View>

      <View style={styles.helpContainer}>
        <TouchableOpacity onPress={handleHelpPress} style={styles.helpLink}>
          <Text style={styles.helpLinkText} >
            Tap here if your app doesn't automatically update after making changes
          </Text>
        </TouchableOpacity> */}

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
    height: 280,
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
  },
  secondText: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: '#A9ACB0',
    paddingTop: 15,
    lineHeight: 23,
    textAlign: 'center'
  },
  loginButton: {
    backgroundColor: '#4B00FF',
    borderRadius: 6,
    height: 50,
    marginTop: 35,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: '#4B00FF',
    shadowOpacity: 0.27,
    justifyContent: 'center',
    width: '100%'

  },
  loginText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'Inter-Bold',

  }



});
