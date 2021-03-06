import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import LoginSvgComponent from '../assets/loginSvgComponent.js';
import { LinearGradient } from 'expo-linear-gradient';

import Colors from '../../constants/Colors';
import { MonoText } from '../StyledText';
// import { Text, View } from './Themed';
import { useFonts } from 'expo-font';
import { Text, View, TextInput } from 'react-native';

export default function ChatBubble({
  path,
  content,
  user,
}: {
  path: string;
  content: string;
  user: string;
}) {
  let [fontsLoaded] = useFonts({
    'Inter-Medium': require('../assets/fonts/Inter/Inter-Medium.ttf'),
    'Inter-Bold': require('../assets/fonts/Inter/Inter-Bold.ttf'),
    'Inter-Regular': require('../assets/fonts/Inter/Inter-Regular.ttf'),
    'Inter-ExtraBold': require('../assets/fonts/Inter/Inter-ExtraBold.ttf'),
  });

  if (!fontsLoaded) {
    return <View />;
  } else {
    return (
      <View
        style={
          user === 'currentUser'
            ? styles.blueChatBubble
            : styles.whiteChatBubble
        }
      >
        <Text
          style={user === 'currentUser' ? styles.whiteText : styles.blackText}
        >
          {content}
        </Text>
      </View>
    );
  }
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet'
  );
}

const styles = StyleSheet.create({
  whiteChatBubble: {
    maxWidth: 300,
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginBottom: 15,
    borderRadius: 15,
    borderTopLeftRadius: 0,
    shadowOffset: { width: 0, height: 1 },
    shadowColor: '#000000',
    shadowOpacity: 0.05,
    backgroundColor: 'white',
  },
  blueChatBubble: {
    maxWidth: 300,
    marginLeft: 'auto',
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginBottom: 15,
    borderRadius: 15,
    borderBottomRightRadius: 0,
    shadowOffset: { width: 0, height: 1 },
    shadowColor: '#000000',
    shadowOpacity: 0.05,
    backgroundColor: '#4b00ff',
  },
  whiteText: {
    color: '#ffffff',
  },
  blackText: {
    color: '#5d5d5d',
  },
  firstText: {
    fontSize: 12,
    fontFamily: 'Inter-SemiBold',
    color: '#5D5D5D',
    textAlign: 'center',
  },
  secondText: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: '#A9ACB0',
    paddingTop: 15,
    lineHeight: 23,
    textAlign: 'center',
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
    marginRight: 30,
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
    width: 110,
  },
  loginText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Inter-Bold',
  },
});
