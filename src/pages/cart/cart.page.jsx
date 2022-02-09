import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Redux
import { fetchCart } from '../../store/actions/cart.actions';

// Componets
import CartItem from '../../components/cart/cart-item/cart-item.component';

import classes from './cart.styles.module.css';

const Cart = () => {
	const dispatch = useDispatch();

	// State (Redux)
	const cartProducts = useSelector(state => state.cart.selectedProducts);

	useEffect(() => {
		dispatch(fetchCart());
	}, [dispatch]);

	return (
		<div className={classes['cart-list']}>
			<h2>Your cart</h2>
			{
				cartProducts?.length !== 0 ?
				cartProducts.map((cartItem, index) => 
					<CartItem
					key={index}
					id={cartItem.id}
					name={cartItem.name}
					price={cartItem.price}
					quantity={cartItem.quantity}
					/>
				)
				: <h3>EMPTY</h3>
			}
		</div>
	);
};

export default Cart;
