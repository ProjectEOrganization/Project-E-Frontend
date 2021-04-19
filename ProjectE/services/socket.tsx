//@ts-nocheck
import React, { useEffect, useState } from 'react'

import { io, Socket } from 'socket.io-client';
import { useAuth } from './auth';
import config from './config';

import { navigationRef } from '../navigation'
import { store } from '../store';
import { addChat, addMessage, addTopic, changeIsActive, IChat, IisActiveEvent, IMessage, initQueue, makeFriends } from '../store/reducers/chat';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { addFriend } from '../store/reducers/friends';
import { api } from './api';
import { batch } from 'react-redux';

const SocketContext = React.createContext<Socket>();

export function ProvideSocket({ children }) {
    const socket = useProvideSocket();
    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    )
}
export const useSocket = () => {
    return React.useContext(SocketContext);
};

function useProvideSocket() {
    const [socket, setSocket] = useState<Socket>(null);
    const [token, setToken] = useState(null);
    const [connected, setConnected] = useState(false);

    const auth = useAuth();

    useEffect(() => {
        (async () => {
            if (auth.user?.getIdToken) {
                const token = await auth.user.getIdToken();
                setToken(token)
            }
        })()
    }, [auth, navigationRef])

    useEffect(() => {
        if (token) {
            const socket = io(config.SOCKET_URL, {
                transports: ["websocket"],
                query: { token }
            })

            socket.on('connect', () => {
                setConnected(true);
            })

            socket.on('disconnect', () => {
                setConnected(false)
            })

            socket.on('friend_request', (user) => {
                console.log('friend request received from ' + user.uid)
                navigationRef.current?.navigate('FriendRequestReceivedModal', { uid: user.uid })
            })

            socket.on('message', (msg: IMessage) => {
                store.dispatch(addMessage(msg))
            })

            socket?.on('isActive', (msg: IisActiveEvent) => {
                store.dispatch(changeIsActive(msg))
            })

            socket.on('skip', () => {
                navigationRef.current?.navigate('TheyHadToGoModal')
            })

            socket.on('queue', (msg) => {
                batch(() => {
                    store.dispatch(initQueue(msg.uid))
                    store.dispatch(addTopic(msg.topic))
                })
            })

            socket.on('friend_request_accepted', ({ uid, chat }: { uid: string, chat: IChat }) => {
                store.dispatch(addChat(chat))
                store.dispatch(makeFriends())
                store.dispatch(addFriend(uid))
                navigationRef.current?.navigate('YouAreNowFriendsModal', { uid })
            })

            socket.on('friend_request_declined', (friendId) => {
                navigationRef.current?.navigate('RejectedModal', { uid: friendId.uid })
            })
            setSocket(socket);
        }
        return () => {
            socket?.off('connect')
            socket?.off('disconnect')
            socket?.off('friend_request')
            socket?.off('message')
            socket?.off('isActive')
            socket?.off('skip')
            socket?.off('queue')
            socket?.off('friend_request_accepted')
            socket?.off('friend_request_declined')
        }
    }, [token]);

    return {
        socket,
        connected
    }
}
