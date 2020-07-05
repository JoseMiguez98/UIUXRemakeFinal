import { put, takeEvery } from 'redux-saga/effects';
import { FETCH_COMMENTS_REQUEST } from '../types';
import {
    fetchCommentsSuccess,
    fetchCommentsPending,
    fetchCommentsError
} from '../actions';

export default function* watchCommentsFetch() {
    yield takeEvery(FETCH_COMMENTS_REQUEST, fetchComments);
}

function* fetchComments({ payload }) {
    const { amount } = payload;
    yield put(fetchCommentsPending());
    try {
        const response = yield fetch(`https://randomuser.me/api/?results=${amount}&inc=login,picture`);
        const { results:data } = yield response.json();
        const comments = yield data.map((user, index) => ({
          id: index,
          username: user.login.username,
          picture: user.picture.medium
        }));
        const jokes = yield fetch(`https://api.icndb.com/jokes/random/${amount}`);
        const { value:jokesData } = yield jokes.json();
        jokesData.map(({ joke }, index) => ( comments[index].comment = joke ))
        yield put(fetchCommentsSuccess(comments));
    } catch(e) {
        yield put(fetchCommentsError());
    }
}
