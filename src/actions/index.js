import fetch from 'isomorphic-fetch';

export const REQUESTED_INCREMENT = 'REQUESTED_INCREMENT';
export const RECEIVE_COUNTER = 'RECEIVE_COUNTER';
export const REQUESTED_COUNTER = 'REQUESTED_COUNTER';

function requestedIncrement() {
	return {
		type: REQUESTED_INCREMENT
	}
}

function requestedCounter() {
	return {
		type: REQUESTED_COUNTER
	}
}

function receiveCounter(json) {
	return {
		type: RECEIVE_COUNTER,
		count: json.count
	}
}

function shouldIncrement(state) {
	return !state.isFetching;
}

export function clickCounter() {
	return (dispatch, getState) => {
		if (!shouldIncrement(getState())) {
			return Promise.resolve();
		}

		dispatch(requestedIncrement());
		return fetch('/api/v1/counter/plus')
			.then(req => req.json())
			.then(json => dispatch(receiveCounter(json)))
	}
}

export function refreshCounter() {
	return (dispatch) => {
		dispatch(requestedCounter());
		return fetch('/api/v1/counter/get')
			.then(req => req.json())
			.then(json => dispatch(receiveCounter(json)));
	}
}
