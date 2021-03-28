// Вид в бд,видоизменяется в ходе работы,переписать
export type MessageType = {
    _id: string
    read: boolean
    attachments: Array<any> // Array<attachmentType>
    text: string
    dialog: string
    user: string
    createdAt: Date
    updatedAt: Date
}

export type MessageStateType = {
    items: Array<any> // объявить тип сообщения {_id: string, text: string, dialog: {_id , ... } ... }
    isLoading: boolean
}

export enum MessageActionTypes {
    ADD_MESSAGE = "MESSAGES:ADD_MESSAGE",
    LAST_MESSAGE_READED_STATUS = "DIALOGS:LAST_MESSAGE_READED_STATUS",
    REMOVE_MESSAGE = "MESSAGES:REMOVE_MESSAGE",
    SET_IS_LOADING = "MESSAGES:SET_IS_LOADING",
}

type AddMessageAction = {
    type: MessageActionTypes.ADD_MESSAGE,
    payload: any  //string?
}

type LastMessageStatusAction = {
    type: MessageActionTypes.LAST_MESSAGE_READED_STATUS,
    payload: any  // { dialogId: string, ... }
}

type RemoveMessageAction = {
    type: MessageActionTypes.REMOVE_MESSAGE,
    payload: string
}

type SetIsLoading = {
    type: MessageActionTypes.SET_IS_LOADING,
    payload: boolean
}

export type MessageAction = AddMessageAction | LastMessageStatusAction | RemoveMessageAction | SetIsLoading