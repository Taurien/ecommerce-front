// Reducers
import userReducer from './slices/user.slice';
import productsReducer from './slices/products.slice';
import cartReducer from './slices/cart.slice';
import orderReducer from './slices/orders.slice';

const rootReducer = {
	user: userReducer,
	products: productsReducer,
	cart: cartReducer,
	order: orderReducer
};

export default rootReducer;
