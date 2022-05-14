import axios from 'axios';
import { allCars } from '../redux/actions/carActions';

export const fetchCars = async (dispatch) => {
	const url = process.env.REACT_APP_ALL_CARS;

	const response = await axios.get(url);
	dispatch(allCars(response.data.data.cars));
};
