import React from 'react'
import {keys} from 'lodash'
import products from './../../Main/Products/products'
import './cart.css'

// const productsMap = products.reduce((map, product)=>({
// 	...map,
// 	[product.id]:product,
// }),{}) 


const Cart = ({
	productsInCart,
}) => {
	return(	

        <div className="cart text-center">
			{
				keys(productsInCart).map((productId)=>(
					<div key={productId}>
						<span>{products[productId-1].name}</span>: {productsInCart[productId]}	
					</div>
				))
			}
			<div>
				Total: $ {
					keys(productsInCart).reduce((total, product)=>{
						return total + (products[product].price * productsInCart[product])
					}, 0)
				}
			</div>
					
		</div>
	)
}


export default Cart