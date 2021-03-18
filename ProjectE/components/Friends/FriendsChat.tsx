import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
// import { Text, View } from './Themed';
import { useFonts } from 'expo-font';
import { Text, View } from 'react-native';
import FriendsMessagesCard from './FriendsMessagesCard';
import { api } from '../../services/api';
import { useAuth } from '../../services/auth';
import IndividualFriendChat from './IndividualFriendChat';
import FriendsChatBox from './FriendsChatBox';

export default function FriendsChat() {
  const [friends, setFriends] = useState([]);

  const auth = useAuth();

  useEffect(() => {
    if (auth.user) {
      api.get('/friends').then(res => {
        setFriends(res.data);
      })
    }
  }, [auth.user]);

  let [fontsLoaded] = useFonts({
    'Inter-Medium': require('../../assets/fonts/Inter/Inter-Medium.ttf'),
    'Inter-Bold': require('../../assets/fonts/Inter/Inter-Bold.ttf'),
    'Inter-Regular': require('../../assets/fonts/Inter/Inter-Regular.ttf'),
    'Inter-ExtraBold': require('../../assets/fonts/Inter/Inter-ExtraBold.ttf'),
  });

  if (!fontsLoaded) {
    return <View />;
  } else {
    return (
      <View>
        <Text>Friends</Text>

        {friends.map(friend => {
          return (
            <Text key={friend.id}>{friend.id}</Text>
          )
        })}
      </View>
    );
  }
}
