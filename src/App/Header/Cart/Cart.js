import React from 'react'
import {keys} from 'lodash'

import './cart.css'

const Cart = ({
	productsInCart,
}) => {
	return(	

        <div className="cart text-center">
			{
				keys(productsInCart).map((productId)=>(
					<div>
						<span>{productId}</span>: {productsInCart[productId]}
					</div>
				))
			// <div className="products-count"></div>
			// <div className="products-price">$</div>
			}
		</div>
	)
}


export default Cart