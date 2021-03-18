import React, { useEffect, useState } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import { api } from '../../services/api'
import { useAuth } from '../../services/auth'
import FriendsMessagesCard from './FriendsMessagesCard'

export default function FriendsChatList() {
    const [chats, setChats] = useState([])
    const [loading, setLoading] = useState(false)
    const auth = useAuth();

    useEffect(() => {
        setLoading(true);
        api.get('/chats')
            .then((res) => {
                setChats(res.data)
                setLoading(false)
            })
            .catch(() => {
                setChats([])
                setLoading(false)
            })

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
