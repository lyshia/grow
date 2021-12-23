import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Dashboard = (props) => {
	const [user, setUser] = useState({
		name: '',
		zipcode: '',
		zone: '',
	});
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// if (localStorage.getItem('token') === null) {
		// 	window.location.replace('http://localhost:3001/login');
		// } else {
			if (localStorage.token ) {

			fetch('http://localhost:8000/profile-view/' + localStorage.id + '/', {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Authorization: 'Token ' + localStorage.token,
				},
			})
				.then((res) => res.json())
				.then((data) => {
					console.log("dashboard", localStorage.token)
					setUser({
						name: data.name,
						zipcode: data.zipcode,
						zone: data.zone,
					});
					setLoading(false);
				});
		 }
	}, []);

	return (
		<div>
			<Container>
				<h1>Dashboard</h1>
				<h4> hello {user.name}</h4>

				<Link to='/profile'> Edit profile</Link>
			</Container>
		</div>
	);
};

export default Dashboard;
