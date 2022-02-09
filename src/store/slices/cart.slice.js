import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	total: 0,
	selectedProducts: [],
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		getCart: (state, action) => {
			if (!action.payload) {
				state.total = 0
				state.selectedProducts = []
				return
			}
			state.total = action.payload.totalPrice
			state.selectedProducts = action.payload.products
		},
		addProductToCart: (state, action) => {
			state.selectedProducts = [...state.selectedProducts, action.payload]
		},
		updateProductInCart: (state, action) => {
			const toIncreaseIndex = state.selectedProducts.findIndex(item => item.id === action.payload.id)
			state.selectedProducts[toIncreaseIndex].quantity = +action.payload.quantity
			// state.selectedProducts[toIncreaseIndex].price = action.payload.price
		},
	},
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
