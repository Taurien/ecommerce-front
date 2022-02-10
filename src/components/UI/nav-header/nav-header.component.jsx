import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

// Redux
import { userActions } from '../../../store/slices/user.slice';

import classes from './nav-header.styles.module.css';

const NavHeader = () => {
	const dispatch = useDispatch();

	// Handlers
	const onLogoutHandler = () => {
		sessionStorage.removeItem('token');
		dispatch(userActions.logout());
	};

	return (
		<div className={classes.nav}>
			<Link className={classes['title-container']} to="/ecommerce-front">
				Academlo Shop
			</Link>
			<div className={classes.options}>
				<Link className={classes.option} to="ecommerce-front/add-product">
					Add product
				</Link>
				<Link className={classes.option} to="ecommerce-front/cart">
					View cart
				</Link>
				<Link className={classes.option} to="ecommerce-front/orders">
					View orders
				</Link>
				<Link className={classes.option} to="ecommerce-front/profile">
					View profile
				</Link>
				<Link onClick={onLogoutHandler} className={classes.option} to="ecommerce-front/auth">
					Log out
				</Link>
			</div>
		</div>
	);
};

export default NavHeader;
