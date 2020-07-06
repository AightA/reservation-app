import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Booking from '../components/Booking';
import Seating from '../components/Seating';
import NotFound from './NotFound';

export default (props) => (
	<Switch>
		<Route
			exact
			path="/"
			// component={Booking}
			render={(routeProps) => <Booking {...routeProps} {...props} />}
		/>
		<Route
			path="/seating"
			// component={Seating}
			render={(routeProps) => <Seating {...routeProps} {...props} />}
		/>
		<Route path="*" component={NotFound} />
	</Switch>
);
