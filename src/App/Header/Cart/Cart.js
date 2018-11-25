import React from 'react'
import {keys} from 'lodash'
import products from './../../Main/Products/products'
import './cart.css'


console.log(products)
const Cart = ({
	productsInCart,
}) => {
	return(	

        <div className="cart text-center">
			{
				keys(productsInCart).map((productId)=>(
					<div key={productId}>
						<span>{productId}</span>: {productsInCart[productId]}
					</div>
				))
			}
		</div>
	)
}


export default Cart