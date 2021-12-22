import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = (props) => {
	const navigate = useNavigate();
	const apiCall = 'http://localhost:8000/sign-in/';

	const [user, setUser] = useState({
		email: '',
		password: '',
	});

	const [redirect, setRedirect] = useState(false);

	const handleChange = (event) => {
		setUser({ ...user, [event.target.name]: event.target.value });
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		const userLogin = await axios
			.post(apiCall, {
				user: user,
				headers: {
					'Content-Type': 'application/json',
				},
			})
			.then(function(response) {
				console.log(response);
				console.log('logged user', userLogin);
				redirect = true;
				navigateTo()
			})
			.catch(function(error) {
				console.log(error);
			});

		
	};

	// fetch(apiCall, {
	// 	method: 'POST',
	// 	headers: {
	// 		'Content-Type': 'application/json',
	// 		'Accept': 'application/json',
	// 	},
	// 	body: JSON.stringify(user),
	// })

	const navigateTo = () => {
		if (redirect) {
			navigate('/grow');
		}
	};

	return (
		<Container>
			<p> Let's get planting</p>

			<Card style={{ width: '20rem' }}>
				<Card.Body>
					<Card.Title>Log in</Card.Title>
					<Form>
						<Form.Group className='mb-3' controlId='formBasicEmail'>
							<Form.Label>Email</Form.Label>
							<Form.Control
								type='email'
								name='email'
								className='user'
								value={user.email}
								placeholder='Enter email'
								onChange={handleChange}
							/>
						</Form.Group>

						<Form.Group className='mb-3' controlId='formBasicPassword'>
							<Form.Label>Password</Form.Label>
							<Form.Control
								type='password'
								name='password'
								className='owner'
								value={user.password}
								placeholder='Password'
								onChange={handleChange}
							/>
						</Form.Group>

						<Form.Group className='mb-3' controlId='formLogin'>
							<Button variant='primary' type='submit' onClick={handleSubmit}>
								Log In
							</Button>
						</Form.Group>
						<Form.Group className='mb-3' controlId='formRegister'>
							<Form.Text className='text-muted'>
								No account? <Link to='/register/'>Register</Link> here
							</Form.Text>
						</Form.Group>
					</Form>
				</Card.Body>
			</Card>
		</Container>
	);
};

export default Login;
