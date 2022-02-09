import { useEffect, useState } from 'react';
import axios from 'axios';

// Components
import Modal from '../../UI/modal/modal.component';

import classes from './order-details-modal.styles.module.css';

const OrderDetailsModal = ({ onClose, id, data}) => {

	const { date, totalPrice, productsInOrders } = data
	
	// State
	const [orderProducts, setOrderProducts] = useState([]);

	return (
		<Modal onClick={onClose}>
			<div className={classes['details__header']}>
				<h2>Your order was for a total: ${totalPrice}</h2>
			</div>

			<div className={classes['details__items']}>
					{
						productsInOrders &&
							productsInOrders.map((el, index) => 
							<div key={index} className={classes.item}>
								<p className={classes['item__name']}>{el.product.name}</p>
								<p className={classes['item__qty']}>{el.quantity}</p>
								<p className={classes['item__price']}>{el.price}</p>
							</div>
						)
					}
			</div>
		</Modal>
	);
};

export default OrderDetailsModal;
