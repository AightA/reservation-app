// action type
export const ADD_BOOKING = 'ADD_BOOKING';

//
// action creators
//

export function addBooking(booking) {
	return { type: ADD_BOOKING, booking };
}
