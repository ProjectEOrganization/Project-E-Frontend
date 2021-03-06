import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import { useFonts } from 'expo-font';
import Navigation from '../navigation';
import RandomChatTopBar from '../components/RandomChatTopBar';

import { useNavigation } from '@react-navigation/native';
import ChatBubble from '../components/ChatBubble';

// import * as yourModuleName from 'module-name';

export default function RandomChatScreen() {
  let [fontsLoaded] = useFonts({
    'Inter-Medium': require('../assets/fonts/Inter/Inter-Medium.ttf'),
    'Inter-Bold': require('../assets/fonts/Inter/Inter-Bold.ttf'),
    'Inter-Regular': require('../assets/fonts/Inter/Inter-Regular.ttf'),
    'Inter-SemiBold': require('../assets/fonts/Inter/Inter-SemiBold.ttf'),
  });

  const navigation = useNavigation();

  if (!fontsLoaded) {
    return <View />;
  } else {
    return (
      <View style={styles.container}>
        <ChatBubble />
        <ChatBubble />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    marginVertical: 30,
    marginHorizontal: 20,
  },
});
