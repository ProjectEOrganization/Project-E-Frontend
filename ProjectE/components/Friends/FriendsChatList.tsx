import React, { useEffect, useState } from 'react'
import { View, Text, ActivityIndicator, FlatList } from 'react-native'
import { createSelector } from 'reselect'
import { useSelector } from '../../hooks'
import { api } from '../../services/api'
import { useAuth } from '../../services/auth'
import { RootState, store } from '../../store'
import { fetchChats } from '../../store/reducers/chat'
import { fetchFriends } from '../../store/reducers/friends'
import FriendsMessagesCard from './FriendsMessagesCard'

export default function FriendsChatList({ search }: { search: string }) {

    const chatsSelector = createSelector(
        (state: RootState) => state.chat.chats,
        chats => Object.values(chats).filter(item => item.user.displayName.toLowerCase().match(search.toLowerCase())).sort((a, b) => b.sentAt - a.sentAt)
    )

    const loading = useSelector(state => state.chat.loadingChats);
    const chats = useSelector(chatsSelector);
    const auth = useAuth();

    useEffect(() => {
        store.dispatch(fetchChats())
    }, [auth])

    if (loading) {
        return (
            <View style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
                <ActivityIndicator size="small" color="#4B00FF" />
            </View>
        )
    }

    if (chats.length === 0) {
        return (
            <View style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>No chats</Text>
            </View>
        )
    }

    return (
        <FlatList
            data={chats}
            contentContainerStyle={{ paddingTop: 35, paddingBottom: 45, alignItems: 'center' }}
            renderItem={({ item, index }) => (
                <View key={item.id?.toString()} style={{ paddingTop: index !== 0 ? 20 : 0 }}>
                    <FriendsMessagesCard {...item} />
                </View>
            )}
            extraData={[]}
            keyExtractor={item => item.id.toString()}
        />
    )
}
