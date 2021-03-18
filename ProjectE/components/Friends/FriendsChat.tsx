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
      api.get('/friends')
        .then(res => {
          setFriends(res.data);
        })
        .catch(() => {
          setFriends([])
        })
    }
  }, [auth.user]);

  if (friends.length === 0) {
    return (
      <View style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>No friends</Text>
      </View>
    )
  }

  return (
    <View>
      <Text>Friends</Text>
      {friends.map(friend => {
        return (
          <Text key={friend.id}>{friend.username}</Text>
        )
      })}
    </View>
  );
}
