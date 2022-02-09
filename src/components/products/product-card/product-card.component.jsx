import { useRef } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

// redux
import { addProductToCart } from '../../../store/actions/cart.actions'



// Components
import Button from '../../UI/button/button.component';

import classes from './product-card.styles.module.css';

const ProductCard = ({ product }) => {

	const dispatch = useDispatch();

	const cart = useSelector(state => state.cart.selectedProducts);
	const { userId, token } = useSelector(state => state.user);

	// Refs
	const requestedQtyInputRef = useRef();

	const onAddToCartHandler = () => {
		const qty = +requestedQtyInputRef.current.value;

		if (qty < 0) return;

		// DONE: SEND API REQUEST
		dispatch(addProductToCart({ product, qty }))
	};

	// console.log(product.userId)

	return (
		<div className={classes.card}>

			<p className={classes.card__itemleft}>{product.quantity}</p>
			
			<div className={classes.card__header}>
	

				<div className={classes.titles}>
					<h3 className={classes.product__title}>{product.name}</h3>
					<p className={classes.product__seller}>SOLD BY: {product.user.name}</p>
				</div>

				{
					// DONE: DONT SHOW THIS BUTTON IF THE USER IS THE OWNER OF THE PRODUCT 
					userId !== product.userId && 

					<div className={classes['button-container']}>
						<input
							className={classes['requested-qty-input']}
							type="number"
							ref={requestedQtyInputRef}
						/>
						<Button
							type="button"
							onClick={onAddToCartHandler}
							label="Add to Cart"
						/>
					</div>
				}
			</div>

			<div className={classes.card__body}>
				<p className={classes.product__description}>{product.description}</p>
				<p className={classes.product__price}>${product.price}</p>
			</div>
		</div>
	);
};

export default ProductCard;
