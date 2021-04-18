import { combineReducers } from "redux";
import chat from './chat'
import friends from './friends'

export const rootReducer = combineReducers({
    chat, friends
});
