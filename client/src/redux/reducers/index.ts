import {combineReducers} from "redux";
import {userReducer} from "./user";
import {messagesReducer} from "./messages";
import {dialogReducer} from "./dialogs";
import {attachmentsReducer} from "./attachments";


export const rootReducer = combineReducers({
    user: userReducer,
    messages: messagesReducer,
    dialog: dialogReducer,
    attachments: attachmentsReducer
})

export type RootState = ReturnType<typeof rootReducer>