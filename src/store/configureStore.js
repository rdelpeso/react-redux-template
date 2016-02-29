import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import invariant from 'redux-immutable-state-invariant';
import reducer from '../reducers';

const mode = process.env.NODE_ENV;

let middleWare;
export default (initialState) => {
  if (mode === 'production') {
    middleWare = applyMiddleware(
      invariant(),
      thunkMiddleware
    );
  } else {
    const loggerMiddleware = createLogger();
    middleWare = applyMiddleware(
      invariant(),
      thunkMiddleware,
      loggerMiddleware
    );
  }

  if (mode !== 'production') {
    middleWare = compose(
      middleWare,
      window.devToolsExtension ? window.devToolsExtension() : f => f
    );
  }
  const store = createStore(reducer, initialState, middleWare);

  if (mode !== 'production' && module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
