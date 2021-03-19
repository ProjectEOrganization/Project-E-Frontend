//@ts-nocheck
import React, { useEffect, useState } from 'react'
import { AsyncStorage } from 'react-native';
import { io, Socket } from 'socket.io-client';
import { useAuth } from './auth';
import config from './config';

import { navigationRef } from '../navigation'
import { store } from '../store';
import { addMessage } from '../store/reducers/chat';

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

function useProvideSocket(): Socket {
    const [socket, setSocket] = useState<Socket>(null);
    const auth = useAuth();

    useEffect(() => {
        const setup = async () => {
            try {
                const token = await AsyncStorage.getItem('token')
                const socket = io(config.SOCKET_URL, {
                    transports: ["websocket"],
                    query: { token }
                })

                socket.on('connect', () => {
                    console.log('connected')
                })

                socket.on('friend_request', (user) => {
                    console.log('friend request received from ' + user.uid)
                    navigationRef.current?.navigate('FriendRequestReceivedModal', { uid: user.uid })
                })

                socket?.on('message', (msg: IMessage) => {
                    store.dispatch(addMessage(msg))
                })

                socket.on('friend_request_accepted', (friendId) => {
                    navigationRef.current?.navigate('YouAreNowFriendsModal', { uid: friendId.uid })
                })

                socket.on('friend_request_declined', (friendId) => {
                    navigationRef.current?.navigate('RejectedModal', { uid: friendId.uid })
                })

                setSocket(socket);
            }
            catch (err) {
                console.log(err)
            }
        }
        if (auth.user?.getIdToken) setup();
        return () => {
            socket?.off('message')
            socket?.close();
        }
    }, [auth, navigationRef]);

    return socket
}
