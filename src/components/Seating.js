import React from 'react';
import { Table } from 'react-bootstrap';

class Seating extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isArrived: false,
			seated: false,
			data: JSON.parse(localStorage.getItem('diner')) || [],
		};
	}

	handleChange = (e) => {
		let data = this.state.data.slice();

		let updatedItemIndex = e.target.id;
		let updatedItem = data[updatedItemIndex];
		updatedItem.isArrived = e.target.checked;
		this.setState({
			data: data,
		});
		localStorage.setItem('diner', JSON.stringify(data));
	};

	handleSeated = (e) => {
		let data = this.state.data.slice();

		let updatedItemIndex = e.target.id;
		let updatedItem = data[updatedItemIndex];
		updatedItem.seated = e.target.checked;
		this.setState({
			data: data,
		});
		localStorage.setItem('diner', JSON.stringify(data));
		console.log(this.state.data);
	};

	getData = () => {
		let listDiner = this.state.data.map((item, index) => {
			const {
				firstName,
				lastName,
				email,
				phoneNumber,
				numberOfPeople,
				diningDate,
				isArrived,
				seated,
			} = item;
			return (
				<tr key={index}>
					<td>{index + 1}</td>
					<td>{firstName}</td>
					<td>{lastName}</td>
					<td>{email}</td>
					<td>{phoneNumber}</td>
					<td>{numberOfPeople}</td>
					<td>{diningDate}</td>
					<td>
						<input
							id={index}
							// name="isArrived"
							type="checkbox"
							checked={isArrived}
							disabled={isArrived}
							onChange={this.handleChange}
						/>
					</td>
					<td>
						<input
							id={index}
							// name="seated"
							type="checkbox"
							checked={seated}
							disabled={!isArrived}
							onChange={this.handleSeated}
						/>
					</td>
				</tr>
			);
		});
		return listDiner;
	};

	render() {
		return (
			<div>
				<Table responsive="sm" striped bordered hover size="md">
					<thead>
						<tr>
							<th style={{ backgroundColor: 'grey' }}>#</th>
							<th style={{ backgroundColor: 'grey' }}>First name</th>
							<th style={{ backgroundColor: 'grey' }}>Last name</th>
							<th style={{ backgroundColor: 'grey' }}>Email</th>
							<th style={{ backgroundColor: 'grey' }}>Phone Number</th>
							<th style={{ backgroundColor: 'grey' }}>Guests</th>
							<th style={{ backgroundColor: 'grey' }}>Dining Date</th>
							<th style={{ backgroundColor: 'grey' }}>Arrived</th>
							<th style={{ backgroundColor: 'grey' }}>Seated</th>
						</tr>
					</thead>
					<tbody>{this.getData()}</tbody>
				</Table>
			</div>
		);
	}
}
export default Seating;
