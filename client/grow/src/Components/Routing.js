import React, { useState } from 'react';
import { Route, Routes  } from 'react-router-dom';
import Welcome from './Welcome';
import LandingPage from './LandingPage';
import PlantList from './PlantList';
import Register from './Register';

const Routing = () => {
  	// const [userId, setUserId] = useState({});

	return (
		<Routes>
			
			<Route path='/Grow' element={<LandingPage />} />
			<Route path='/plants-list' element={<PlantList />} />
			<Route path='/Register' element={<Register />} />
			<Route path='/' element={<Welcome />} />
		</Routes>
	);
};

export default Routing;
