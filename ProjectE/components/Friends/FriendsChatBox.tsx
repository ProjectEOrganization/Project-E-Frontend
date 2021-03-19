import * as React from 'react';
import { StyleSheet, ScrollView, FlatList, Dimensions } from 'react-native';

import { Text, View } from '../../components/Themed';
const { width } = Dimensions.get('screen')
import { useNavigation } from '@react-navigation/native';
import ChatBubble from '../../components/ChatBubble';
import TopicStarter from '../../components/TopicStarter';
import { useAuth } from '../../services/auth';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// import * as yourModuleName from 'module-name';

export default function FriendsChatBox({ messages }: { messages: Array<{ content: string, sentBy: string, id: string }> }) {
  const auth = useAuth();

  const scrollRef = React.useRef<FlatList>()

  const toBottom = () => scrollRef.current?.scrollToEnd({ animated: true });

  React.useEffect(() => {
    setTimeout(() => {
      toBottom()
    }, 300)
  }, [messages])

  if (messages.length === 0) {
    return (
      <View style={{ flexGrow: 1, backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center' }}>
        <Text>no messages</Text>
      </View>
    )
  }

  const { bottom } = useSafeAreaInsets();

  return (
    <FlatList
      ref={scrollRef}
      style={[styles.container]}
      data={messages}
      contentContainerStyle={{ paddingTop: 25, paddingBottom: bottom || 20, }}
      renderItem={({ item }) => (
        <ChatBubble
          content={item.content}
          user={auth.user.uid !== item.sentBy ? 'opposingUser' : 'currentUser'}
        />
      )}
      keyExtractor={item => (`message-${item.id}`)}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    paddingHorizontal: 20,
    width
  },
});
