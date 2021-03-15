import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import SendIcon from '../assets/sendIcon.js';
import { useFonts } from 'expo-font';
import { Text, View, TextInput, Image } from 'react-native';

export default function RandomChatBottomBar() {
  let [fontsLoaded] = useFonts({
    'Inter-Medium': require('../assets/fonts/Inter/Inter-Medium.ttf'),
    'Inter-Bold': require('../assets/fonts/Inter/Inter-Bold.ttf'),
    'Inter-Regular': require('../assets/fonts/Inter/Inter-Regular.ttf'),
    'Inter-ExtraBold': require('../assets/fonts/Inter/Inter-ExtraBold.ttf'),
  });

  if (!fontsLoaded) {
    return <View />;
  } else {
    return (
      <View style={styles.topBar}>
        <TextInput
          placeholder='Message'
          placeholderTextColor='#85ACD6'
          style={styles.textInput}
        />
        <TouchableOpacity style={styles.loginButton}>
          <SendIcon />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: '#F1F6FC',
    borderWidth: 0,
    width: '85%',
    borderRadius: 30,
    fontSize: 15,
    paddingHorizontal: 20,
    height: 41,
  },
  topBar: {
    paddingTop: 15,
    paddingBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    flexDirection: 'row',
    shadowOffset: { width: 0, height: 6 },
    shadowColor: '#000000',
    shadowOpacity: 0.05,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  loginButton: {
    backgroundColor: '#00DBD0',
    width: 35,
    height: 35,
    borderRadius: 30,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: '#4B00FF',
    shadowOpacity: 0.27,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
  },
});
