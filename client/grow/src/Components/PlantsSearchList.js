import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
const PlantsSearchlist = (props) => {

	const handleClick = (event, index, name) => {
		event.preventDefault();

		let plant = index;
		let user = localStorage.id;

		if (localStorage.getItem('token') !== null) {
			const headers = {
				'Content-Type': 'application/json',
				Accept: 'application/json',
				Authorization: 'Token ' + localStorage.token,
			};

			const ID = localStorage.getItem('id');

			fetch(`http://localhost:8000/plants-list/`, {
				method: 'POST',
				headers: headers,
				body: JSON.stringify({
					user: user,
					plant: plant,
				}),
			})
				.then(function(response) {
					if (response) {
						console.log(response);
					}
				})
				.catch(function(error) {
					console.log(error);
				});
		}
    }

		const plants = props.plantList.map((plant, i) => {
			return (
				<Card className='card' key={i}>
					<Card.Body>
						<Card.Title> {plant.name}</Card.Title>
						<Card.Text>
							<Row>Sow before last frost:  {plant.days_to_sow} days </Row>
							<Row>Sow indoors: {(plant.start_indoor).toString()}</Row>
						</Card.Text>
						<Card.Text onClick={(e) => handleClick(e, i, plant.name)}>
							Add to List
						</Card.Text>
					</Card.Body>
				</Card>
			);
		});
	
	return <div>{plants}</div>;
};

export default PlantsSearchlist;
