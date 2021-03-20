//@ts-nocheck
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { navigationRef } from "../../navigation";
import { api } from "../../services/api";
import { store } from "../store";
export interface IMessage {
    chatId: string;
    content: string;
    sentBy: string;
    sentAt: number;
    isQueue?: boolean
}

interface IUser {
    displayName: string;
    uid: string;
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
    user: IUser,
    messages: Array<IMessage>
}
interface IState {
    chats: IChats;
    loadingChats: boolean;
    loadingMessages: boolean;
    queue: IQueue;
}

export const fetchChats = createAsyncThunk(
    'chat/fetchChats',
    async () => {
        const response = await api.get('/chats');
        return response.data
    }
)

export const fetchMessages = createAsyncThunk(
    'chat/fetchMessages',
    async ({ chatId, userId }, thunkAPI) => {
        const response = await api.get(`/chat/${userId}`);
        return response.data;
    }
)

export const joinQueue = createAsyncThunk(
    'chat/joinQueue',
    async () => {
        const response = await api.get('/join_queue');
        return response.data;
    }
)

export const initQueue = createAsyncThunk(
    'chat/initQueue',
    async (uid: string) => {
        const response = await api.get(`/chat/${uid}`);
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
                displayName: ''
            }
        }
    } as IState,
    reducers: {
        addMessage(state, action: { payload: IMessage }) {
            console.log(action.payload)
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
        skip(state) {
            state.queue.status = 'joining';
            state.queue.user = {
                uid: '',
                displayName: ''
            }
            state.queue.messages = []
        },
        foundQueue(state, action: { payload: { uid: string } }) {
            state.queue.status = 'found';
            state.queue.user.uid = action.payload.uid
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
            state.queue.status = action.payload.status;
            if (action.payload.status === 'found') {
                state.queue.user.uid = action.payload.uid
            }
        },
        [initQueue.fulfilled]: (state, action) => {
            state.queue.messages = action.payload.messages
            state.queue.user = action.payload.user
        }
    }
});

export const {
    addMessage,
    skip,
    foundQueue
} = chatSlice.actions;

export default chatSlice.reducer;
