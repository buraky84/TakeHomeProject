import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';

import saga from './sagas/saga';
import {trackReducer} from './modules/track/trackReducer';
import {investReducer} from './modules/invest/investReducer';
import {newsReducer} from './modules/news/newsReducer';

const reducers = combineReducers({
  track: trackReducer,
  news: newsReducer,
  invest: investReducer,
});

const sagaMiddleware = createSagaMiddleware();
const middleware = applyMiddleware(sagaMiddleware);

const store = createStore(reducers, compose(middleware));

sagaMiddleware.run(saga);

export default store;
