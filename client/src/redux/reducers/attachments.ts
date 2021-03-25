type AttachmentStateType = {
    items: Array<any>  // Array<AttachmentsType> AttachmentsType = ужас наверное
}

export enum AttachmentActionTypes {
    SET_ITEMS = "ATTACHMENTS:SET_ITEMS",
    REMOVE_ITEM = "ATTACHMENTS:REMOVE_ITEM",
}

type SetItemsAction = {
    type: AttachmentActionTypes.SET_ITEMS,
    payload: Array<any>  // Array<AttachmentsType>
}

type RemoveItemAction = {
    type: AttachmentActionTypes.REMOVE_ITEM,
    payload: any  // что это будет { uid: string, ... }
}

export type DialogAction = SetItemsAction | RemoveItemAction

const initialState: AttachmentStateType = {
    items: []
}

export const attachmentsReducer = (state = initialState, action: DialogAction): AttachmentStateType => {
    switch(action.type) {
        case AttachmentActionTypes.SET_ITEMS:
            return {
                ...state,
                items: action.payload,
            };
        case AttachmentActionTypes.REMOVE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item.uid !== action.payload.uid)
            };
        default:
            return state;
    }
}