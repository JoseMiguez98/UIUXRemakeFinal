import {
    LOGIN,
    LOGOUT,
    BUY
} from '../types';


export const login = () => ({
    type: LOGIN,
});

export const logout = () => ({
    type: LOGOUT
});

export const buy = () => ({
    type: BUY
});
