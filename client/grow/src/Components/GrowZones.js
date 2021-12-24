
import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import GrowZoneSearch from './GrowZonesSearch';
import { useNavigate } from 'react-router';

const GrowZones = (props) => {
	const navigate = useNavigate();
	const [zones, setZones] = useState([]);

	useEffect(() => {
		if (localStorage.getItem('token') === null) {
			navigate('/');
		} else {
			const headers = {
				'Content-Type': 'application/json',
				Authorization: 'Token ' + localStorage.token,
			};

			fetch('http://localhost:8000/grow-zone/', {
				method: 'GET',
				headers: headers,
			})
				.then((response) => response.json())
				.then((data) => {
					setZones(data);
				});
		}
	}, []);

	return (
		<Container>
			<h1> Grow Zones</h1>
			<GrowZoneSearch zonesList={zones} />
		</Container>
	);
};

export default GrowZones;
