/* eslint-disable camelcase */

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Navigate } from 'react-router';
import authenticate from '../../redux/actions/authenticate';

import { userSignup, SignupFailure } from '../../redux/actions/signup';

const SignUp = () => {
	const dispatch = useDispatch();
	const auth = useSelector((state) => state.authenticate);

	const [person, setPerson] = useState({
		username: '',
		email: '',
		password: '',
		confirmPassword: '',
	});

	const handleChange = (event) => {
		const { name, value } = event.target;
		setPerson({ ...person, [name]: value });
	};

	const { username, email, password, confirmPassword } = person;

	console.log();
	const handleSubmit = (event) => {
		event.preventDefault();
		const url = process.env.REACT_APP_SIGNUP;
		axios
			.post(url, person)
			.then((response) => {
				localStorage.setItem('token', JSON.stringify(response.data));
				dispatch(
					authenticate({
						status: true,
						token: response.data.token,
					})
				);
			})
			.catch(() => {
				dispatch(
					SignupFailure(
						'Username must be longer than 3 and password longer than 6. Try again!'
					)
				);
			});

		if (person.username && person.password && person.password_confirmation) {
			dispatch(
				userSignup({
					...person,
				})
			);
		}
	};

	return (
		<div className='col-4 login'>
			<h2 className='text-center  mb-3'>User SignUp</h2>
			{auth.status && <Navigate to='/' replace />}

			<form onSubmit={handleSubmit}>
				<div className='form-group mb-4'>
					<input
						className='form-control'
						type='text'
						name='username'
						placeholder='name'
						value={username}
						onChange={handleChange}
						required
					/>
				</div>
				<div className='form-group mb-4'>
					<input
						className='form-control'
						type='email'
						name='email'
						placeholder='email'
						value={email}
						onChange={handleChange}
						required
					/>
				</div>

				<div className='form-group mb-4'>
					<input
						className='form-control'
						type='password'
						name='password'
						placeholder='Password'
						value={password}
						onChange={handleChange}
						required
					/>
				</div>

				<div className='form-group mb-4'>
					<input
						className='form-control'
						type='password'
						name='confirmPassword'
						placeholder='Confirm Password '
						value={confirmPassword}
						onChange={handleChange}
						required
					/>
				</div>
				<button type='submit' className='btn btn-primary form-control'>
					SignUp
				</button>
			</form>
		</div>
	);
};

export default SignUp;
