import {
	SIGNIN_REQUEST,
	SIGNIN_SUCCESS,
	SIGNIN_FAIL,
	SIGNUP_USER_REQUEST,
	SIGNUP_USER_SUCCESS,
	SIGNUP_USER_FAIL,
	CLEAR_ERRORS,
} from "../constants/userConstants.js";

export const userReducer = (state = { user: {} }, action) => {
	switch (action.type) {
		case SIGNIN_REQUEST:
		case SIGNUP_USER_REQUEST:
			return {
				loading: true,
				isAuthenticated: false,
			};
		case SIGNIN_SUCCESS:
		case SIGNUP_USER_SUCCESS:
			return {
				...state,
				loading: false,
				isAuthenticated: true,
				user: action.payload,
			};
		case SIGNIN_FAIL:
		case SIGNUP_USER_FAIL:
			return {
				...state,
				loading: false,
				isAuthenticated: false,
				user: null,
				error: action.payload,
			};
		case CLEAR_ERRORS:
			return {
				...state,
				error: null,
			};
		default:
			return state;
	}
};
