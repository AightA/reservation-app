import reducer from '../../../redux/reducers';
import { ADD_BOOKING } from '../../../redux/actions';

describe('bookings reducer', () => {
	const INITIAL_BOOKINGS = {
		bookings: [
			{
				firstName: 'Awet',
				lastName: '',
				email: 'awet@usk.sl',
				diningDate: 0,
				numberOfPeople: 10,
				phoneNumber: 0,
			},
		],
	};
	const action = { action: 'anything' };
	test('should return all bookings initially', () => {
		const result = reducer(INITIAL_BOOKINGS, action);
		expect(result.bookings).toHaveLength(1);
		const actualResult = 'awet@usk.sl';
		expect(result.bookings[0].email).toEqual(actualResult);
	});
	it('should allow adding a new booking', () => {
		const newBooking = { firstName: 'Neby' };
		const result = reducer(INITIAL_BOOKINGS, {
			type: ADD_BOOKING,
			booking: newBooking,
		});
		expect(result.bookings).toHaveLength(2);
		expect(result.bookings[0].firstName).toEqual('Awet');
		expect(result.bookings[1].firstName).toEqual('Neby');
	});
});
