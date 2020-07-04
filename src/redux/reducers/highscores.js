import {
    FETCH_HIGHSCORES_PENDING,
    FETCH_HIGHSCORES_SUCCESS,
    FETCH_HIGHSCORES_ERROR
} from '../types';

const initialState = () => ({
    elems: [],
    PENDING: true,
    SUCCESS: false,
    ERROR: false
});

export default function highScoresReducer(state=initialState(), {type, payload}) {
    switch(type) {
        case FETCH_HIGHSCORES_PENDING:
            return {
                ...state,
                PENDING: true,
                SUCCESS: false,
                ERROR: false
            };
        case FETCH_HIGHSCORES_SUCCESS:
            const {elems} = payload;
            return {
                ...state,
                elems,
                PENDING: false,
                SUCCESS: true,
                ERROR: false
            }
        case FETCH_HIGHSCORES_ERROR:
            return {
                ...state,
                PENDING: false,
                SUCCESS: false,
                ERROR: true
            }
        default:
            return state;
    }
};
