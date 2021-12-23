import axios from "axios";
import React, {useState, useEffect} from "react";
import { Container } from "react-bootstrap";
import PlantsSearchlist from "./PlantsSearchList";


const PlantSearch = (props) => {

        const [plants, setPlants] = useState([])

        console.log("plants", plants)

        // if (plants) {
        //     plants.map( (plant, index) => {
        //         return(
        //             <li> {plant.name} </li>
        //         )
        //     })
        // }

		useEffect(() => {
            const headers = {
						'Content-Type': 'application/json',
						Authorization: 'Token ' + localStorage.token,
				}

            fetch('http://localhost:8000/plants/', {
                method: "GET",
                headers: headers
            })
							.then((response) => response.json())
							.then((data) => {
                                console.log('plant search', data);
								setPlants(data);
                               
							});

			//  axios.get(http://localhost:8000/plants/'', {
			// 		headers:headers
			// 	})
			// 		.then((response) => {
            //             const plant = response.data
            //             console.log("plant", plant)
            //             console.log("data", response.data)
			// 			setPlants(response.data)
			// 		});
			
		}, []);

    return (
        <Container>
            <h1> Plant Library</h1>
            <PlantsSearchlist plantList={plants} />
        </Container>
    )
}

export default PlantSearch