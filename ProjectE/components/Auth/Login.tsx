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
export default function Login({ path }: { path?: string }) {
  const auth = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = () => {
    auth
      .signin(email, password)
      .then(() => {
        navigation.goBack()
        navigation.navigate('Root', {
          screen: 'Friends'
        })
        console.log(
          email,
          password,
          'Account is found. You are now authenticated.'
        );
      })
      .catch(() => {
        console.log(email, password, 'Account is not found. NOT authenticated');
      });
  };
  const navigation = useNavigation();
  return (
    <View style={styles.overallContainer}>
      <LoginSvgComponent />
      <View style={{ width: 260, paddingTop: 30 }}>
        <Text style={styles.firstText}>Login</Text>
        {/* PROBABLY NEED AN IF STATEMENT (like if on certain page, display different text below) */}
        <Text style={styles.secondText}>
          Login to continue chatting with your friends
        </Text>
        <TextInput
          // onBlur={() => setFocused({ email: false, password: false })}
          // onFocus={() => setFocused({ email: false, password: true })}
          onChangeText={(text) => setEmail(text)}
          autoCapitalize={'none'}
          autoCorrect={false}
          secureTextEntry={false}
          accessibilityElementsHidden={true}
          caretHidden={true}
          contextMenuHidden={true}
          placeholder='Email'
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

        <TextInput
          // onBlur={() => setFocused({ email: false, password: false })}
          // onFocus={() => setFocused({ email: false, password: true })}
          onChangeText={(text) => setPassword(text)}
          autoCapitalize={'none'}
          autoCorrect={false}
          secureTextEntry={true}
          accessibilityElementsHidden={true}
          caretHidden={true}
          contextMenuHidden={true}
          placeholder='Password'
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
            marginTop: 25,
          }}
        />

        <TouchableOpacity onPress={onLogin} style={styles.loginButton}>
          <Text style={styles.loginText}>Login</Text>
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
    height: 400,
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
