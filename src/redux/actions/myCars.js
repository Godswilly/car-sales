import actionTypes from '../constants/actionTypes';

export const myCars = (cars) => ({
  type: actionTypes.MY_CARS,
  payload: cars,
});

export const singleCar = (car) => ({
  type: actionTypes.SINGLE_CAR,
  payload: car,
});
