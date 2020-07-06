import { combineReducers } from 'redux';
import { ADD_BOOKING } from './actions';

const INITIAL_STATE = {
	payload: {
		firstName: '',
		lastName: '',
		email: '',
		phoneNumber: 0,
		numberOfPeople: 0,
		diningDate: 0,
	},
};

function addBookingReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case ADD_BOOKING:
			return {
				...state,
				payload: action.payload,
			};
		default:
			return state;
	}
}

const bookingApp = combineReducers({ bookings: addBookingReducer });

export default bookingApp;
