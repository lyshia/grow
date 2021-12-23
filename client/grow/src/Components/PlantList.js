import React, {useState, useEffect} from 'react';



const PlantList = (props) => {

	// const apiCall = 'http://localhost:8000/plants/';

	// const [plants, setPlants] = useState([]);

	// const showPlants = plants.map((plant, i) => {
	// // 	return (
	// 		<li className='view-plant' key={i}>
	// 			{plant.name}

	// 			<Link to={'/pokemon/' + poke.name}>Add to List</Link>
	// 		</li>
	// 	);
	// });

	// const makeApiCall = (api) => {
	// 	fetch(api)
	// 		.then((res) => {
	// 			return res.json();
	// 		})
	// 		.then((json) => {
	// 			//console.log(json.results);
	// 			setPlants(json.results);
	// 		});
	// };

	// useEffect(() => {
	// 	const api = apiCall;
	// 	makeApiCall(api);
	// }, []);






    return (
        <div>
            <h1> My Plants </h1>
            {/* <ul> {showPlants} </ul> */}

        </div>
    )
}

export default PlantList