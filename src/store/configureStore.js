import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import invariant from 'redux-immutable-state-invariant';
import reducer from '../reducers';

const loggerMiddleware = createLogger();

export default (initialState) => {
  const middleWare = applyMiddleware(
    invariant(),
    thunkMiddleware,
    loggerMiddleware
  );
  return createStore(reducer, initialState, middleWare);
}
