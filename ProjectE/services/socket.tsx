//@ts-nocheck
import React, { useEffect, useState } from 'react'
import { io, Socket } from 'socket.io-client';
import { useAuth } from './auth';
import config from './config';

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
            const token = await auth.user?.getIdToken(true);

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


            setSocket(socket);
        }
        setup();
        return () => {
            socket?.close();
        }
    }, [auth]);

    return socket
}
