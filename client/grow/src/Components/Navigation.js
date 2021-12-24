import React, { Fragment, useState, useEffect } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = (props) => {


	return (
		<Navbar bg='dark' variant='dark' expand='lg' className='gradient'>
			<Container>
				<Navbar.Brand href='/'>Grow </Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='me-auto'>
						<Link to='/' className='link'>
							Home
						</Link>
						<Link Link to='/plants-list' className='link'>
							My Plants
						</Link>
						<Link Link to='/dashboard' className='link'>
							Dashboard
						</Link>
						<Link Link to='/plants' className='link'>
							Plant Library
						</Link>
						<Link Link to='/grow-zones' className='link'>
							Grow Zones
						</Link>
						<Link Link to='/login' className='link'>
							Login
						</Link>
						<Link Link to='/register' className='link'>
							Register
						</Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Navigation;
