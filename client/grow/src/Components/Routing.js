import React, { useState } from 'react';
import { Route, Routes  } from 'react-router-dom';
import Welcome from './Welcome';
import PlantList from './PlantList';
import Register from './Register';
import Login from './Login';
import Dashboard from './Dashboard';
import UserProfile from './UserProfile';
import PlantSearch from './PlantSearch';
import GrowZones from './GrowZones';

const Routing = () => {

	return (
		<Routes>
			<Route path='/dashboard' element={<Dashboard />} />
			<Route path='/plants-list' element={<PlantList />} />
			<Route path='/register' element={<Register />} />
			<Route path='/login' element={<Login  />} />
			<Route path='/profile' element={ <UserProfile /> } />
			<Route path='/plants' element={<PlantSearch />} />
			<Route path='/grow-zones' element={<GrowZones />} />
			<Route path='/' element={<Welcome  />} />
		</Routes>
	);
};

export default Routing;
