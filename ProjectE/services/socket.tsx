//@ts-nocheck
import React, { useEffect, useState } from 'react'
import { AsyncStorage } from 'react-native';
import { io, Socket } from 'socket.io-client';
import { useAuth } from './auth';
import config from './config';

const SocketContext = React.createContext<Socket>();

const navigation = useNavigation();

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

                socket.on('disconnect', () => {
                    console.log('disconnected')
                })
                
                socket.on('friend_request', (friendId) => {
                    console.log('friend request received from '+friendId)
                    navigation.navigate('FriendRequestRecceivedModal', friendId)
                })

                socket.on('friend_request_accepted', (friendId) => {
                    console.log('friend request accepted from '+friendId)
                })

                socket.on('friend_request_rejected', (friendId) => {
                    console.log('friend request rejected from '+friendId)
                })

                setSocket(socket);
            }
            catch (err) {
                console.log(err)
            }
        }
        if (auth.user?.getIdToken) setup();
        return () => {
            socket?.close();
        }
    }, [auth]);

    return socket
}
