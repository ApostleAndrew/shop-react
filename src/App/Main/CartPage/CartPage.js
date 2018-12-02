import React from 'react'
import {keys} from 'lodash'
import products, {getProductsMap} from './../Products/products'
import {Link} from 'react-router-dom'


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
			Total: $ {
				keys(productsInCart).reduce((total, product)=>{
					return total + (productsMap[product].price * productsInCart[product])
				}, 0)
					}
			</div>
			<Link to='/buy'> Buy </Link>	
		</div>
	)
}
	




export default CartPage
