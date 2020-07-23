import React from 'react';
import { render } from '../testUtils/helper';
import SeatingList from '../components/SeatingList';

describe('SeatingList snapshots', () => {
	it('Renders the connected app with initialState', () => {
		const result = render(<SeatingList />, {
			initialState: {
				bookings: [
					{
						id: 1,
						firstName: 'Mozafer',
					},
					{
						id: 2,
						firstName: 'Vicky',
					},
				],
			},
		});
		expect(result.getByText(/Mozafer/i)).toBeInTheDocument();
		expect(result.getByText(/vicky/i)).toBeInTheDocument();
		expect(result).toMatchSnapshot();
	});
});
