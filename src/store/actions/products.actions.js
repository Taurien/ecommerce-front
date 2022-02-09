import axios from 'axios';
import myInstance from '../../helper/axios.config';

import { productsActions } from '../slices/products.slice';

export const fetchProducts = () => {
	return async dispatch => {
		try {
			
			const response = await myInstance.get('/products')

			// console.log(response)

			const { allProducts } = response.data.data;

			// console.log(allProducts);

			dispatch(productsActions.getProducts({ allProducts }));
		} catch (error) {
			// console.log(error);
		}
	};
};

export const createProduct = (dataProduct) => {
	return async dispatch => {
		try {
			
			const response = await myInstance.post(
				`/products`,
				{
					dataProduct
				}
			);
			
			console.log(response)
			const { newProduct } = response.data.data
			console.log(newProduct)

			// dispatch(productsActions.addProduct( newProduct ));
		} catch (error) {
			console.log(error);
		}
	};
};

export const userProducts = (userData) => {
	return async dispatch => {
		try {
			const response = await axios.algo(
				`${process.env.REACT_APP_API_URL}/unaruta`,
				{
					userData
				}
			);

			dispatch(productsActions.algo({ response }));
		} catch (error) {
			console.log(error);
		}
	};
};

export const productDetails = (userData) => {
	return async dispatch => {
		try {
			const response = await axios.algo(
				`${process.env.REACT_APP_API_URL}/unaruta`,
				{
					userData
				}
			);

			dispatch(productsActions.algo({ response }));
		} catch (error) {
			console.log(error);
		}
	};
};
export const updateProduct = (userData) => {
	return async dispatch => {
		try {
			const response = await axios.algo(
				`${process.env.REACT_APP_API_URL}/unaruta`,
				{
					userData
				}
			);

			dispatch(productsActions.algo({ response }));
		} catch (error) {
			console.log(error);
		}
	};
};
export const disableProduct = (userData) => {
	return async dispatch => {
		try {
			const response = await axios.algo(
				`${process.env.REACT_APP_API_URL}/unaruta`,
				{
					userData
				}
			);

			dispatch(productsActions.algo({ response }));
		} catch (error) {
			console.log(error);
		}
	};
};

