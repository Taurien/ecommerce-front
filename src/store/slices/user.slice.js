import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	userId: null,
	isAuth: false,
	userInfo: {}
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		login: (state, action) => {
			state.isAuth = true;
			state.userId = action.payload.userId;
		},
		logout: state => {
			state.isAuth = false;
		},
		signup: (state, action) => {
			state.userId = action.payload.id
			state.userInfo = action.payload

		},
		checkAuth: (state, action) => {
			state.isAuth = action.payload.userAuth;
		},
		profileInfo: (state, action) => {
			state.userInfo = action.payload
		}
	},
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
