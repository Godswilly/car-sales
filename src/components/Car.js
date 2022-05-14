import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Car = ({
	id,
	// mileage,
	price,
	// description,
	carModel,
	image,
	carMake,
	// year,
}) => (
	<div key={id} className='cover'>
		<Link to={`/cars/${id}`} className='content'>
			<div>
				<img src={image} alt={carMake} className='img' />
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
	</div>
);

Car.propTypes = {
	id: PropTypes.string.isRequired,
	mileage: PropTypes.number.isRequired,
	image: PropTypes.string.isRequired,
	year: PropTypes.string.isRequired,
	carMake: PropTypes.string.isRequired,
	carModel: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
};

export default Car;
