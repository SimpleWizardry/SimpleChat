import openNotification from '../../libs/helpers/openNotification';
import { userApi } from '../../libs/api';
import {AnyAction, Dispatch} from "redux";
import {UserType} from "../../types/redux/reducers/user";

export type PostDataType = {
    email: string,
    password: string,
    fullname?: string
}

const Actions = {
    setUserData: (data: UserType) => ({
        type: 'USER:SET_DATA',
        payload: data,
    }),
    setIsAuth: (isAuth: boolean) => ({
        type: 'USER:SET_IS_AUTH',
        payload: isAuth,
    }),
    fetchUserData: () => (dispatch: Dispatch) => {
        userApi
            .getMe()
            .then(({ data }) => {
                dispatch(Actions.setUserData(data));
            })
            .catch(err => {
                if (err.response.status === 403) {
                    dispatch(Actions.setIsAuth(false));
                    delete window.localStorage.token;
                }
            });
    },
    fetchUserLogin: (postData: PostDataType) => (dispatch: Dispatch) => {
        return userApi
            .signIn(postData)
            .then(({ data }) => {
                const { token } = data;
                openNotification({
                    title: 'Отлично!',
                    text: 'Авторизация успешна.',
                    type: 'success',
                });
                (<any>window).axios.defaults.headers.common['token'] = token;
                window.localStorage['token'] = token;
                dispatch(Actions.fetchUserData());
                dispatch(Actions.setIsAuth(true));
                return data;
            })
            .catch(({ response }) => {
                openNotification({
                    title: 'Ошибка при авторизации',
                    text: 'Неверный логин или пароль',
                    type: 'error',
                });
            });
    },
    fetchUserRegister: (postData: PostDataType) => () => {
        return userApi.signUp(postData);
    },
};

export default Actions;