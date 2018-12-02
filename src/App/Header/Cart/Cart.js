import React from 'react'
import {keys} from 'lodash'
import {Link} from 'react-router-dom'
import products, {getProductsMap} from './../../Main/Products/products'
import './cart.css'
import CartTotal from './../../../common/features/Cart/CartTotal'


const Cart = ({
	productsInCart,
	productsMap = getProductsMap(products),
}) => {
	return(	
        <div className="cart text-center">
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
				<Link to='/cart'> Show cart </Link>	
		</div>
	)
}


export default Cart