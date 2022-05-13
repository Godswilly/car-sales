import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NavBar = () => {
	const auth = useSelector((state) => state.authenticate);

	return (
		<div data-testid='nav'>
			<nav className=''>
				<div className='container nav'>
					<h5 className=''>
						<Link to='/' className='logo'>
							Home
						</Link>
					</h5>

					{!auth.status && (
						<div className='d-flex'>
							<ul className=''>
								<Link to='/signup' className=' ml-4'>
									Sign Up
								</Link>
							</ul>
							<ul className=''>
								<Link to='/login' className='ml-4'>
									Login
								</Link>
							</ul>
						</div>
					)}

					<ul>
						{auth.status && (
							<Link to='/logout' className='ml-4'>
								Logout
							</Link>
						)}
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
