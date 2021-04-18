import React, { useEffect } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { useAuth } from '../../services/auth';
import { useSelector } from '../../hooks';
import { store } from '../../store';
import { fetchFriends } from '../../store/reducers/friends';

export default function FriendsChat() {
  const auth = useAuth();
  const friends = useSelector(state => state.friends)

  useEffect(() => {
    store.dispatch(fetchFriends())
  }, [auth])

  if (friends.loading) return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ActivityIndicator />
    </View>
  )
  if (friends.list.length === 0) {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text>No friends</Text>
      </View>
    );
  }

  return (
    <View>
      {friends.list.map((friend) => {
        return <Text key={friend.id}>{friend.username}</Text>;
      })}
    </View>
  );
}
