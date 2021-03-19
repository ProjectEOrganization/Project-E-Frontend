import React, { useState, useRef } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import SendIcon from '../../assets/sendIcon.js';
import { io, Socket } from 'socket.io-client';

import { MonoText } from '../StyledText';
// import { Text, View } from './Themed';
import { useFonts } from 'expo-font';
import { Text, View, TextInput, Image } from 'react-native';
import { api } from '../../services/api';
import FriendRequestReceivedAlert from '../Alerts/FriendRequestReceivedAlert.js';

interface IProps {
  onSend: (message: string) => void
}

export default function FriendsChatScreenBottomBar({ onSend }: IProps) {
  const [message, setMessage] = useState("");
  return (
    <View style={styles.topBar}>
      <TextInput
        autoCorrect={false}
        placeholder='Message'
        placeholderTextColor='#85ACD6'
        onChangeText={text => setMessage(text)}
        value={message}
        style={{
          backgroundColor: '#F1F6FC',
          borderWidth: 0,
          width: '85%',
          height: 40,
          borderRadius: 30,
          fontSize: 15,
          paddingHorizontal: 20,
          textAlign: 'left',
        }}
      />
      <TouchableOpacity disabled={!message} onPress={() => {
        onSend(message)
        setMessage("")
      }} style={[styles.loginButton, { opacity: !message ? 0.2 : 1 }]}>
        <SendIcon />
      </TouchableOpacity>
    </View>
  );
}

async function sendMessage(friendId: string, text: string) {
  // const res = await api.get('/friends');
  // console.log(res.data);
  // console.log("result");
  // console.log(this.textInput.current.value);

  console.log(friendId);
  await api.post('/message', {
    recipientId: "WEhlwirlM1R5NXRljGd7FMXb7Nq1",
    message: 'test'
  });
  // const chatId = await api.get('/chat/WEhlwirlM1R5NXRljGd7FMXb7Nq1');
  // console.log(chatId.data);
  // const res = await api.get('/chats');
  // console.log(res.data);
}

const styles = StyleSheet.create({
  topBar: {
    paddingTop: 15,
    paddingBottom: 20,
    marginBottom: 0,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: 90,
    flexDirection: 'row',
    // justifyContent: 'space-around',
    // alignItems: 'center',
    shadowOffset: { width: 0, height: 6 },
    shadowColor: '#000000',
    shadowOpacity: 0.05,
  },
  userNameText: {
    marginRight: 15,
  },
  firstText: {
    fontSize: 20,
    fontFamily: 'Inter-ExtraBold',
    color: '#21293A',
  },
  secondText: {
    fontSize: 10,
    fontFamily: 'Inter-Medium',
    color: '#5D5D5D',
  },
  loginButton: {
    backgroundColor: '#00DBD0',
    height: 35,
    borderRadius: 30,
    paddingHorizontal: 10,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: '#4B00FF',
    shadowOpacity: 0.27,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    width: 35,
  },
  loginText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 10,
    fontFamily: 'Inter-SemiBold',
    marginLeft: 10,
  },
});
