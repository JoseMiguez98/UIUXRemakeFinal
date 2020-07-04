import { all } from 'redux-saga/effects';
import comments from './comments';
import highscores from './highscores';

export default function* rootSaga() {
    yield all([
        comments(),
        highscores()
    ]);
};
