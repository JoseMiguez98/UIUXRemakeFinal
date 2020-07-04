import {
    FETCH_COMMENTS_PENDING,
    FETCH_COMMENTS_SUCCESS,
    FETCH_COMMENTS_ERROR,
    FETCH_COMMENTS_REQUEST
} from '../types';

export const fetchCommentsPending = () => ({
    type: FETCH_COMMENTS_PENDING
});

export const fetchCommentsSuccess = elems => ({
    type: FETCH_COMMENTS_SUCCESS,
    payload: {
        elems
    }
});

export const fetchCommentsError = () => ({
    type: FETCH_COMMENTS_ERROR
});

export const fetchCommentsRequest = amount => ({
    type: FETCH_COMMENTS_REQUEST,
    payload: {
        amount
    }
});
