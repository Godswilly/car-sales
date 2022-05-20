/* eslint-disable camelcase */

import axios from 'axios';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { singleCar } from '../redux/actions/carActions';

const CarDetails = () => {
	const details = useSelector((state) => state.car.details);
	const dispatch = useDispatch();
	const { id } = useParams();
	const url = `https://buy-cars.herokuapp.com/api/v1/cars/${id}`;

	const fetchDetails = async () => {
		const response = await axios.get(url, { mode: 'cors' });
		dispatch(singleCar(response.data.data.car));
	};

	useEffect(() => {
		fetchDetails();
	}, [id]);
	const { mileage, price, description, carModel, images, carMake, year } =
		details;
	return (
		<div className='container detail'>
			<div>
				<img src={images} alt={carMake} className='img-full' />
			</div>
			<div className='full'>
				<p>Make: {carMake}</p>
			</div>
			<div className='full'>
				<p>Model: {carModel}</p>
			</div>
			<div className='full'>
				<p>Price: ${price}</p>
			</div>
			<div className='full'>
				<p>Mileage:	{mileage}</p>
			</div>
			<div className='full'>
				<p>Year: {year}</p>
			</div>
			<div className='full'>
				<p>Description: {description}</p>
			</div>
		</div>
	);
};

export default CarDetails;
