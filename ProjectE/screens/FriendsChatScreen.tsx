import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, Image, ActivityIndicator, KeyboardAvoidingView, Dimensions } from 'react-native';
import { Text, View } from '../components/Themed';
import BackArrowSvgComponent from '../assets/backArrowSvgComponent.js';
import { useFonts } from 'expo-font';
import { useNavigation, useRoute } from '@react-navigation/native';
import FriendsPageSwitch from '../components/Friends/FriendsPageSwitch';
import ThreeDotsSvg from '../assets/threeDotsSvg.js';
import FriendsChatBox from '../components/Friends/FriendsChatBox';
import FriendsChatScreenBottomBar from '../components/Friends/FriendsChatScreenBottomBar';
import { api } from '../services/api';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAuth } from '../services/auth';
import { useSocket } from '../services/socket';

const { width, height } = Dimensions.get('screen')

export default function FriendsChatScreen() {
  const navigation = useNavigation();
  const route = useRoute();

  const [loading, setLoading] = useState(false);

  const { user }: any = route.params;
  const auth = useAuth();
  const socket = useSocket();

  const [chat, setChat] = useState<{ messages: Array<any> }>({ messages: [] });

  const sendMessage = (content: any) => {
    const newMessage = {
      id: ([...chat.messages].pop() || 1) + 1,
      content,
      sentBy: auth.user.uid,
      sentAt: Date.now()
    }
    api.post('/message', {
      recipientId: user.uid,
      message: content
    }).then((res) => {
      // alert(JSON.stringify(res.data))
    })
    setChat(prev => ({
      ...prev,
      messages: [
        ...prev.messages,
        newMessage
      ]
    }))
  }

  useEffect(() => {
    setLoading(true)
    api.get(`/chat/${user.uid}`).then((res) => {
      setChat(res.data);
      setLoading(false);
    })
  }, [])

  useEffect(() => {
    socket?.on('message', (msg) => {
      const newMessage = {
        id: msg.t,
        content: msg.message,
        sentBy: msg.sentBy,
        sentAt: msg.t
      }

      setChat(prev => ({
        ...prev,
        messages: [
          ...prev.messages,
          newMessage
        ]
      }))
    })

    return () => {
      socket?.off('message')
    }
  }, [auth, socket])

  const Header = () => (
    <View
      style={{
        marginTop: 20,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        alignItems: 'center',
        height: 60,
        marginHorizontal: 20
      }}
    >
      <View style={{ width: 50, backgroundColor: 'transparent', }}>
        <TouchableOpacity onPress={() => navigation.navigate('Friends')}>
          <BackArrowSvgComponent />
        </TouchableOpacity>
      </View>

      <View style={{ flexGrow: 1, flexDirection: 'row', alignItems: 'center', backgroundColor: 'transparent', }}>
        <Image
          style={{ height: 50, width: 50 }}
          source={require('../assets/images/Profile-Male-PNG.png')}
        />
        <Text
          style={{
            fontSize: 20,
            fontFamily: 'Inter-SemiBold',
            color: '#21293A',
            marginLeft: 15,
            marginTop: -5,
          }}
        >
          {user.displayName}
        </Text>
      </View>
      <View
        style={{
          transform: [{ rotate: '90deg' }],
          backgroundColor: 'transparent',
        }}
      >
        <ThreeDotsSvg />
      </View>
    </View>
  )

  const { top } = useSafeAreaInsets()
  return (
    <KeyboardAvoidingView behavior="padding" style={[styles.container, { flex: 1, width: '100%', paddingTop: top }]}>
      <Header />
      {loading ? <LoadingScreen /> : <FriendsChatBox messages={chat?.messages} />}
      <FriendsChatScreenBottomBar onSend={(message: string) => sendMessage(message)} />
    </KeyboardAvoidingView>

  );
}

const LoadingScreen = () => {
  return (
    <View style={{ width, flexGrow: 1, backgroundColor: 'transparent', }}>
      <View style={[styles.loading]}>
        <ActivityIndicator size="small" color="#4B00FF" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#F1F6FC',
    height
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  }
});
