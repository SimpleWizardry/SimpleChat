export type UserType = {
    _id : string
    confirmed: boolean
    last_seen: Date //разобраться
    email: string
    full_name: string
    password: string
    createdAt: Date //разобраться
    updatedAt: Date //разобраться
    confirm_hash: string
}

export type UserStateType = {
    data: UserType | null,
    token: string,
    isAuth: boolean
}

export enum UserActionTypes {
    SET_DATA = "USER:SET_DATA",
    SET_IS_AUTH = "USER:SET_IS_AUTH"
}

type SetDataAction = {
    type: UserActionTypes.SET_DATA,
    payload: UserType | null
}

type SetIsAuthAction = {
    type: UserActionTypes.SET_IS_AUTH,
    payload: boolean
}

export type UserAction = SetDataAction | SetIsAuthAction