import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet } from 'react-native';
// import { Text, View } from './Themed';
import { useFonts } from 'expo-font';
import { Text, View } from 'react-native';
import IndividualFriendChat from '../components/IndividualFriendChat';

export default function FriendsChat() {
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
      <View>
        <IndividualFriendChat />
        <IndividualFriendChat />
        <IndividualFriendChat />
      </View>
    );
  }
}
