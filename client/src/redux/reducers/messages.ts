import {MessageAction, MessageActionTypes, MessageStateType} from "../../types/messages";

const initialState: MessageStateType = {
    items: [] ,
    isLoading: false
}

export const messagesReducer = (state = initialState, action: MessageAction): MessageStateType => {
    switch(action.type) {
        case MessageActionTypes.ADD_MESSAGE:
            return {
                ...state,
                items: [...state.items, action.payload]

            };
        case MessageActionTypes.LAST_MESSAGE_READED_STATUS:
            return {
                ...state,
                items: state.items.map(message => {
                    if (message.dialog._id === action.payload.dialogId) {
                        message.readed = true;
                    }
                    return message;
                })
            };
        case MessageActionTypes.REMOVE_MESSAGE:
            return {
                ...state,
                items: state.items.filter(message => message._id !== action.payload),
            };
        case MessageActionTypes.SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.payload,
            };
        default:
            return state;
    }
}
