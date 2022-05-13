import actionTypes from '../constants/actionTypes';

const initialState = {
  token: '',
  username: {},
  status: false,
};

const authenticateReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.AUTHENTICATE:
      return {
        ...payload,
      };

    default:
      return state;
  }
};

export default authenticateReducer;
