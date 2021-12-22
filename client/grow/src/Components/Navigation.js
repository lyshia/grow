import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Navigation = () => {
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
						<Link to='/plants-list' className='link'>
							My Plants
						</Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Navigation