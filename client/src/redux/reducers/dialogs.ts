type DialogStateType = {
    items: Array<any>  // Array<MessageType>
    currentDialogId: string
    isLoading: boolean
}

export enum DialogActionTypes {
    SET_ITEMS = "DIALOGS:SET_ITEMS",
    LAST_MESSAGE_READED_STATUS = "DIALOGS:LAST_MESSAGE_READED_STATUS",
    SET_CURRENT_DIALOG_ID = "DIALOGS:SET_CURRENT_DIALOG_ID"
}

type SetItemsAction = {
    type: DialogActionTypes.SET_ITEMS,
    payload: Array<any>  // Array<MessageType>
}

type LastMessageStatusAction = {
    type: DialogActionTypes.LAST_MESSAGE_READED_STATUS,
    payload: any  // { dialogId: string, ... }
}

type SetCurrentDialogIdAction = {
    type: DialogActionTypes.SET_CURRENT_DIALOG_ID,
    payload: string
}

export type DialogAction = SetItemsAction | LastMessageStatusAction | SetCurrentDialogIdAction

const initialState: DialogStateType = {
    items: [] ,
    currentDialogId: window.location.pathname.split('dialog/')[1],
    isLoading: false,
}

export const dialogReducer = (state = initialState, action: DialogAction): DialogStateType => {
    switch(action.type) {
        case DialogActionTypes.SET_ITEMS:
            return {
                ...state,
                items: action.payload,
            };
        case DialogActionTypes.LAST_MESSAGE_READED_STATUS:
            return {
                ...state,
                items: state.items.map(dialog => {
                    if (dialog._id === action.payload.dialogId) {
                        dialog.lastMessage.readed = true;
                    }
                    return dialog;
                }),
            };
        case DialogActionTypes.SET_CURRENT_DIALOG_ID:
            return {
                ...state,
                currentDialogId: action.payload,
            };
        default:
            return state;
    }
}