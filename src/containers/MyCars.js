/* eslint-disable camelcase */
import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { myCars } from '../redux/actions/myCars';
import '../assets/styles/index.css';
const MyCars = () => {
	const token = localStorage.getItem('token').slice(1, -1);

	const myCar = useSelector((state) => state.myCars.cars);
	const dispatch = useDispatch();
	const url = 'https://buy-cars.herokuapp.com/api/v1/cars/myCars';
	const myFetch = async () => {
		const response = await axios.get(
			url,
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			},
			{ withCredentials: true }
		);
		dispatch(myCars(response.data.data.myCars));
	};

	useEffect(() => {
		myFetch();
	}, []);

	const removeCar = async (id) => {
		const url = `https://buy-cars.herokuapp.com/api/v1/cars/${id}`;
		await axios.delete(
			url,
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			},
			{ withCredentials: true }
		);
		const ownCars = myCar.filter((car) => car._id !== id);
		dispatch(myCars(ownCars));
	};

	const isEmpty = () => {
		return (
			<div className='text-center'>
				<h3 className='text'>You have not posted cars yet!!</h3>
			</div>
		);
	};

	const isNotEmpty = () => {
		return (
			<>
				<div className='container-fluid'>
					<div className='carlist'>
						{myCar.map((car) => {
							const {
								_id,
								// mileage,
								price,
								// description,
								carModel,
								images,
								carMake,
								// year,
							} = car;
							return (
								<div key={_id} className='cover'>
									<Link to={`/cars/${_id}`} className='content'>
										<div>
											<img src={images} alt={carMake} className='img' />
										</div>
										<div className='box'>
											<p>Make: {carMake}</p>
										</div>
										<div className='box'>
											<p>Model: {carModel}</p>
										</div>
										<div className='box'>
											<p>Price: ${price}</p>
										</div>
									</Link>
									<button
										className='btn btn-danger but'
										onClick={() => removeCar(_id)}
									>
										Delete Car
									</button>
								</div>
							);
						})}
					</div>
				</div>
			</>
		);
	};
	return (
		<>
			<div className='my-prod'>
				{myCar.length === 0 ? isEmpty() : isNotEmpty()}
			</div>
		</>
	);
};

export default MyCars;
