import React, { useEffect } from 'react';
import { ActivityIndicator, Button, KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import RandomChatTopBar from '../components/RandomChatTopBar';
import { useNavigation, useNavigationState } from '@react-navigation/native';
import FriendsChatScreenBottomBar from '../components/Friends/FriendsChatScreenBottomBar';
import FriendsChatBox from '../components/Friends/FriendsChatBox';
import { useAuth } from '../services/auth';
import { useSocket } from '../services/socket';
import { useSelector } from '../hooks';
import { RootState, store } from '../store';
import { initQueue, joinQueue, leaveQueue } from '../store/reducers/chat';
import { LogBox } from 'react-native';
import AnimatedEllipsis from 'react-native-animated-ellipsis';
import { api } from '../services/api';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createSelector } from 'reselect';
import TopicStarter from '../components/TopicStarter';

LogBox.ignoreLogs(['Animated: `useNativeDriver`']);

const queueMessagesSelector = createSelector(
  (state: RootState) => state.chat.queue,
  (queue) => {
    if (Array.isArray(queue.messages)) {
      return queue.messages
    }
    return []
  }
)

export default function RandomChatScreen() {
  const auth = useAuth();
  const queue = useSelector(state => state.chat.queue);

  const queueMessages = useSelector(queueMessagesSelector)

  // useEffect(() => {
  //   if (connected === true && queue.status === 'idle') {
  //     store.dispatch(joinQueue())
  //   }
  // }, [connected, auth, queue])

  function leaveQueueAction() {
    store.dispatch(leaveQueue())
  }

  const colors = [
    '#2D7CDB',
    '#BA2DDB',
    '#2DDBC0'
  ];

  const random = Math.floor(Math.random() * colors.length);
  const random1 = colors[random]

  if (queue.status !== 'found') {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#F1F6FC' }}>
        <View style={{
          width: '100%', backgroundColor: random1, minHeight: 190, shadowOffset: { width: 0, height: 2 },
          shadowColor: random1,
          shadowOpacity: 1, alignItems: 'center'
        }}>

          <Text style={{ fontFamily: 'Inter-Bold', fontSize: 20, marginTop: 25, color: 'white', marginBottom: -10 }}>{queue.status == "searching" ? "Finding Someone Awesome" : queue.status === 'joining' ? 'Joining' : queue.status === 'idle' ? 'Not in Queue' : queue.status}</Text>
          {queue.status !== 'idle' && (
            <AnimatedEllipsis style={{ fontSize: 40, color: 'white' }} />
          )}

          <Text style={{ fontFamily: 'Inter-Bold', fontSize: 13, marginTop: 25, color: 'white' }}>In the meantime, say Hello to Wocto</Text>
          <Text style={{ fontSize: 35, marginTop: 10 }}>🐙</Text>
        </View>

        {queue.status === 'searching' && (
          <TouchableOpacity onPress={leaveQueueAction}>
            <Text style={{ fontFamily: 'Inter-SemiBold', color: '#250D4F', marginTop: 30, fontSize: 16 }}> Leave Queue </Text>
           
          </TouchableOpacity>
          
        )}
         <RandomChatTopBar user={queue.user} />
        {queue.status === 'idle' && (
          <TouchableOpacity onPress={() => store.dispatch(joinQueue())}>
            <Text style={{ fontFamily: 'Inter-SemiBold', color: 'red', marginTop: 30, fontSize: 16 }}>Join Queue</Text>
          </TouchableOpacity>

        )
        }
      </View >
    )
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? "padding" : null} style={styles.container}>
      <RandomChatTopBar user={queue.user} />
      {queue.topic && (
        <View style={{ position: 'relative', backgroundColor: 'transparent', top: 20, zIndex: 999 }}>
          <TopicStarter topic={queue.topic} colors={queue.topic.colors} />
        </View>
      )}
      <FriendsChatBox messages={queueMessages} />
      <FriendsChatScreenBottomBar chatId={queue?.chatId} recipientId={queue.user?.uid} isQueue={true} />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    // overall container
    backgroundColor: '#F1F6FC',
    height: '100%',
  },
  container2: {
    //text part
    flex: 1,
    width: 300,

    justifyContent: 'center',
    paddingTop: '13%',

    backgroundColor: '#F5F7F9',
    flexDirection: 'row',
  },
  container3: {
    //bottom login text part
    flex: 1,
    width: 300,

    justifyContent: 'center',

    backgroundColor: '#F5F7F9',
    flexDirection: 'row',
  },
  title1: {
    //Welcome to
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Inter-Medium',
    color: '#414750',
    letterSpacing: 1.5,
    marginTop: 200,
  },
  title2: {
    //Rapid
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Inter-Bold',
    color: '#414750',
    letterSpacing: 1.7,
    shadowColor: '#4A2EFF',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 1,
    paddingTop: '2%',
  },
  title3: {
    //chat with random people
    fontSize: 18,
    fontFamily: 'Inter-Regular',
    color: '#636E7E',
    lineHeight: 24,
  },
  title4: {
    //login text part
    fontSize: 15,
    fontFamily: 'Inter-Medium',
    color: '#A9ACB0',
  },

  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
