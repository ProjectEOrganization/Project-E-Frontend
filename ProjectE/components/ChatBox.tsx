import * as React from 'react';
import { StyleSheet, ScrollView, FlatList } from 'react-native';

import { Text, View } from '../components/Themed';
import { useFonts } from 'expo-font';
import Navigation from '../navigation';
import RandomChatTopBar from '../components/RandomChatTopBar';

import { useNavigation } from '@react-navigation/native';
import ChatBubble from '../components/ChatBubble';
import TopicStarter from '../components/TopicStarter';

// import * as yourModuleName from 'module-name';

export default function RandomChatScreen() {

  return (
    <FlatList
      contentContainerStyle={{ paddingHorizontal: 20 }}
      ListHeaderComponent={() => <TopicStarter />}
      data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
      renderItem={({ item }) => (
        <ChatBubble
          content="I honestly think unicorns are like majestic creatures, literally rainbow coloured and can fly. Like that's awesome!!"
          user={(item % 2 === 0) ? 'opposingUser' : 'currentUser'}
        />
      )}
    />
  );
}