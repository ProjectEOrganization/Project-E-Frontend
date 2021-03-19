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

export default function RandomChatTopBar({ user }) {
  const { top } = useSafeAreaInsets();
  return (
    <View style={[styles.topBar, { paddingTop: top + 10 }]}>
      <Image
        style={{ height: 60, width: 60 }}
        source={require('../assets/images/Profile-Male-PNG.png')}
      />
      <View style={styles.userNameText}>
        <Text style={styles.secondText}>You are chatting with</Text>
        <Text style={styles.firstText}>{user?.username}</Text>
      </View>
      <View>
        <TouchableOpacity onPress={() => api.post(`/friends/add/${user?.id}`)} style={styles.loginButton}>
          <RandomChatTopBarSvgComponent />
          <Text style={styles.loginText}>Let's be Friends</Text>
        </TouchableOpacity>
      </View>
    </View>

    // <View>
    //   {/* PROBABLY NEED AN IF STATEMENT (like if on certain page, display different text below) */}
    // </View>

    // {/* <View
    //   style={[styles.codeHighlightContainer, styles.homeScreenFilename]}
    //   >
    //   <MonoText>{path}</MonoText>
    // </View> */}

    //   {/* <Text
    //     style={styles.getStartedText}
    //     >
    //     Change any of the text, save the file, and your app will automatically update.
    //   </Text>
    // </View>

    // <View style={styles.helpContainer}>
    //   <TouchableOpacity onPress={handleHelpPress} style={styles.helpLink}>
    //     <Text style={styles.helpLinkText} >
    //       Tap here if your app doesn't automatically update after making changes
    //     </Text>
    //   </TouchableOpacity> */}
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
