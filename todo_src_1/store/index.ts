import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import { RootAction, RootState, Services} from 'typesafe-actions'
import { composeEnhancers } from './utils';

import rootReducer from './root-reducer';
import rootEpic from './root-epic';
import services from '../services';

import { composeWithDevTools } from 'redux-devtools-extension';


//console.log("store >>> index.ts");

export const epicMiddleware = createEpicMiddleware<RootAction, RootAction, RootState, Services>({
    dependencies: services,
}); ///??? Type 이 4개 정의되는 이유...

const middlewares = [epicMiddleware];
//const enhancer = composeEnhancers(applyMiddleware(...middlewares));
const enhancer = composeEnhancers(composeWithDevTools(applyMiddleware(...middlewares)));

const initialState = {};


const store = createStore(rootReducer, initialState, enhancer);

epicMiddleware.run(rootEpic);


export default store;