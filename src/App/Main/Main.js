import React from 'react'

import ProductsList from './Products/ProductsList'
import {Route} from 'react-router-dom'

import CartPage from './Cart/CartPage'

const Main = ({
	addProductToCart,
}) => {
	return(	
    <main className="main">
		<div className="container">
			<div className="row">
				<div className="col-lg-3">
				dthftthjf
				</div>
				<div className="col-lg-9">
				<Route path='/cart' component = {CartPage} />
					<ProductsList
					addProductToCart={addProductToCart} 
					/>
				</div>
			</div>
		</div>
	</main>
	)
}


export default Main