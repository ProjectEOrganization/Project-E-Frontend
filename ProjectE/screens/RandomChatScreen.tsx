import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, Button, KeyboardAvoidingView, StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import { useFonts } from 'expo-font';
import RandomChatTopBar from '../components/RandomChatTopBar';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import ChatBox from '../components/ChatBox';
import FriendsChatScreenBottomBar from '../components/Friends/FriendsChatScreenBottomBar';
import FriendsChatBox from '../components/Friends/FriendsChatBox';
import { useAuth } from '../services/auth';
import { batch, useStore } from 'react-redux';
import { api } from '../services/api';
import { useSocket } from '../services/socket';
import { useSelector } from '../hooks';
import { store } from '../store';
import { foundQueue, initQueue, joinQueue, skip } from '../store/reducers/chat';


export default function RandomChatScreen() {
  const auth = useAuth();
  const navigation = useNavigation();
  const socket = useSocket();

  const queue = useSelector(state => state.chat.queue);

  useEffect(() => {
    if (queue.status === 'found') {
      store.dispatch(initQueue(queue.user.uid))
    }
  }, [queue.status, queue.user?.uid])

  useEffect(() => {
    socket.on('skip', () => {
      navigation.navigate('TheyHadToGoModal')
    })

    socket.on('queue', (msg) => {
      store.dispatch(foundQueue(msg))
    })
    return () => {
      socket.off('skip')
      socket.off('queue')
    }
  }, [auth.user])

  if (queue.status === 'joining' || queue.status === 'searching') {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {queue.status === 'searching' && <ActivityIndicator size="small" color="black" />}
        <Text style={{ top: 20 }}>
          {/* {queue.status === 'joining' && "Joining Queue"} */}
          {/* {queue.status === 'searching' && "Searching"} */}
          {queue.status}
        </Text>
      </View>
    )
  }
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <RandomChatTopBar user={queue.user} />
      <FriendsChatBox messages={queue.messages} />
      <FriendsChatScreenBottomBar recipientId={queue.user.uid} isQueue={true} />
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
