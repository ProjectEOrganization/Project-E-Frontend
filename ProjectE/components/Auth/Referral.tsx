import * as WebBrowser from 'expo-web-browser';
import React, { useState, useEffect, useContext, useRef } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import LoginSvgComponent from '../../assets/loginSvgComponent.js';
import Colors from '../../constants/Colors';
import { MonoText } from '../StyledText';
// import { Text, View } from './Themed';
import { useFonts } from 'expo-font';
import { Text, View, TextInput } from 'react-native';
import { useAuth } from '../../services/auth';
import { api } from '../../services/api';
import { useSocket } from '../../services/socket';
import { useNavigation } from '@react-navigation/core';
import ChillzoneModal from '../Modals/ChillzoneModal.js';
export default function Referral({ path }: { path?: string }) {
  const auth = useAuth();
  const navigation = useNavigation();

  const [input, setInput] = useState('');


  const onCheck = () => {
    if (input === "chillzone") {
      navigation.goBack();
      setTimeout(() => {
        navigation.navigate('ChillzoneModal')
      }, 300)
      console.log('ok')
    } else {
      console.log('notok')
      //display error message to user
    }

  };
  return (
    <View style={styles.overallContainer}>
      <LoginSvgComponent />
      <View style={{ width: 260, paddingTop: 30 }}>
        <Text style={styles.firstText}>Referral</Text>
        {/* PROBABLY NEED AN IF STATEMENT (like if on certain page, display different text below) */}
        <Text style={styles.secondText}>
          Have a referral code? Enter it here to claim your rewards.
        </Text>
        <TextInput
          // onBlur={() => setFocused({ email: false, password: false })}
          // onFocus={() => setFocused({ email: false, password: true })}
          //need to add ability to paste
          onChangeText={(text) => setInput(text)}
          autoCapitalize={'none'}
          autoCorrect={false}
          secureTextEntry={false}
          accessibilityElementsHidden={true}
          selectTextOnFocus={true}
          contextMenuHidden={true}
          placeholder='Code'
          placeholderTextColor='#85ACD6'
          style={{
            // borderColor: isAuth == false ? 'red' : isAuth === true ? 'green' : 'transparent',
            // borderWidth: isAuth == false ? 2 : isAuth === true ? 2 : 0,
            backgroundColor: '#F1F6FC',

            height: 48,
            // borderBottomColor: focused.password ? '#4F3FEB' : 'rgba(0,0,0,.06)',
            borderWidth: 0,
            shadowOffset: { width: 0, height: 2 },
            shadowColor: 'black',
            shadowOpacity: 0.16,
            // height: 44,
            width: '100%',
            borderRadius: 6,
            fontSize: 15,
            paddingHorizontal: 20,
            textAlign: 'left',
            marginTop: 35,
          }}
        />



        <TouchableOpacity onPress={onCheck} style={styles.loginButton}>
          {/* IF input === chillzone, then onPress goes to () => navigation.navigate('ChillzoneModal') */}
          <Text style={styles.loginText}>Activate</Text>

        </TouchableOpacity>
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
​
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
  overallContainer: {
    //overall container
    height: 330,
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
    fontSize: 17,
    fontFamily: 'Inter-Medium',
    color: '#A9ACB0',
    paddingTop: 15,
    lineHeight: 23,
  },
  loginButton: {
    backgroundColor: '#4B00FF',
    borderRadius: 6,
    height: 50,
    marginTop: 40,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: '#4B00FF',
    shadowOpacity: 0.27,
    justifyContent: 'center',
  },
  loginText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'Inter-Bold',
  },
});
