import { api } from "../api"


interface ISetAsRead {
    chatId: string;
    lastMessageId?: string;
}


const chat = {
    setAsRead: async (props: ISetAsRead) => {
        const res = await api.post('chat.setAsRead', props)
        return res
    },
    joinQueue: async () => {
        const res = await api.get('join_queue');
        return res
    }
}

export const backend = { chat }