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
import { useStore } from 'react-redux';
import { api } from '../services/api';
import { useSocket } from '../services/socket';


export default function RandomChatScreen() {
  const auth = useAuth();
  const [waiting, setWaiting] = useState(true);
  const [status, setStatus] = useState("");

  const [chat, setChat] = useState();
  const socket = useSocket();

  const initChat = async (uid) => {
    // socket?.off('queue')
    const chat = await (await api.get(`/chat/${uid}`)).data
    setChat(chat);
    setStatus('Connecting...')
    setWaiting(false);
  }

  const join = () => {
    api.get("/join_queue")
      .then((res) => {
        if (res.data.status === 'searching') {
          socket.on('queue', (msg) => {
            initChat(msg.uid)
          })
        }
        else if (res.data.status === 'found') {
          initChat(res.data.uid)
        }
        setStatus(res.data.status)
      })
  }

  useFocusEffect(useCallback(() => {
    return () => {
      api.get('/leave_queue')
      setWaiting(true)
      setStatus("")
      setChat();
      socket?.off('queue')
    }
  }, [auth.user]))

  useEffect(() => {
    socket.on('skip', () => {
      setWaiting(true)
      setStatus('')
      setChat();
      join()
    })
    return () => {
      socket.off('skip')
    }
  }, [auth.user])

  if (waiting) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size="small" color="black" />
        <Button title="Join" onPress={join} />
        <Text>{JSON.stringify(status)}</Text>
      </View>
    )
  }
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <RandomChatTopBar user={chat?.user} />
      <FriendsChatBox messages={chat?.messages} />
      <FriendsChatScreenBottomBar onSend={(message) => alert(message)} />
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
