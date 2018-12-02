import React from 'react'
import {Link} from 'react-router-dom'
import './cart.css'
import CartTotal from './../../../common/features/Cart/CartTotal'
import CartProductList from '../../../common/features/Cart/CartProductList';


const Cart = ({
	productsInCart,
}) => {
	return(	
        <div className="cart text-center">
		<CartProductList
		productsInCart={productsInCart}
		/>
			<div>
				<CartTotal
				productsInCart={productsInCart}
				/>
			</div>
				<Link to='/cart'> Show cart </Link>	
		</div>
	)
}


export default Cart