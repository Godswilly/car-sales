import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../assets/styles/index.css'

const NavBar = () => {
	const auth = useSelector((state) => state.authenticate);

	return (
		<div>
			<nav>
				<div className='bg'>
					<ul>
						<Link to='/' className='nav-link link'>
							ALL CARS
						</Link>
					</ul>

					{!auth.status && (
						<>
							<ul>
								<Link to='/signup' className='nav-link link'>
									SIGN UP
								</Link>
							</ul>
							<ul>
								<Link to='/login' className='nav-link link'>
									LOGIN
								</Link>
							</ul>
							</>
					)}
					{auth.status && (
						<>
							<ul>
								<Link to='/create-car' className='nav-link link'>
									POST CAR
								</Link>
							</ul>
							<ul>
								<Link to='/my-cars' className='nav-link link'>
									MY CARS
								</Link>
							</ul>
						</>
					)}
					<ul>
						{auth.status && (
							<Link to='/logout' className='nav-link link'>
								LOGOUT
							</Link>
						)}
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
