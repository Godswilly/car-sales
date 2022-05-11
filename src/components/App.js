import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../styles/App.css';

function App() {
	return (
		<div className='app'>
			<Router>
				<NavBar />
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route exact path='/Cars' element={<CarList />} />
					<Route exact path='/signup' element={<SignUp />} />
					<Route exact path='/login' element={<Login />} />
					<Route exact path='/logout' element={<Logout />} />
					<Route exact path='About' element={<About />} />
					<Route path='*' element={<Error />} />
				</Routes>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
