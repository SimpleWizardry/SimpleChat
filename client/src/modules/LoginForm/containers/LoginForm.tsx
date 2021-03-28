import {FormikErrors, withFormik} from 'formik';

import LoginForm from '../components/LoginForm';

import validateForm from '../../../libs/validation';
//import { userActions } from 'redux/actions';

import { store } from '../../../redux/store';

export type ValuesType = {
     // email: string,
     // password: string,
     // password_2?: string,   ТАК ДОЛЖНО СРАБОТАТЬ
     // fullname?: string,
     [key: string]: string; //КАК ТО КРИВО ПОЛУЧАТСЯ,ВОЗМОЖНО ПРИДЕТСЯ РАЗБИТЬ ВАЛИДАЦИЮ НА 2 Ф-ЦИИ
}

const LoginFormContainer = withFormik({
    enableReinitialize: true,
    mapPropsToValues: () => ({
        email: '',
        password: '',
    }),
    validate: (values: ValuesType) => {
        let errors: FormikErrors<ValuesType> = {};
        let isAuth = true
        validateForm( isAuth, values, errors );

        return errors;
    },
    handleSubmit: (values, { setSubmitting, props }) => {
        store
            .dispatch(userActions.fetchUserLogin(values))
            .then(({ status }) => {
                if (status === 'success') {
                    props.history.push('/');
                }
                setSubmitting(false);
            })
            .catch(() => {
                setSubmitting(false);
            });
    },
    displayName: 'LoginForm',
})(LoginForm);

export default LoginFormContainer;