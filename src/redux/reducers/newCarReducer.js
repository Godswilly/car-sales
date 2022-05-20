import actionTypes from '../constants/actionTypes';

const initialState = {
  error: '',
};

const newCarReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.NEW_CAR:
      return {
        product: payload,
      };

    case actionTypes.NEW_CAR_FAIL:
      return {
        error: payload,
      };

    default:
      return state;
  }
};

export default newCarReducer;
