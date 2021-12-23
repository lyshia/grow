import React, { useState, useEffect } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';

const Dashboard = (props) => {
	const navigate = useNavigate();
	const [user, setUser] = useState({
		name: '',
		zipcode: '',
		zone: '',
	});

	const [redirect, setRedirect] = useState(false);

	const headers = {
		'Content-Type': 'application/json',
		Authorization: 'Token ' + localStorage.token,
	};

	useEffect(() => {
		// if (localStorage.getItem('token') === null) {
		// 	window.location.replace('http://localhost:3001/login');
		// } else {
		if (localStorage.token) {
			fetch('http://localhost:8000/profile-view/' + localStorage.id + '/', {
				method: 'GET',
				headers: headers,
			})
				.then((res) => res.json())
				.then((data) => {
					console.log('dashboard', localStorage.token);
					setUser({
						name: data.name,
						zipcode: data.zipcode,
						zone: data.zone,
					});
				});
		}
	}, []);

	const handleLogout = (event) => {
		event.preventDefault();

		if (localStorage.token) {
			fetch('http://localhost:8000/sign-out/', {
				method: 'POST',
				headers: headers,
			})
				.then((res) => res.json())
				.then((data) => {
					console.log(data);
					localStorage.clear();
					navigate('/');
				});
		}
	};

	return (
		<div>
			<Container>
				<h1>Dashboard</h1>
				<h4> hello {user.name}</h4>

				<Link to='/profile' className='btn btn-primary'> Edit profile</Link>

				<Button onClick={handleLogout}> Logout</Button>
			</Container>
		</div>
	);
};

export default Dashboard;
