import * as React from 'react';
import { StyleSheet, ScrollView, FlatList } from 'react-native';

import { Text, View } from '../../components/Themed';
import { useFonts } from 'expo-font';
import Navigation from '../../navigation';
import RandomChatTopBar from '../../components/RandomChatTopBar';

import { useNavigation } from '@react-navigation/native';
import ChatBubble from '../../components/ChatBubble';
import TopicStarter from '../../components/TopicStarter';
import { useAuth } from '../../services/auth';

// import * as yourModuleName from 'module-name';

export default function FriendsChatBox({ messages }: { messages: Array<any> }) {
  const navigation = useNavigation();
  const auth = useAuth();

  return (
    <FlatList
      style={[styles.container]}
      data={messages}
      contentContainerStyle={{ marginTop: 25 }}
      renderItem={({ item }) => (
        <ChatBubble
          key={`message-${item.id}`}
          content={item.content}
          user={auth.user.uid !== item.sentBy ? 'opposingUser' : 'currentUser'}
        />
      )}
      keyExtractor={item => item.id}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    marginBottom: 30,
    paddingHorizontal: 20,
  },
});
