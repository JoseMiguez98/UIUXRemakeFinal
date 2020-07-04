import {
    FETCH_COMMENTS_PENDING,
    FETCH_COMMENTS_SUCCESS,
    FETCH_COMMENTS_ERROR
} from '../types';

const initialState = () => ({
    elems: [],
    PENDING: false,
    SUCCESS: false,
    ERROR: false
});

export default function commentsReducer(state = initialState(), {type, payload}) {
    switch(type) {
        case FETCH_COMMENTS_PENDING:
            return {
                ...state,
                PENDING: true,
                SUCCESS: false,
                ERROR: false
            }
        case FETCH_COMMENTS_SUCCESS:
            const { elems } = payload;
            return {
                ...state,
                elems,
                PENDING: false,
                SUCCESS: true,
                ERROR: false
            }
        case FETCH_COMMENTS_ERROR:
            return {
                ...state,
                PENDING: false,
                SUCCESS: false,
                ERROR: true
            }
        default:
            return state;
    }
}
