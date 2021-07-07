import React from 'react';
import SecureStorage from 'react-native-secure-storage';

import { createAction } from '../utils/createAction';
import { sleep } from '../utils/sleep';
import Storage from './../storage/Storage'

export default function useAuth() {
    const [state, dispatch] = React.useReducer(
        (state, action) => {
            switch (action.type) {
                case 'SET_USER':
                    return {
                        ...state,
                        user: { ...action.payload },
                    };
                case 'REMOVE_USER':
                    return {
                        ...state,
                        user: undefined,
                    };
                case 'SET_LOADING':
                    return {
                        ...state,
                        loading: action.payload,
                    };
                case 'DIRECT_LOGIN':
                    return {
                        ...state,
                        isLogin: { ...action.payload },
                    };
                case 'REMOVE_DIRECT_LOGIN':
                    return {
                        ...state,
                        isLogin: undefined,
                    };
                case 'DIRECT_HOME':
                    return {
                        ...state,
                        isLogin: { ...action.payload },
                    };
                default:
                    return state;
            }
        },
        {
            user: undefined,
            loading: true,
        },
    );
    const auth = React.useMemo(
        () => ({
            login: async (email, password) => {
                const user = {
                    email: email,
                };
                // await SecureStorage.setItem('user', JSON.stringify(user));
                await Storage.setItem("user", JSON.stringify(user));
                await Storage.removeItem('isLogin')
                dispatch(createAction('REMOVE_DIRECT_LOGIN'));
                dispatch(createAction('SET_USER', user));
            },
            logout: async () => {
                await Storage.removeItem('user')
                dispatch(createAction('REMOVE_USER'));
            },
            register: async (email, password) => {
                await sleep(2000);
            },
            directLogin: async () => {
                const isLogin = {
                    isLogin: 'true',
                };
                await Storage.setItem("isLogin", JSON.stringify(isLogin));
                dispatch(createAction('DIRECT_LOGIN', isLogin));
            },
            directHome: async () => {
                await Storage.removeItem('isLogin')
                dispatch(createAction('REMOVE_DIRECT_LOGIN'));
            },
        }),
        [],
    );
    React.useEffect(() => {
        sleep(2000).then(() => {
            Storage.getItem('user').then(user => {
                if (user) {
                    dispatch(createAction('SET_USER', JSON.parse(user)));
                }
                dispatch(createAction('SET_LOADING', false));
            });
        });
    }, []);
    return { auth, state };
}