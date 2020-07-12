import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addBooking } from '../redux/actions';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Booking = (props) => {
	const formik = useFormik({
		initialValues: {
			firstName: '',
			lastName: '',
			email: '',
			diningDate: 0,
			numberOfPeople: 0,
			phoneNumber: 0,
		},

		validationSchema: Yup.object({
			firstName: Yup.string().required('Required'),
			lastName: Yup.string().required('Required'),
			email: Yup.string().email('Invalid email address').required('Required'),
		}),
		onSubmit: (booking) => {
			// redux to add this
			props.addBooking(booking);
			formik.resetForm();
		},
	});

	return (
		<Container>
			<Row className="mt-4">
				<Col sm="12" md={{ size: 6, offset: 3 }} className="text-center">
					<h2>Please make your reservation below</h2>
				</Col>
			</Row>
			<Row className="mt-4">
				<Col sm="12" md={{ size: 6, offset: 3 }}>
					<Form onSubmit={formik.handleSubmit}>
						<FormGroup as={Col} md="4" controlId="validationCustom01">
							<Label>First Name</Label>
							<Input name="firstName" {...formik.getFieldProps('firstName')} />
							{formik.touched.firstName && formik.errors.firstName ? (
								<div>{formik.errors.firstName}</div>
							) : null}
						</FormGroup>

						<FormGroup as={Col} md="4" controlId="validationCustom02">
							<Label>Last Name</Label>
							<Input name="lastName" {...formik.getFieldProps('lastName')} />
							{formik.touched.lastName && formik.errors.lastName ? (
								<div>{formik.errors.lastName}</div>
							) : null}
						</FormGroup>

						<FormGroup as={Col} md="4">
							<Label>Date of reservation</Label>
							<Input
								name="diningDate"
								type="date"
								{...formik.getFieldProps('diningDate')}
							/>
							{formik.touched.diningDate && formik.errors.diningDate ? (
								<div>{formik.errors.diningDate}</div>
							) : null}
						</FormGroup>

						<FormGroup as={Col} controlId="formContainerEmail">
							<Label>Email address</Label>
							<Input name="email" {...formik.getFieldProps('email')} />
							{formik.touched.email && formik.errors.email ? (
								<div>{formik.errors.email}</div>
							) : null}
						</FormGroup>

						<FormGroup as={Col}>
							<Label>Number of people</Label>
							<Input
								name="numberOfPeople"
								{...formik.getFieldProps('numberOfPeople')}
							/>
							{formik.touched.numberOfPeople && formik.errors.numberOfPeople ? (
								<div>{formik.errors.numberOfPeople}</div>
							) : null}
						</FormGroup>

						<FormGroup as={Col}>
							<Label>Phone Number</Label>
							<Input
								name="phoneNumber"
								{...formik.getFieldProps('phoneNumber')}
							/>
							{formik.touched.phoneNumber && formik.errors.phoneNumber ? (
								<div>{formik.errors.phoneNumber}</div>
							) : null}
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

const mapDispatchToProps = (dispatch) => {
	return {
		addBooking: (booking) => dispatch(addBooking(booking)),
	};
};

export default connect(null, mapDispatchToProps)(Booking);
