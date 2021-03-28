//@ts-nocheck
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { navigationRef } from "../../navigation";
import { api } from "../../services/api";
import { store } from "../store";
export interface IMessage {
    id?: string;
    chatId: string;
    content: string;
    sentBy: string;
    sentAt: number;
    isQueue?: boolean
    pending?: boolean;
}

interface IUser {
    displayName: string;
    uid: string;
    isActive?: boolean;
}
export interface IChat {
    content: string;
    id: string,
    missed: number,
    sentAt: number,
    sentBy: string
    user: IUser,
    messages: Array<IMessage>
}
interface IChats {
    [key: string]: IChat
}

interface IQueue {
    status: 'joining' | 'searching' | 'connecting' | "found";
    user: IUser;
    messages: Array<IMessage>;
    chatId: string;
}
interface IState {
    chats: IChats;
    loadingChats: boolean;
    loadingMessages: boolean;
    queue: IQueue;
}

export interface IisActiveEvent {
    uid: string;
    isActive: boolean;
}

export const fetchChats = createAsyncThunk(
    'chat/fetchChats',
    async () => {
        const response = await api.get('/chats')
            .catch(error => {
                console.log(error);
            });
        return response.data
    }
)

export const fetchMessages = createAsyncThunk(
    'chat/fetchMessages',
    async ({ chatId, userId }) => {
        const response = await api.get(`/chat/${userId}`);
        return response.data;
    }
)

export const joinQueue = createAsyncThunk(
    'chat/joinQueue',
    async (_, thunkAPI) => {
        const response = await api.get('/join_queue');
        if (response.data.status === 'found') {
            thunkAPI.dispatch(initQueue(response.data.uid))
        }
        return response.data;
    }
)

export const initQueue = createAsyncThunk(
    'chat/initQueue',
    async (uid: string) => {
        const response = await api.get(`/chat/${uid}`);
        navigationRef.current?.navigate('RandomChat')
        return response.data;
    }
)

const chatSlice = createSlice({
    name: "chat",
    initialState: {
        chats: {},
        loadingChats: false,
        loadingMessages: false,
        queue: {
            status: 'joining',
            user: {
                uid: '',
                displayName: '',
                isActive: true
            },
            chatId: ''
        }
    } as IState,
    reducers: {
        addMessage(state, action: { payload: IMessage }) {
            if (action.payload.isQueue) {
                state.queue.messages.push(action.payload)
                if (action.payload.chatId in state.chats) {
                    state.chats[action.payload.chatId].content = action.payload.content;
                    state.chats[action.payload.chatId].sentAt = action.payload.sentAt;
                }
            }
            else {
                const routeName = navigationRef.current?.getCurrentRoute()?.name;
                if (routeName !== 'FriendsChatScreen') {
                    state.chats[action.payload.chatId].missed += 1;
                }
                state.chats[action.payload.chatId].messages.push(action.payload);
                state.chats[action.payload.chatId].content = action.payload.content;
                state.chats[action.payload.chatId].sentAt = action.payload.sentAt;
            }
        },
        setMessageDelivered(state, action: { payload: IMessage }) {
            if (action.payload.isQueue === true) {
                const index = state.queue.messages.findIndex(item => item.sentAt === action.payload.sentAt);
                if (index !== 1) {
                    state.queue.messages[index] = action.payload
                }
            }
            else {
                const index = state.chats[action.payload.chatId].messages.findIndex(item => item.sentAt === action.payload.sentAt);
                if (index !== 1) {
                    state.chats[action.payload.chatId].messages[index] = action.payload
                }
            }

        },
        changeIsActive(state, action: { payload: IisActiveEvent }) {
            if (state.queue.user.uid === action.payload.uid) {
                state.queue.user.isActive = action.payload.isActive
            }
        },
        addChat(state, action: { payload: IChat }) {
            state.chats[action.payload.id] = {
                ...action.payload,
                messages: [],
            }
        },
        skip(state) {
            state.queue.status = 'joining';
            state.queue.user = {
                uid: '',
                displayName: ''
            }
            state.queue.messages = []
        }
    },
    extraReducers: {
        [fetchChats.pending]: (state) => {
            state.loadingChats = true;
        },
        [fetchChats.fulfilled]: (state, action: { payload: Array<IChat> }) => {
            state.loadingChats = false;
            state.chats = action.payload.reduce((acc, val) => {
                acc[val.id] = {
                    ...val,
                    messages: []
                }
                return acc
            }, {})
        },
        [fetchMessages.pending]: (state, props) => {
            const chatId = props.meta.arg.chatId;
            const length = state.chats?.[chatId]?.messages?.length || 0;
            if (length === 0) state.loadingMessages = true;
        },
        [fetchMessages.fulfilled]: (state, action: { payload: { chatId: string, messages: Array<IMessage>, user: IUser } }) => {
            state.loadingMessages = false;
            state.chats[action.payload.chatId] = {
                ...state.chats[action.payload.chatId],
                missed: 0,
                messages: action.payload.messages,
                user: action.payload.user
            }
        },
        [joinQueue.pending]: (state) => {
            state.queue.status = 'joining'
        },
        [joinQueue.fulfilled]: (state, action: { payload: { status: 'searching' | 'waiting' | 'found', uid: string } }) => {
            state.queue.status = 'connecting'
            if (action.payload.status === 'found') {
                state.queue.user.uid = action.payload.uid
            }
            else {
                state.queue.status = action.payload.status;
            }
        },
        [initQueue.fulfilled]: (state, action) => {
            state.queue.status = 'found'
            state.queue.messages = action.payload.messages || []
            state.queue.user = action.payload.user
            state.queue.chatId = action.payload.chatId
        }
    }
});

export const {
    addMessage,
    skip,
    setMessageDelivered,
    changeIsActive,
    addChat
} = chatSlice.actions;

export default chatSlice.reducer;
