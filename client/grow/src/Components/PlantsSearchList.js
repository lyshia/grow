import React from "react";
import { Card
 } from "react-bootstrap";
const PlantsSearchlist = (props)=> {

console.log('plants type of', props.plantList);


const plants = props.plantList.map((plant, i) => {
	return (
		<Card className='card' key={i}>
			
			<Card.Body>
				<Card.Title> {plant.name}</Card.Title>
                
			</Card.Body>
		</Card>
	);
});
return <div> 
    
    {plants}
     </div>;
}

export default PlantsSearchlist;