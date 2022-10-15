import {
  combineReducers, applyMiddleware, compose, createStore,
} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { reducerResult } from './news/resultReducer';

const rootReducer = combineReducers({
  results: reducerResult,
});

const store = createStore(rootReducer, compose(applyMiddleware(thunk, logger)));
export default store;
