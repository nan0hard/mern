import axios from "axios";

import {
	SIGNIN_REQUEST,
	SIGNIN_SUCCESS,
	SIGNIN_FAIL,
	CLEAR_ERRORS,
	SIGNUP_USER_REQUEST,
	SIGNUP_USER_SUCCESS,
	SIGNUP_USER_FAIL,
} from "../constants/userConstants.js";

export const signin = (email, password) => async (dispatch) => {
	try {
		dispatch({ type: SIGNIN_REQUEST });
		const config = { headers: { "Content-Type": "application/json" } };

		const { data } = await axios.post(
			`/api/v1/signin`,
			{ email, password },
			config
		);

		dispatch({ type: SIGNIN_SUCCESS, payload: data.user });
	} catch (error) {
		dispatch({ type: SIGNIN_FAIL, payload: error.response.data.error });
	}
};

export const signup = (userData) => async (dispatch) => {
	try {
		dispatch({ type: SIGNUP_USER_REQUEST });
		const config = { headers: { "Content-Type": "multipart/form-data" } };

		const { data } = await axios.post(`/api/v1/signup`, userData, config);
		dispatch({ type: SIGNUP_USER_SUCCESS, payload: data.user });
	} catch (error) {
		dispatch({ type: SIGNUP_USER_FAIL, payload: error.response.data.error });
	}
};

export const clearErrors = () => async (dispatch) => {
	dispatch({ type: CLEAR_ERRORS });
};
