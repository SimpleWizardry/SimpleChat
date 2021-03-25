import {UserAction, UserActionTypes, UserStateType} from "../../types/user";

const initialState: UserStateType = {
    data: null,
    token: window.localStorage.token,
    isAuth: !!window.localStorage.token
}

export const userReducer = (state = initialState, action: UserAction): UserStateType => {
    switch(action.type) {
        case UserActionTypes.SET_DATA:
            return {
                ...state,
                data: action.payload,
                isAuth: true,
                token: window.localStorage.token
            };
        case UserActionTypes.SET_IS_AUTH:
            return {
                ...state,
                isAuth: action.payload
            };
        default:
            return state;
    }
}
