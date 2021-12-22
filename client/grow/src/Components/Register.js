import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

const Register = () => {
	const navigate = useNavigate();

	const apiCall = 'http://localhost:8000/sign-up/';

	// set information for the new uesr
	const [user, setUser] = useState({
		email: '',
		password: '',
	});

	//update the user's information
	const handleChange = (event) => {
		setUser({ ...user, [event.target.name]: event.target.value });
	};

	// submit registration
	const handleSubmit = async (event) => {
		event.preventDefault();

		const newUser = await axios
			.post(apiCall, {
				user: user,
			})
			.then(function(response) {
				console.log(response);
			})
			.catch(function(error) {
				console.log(error);
			});

		// if they are an owner
		// fetch(apiCall, {
		// 	method: 'POST',
		// 	headers: {
		// 		'Content-Type': 'application/json',
		// 	},
		// 	body: JSON.stringify(user),
		// })
		// .then((res) => res.json())
		// .then((data) => {
		// 	console.log('new owner created');
		// });
		navigate('/');
	};

	return (
		<div>
			<h1> Registration</h1>
			<Form onSubmit={handleSubmit}>
				<Form.Group className='mb-3' controlId='formEmail'>
					<Form.Label>Email address</Form.Label>
					<Form.Control
						type='email'
						placeholder='Enter email'
						name='email'
						value={user.email}
						onChange={handleChange}
					/>
					<Form.Text className='text-muted'>
						We'll never share your email with anyone else.
					</Form.Text>
				</Form.Group>

				<Form.Group className='mb-3' controlId='formBasicPassword'>
					<Form.Label>Password</Form.Label>
					<Form.Control
						type='password'
						placeholder='Password'
						name='password'
						value={user.password}
						onChange={handleChange}
					/>
				</Form.Group>

				<Button variant='primary' type='submit'>
					Submit
				</Button>
			</Form>
		</div>
	);
};

export default Register;
