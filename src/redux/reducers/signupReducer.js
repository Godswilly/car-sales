import actionTypes from '../constants/actionTypes';

const initialState = {
  user: {},
  error: '',
  loggedIn: false,
};

const signupReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.USER_SIGNUP:
      return {
        user: payload,
        error: null,
        loggedIn: true,
      };

    case actionTypes.USER_SIGNUP_FAIL:
      return {
        error: payload,
      };

    default:
      return state;
  }
};

export default signupReducer;
