import { combineReducers } from 'redux'
import { RECEIVE_COUNTER, REQUESTED_COUNTER, REQUESTED_INCREMENT } from '../actions';
import { routerReducer } from 'react-router-redux'

function counterValue(state = {
  value: 0,
  isFetching: false,
  wasClicked: false
}, action) {
  switch (action.type) {
    case RECEIVE_COUNTER:
      return Object.assign({}, state, {
        value: action.count,
        isFetching: false,
        wasClicked: false
      });
    case REQUESTED_COUNTER:
      return Object.assign({}, state, {
        isFetching: true
      });
    case REQUESTED_INCREMENT:
      return Object.assign({}, state, {
        wasClicked: true
      });
    default:
      return state;
  }
}

const reducer = combineReducers({ counterValue, routing: routerReducer });
export default reducer
