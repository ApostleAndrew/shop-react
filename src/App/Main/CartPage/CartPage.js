import React from 'react'
import products, {getProductsMap} from './../Products/products'
import {Link} from 'react-router-dom'
import CartTotal from '../../../common/features/Cart/CartTotal'
import CartProductList from '../../../common/features/Cart/CartProductList';



const CartPage = ({
	productsInCart,
	productsMap = getProductsMap(products),
}) => {
	return(	
        <div className="cart text-center">
		<h1>Cart Page</h1>
				<CartProductList
				productsInCart={productsInCart}
				/>
			<div>
				<CartTotal
				productsInCart={productsInCart}
				/>
			</div>
			<Link to='/buy'> Buy </Link>	
		</div>
	)
}
	




export default CartPage
