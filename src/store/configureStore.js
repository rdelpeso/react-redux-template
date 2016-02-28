import { createStore, applyMiddleware, compose } from 'redux';
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

  const store = createStore(reducer, initialState, compose(
    middleWare,
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
