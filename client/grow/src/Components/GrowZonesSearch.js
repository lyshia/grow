import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
const GrowZonesSearch = (props) => {
	
    console.log("zonesList",props.zonesList)
	const zones = props.zonesList.map((zone, i) => {
        
		return (
			<Card className='card' key={i}>
				<Card.Body>
					<Card.Title> {zone.zone_name}</Card.Title>
					<Card.Subtitle> Lowest temp {zone.lowest_temp}</Card.Subtitle>
					<Card.Text> Average Last Frost: {zone.average_last_frost} <br />
                    Average First Frost: {zone.average_first_frost}</Card.Text>
				</Card.Body>
			</Card>
		);
	});

	return <div>{zones}</div>;
};

export default GrowZonesSearch;
