import React from 'react'
import {keys} from 'lodash'
import {Link} from 'react-router-dom'
import products, {getProductsMap} from './../../Main/Products/products'
import './cart.css'


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
			Total: $ {
				keys(productsInCart).reduce((total, product)=>{
					return total + (productsMap[product].price * productsInCart[product])
				}, 0)
					}
			</div>
				<Link to='/cart'> Show cart </Link>	
		</div>
	)
}


export default Cart