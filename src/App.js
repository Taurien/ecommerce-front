import { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Pages
import Home from './pages/home/home.page';
import Auth from './pages/auth/auth.page';
import AddProduct from './pages/add-product/add-product.page';
import Cart from './pages/cart/cart.page';
import Orders from './pages/orders/orders.page';
import Profile from './pages/profile/profile.page';
import Sales from './pages/sales/sales.page';

// Components
import NavHeader from './components/UI/nav-header/nav-header.component';

import './App.css';

const App = () => {
	const navigate = useNavigate();

	// State (Redux)
	const isAuth = useSelector(state => state.user.isAuth);

	// Effects
	useEffect(() => {
		if (!isAuth) navigate('auth');
		// if (!isAuth) navigate('ecommerce-front/auth');
	}, [isAuth, navigate]);

	// Handlers
	const signupHandler = (email, password) => {
		console.log('Signin user in!');
	};

	return (
		<div className="app">
			{isAuth && <NavHeader />}
			{/* https://taurien.github.io/ecommerce-front/ */}
			<Routes>
				<Route path='/ecommerce-front'>
					{/* <Route index path="/ecommerce-front" element={<Home />} /> */}
					{/* <Route path="ecommerce-front/auth" element={<Auth onSignup={signupHandler} />} /> */}
					{/* <Route path="ecommerce-front/add-product" element={<AddProduct />} /> */}
					{/* <Route path="ecommerce-front/cart" element={<Cart />} /> */}
					{/* <Route path="ecommerce-front/orders" element={<Orders />} /> */}
					{/* <Route path="ecommerce-front/profile" element={<Profile />} /> */}
					{/* <Route path="ecommerce-front/sales" element={<Sales />} /> */}

					<Route index element={<Home />} />
					<Route path="auth" element={<Auth onSignup={signupHandler} />} />
					<Route path="add-product" element={<AddProduct />} />
					<Route path="cart" element={<Cart />} />
					<Route path="orders" element={<Orders />} />
					<Route path="profile" element={<Profile />} />
					<Route path="sales" element={<Sales />} />
				</Route>
			</Routes>
		</div>
	);
};

export default App;
