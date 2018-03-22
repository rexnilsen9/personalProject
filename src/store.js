import { createStore, applyMiddleware } from 'redux';
import promiseMiddlware from 'redux-promise-middleware';
import reducer from './Ducks/reducer';


const middleware = applyMiddleware(promiseMiddlware());

export default createStore(reducer, middleware);

