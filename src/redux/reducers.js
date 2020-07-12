import { combineReducers } from 'redux';
import { ADD_BOOKING } from './actions';

const INITIAL_BOOKINGS = [];

function addBookingReducer(state = INITIAL_BOOKINGS, action) {
	switch (action.type) {
		case ADD_BOOKING:
			return [...state, action.booking];
		default:
			return state;
	}
}

const bookingApp = combineReducers({ bookings: addBookingReducer });

export default bookingApp;
