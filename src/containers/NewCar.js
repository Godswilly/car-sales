/* eslint-disable camelcase */

import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { newCar, newCarFail } from '../redux/actions/newCar';

const NewCar = () => {
	const yearss = new Date().getFullYear();
	const years = Array.from(new Array(25), (val, index) => -24 + index + yearss);

	const token = localStorage.getItem('token').slice(1, -1);
	const dispatch = useDispatch();
	const [car, setCar] = useState({
		carMake: '',
		carModel: '',
		price: '',
		description: '',
		mileage: '',
		year: '',
	});

	const [images, setImages] = useState(null);

	const handleImageChange = (e) => {
		setImages(e.target.files[0]);
	};
	const handleChange = (event) => {
		const { name, value } = event.target;

		setCar({ ...car, [name]: value });
	};

	const { carMake, carModel, price, description, mileage, year } = car;

	const handleSubmit = async (e) => {
		e.preventDefault();
		const dataForm = new FormData();
		dataForm.append('carMake', carMake);
		dataForm.append('carModel', carModel);
		dataForm.append('price', price);
		dataForm.append('description', description);
		dataForm.append('mileage', mileage);
		dataForm.append('images', images);
		dataForm.append('year', year);
		dataForm.append('upload_preset', 'kzq3yl0f');

		try {
			const url = 'https://buy-cars.herokuapp.com/api/v1/cars';
			const response = await axios.post(url, dataForm, {
				headers: {
					'Content-Type': 'multipart/form-data',
					Authorization: `Bearer ${token}`,
				},
			});
			dispatch(newCar(response));
			setCar({
				carMake: '',
				carModel: '',
				price: '',
				description: '',
				mileage: '',
				year: '',
			});
			setImages({ images: '' });
		} catch (error) {
			dispatch(newCarFail(error.response.data));
		}
	};
	const options = [
		'BMW',
		'Mercedes Benz',
		'Audi',
		'Toyota',
		'Innoson',
		'Tesla',
		'Hondai',
	];
	return (
		<>
			<div className='col-4 login'>
				<h2 className='text-center  mb-4'>Create Car</h2>
				<form onSubmit={handleSubmit}>
					<div className='form-group mb-4'>
						<select
							onChange={handleChange}
							name='carMake'
							placeholder='Car Make'
							defaultValue='DEFAULT'
							className='options'
						>
							<option value='DEFAULT' disabled>
								Choose Car Make
							</option>
							{options.map((option) => (
								<option name='carMake' value={option} key={option}>
									{option}
								</option>
							))}
						</select>
					</div>

					<div className='form-group mb-4'>
						<input
							className='form-control'
							type='text'
							name='carModel'
							placeholder='Car model'
							value={carModel}
							onChange={handleChange}
							required
						/>
					</div>

					<div className='form-group mb-4'>
						<input
							className='form-control'
							type='number'
							name='price'
							placeholder='Price'
							value={price}
							onChange={handleChange}
							required
						/>
					</div>

					<div className='form-group mb-4'>
						<input
							className='form-control'
							type='text'
							name='description'
							placeholder='Description'
							value={description}
							onChange={handleChange}
							required
						/>
					</div>

					<div className='form-group mb-4'>
						<input
							className='form-control'
							type='file'
							onChange={handleImageChange}
							required
						/>
					</div>

					<div className='form-group mb-4'>
						<input
							className='form-control'
							type='number'
							name='mileage'
							placeholder='Mileage'
							value={mileage}
							onChange={handleChange}
							required
						/>
					</div>

					<div className='form-group mb-4'>
						<select
							onChange={handleChange}
							name='year'
							placeholder='year'
							defaultValue='DEFAULT'
							className='options'
						>
							<option value='DEFAULT' disabled>
								Year Of manufacture
							</option>
							{years.map((year, index) => {
								return (
									<option key={`year${100 - index}`} value={year}>
										{year}
									</option>
								);
							})}
						</select>
					</div>

					<button type='submit' className='btn btn-primary form-control mb-5'>
						Post Car
					</button>
				</form>
			</div>
		</>
	);
};

export default NewCar;
