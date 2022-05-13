import actionTypes from '../constants/actionTypes';

const initialState = {
  user: {},
  error: '',
};

const loginReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.USER_LOGIN:
      return {
        user: payload,
      };

    case actionTypes.USER_LOGIN_FAIL:
      return {
        error: payload,
      };

    default:
      return state;
  }
};

export default loginReducer;
