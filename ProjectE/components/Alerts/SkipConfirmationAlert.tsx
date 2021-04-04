import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import LoginSvgComponent from '../../assets/loginSvgComponent.js';

import Colors from '../../constants/Colors';
import { MonoText } from '../StyledText';
// import { Text, View } from './Themed';
import { useFonts } from 'expo-font';
import { Text, View, TextInput } from 'react-native'
import { navigationRef } from '../../navigation/index';
import { joinQueue, leaveQueue, skip } from '../../store/reducers/chat';
import { store } from '../../store/store';
import { api } from '../../services/api';

export default function SkipConfirmationAlert({ path }: { path: string }) {
  const skipAction = () => {
    navigationRef.current?.navigate('RandomChat');
    store.dispatch(joinQueue())
  }

  const dontSkip = () => {
    navigationRef.current?.navigate('RandomChat');
  }

  async function leaveQueueAction() {
    store.dispatch(leaveQueue())
    navigationRef.current?.goBack();
  }

  return (
    <View style={styles.overallContainer}>


      <LoginSvgComponent />
      <View style={{ width: 260, paddingTop: 30, alignItems: 'center' }}>
        <Text style={styles.firstText}>
          Are you sure you{"\n"}want to skip?
        </Text>

        {/* PROBABLY NEED AN IF STATEMENT (like if on certain page, display different text below) */}
        <Text style={styles.secondText}>
          You will probably never talk to this person ever again.
        </Text>

        <View style={{ flex: 1, flexDirection: 'row' }}>

          <TouchableOpacity onPress={skipAction} style={styles.yesButton}>
            <Text style={styles.loginText} >
              Yup
          </Text>
          </TouchableOpacity>


          <TouchableOpacity onPress={dontSkip} style={styles.noButton}>
            <Text style={styles.loginText} >
              Nah
          </Text>
          </TouchableOpacity>


        </View>



      </View>
      <Text onPress={leaveQueueAction} style={{ fontFamily: 'Inter-SemiBold', color: '#250D4F', marginTop: 140, fontSize: 16 }}> Leave Queue </Text>


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
    height: 335,
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
