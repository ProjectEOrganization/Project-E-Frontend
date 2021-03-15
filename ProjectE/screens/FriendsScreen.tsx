import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import FriendsChat from '../components/Friends/FriendsChat';
import { Text, View } from '../components/Themed';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import FriendsPageSwitch from '../components/Friends/FriendsPageSwitch';
import ThreeDotsSvg from '../assets/threeDotsSvg.js';
import { useAuth } from '../services/auth';
import { api } from '../services/api';
import { useSocket } from '../services/socket';

export default function FriendsScreen() {
  let username = 'David';

  let [fontsLoaded] = useFonts({
    'Inter-Medium': require('../assets/fonts/Inter/Inter-Medium.ttf'),
    'Inter-Bold': require('../assets/fonts/Inter/Inter-Bold.ttf'),
    'Inter-Regular': require('../assets/fonts/Inter/Inter-Regular.ttf'),
    'Inter-SemiBold': require('../assets/fonts/Inter/Inter-SemiBold.ttf'),
  });

  const navigation = useNavigation();

  const auth = useAuth();
  const socket = useSocket();

  if (!fontsLoaded) {
    return <View />;
  } else {
    return (
      <View style={styles.container}>
        <ThreeDotsSvg />

        <View
          style={{
            marginTop: 60,
            backgroundColor: 'transparent',
          }}
        >
          <Text style={styles.h1}>Hello {username}!</Text>
          <FriendsPageSwitch />
        </View>

        <View style={{ backgroundColor: 'transparent', marginTop: 35 }}>
          <FriendsChat />
        </View>

        <View
          style={styles.separator}
          lightColor='#eee'
          darkColor='rgba(255,255,255,0.1)'
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('FriendsChatScreen')}
        ></TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingTop: 70,
    backgroundColor: '#F1F6FC',
    height: '100%',
  },
  h1: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 25,
    color: '#21293A',
  },
  separator: {
    marginVertical: 30,
    height: 1,
  },
});
