import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	products: [],
};

const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		getProducts: (state, action) => {
			state.products = action.payload.allProducts;
		},
		addProduct: (state, action) => {
			console.log(action.payload)
			// const { newProduct } = action.payload;

			// state.products = state.products.concat(newProduct);
		},
	},
});

export const productsActions = productsSlice.actions;

export default productsSlice.reducer;
