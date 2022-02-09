import axios from 'axios';
import myInstance from '../../helper/axios.config';

import { cartActions } from '../slices/cart.slice';

export const fetchCart = () => {
	return async dispatch => {
		try {
			// DONE: FETCH DATA FROM API
			const response = await myInstance.get('/orders/cart')
			
			const { cart } = response.data.data

			dispatch(cartActions.getCart( cart ));
		} catch (error) {
			console.log(error);
			dispatch(cartActions.getCart( undefined ));
		}
	};
};

export const addProductToCart = ({product, qty}) => {
	return async dispatch => {
		try {
			const response = await myInstance.post(
				`/orders/add-to-cart`,
				{
					item: {
						id: product.id,
						quantity: qty,
						price: product.price 
					}
				},
			);

			// console.log(response)

			dispatch(cartActions.addProductToCart(
				{
					id: product.id,
					quantity: qty,
					price: product.price 
				}
			));
		} catch (error) {
			console.log(error);
		}
	};
};

export const updateCart = (id, nQuantity) => {
	return async dispatch => {
		try {

			const response = await myInstance.patch(
				`/orders/update-cart`,
				{
					itemId: id, 
    				newQuantity: nQuantity
				}
			);

			const { price, quantity } = response.data.data

			const updatedPrice = +quantity * +price

			dispatch(cartActions.updateProductInCart({ id, updatedPrice, quantity }));
		} catch (error) {
			console.log(error);
		}
	};
};

export const purchaseOrder = (userData) => {
	return async dispatch => {
		try {
			const response = await axios.algo(
				`${process.env.REACT_APP_API_URL}/unaruta`,
				{
					userData
				}
			);

			dispatch(cartActions.algo({ response }));
		} catch (error) {
			console.log(error);
		}
	};
};
