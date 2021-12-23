import React, { useState, useEffect } from 'react';
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

	const [errors, setErrors] = useState(false);
	const [loading, setLoading] = useState(true);

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
					'Authorization': 'Token ' + localStorage.token
				},
			})
			.then(function(response) {
				if (response.data) {
					localStorage.clear()
					localStorage.setItem("token" , response.data.user.token)
					localStorage.setItem("id", response.data.user.id)
				}
				setRedirect(true);
				navigateTo();
			})
			.catch(function(error) {
				setUser({ email: '', password: '' });
				setErrors(true);
				localStorage.clear();
				console.log(error);
			});
	};

	const navigateTo = () => {
		if (redirect) {
			navigate('/dashboard');
		}
	};

	return (
		<Container>
			<p> Let's get planting</p>
			<Card style={{ width: '20rem' }}>
				<Card.Body>
					<Card.Title>Log in</Card.Title>
					{errors === true && (
						<Form.Text> Cannot log in with credentials </Form.Text>
					)}
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
