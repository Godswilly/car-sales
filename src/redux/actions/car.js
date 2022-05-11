import actionTypes from '../constants/actionTypes';

export const addCar = (car) => ({
	type: actionTypes.ADD_CAR,
	payload: car,
});

export const removeCar = (car) => ({
	type: actionTypes.REMOVE_CAR,
	payload: car,
});

export const allCars = (cars) => ({
	type: actionTypes.ALL_CARS,
	payload: cars,
});

export const singleCar = (car) => ({
	type: actionTypes.SINGLE_CAR,
	payload: car,
});
