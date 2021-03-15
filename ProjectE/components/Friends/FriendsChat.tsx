import React from 'react';
import { StyleSheet } from 'react-native';
// import { Text, View } from './Themed';
import { useFonts } from 'expo-font';
import { Text, View } from 'react-native';
import FriendsMessagesCard from './FriendsMessagesCard';

export default function FriendsChat() {
  let [fontsLoaded] = useFonts({
    'Inter-Medium': require('../../assets/fonts/Inter/Inter-Medium.ttf'),
    'Inter-Bold': require('../../assets/fonts/Inter/Inter-Bold.ttf'),
    'Inter-Regular': require('../../assets/fonts/Inter/Inter-Regular.ttf'),
    'Inter-ExtraBold': require('../../assets/fonts/Inter/Inter-ExtraBold.ttf'),
  });

  if (!fontsLoaded) {
    return <View />;
  } else {
    return (
      <View>
        <FriendsMessagesCard />
      </View>
    );
  }
}
