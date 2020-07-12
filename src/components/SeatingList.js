import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';
import { Input } from 'reactstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const SeatingList = ({ bookings }) => {
	const formik = useFormik({
		initialValues: {
			isArrived: false,
			seated: false,
		},

		validationSchema: Yup.object({
			isArrived: Yup.string().required('Required'),
			seated: Yup.string().required('Required'),
		}),
	});
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
				<tbody>
					{bookings.map((item, index) => {
						const {
							firstName,
							lastName,
							email,
							phoneNumber,
							numberOfPeople,
							diningDate,
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
									<Input
										name="isArrived"
										id={index}
										type="checkbox"
										{...formik.getFieldProps('isArrived')}
									/>
									{formik.touched.isArrived && formik.errors.isArrived ? (
										<div>{formik.errors.isArrived}</div>
									) : null}
								</td>
								<td>
									<Input
										name="seated"
										id={index}
										type="checkbox"
										{...formik.getFieldProps('seated')}
									/>
									{formik.touched.seated && formik.errors.seated ? (
										<div>{formik.errors.seated}</div>
									) : null}
								</td>
							</tr>
						);
					})}
				</tbody>
			</Table>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		bookings: state.bookings,
	};
};

export default connect(mapStateToProps)(SeatingList);
