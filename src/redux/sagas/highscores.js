import { put, takeEvery } from 'redux-saga/effects';
import { FETCH_HIGHSCORES_REQUEST } from '../types';
import {
    fetchHighScoresPending,
    fetchHighScoresSuccess,
    fetchHighScoresError
} from '../actions';

export default function* wathHighscoresFetch() {
    yield takeEvery(FETCH_HIGHSCORES_REQUEST, fetchHighscores);
}

function* fetchHighscores({payload}) {
    const { amount } = payload;
    yield put(fetchHighScoresPending());
    try {
        const response = yield fetch(`https://randomuser.me/api/?results=${amount}&inc=login,picture`);
        const { results } = yield response.json();
        const highscores = results.map((user, index) => ({
            id: index,
            user: user.login.username,
            picture: user.picture.thumbnail
        }));
        yield put(fetchHighScoresSuccess(highscores));
    } catch (e) {
        yield put(fetchHighScoresError());
    }
}
