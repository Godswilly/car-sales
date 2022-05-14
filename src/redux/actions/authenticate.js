import actionTypes from '../constants/actionTypes';

const authenticate = (token) => ({
  type: actionTypes.AUTHENTICATE,
  payload: token,
});

export default authenticate;
