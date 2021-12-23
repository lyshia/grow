import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router';


const PlantList = (props) => {

	const navigate = useNavigate();
	const [plants, setPlants] = useState([]);

	useEffect(() => {
		if (localStorage.getItem('token') === null) {
			navigate('/');
		} else {
			const headers = {
				'Content-Type': 'application/json',
				Authorization: 'Token ' + localStorage.token,
			};

			fetch('http://localhost:8000/plantslist/', {
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
        <div>
            <h1> My Plants </h1>
            {/* <ul> {showPlants} </ul> */}

        </div>
    )
}

export default PlantList