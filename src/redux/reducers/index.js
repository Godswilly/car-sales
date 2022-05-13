import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import carReducer from './carReducer';
import signupReducer from './signupReducer';
import loginReducer from './loginReducer';
import detailReducer from './detailReducer';
import authenticateReducer from './authenticateReducer';
import myCarsReducer from './myCarsReducer';
import newCarReducer from './newCarReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cars', 'login'],
};

const rootReducer = combineReducers({
  cars: carReducer,
  car: detailReducer,
  signup: signupReducer,
  authenticate: authenticateReducer,
  login: loginReducer,
  myCars: myCarsReducer,
  newCar: newCarReducer,
});

export default persistReducer(persistConfig, rootReducer);
