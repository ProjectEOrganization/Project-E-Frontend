//@ts-nocheck
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { navigationRef } from "../../navigation";
import { api } from "../../services/api";

interface IState {
    list: Array<any>;
    loading: boolean;
}

export const fetchFriends = createAsyncThunk(
    'friends/fetchFriends',
    async () => {
        const response = await api.get('/friends')
        return response.data
    }
)

export const addFriend = createAsyncThunk(
    'friends/addFriend',
    async (friendId, thunkAPI) => {
        const response = await api.get(`/friend/${friendId}`);
        return response.data
    }
)

const chatSlice = createSlice({
    name: "chat",
    initialState: {
        list: [],
        loading: false
    } as IState,
    reducers: {

    },
    extraReducers: {
        [fetchFriends.pending]: (state) => {
            state.loading = true;
        },
        [fetchFriends.fulfilled]: (state, action) => {
            state.list = action.payload
            state.loading = false
        },
        [addFriend.fulfilled]: (state, action) => {
            if (state.list.findIndex(user => user.id === action.payload.id) === -1) {
                state.list.push(action.payload)
            }
        }
    }
})
export const {

} = chatSlice.actions;

export default chatSlice.reducer;
