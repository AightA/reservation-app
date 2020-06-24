import React from 'react';
import { Form, Col, Container, Button } from 'react-bootstrap';

class Booking extends React.Component {
	render() {
		return (
			<Container>
				<h1>Please make your reservation below </h1>
				<Form onSubmit={(e) => this.props.handleSubmit(e)}>
					<Form.Group as={Col} md="4" controlId="validationCustom01">
						<Form.Label>First Name</Form.Label>
						<Form.Control
							required
							name="firstName"
							type="text"
							placeholder="First Name"
							value={this.props.firstName}
							onChange={(e) => this.props.handleChange(e)}
						/>
					</Form.Group>

					<Form.Group as={Col} md="4" controlId="validationCustom02">
						<Form.Label>Last Name</Form.Label>
						<Form.Control
							required
							name="lastName"
							type="text"
							placeholder="Last Name"
							value={this.props.LastName}
							onChange={(e) => this.props.handleChange(e)}
						/>
					</Form.Group>

					<Form.Group as={Col} md="4" controlId="dob">
						<Form.Label>Date of reservation</Form.Label>
						<Form.Control
							name="diningDate"
							type="date"
							placeholder="Date of reservation"
							value={this.props.diningDate}
							onChange={(e) => this.props.handleChange(e)}
						/>
					</Form.Group>

					<Form.Group as={Col} controlId="formContainerEmail">
						<Form.Label>Email address</Form.Label>
						<Form.Control
							name="email"
							type="email"
							placeholder="Enter email"
							value={this.props.email}
							onChange={(e) => this.props.handleChange(e)}
						/>
					</Form.Group>

					<Form.Group as={Col} controlId="formContainerEmail">
						<Form.Label>Number of people</Form.Label>
						<Form.Control
							name="numberOfPeople"
							type="number"
							placeholder="number of people"
							value={this.props.numberOfPeople}
							onChange={(e) => this.props.handleChange(e)}
						/>
					</Form.Group>

					<Form.Group as={Col} controlId="formContainerEmail">
						<Form.Label>Phone Number</Form.Label>
						<Form.Control
							name="phoneNumber"
							type="tel"
							placeholder="Phone Number"
							value={this.props.phoneNumber}
							onChange={(e) => this.props.handleChange(e)}
						/>
					</Form.Group>

					<Button variant="primary" type="submit">
						Submit
					</Button>
				</Form>
			</Container>
		);
	}
}

export default Booking;
