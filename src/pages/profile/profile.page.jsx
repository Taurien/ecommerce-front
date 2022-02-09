import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getuserByid } from '../../store/actions/user.actions';

// Components
import Button from '../../components/UI/button/button.component';
import UpdateFormModal from '../../components/profile/update-form-modal/update-form-modal.component';
import ProductsList from '../../components/products/products-list/products-list.component';


import classes from './profile.styles.module.css';

const Profile = () => {
	
	const id = useSelector(state => state.user.userId);
	const { name, email } = useSelector(state => state.user.userInfo);
	const { products } = useSelector(state => state.products)
	
	const dispatch = useDispatch()
	
	// State
	const [showModal, setShowModal] = useState(false);
	const [ itsProducts, setItsProducts ] = useState([])
	
	// Handlers
	const onOpenModal = () => {
		setShowModal(true);
	};
	
	const onCloseModal = () => {
		setShowModal(false);
	};
	
	useEffect(() => {
		dispatch(getuserByid(id));
	
		if ( products && id ) {
			setItsProducts(products.filter(el => el.userId === id ))
		}
	}, [dispatch, setItsProducts]);

	return (
		<div>
			<div className={classes['user-data']}>
				<h3 className={classes['user-data__username']}>{name}</h3>

				<div className={classes['button-container']}>
					<Button type="button" label="Update profile" onClick={onOpenModal} />
				</div>
			</div>

			<div>
				<h3>Your products</h3>
				{
					itsProducts?.length !== 0 &&
						<ProductsList
						products={itsProducts} 
						/>
				}
			</div>

			{showModal && (
				<UpdateFormModal
					currentUsername={name}
					currentEmail={email}
					onClose={onCloseModal}
				/>
			)}
		</div>
	);
};

export default Profile;
