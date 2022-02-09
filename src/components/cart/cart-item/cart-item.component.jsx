import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import { updateCart } from '../../../store/actions/cart.actions'

// Components
import Button from '../../UI/button/button.component';

import classes from './cart-item.styles.module.css';

const CartItem = (product) => {
	const dispatch = useDispatch();

	const { name, quantity, price } = product;

	// State
	const [updateQty, setUpdateQty] = useState(quantity);

	// Refs
	const updateQtyInputRef = useRef();

	// Handlers
	const onUpdateInputChangeHandler = () => {
		const updateQty = +updateQtyInputRef.current.value;

		if (updateQty < 0) return;

		setUpdateQty(updateQty);
	};

	const onUpdateProductHandler = () => {
		// TODO: 1/2 SEND API REQUEST AND UPDATE STATE chechk cart.slice
		const id = product.id
		const quantity = updateQtyInputRef.current.value
		dispatch(updateCart(id, quantity))
	};

	return (
		<div className={classes['cart-item']}>
			<div className={classes['cart-item__product']}>
				<h3>{name}</h3>
				<p>Quantity: {quantity}</p>
				<p>${parseInt(price).toFixed(2)}</p>
			</div>
			<div className={classes['cart-item__actions']}>
				<input
					type="number"
					value={updateQty}
					onChange={onUpdateInputChangeHandler}
					ref={updateQtyInputRef}
					className={classes['update-qty-input']}
				/>
				<Button type="button" onClick={onUpdateProductHandler} label="Update" />
				<Button type="button" label="Remove" />
			</div>
		</div>
	);
};

export default CartItem;
