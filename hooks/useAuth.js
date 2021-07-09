import React from 'react';
import { Alert } from 'react-native';
import { createAction } from '../utils/createAction';
import { sleep } from '../utils/Sleep';
import Storage from './../storage/Storage';

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
                case 'PAYMENT':
                    return {
                        ...state,
                        payment: { ...action.payload },
                    };
                case 'REMOVE_PAYMENT':
                    return {
                        ...state,
                        payment: undefined,
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
                if (email === 'ktpm2018@uit.edu.vn' && password === '123') {
                    const user = {
                        email: email,
                    };
                    await Storage.setItem("user", JSON.stringify(user));
                    await Storage.removeItem('isLogin')
                    dispatch(createAction('REMOVE_DIRECT_LOGIN'));
                    dispatch(createAction('SET_USER', user));
                    return true;
                } else {
                    Alert.alert("Sai Tài Khoản Hoặc Mật Khẩu");
                    return false;
                }

            },
            logout: async () => {
                await Storage.removeItem('user')
                dispatch(createAction('REMOVE_USER'));
            },
            register: async (email, password) => {
                await sleep(1000);
                if (email !== '' && password !== '') {
                    Alert.alert("Đăng ký thành công");
                    return true;
                } else {
                    Alert.alert("Đăng ký thất bại");
                    return false;
                }
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
            payment: async () => {
                const payment = {
                    payment: 'true',
                };
                await Storage.setItem("payment", JSON.stringify(payment));
                dispatch(createAction('PAYMENT'));
            },
            leavePayment: async () => {
                await Storage.removeItem('payment')
                await Storage.removeItem('paymentData')
                dispatch(createAction('REMOVE_PAYMENT'));
            },
        }),
        [],
    );
    React.useEffect(() => {
        sleep(1000).then(() => {
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