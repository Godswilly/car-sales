import actionTypes from '../constants/actionTypes';

const initialState = {
  cars: [],
};

const myCarsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.MY_CARS:
      return { ...state, cars: payload };
    default:
      return state;
  }
};

export default myCarsReducer;
