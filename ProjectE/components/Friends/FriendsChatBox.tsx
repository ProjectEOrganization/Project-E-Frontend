import * as React from 'react';
import { StyleSheet, ScrollView, FlatList, Dimensions } from 'react-native';

import { Text, View } from '../../components/Themed';
const { width } = Dimensions.get('screen')
import { useNavigation } from '@react-navigation/native';
import ChatBubble from '../../components/ChatBubble';
import TopicStarter from '../../components/TopicStarter';
import { useAuth } from '../../services/auth';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { IMessage } from '../../store/reducers/chat';
import { useSocket } from '../../services/socket';
import { store } from '../../store';

// import * as yourModuleName from 'module-name';

export default function FriendsChatBox({ messages }: { messages: Array<IMessage> }) {
  const auth = useAuth();

  const { bottom } = useSafeAreaInsets();

  if (messages?.length === 0) {
    return (
      <View style={{ flexGrow: 1, backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center' }}>
        <Text>no messages</Text>
      </View>
    )
  }

  const reversed = React.useMemo(() => {
    return [...messages].reverse()
  }, [messages])

  return (
    <FlatList
      style={[styles.container]}
      data={reversed}
      inverted
      contentContainerStyle={{ paddingTop: 25, paddingBottom: bottom || 20, }}
      renderItem={({ item }: { item: IMessage }) => (
        <ChatBubble
          content={item.content}
          user={auth.user.uid !== item.sentBy ? 'opposingUser' : 'currentUser'}
          pending={item?.pending}
        />
      )}
      onEndReachedThreshold={0.1}
      onEndReached={() => {
        console.log('load more messages')
      }}
      keyExtractor={item => (`message-${item?.id || item.sentAt}`)}
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
