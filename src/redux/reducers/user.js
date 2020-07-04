import {
    LOGIN,
    LOGOUT,
    BUY
} from '../types';

const initialState = () => ({
    logged: false,
    bought: false
});

export default function userReducer(state = initialState(), { type }) {
    switch(type) {
        case LOGIN:
            return {
                ...state,
                logged: true
            };
        case LOGOUT:
            return {
                ...state,
                logged: false
            };
        case BUY:
            return {
                ...state,
                bought: true
            };
        default:
            return state;
    }
}
