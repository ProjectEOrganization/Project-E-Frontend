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
        <ChatBubble
          content='hey, how are you? I think we should talk about unicorns or something along those lines?'
          user='opposingUser'
        />
        <ChatBubble
          content="I honestly think unicorns are like majestic creatures, literally rainbow coloured and can fly. Like that's awesome!!"
          user='opposingUser'
        />
        <ChatBubble content="hii, I'm doing good ish" user='currentUser' />
        <ChatBubble
          content='Wdym ish? Maybe unicorns will cheer you up?'
          user='opposingUser'
        />
        <ChatBubble
          content='Yah, lol. Its fine. Lets talk about unicorns? I thought unicorns were white lol'
          user='currentUser'
        />
        <ChatBubble
          content='Uhhh, I thought they were full rainbow'
          user='opposingUser'
        />
        <ChatBubble content="lol. i'll search it up" user='currentUser' />
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
