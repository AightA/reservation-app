import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { onClickAddBooking } from '../redux/actions';

const Booking = (props) => {
	const [eachInput, setEachInput] = useState({});
	const {
		firstName,
		lastName,
		email,
		phoneNumber,
		numberOfPeople,
		diningDate,
	} = eachInput;

	const handleChange = (e) => {
		const { name, value } = e.target;
		setEachInput({ ...eachInput, [name]: value });
	};

	return (
		<Container>
			<Row className="mt-4">
				<Col sm="12" md={{ size: 6, offset: 3 }} className="text-center">
					<h2>Please make your reservation below</h2>
				</Col>
			</Row>
			<Row className="mt-4">
				<Col sm="12" md={{ size: 6, offset: 3 }}>
					<Form onSubmit={() => props.handleSubmit(eachInput)}>
						<FormGroup as={Col} md="4" controlId="validationCustom01">
							<Label>First Name</Label>
							<Input
								required
								name="firstName"
								type="text"
								placeholder="First Name"
								value={firstName}
								onChange={handleChange}
							/>
						</FormGroup>

						<FormGroup as={Col} md="4" controlId="validationCustom02">
							<Label>Last Name</Label>
							<Input
								required
								name="lastName"
								type="text"
								placeholder="Last Name"
								value={lastName}
								onChange={handleChange}
							/>
						</FormGroup>

						<FormGroup as={Col} md="4" controlId="dob">
							<Label>Date of reservation</Label>
							<Input
								name="diningDate"
								type="date"
								placeholder="Date of reservation"
								value={diningDate}
								onChange={handleChange}
							/>
						</FormGroup>

						<FormGroup as={Col} controlId="formContainerEmail">
							<Label>Email address</Label>
							<Input
								name="email"
								type="email"
								placeholder="Enter email"
								value={email}
								onChange={handleChange}
							/>
						</FormGroup>

						<FormGroup as={Col} controlId="formContainerEmail">
							<Label>Number of people</Label>
							<Input
								name="numberOfPeople"
								type="number"
								placeholder="number of people"
								value={numberOfPeople}
								onChange={handleChange}
							/>
						</FormGroup>

						<FormGroup as={Col} controlId="formContainerEmail">
							<Label>Phone Number</Label>
							<Input
								name="phoneNumber"
								type="tel"
								placeholder="Phone Number"
								value={phoneNumber}
								onChange={handleChange}
							/>
						</FormGroup>

						<Button variant="primary" type="submit" className="mb-5">
							Submit
						</Button>
					</Form>
				</Col>
			</Row>
		</Container>
	);
};

Booking.propTypes = {
	initialState: PropTypes.shape({
		firstName: PropTypes.string,
		lastName: PropTypes.string,
		email: PropTypes.string,
		phoneNumber: PropTypes.number,
		numberOfPeople: PropTypes.number,
		diningDate: PropTypes.number,
	}),
};

const mapStateToProps = (state) => {
	return {
		bookingToDisplay: state.bookings.payload.firstName,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		handleSubmit: (eachInput) => dispatch(onClickAddBooking(eachInput)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Booking);
