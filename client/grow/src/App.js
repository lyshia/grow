import './App.css';
import React from 'react';
import Navigation from './Components/Navigation';
import Routing from './Components/Routing';

function App() {

  return (
		<div className='App'>
			<header>
				<Navigation />
			</header>
			<main>
				<Routing />
			</main>
			<footer></footer>
		</div>
	);
}

export default App;
