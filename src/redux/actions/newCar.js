import actionTypes from '../constants/actionTypes';

export const newCar = (car) => ({
  type: actionTypes.NEW_CAR,
  payload: car,
});

export const newCarFail = (error) => ({
  type: actionTypes.NEW_CAR_FAIL,
  payload: error,
});
