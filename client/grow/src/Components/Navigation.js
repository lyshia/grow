import React, { Fragment, useState, useEffect } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = (props) => {
	const [isAuth, setIsAuth] = useState(false);

	useEffect(() => {
		if (localStorage.getItem('token') !== null) {
			setIsAuth(true);
		}
	}, []);

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
						{isAuth === true ? (
							<Fragment>
								<Link Link to='/plants-list' className='link'>
									My Plants
								</Link>
								<Link Link to='/dashboard' className='dashboard'>
									Dashboard
								</Link>
								<Link Link to='/plants' className='plants'>
									Plants
								</Link>
							</Fragment>
						) : (
							<Fragment>
								<Link Link to='/login' className='login'>
									Login
								</Link>
								<Link Link to='/register' className='register'>
									Register
								</Link>
							</Fragment>
						)}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Navigation;
