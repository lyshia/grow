import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Login from './Login';

const Welcome = (props) => {

	return (
		<Container>
			<h1> Welcome to Grow! </h1>
            <Login />
    </Container>

			
	);
};

export default Welcome;
