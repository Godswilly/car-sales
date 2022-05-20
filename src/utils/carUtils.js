import axios from 'axios';
import { allCars } from '../redux/actions/carActions';

export const fetchCars = async (dispatch) => {
	const url = 'https://buy-cars.herokuapp.com/api/v1/cars';

	const response = await axios.get(url);
	dispatch(allCars(response.data.data.cars));
};
