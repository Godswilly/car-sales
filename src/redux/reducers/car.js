import actionTypes from '../constants/actionTypes';

const initialState = {
	cars: [],
};

const carReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case actionTypes.ALL_CARS:
			return { ...state, cars: payload };
		default:
			return state;
	}
};

export default carReducer;
