import React from 'react'

import './cart.css'

const Cart = ({
	totalproductsCount,
	totalPrice,
}) => {
	return(	

        <div className="cart text-center">
			<div className="products-count">{totalproductsCount}</div>
			<div className="products-price">${totalPrice}</div>
		</div>
	)
}


export default Cart