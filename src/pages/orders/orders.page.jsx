import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Redux
import { pastOrders } from '../../store/actions/order.actions';

// Components
import OrderItem from '../../components/orders/order-item/order-item.component';

import classes from './orders.styles.module.css';

const Orders = () => {
	const dispatch = useDispatch();

	// State (Redux)
	const orders = useSelector(state => state.order.orders);

	useEffect(() => {
		dispatch(pastOrders());
	}, [dispatch]);


	return (
		<div className={classes['orders-list']}>
			{
				orders ?
					orders.map(item => 
						<OrderItem
							key={item.id}
							date={item.date}
							totalPrice={item.totalPrice}
							id={item.id}
						/>
					)
					: <p>EMPTY</p>
			}
		</div>
	);
};

export default Orders;
