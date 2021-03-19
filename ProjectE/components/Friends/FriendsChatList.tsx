import React, { useEffect, useState } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import { createSelector } from 'reselect'
import { useSelector } from '../../hooks'
import { api } from '../../services/api'
import { useAuth } from '../../services/auth'
import { RootState, store } from '../../store'
import { fetchChats } from '../../store/reducers/chat'
import FriendsMessagesCard from './FriendsMessagesCard'

const chatsSelector = createSelector(
    (state: RootState) => state.chat.chats,
    chats => Object.values(chats)
)

export default function FriendsChatList() {
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
        <View>
            {chats.map((item, index) => {
                return (
                    <View key={item.id?.toString()} style={{ paddingTop: index !== 0 ? 20 : 0 }}>
                        <FriendsMessagesCard {...item} />
                    </View>
                )
            })}
        </View>
    )
}
