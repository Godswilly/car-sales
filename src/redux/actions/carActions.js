import actionTypes from '../constants/actionTypes';

export const allCars = (cars) => ({
	type: actionTypes.ALL_CARS,
	payload: cars,
});

export const singleCar = (car) => ({
	type: actionTypes.SINGLE_CAR,
	payload: car,
});
