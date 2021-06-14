
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'
import combineReducers from './combine-reducers';
import rootSaga from '../Saga'

const sagaMiddleware = createSagaMiddleware()

const index = createStore(combineReducers, compose(
    applyMiddleware(
        sagaMiddleware
    ),
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
)
);

sagaMiddleware.run(rootSaga);

export default index;
