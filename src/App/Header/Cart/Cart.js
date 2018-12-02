import React from 'react'
import {Link} from 'react-router-dom'
import products, {getProductsMap} from './../../Main/Products/products'
import './cart.css'
import CartTotal from './../../../common/features/Cart/CartTotal'
import CartProductList from '../../../common/features/Cart/CartProductList';


const Cart = ({
	productsInCart,
	productsMap = getProductsMap(products),
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