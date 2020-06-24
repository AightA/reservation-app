import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Pages from './pages/Pages';
import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: '',
			lastName: '',
			email: '',
			phoneNumber: 0,
			numberOfPeople: 0,
			diningDate: 0,
			isArrived: false,
			show: false,
		};
	}

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({
			[name]: value,
		});
	};

	handleSubmit = (e) => {
		let reservations = JSON.parse(localStorage.getItem('diner'));
		if (!reservations) {
			reservations = [];
		}
		reservations.push(this.state);
		localStorage.setItem('diner', JSON.stringify(reservations));
		e.preventDefault();
		this.setState({
			firstName: '',
			lastName: '',
			email: '',
			phoneNumber: 0,
			numberOfPeople: 0,
			diningDate: 0,
		});

		alert(`Your reservation details: \n
			Full Name:${this.state.firstName} ${this.state.lastName} \n
			Email: ${this.state.email} \n
			Number Of Guests: ${this.state.numberOfPeople} \n
			Dining Date : ${this.state.diningDate}  \n
			Phone Number: ${this.state.phoneNumber} `);
	};

	render() {
		return (
			<Router>
				<Header />
				<Pages
					handleChange={this.handleChange}
					handleSubmit={this.handleSubmit}
					email={this.state.email}
					lastName={this.state.lastName}
					firstName={this.state.firstName}
					isArrived={this.state.isArrived}
					phoneNumber={this.state.phoneNumber}
					numberOfPeople={this.state.numberOfPeople}
					diningDate={this.state.diningDate}
				/>
			</Router>
		);
	}
}

export default App;
