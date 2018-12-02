import React from 'react'
import {keys} from 'lodash'
import products, {getProductsMap} from './../Products/products'
import {Link} from 'react-router-dom'
import CartTotal from '../../../common/features/Cart/CartTotal'



const CartPage = ({
	productsInCart,
	productsMap = getProductsMap(products),
}) => {
	return(	
        <div className="cart text-center">
		<h1>Cart Page</h1>
			{
			keys(productsInCart).map((productId)=>(
				<div key={productId}>
					<span>{productsMap[productId].name}</span>: {productsInCart[productId]}	
				</div>
			))
			}
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
