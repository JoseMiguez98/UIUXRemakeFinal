import {
    FETCH_HIGHSCORES_PENDING,
    FETCH_HIGHSCORES_SUCCESS,
    FETCH_HIGHSCORES_ERROR,
    FETCH_HIGHSCORES_REQUEST
} from '../types';

export const fetchHighScoresPending = () => ({
    type: FETCH_HIGHSCORES_PENDING
});

export const fetchHighScoresSuccess = elems => ({
    type: FETCH_HIGHSCORES_SUCCESS,
    payload: {
        elems
    }
});

export const fetchHighScoresError = () => ({
    type: FETCH_HIGHSCORES_ERROR
});

export const fetchHighScoresRequest = amount => ({
    type: FETCH_HIGHSCORES_REQUEST,
    payload: {
        amount
    }
});
