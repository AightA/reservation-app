// action type
// const ADD_TODO = 'ADD_TODO';
export const ADD_BOOKING = 'ADD_BOOKING';

//
// action creators
//
export function onClickAddBooking(bookingForm) {
	return { type: ADD_BOOKING, payload: bookingForm };
}

// export function clickAddToDo(note) {
// 	return { type: ADD_TODO, payload: 'build my first redux app' };
// }
