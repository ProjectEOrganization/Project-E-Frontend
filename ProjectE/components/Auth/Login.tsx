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
import { store } from '../../store/store';
import { addChat, makeFriends } from '../../store/reducers/chat';
import { addFriend } from '../../store/reducers/friends';
export default function Login({ path, actionAfter }: { path?: string, actionAfter?: any }) {
  const auth = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [success, setSuccess] = useState(true);

  const onLogin = () => {
    auth
      .signin(email, password)
      .then(() => {
        if (actionAfter?.name === 'accept_friends_request') {
          const friendId = actionAfter.data?.uid;
          api.post('/friends/accept/' + friendId).then((res) => {
            store.dispatch(addChat(res.data.chat))
            store.dispatch(makeFriends())
            store.dispatch(addFriend(friendId))
          });
        }
      })
      .then(() => {
        navigation.goBack()
        setTimeout(() => {
          navigation.navigate('Root', {
            screen: 'Friends', params: {
              screen: 'RandomChat'
            }
          })
        }, 400)
        setSuccess(true);
        console.log(
          email,
          password,
          'Account is found. You are now authenticated.'
        );
      })
      .catch(() => {
        setSuccess(false)
        console.log(email, password, 'Account is not found. NOT authenticated');
      });
  };

  const navigation = useNavigation();

  const navigateRegister = () => {
    navigation.navigate('RegisterModal');
  }

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
            marginTop: 20,
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
            marginBottom: 20


          }}
        />

        {!success && (
          <Text style={{
            fontSize: 14,
            fontFamily: 'Inter-Medium',
            color: 'red',
            textAlign: 'center',
            lineHeight: 23,
          }}>
            Sorry, the email or password you entered was incorrect.
          </Text>
        )}

        <TouchableOpacity onPress={onLogin} style={styles.loginButton}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
        <View style={{ paddingBottom: 20, paddingTop: 20 }}>
          <Text
            onPress={() => {
              navigation.goBack();
              setTimeout(() => {
                navigation.navigate('RegisterModal')
              }, 300)
            }}
            style={{
              fontSize: 15,
              color: '#A9ACB0',
              marginLeft: 10,
              fontFamily: 'Inter-Medium',
            }}
          >
            Don't have an account?{' '}
            <Text style={{ color: '#4B00FF', fontFamily: 'Inter-SemiBold' }}>
              Register
            </Text>
          </Text>
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
    minHeight: 430,
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
    paddingBottom: 15
  },
  loginButton: {
    backgroundColor: '#4B00FF',
    borderRadius: 6,
    height: 50,
    marginTop: 20,
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
