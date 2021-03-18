import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { api } from '../../services/api'
import { useAuth } from '../../services/auth'
import FriendsMessagesCard from './FriendsMessagesCard'

export default function FriendsChatList() {
    const [chats, setChats] = useState([])
    const auth = useAuth();

    useEffect(() => {
        api.get('/chats').then((res) => {
            setChats(res.data)
        })
    }, [auth])

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
