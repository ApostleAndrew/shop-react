import React from 'react'
import {keys} from 'lodash'
import products from './../../Main/Products/products'
import './cart.css'

const productsMap = products.reduce((map, product)=>({
	...map,
	[product.id]:product,
}),{}) 
console.log(products)
console.log(productsMap)
const Cart = ({
	productsInCart,
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
		</div>
	)
}


export default Cart