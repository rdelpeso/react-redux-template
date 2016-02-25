import fetch from 'isomorphic-fetch';

export const REQUEST_INCREMENT = 'REQUEST_INCREMENT';
export const RECEIVE_COUNTER = 'RECEIVE_COUNTER';

function requestIncrement() {
	return {
		type: REQUEST_INCREMENT
	}
}

function receiveCounter(json) {
	return {
		type: RECEIVE_COUNTER,
		count: json.count
	}
}

function getCounter() {
	return (dispatch) => {
		return fetch('/get')
			.then(req => req.json())
			.then(json => dispatch(receiveCounter(json)))
	}
}

function incrementCounter() {
	return (dispatch) => {
		dispatch(requestIncrement());

		return fetch('/plus')
			.then(req => req.json())
			.then(json => dispatch(receiveCounter(json)))
	}
}

function shouldIncrement(state) {
	return !state.isFetching;
}

export function refreshCounter() {
	return (dispatch, getState) => {
		return dispatch(getCounter())
	}
}

export function clickCounter() {
	return (dispatch, getState) => {
		if (shouldIncrement(getState())) {
			return dispatch(incrementCounter());
		}
		return Promise.resolve();
	}
}
