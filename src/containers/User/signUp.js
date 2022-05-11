/* eslint-disable camelcase */

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Navigate } from 'react-router';
import { userSignup, SignupFailure } from '../../redux/actions/signup';
import authenticate from '../../redux/actions/authenticate';

const SignUp = () => {
	const dispatch = useDispatch();
	const signup = useSelector((state) => state.signup);
	const [email, setEmail] = useState('');
	const [person, setPerson] = useState({
		name: '',
		password: '',
		confirmPassword: '',
	});

	useEffect(() => {
		setEmail(window.localStorage.getItem('signUpEmail'));
	}, []);

	const handleChange = (event) => {
		const { name, value } = event.target;
		setPerson({ ...person, [name]: value });
	};

	const { name, password, confirmPassword } = person;

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const url = 'http://localhost:8000/api/v1/users/signup';

			const response = await axios.post(url, { ...person, email });
			localStorage.setItem('token', JSON.stringify(response.data));
			dispatch(
				userSignup({
					status: true,
					token: response.data.token,
					name: response.data.user.name,
				})
			);
		} catch (error) {
			dispatch(SignupFailure(`${error.response.data.message}, Try again`));
		}

		if (person.email && person.password && person.confirmPassword) {
			dispatch(
				userSignup({
					...person,
				})
			);
		}
	};

	if (signup.user.token) {
		const { user } = signup;
		dispatch(
			authenticate({
				status: true,
				token: user.data.token,
				name: user.data.user.name,
			})
		);
	}

	return (
		<div className='col-4 login'>
			<h2 className='text-center  mb-3'>User SignUp</h2>
			{signup.user.token && <Navigate to='/cars' replace />}

			<form onSubmit={handleSubmit}>
				<div className='form-group mb-4'>
					<input
						className='form-control'
						type='text'
						name='name'
						placeholder='Name'
						value={name}
						onChange={handleChange}
						required
					/>
				</div>

				<div className='form-group mb-4'>
					<input
						className='form-control'
						type='email'
						name='email'
						placeholder='Email'
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
					Sign Up
				</button>
			</form>
		</div>
	);
};

export default SignUp;
