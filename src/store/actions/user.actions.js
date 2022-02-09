import axios from 'axios';
import myInstance from '../../helper/axios.config';

import { userActions } from '../slices/user.slice';

export const login = (email, password) => {
	return async dispatch => {
		try {
			const response = await axios.post(
				`${process.env.REACT_APP_API_URL}/users/login`,
				{
					email,
					password,
				}
			);

			// console.log(response)

			const { user, token } = response.data.data;

			sessionStorage.setItem('token', token);

			dispatch(userActions.login({ userId: user.id }));
			// dispatch(userActions.login({ userId: user.id, token }));
		} catch (error) {
			console.log(error);
		}
	};
};

export const signup = (userData) => {
	return async dispatch => {
		try {
			const {name, email, password} = userData
			// console.log(name, email, password)

			const response = await axios.post(
				`${process.env.REACT_APP_API_URL}/users`,
				{
					name: name,
					email: email,
					password: password
				}
			)

			const { user } = response.data.data;

			// dispatch(userActions.signup(user));
		} catch (error) {
			console.log(error);
		}
	};
};

export const checkUserAuth = token => {
	return dispatch => {
		dispatch(userActions.checkAuth({ userAuth: !!token, token }));
	};
};

export const getuserByid = (id) => {
	return async dispatch => {
		try {
			const response = await myInstance.get(`/users/${id}`);

			const {user} = response.data.data

			dispatch(userActions.profileInfo( user ));
		} catch (error) {
			console.log(error);
		}
	};
};

export const updateUser = (userData) => {
	return async dispatch => {
		try {
			const response = await axios.algo(
				`${process.env.REACT_APP_API_URL}/unaruta`,
				{
					userData
				}
			);

			dispatch(userActions.algo({ response }));
		} catch (error) {
			console.log(error);
		}
	};
};

export const disableUser = (userData) => {
	return async dispatch => {
		try {
			const response = await axios.algo(
				`${process.env.REACT_APP_API_URL}/unaruta`,
				{
					userData
				}
			);

			dispatch(userActions.algo({ response }));
		} catch (error) {
			console.log(error);
		}
	};
};