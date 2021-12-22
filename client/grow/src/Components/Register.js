import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import './styles/register.css'

const Register = () => {
	const navigate = useNavigate();

	const apiCall = 'http://localhost:8000/sign-up/';

    // set message for newly created account 
    const [active, setActive] = useState(false);

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
                console.log("New user created")
                setActive(true);
                setNavigation()
			})
			.catch(function(error) {
				console.log(error);
			});	
	};

    // allow the creation message to show up, and then redirect to home page to log in 
    const setNavigation = () =>(
     setTimeout(() => {
			navigate('/');
		}, 5000)
    )


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
				<Form.Group	className={ active ? 'mb-3 review-text-visible' : 'mb-3 review-text-invisible'
					}
					controlId='userCreated'>
					<Form.Label>New user created. Redirecting to Login </Form.Label>			
			
				</Form.Group>
			</Form>
		</div>
	);
};

export default Register;
