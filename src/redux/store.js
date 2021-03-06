import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [
    logger,
    sagaMiddleware
];

export default createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);
