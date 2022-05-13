import actionTypes from '../constants/actionTypes';

const authenticate = (user) => ({
  type: actionTypes.AUTHENTICATE,
  payload: user,
});

export default authenticate;
