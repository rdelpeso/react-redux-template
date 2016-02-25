import { combineReducers } from 'redux'
import { REQUEST_INCREMENT, RECEIVE_COUNTER } from '../actions';

function counterValue(state = 0, action) {
  switch (action.type) {
    case RECEIVE_COUNTER:
      return action.count;
    default:
      return state;
  }
}

const reducer = combineReducers({ counterValue });
export default reducer
