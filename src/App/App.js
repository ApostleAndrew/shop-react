import React, {Component} from 'react'

import {omit} from 'lodash'
import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'


import '../common/style/base.css'
import '../common/style/reset.css'

class App extends Component {
	state = {
		productsInCart: {
			'2':4,
			'4':2,
		}
	}
	addProductToCart = (productId,count) => {
		this.setState((prevState) => ({
			productsInCart:{
				...prevState.productsInCart,
				[productId]: (prevState.productsInCart[productId] || 0) + count,

			}
		}))
	}
		removeProductFromCart = (productId) => {
			this.setState((prevState) => ({
					productsInCart: omit(prevState.productsInCart,productId)
				})	
			)} 

	
	render () {
			
		return (
			<div className = 'App'>
				<Header
					productsInCart={this.state.productsInCart}
				/>
				<Main
					addProductToCart = {this.addProductToCart}
					productsInCart = {this.state.productsInCart}
					removeProductFromCart = {this.removeProductFromCart}
				/>
				<Footer/>
				
			</div>
		)
	}
}






export default App



