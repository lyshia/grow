import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import PlantsSearchlist from './PlantsSearchList';
import { useNavigate } from 'react-router';

const PlantSearch = (props) => {
	const navigate = useNavigate();
	const [plants, setPlants] = useState([]);

	useEffect(() => {
		if (localStorage.getItem('token') === null) {
            navigate('/')
            } else {
			const headers = {
				'Content-Type': 'application/json',
				Authorization: 'Token ' + localStorage.token,
			};

			fetch('http://localhost:8000/plants/', {
				method: 'GET',
				headers: headers,
			})
				.then((response) => response.json())
				.then((data) => {
					console.log('plant search', data);
					setPlants(data);
				});
		}
	}, []);

	return (
		<Container>
			<h1> Plant Library</h1>
			<PlantsSearchlist plantList={plants} />
		</Container>
	);
};

export default PlantSearch;
