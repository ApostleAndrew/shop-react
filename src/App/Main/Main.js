import React from 'react'

import ProductsList from './Products/ProductsList'
import {Route} from 'react-router-dom'

import CartPage from './CartPage/CartPage'
import PaymentPage from './Payment/PaymentPage'
import ShippingPage from './Shipping/ShipingPage'

const Main = ({
	addProductToCart,
	productsInCart,
	removeProductFromCart,
	setProductQantity,
	
}) => {
	return(	
    <main className="main">
		<div className="container">
			<div className="row">
				<div className="col-lg-3">
				dthftthjf
				</div>
				<div className="col-lg-9">
				<Route path='/' exact render = {() => {
					return (
						<ProductsList
						addProductToCart={addProductToCart}
						
						/>)
				}}/>
				<Route path="/cart" render = {() => {
						return ( 
							<CartPage 
							productsInCart={productsInCart}
							removeProductFromCart={removeProductFromCart} 
							setProductQantity={setProductQantity}
							/>)
				}}/>
				<Route path='/shipping' component = {ShippingPage} />
				<Route path='/payment' component ={PaymentPage} />
				</div>
			</div>
		</div>
	</main>
	)
}


export default Main