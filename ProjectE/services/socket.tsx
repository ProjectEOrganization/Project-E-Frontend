//@ts-nocheck
import React, { useEffect, useState } from 'react'

import { io, Socket } from 'socket.io-client';
import { useAuth } from './auth';
import config from './config';

import { navigationRef } from '../navigation'
import { store } from '../store';
import { addChat, addMessage, changeIsActive, IChat, IisActiveEvent, initQueue } from '../store/reducers/chat';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
    const [connected, setConnected] = useState(false);

    const auth = useAuth();

    useEffect(() => {
        const setup = async () => {
            const token = await AsyncStorage.getItem('token') || await auth.user.getIdToken();

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
                console.log('socket addMessage')
                store.dispatch(addMessage(msg))
            })

            socket?.on('isActive', (msg: IisActiveEvent) => {
                store.dispatch(changeIsActive(msg))
            })

            socket.on('skip', () => {
                navigationRef.current.navigate('TheyHadToGoModal')
            })

            socket.on('queue', (msg) => {
                store.dispatch(initQueue(msg.uid))
            })

            socket.on('friend_request_accepted', ({ uid, chat }: { uid: string, chat: IChat }) => {
                store.dispatch(addChat(chat))
                navigationRef.current?.navigate('YouAreNowFriendsModal', { uid })
            })

            socket.on('friend_request_declined', (friendId) => {
                navigationRef.current?.navigate('RejectedModal', { uid: friendId.uid })
            })
            setSocket(socket);
        }
        if (auth.user?.getIdToken) setup();
        return () => {
            socket?.off('message')
            socket?.off('skip')
            socket?.off('queue')
            socket?.close();
        }
    }, [auth, navigationRef, store]);

    return {
        socket,
        connected
    }
}
