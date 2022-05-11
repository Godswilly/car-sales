import { combineReducers } from 'redux';
import carReducer from './carReducer';
import detailReducer from './detailReducer';
import signupReducer from './signupReducer';
import authenticateReducer from './authenticate';
import loginReducer from './loginReducer';

const rootReducer = combineReducers({
	car: carReducer,
	detail: detailReducer,
	signup: signupReducer,
	authenticate: authenticateReducer,
	login: loginReducer,
});

export default rootReducer;
