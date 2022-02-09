import axios from 'axios'
import myInstance from '../../helper/axios.config';

import { ordersActions } from '../slices/orders.slice'

export const pastOrders = () => {
	return async dispatch => {
		try {
			const response = await myInstance.get(`/orders/order-list`)

            const { userPastOrders } = response.data.data

            // console.log(userPastOrders)

			dispatch(ordersActions.orderListing( userPastOrders ));
		} catch (error) {
			console.log(error);
			dispatch(ordersActions.orderListing( null ));
		}
	};
};
export const getOrderById = (id) => {
	return async dispatch => {
		try {
			const response = await myInstance.get(`/orders/order-list/${id}`)

			const { order } = response.data.data

			dispatch(ordersActions.getOrderById(order));
		} catch (error) {
			console.log(error);
		}
	};
};
