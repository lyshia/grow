import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/esm/Container';
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

const UserProfile = (props) => {
	const [show, setShow] = useState(false);
	const [inputVal, setInputVal] = useState({id: '', name: '', zipcode: '', zone: '' });

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const handleInputChange = (e) => {
		setInputVal({ ...inputVal, [e.target.name]: e.target.value });
	};

    // Use Hardiness Zone API to get the Grow Zone for your area
    const handleSearch = async (event) => {
		event.preventDefault();
		const getZip = await axios
			.get(
				'https://plant-hardiness-zone.p.rapidapi.com/zipcodes/' +
					inputVal.zipcode,
				{
					headers: {
						'x-rapidapi-host': 'plant-hardiness-zone.p.rapidapi.com',
						'x-rapidapi-key':
							'009b2f2b15mshc466e9a901294ecp184d26jsn17c2728a7505',
					},
				}
			)
			.then(function(response) {
				if (response.data) {
					setInputVal({zone: response.data.hardiness_zone})
				}
			
			})
			.catch(function(error) {
				console.log(error);
			});
		
	};

	const handleSubmit = async  (event) => {
		event.preventDefault();
		
		if (localStorage.getItem("token") !== null) {

			const headers = {
				'Content-Type' : 'application/json',
				Accept: 'application/json',
				Authorization: 'Token ' + localStorage.token,
			};

			const ID = localStorage.getItem('id');

			fetch(`http://localhost:8000/profile-view/${localStorage.id}/`,{
				method: "PATCH",
				headers: headers,
				body: JSON.stringify({
					id: parseInt(ID),
					name: inputVal.name,
					zipcode: parseInt(inputVal.zipcode),
					zone: inputVal.zone
				})
				})
			.then(function(response) {
				if (response) {
                    console.log(response)
				}
			})
			.catch(function(error) {
				console.log(error);
			});

		}

            // const postInfo = await axios
			// .post(`http://localhost:8000/profile-view/${localStorage.id}/`, {
			// 	inputVal,
			// 	headers: headers,
			// })
			// .then(function(response) {
			// 	if (response) {
            //         console.log(response)
			// 	}
			// })
			// .catch(function(error) {
			// 	console.log(error);
			// });
		}
	


	// const [loading, setLoading] = useState(true);

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
					console.log("api call local storage",localStorage.token)
					setInputVal({
						id: localStorage.id,
						name: data.name,
						zipcode: data.zipcode,
						zone: data.zone,
					});
					// setLoading(false);
				});
		 }
	}, []);

	return (
		<Container>
			<h1> User Profile</h1>

			<Button variant='primary' onClick={handleShow}>
				Edit
			</Button>

			<Modal
				show={show}
				onHide={handleClose}
				backdrop='static'
				keyboard={false}>
				<Modal.Header closeButton>
					<Modal.Title>Edit Information</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={handleSubmit}>
						<Form.Group className='mb-3'>
							<Form.Label>Name</Form.Label>
							<Form.Control
								type='text'
								name='name'
								value={inputVal.name}
								onChange={handleInputChange}
							/>
						</Form.Group>

						<Form.Group className='mb-3'>
							<Form.Label>Zip Code</Form.Label>
							<Form.Control
								type='text'
								name='zipcode'
								value={inputVal.zipcode}
								onChange={handleInputChange}
							/>
						</Form.Group>

						<Form.Group className='mb-3'>
							<Form.Label>Grow Zone</Form.Label>
							<Button variant='secondary' type='button' onClick={handleSearch}>
								Search
							</Button>
							<Form.Control
								type='text'
								name='zone'
								value={inputVal.zone}
								onChange={handleInputChange}
							/>
						</Form.Group>

						<Button variant='primary' type='submit'>
							Submit
						</Button>

					</Form>
				</Modal.Body>
			</Modal>
		</Container>
	);
};

export default UserProfile;
