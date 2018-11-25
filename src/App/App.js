import React, {Component} from 'react'


import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'


import '../common/style/base.css'
import '../common/style/reset.css'

class App extends Component {
	state = {
		productsInCart: {
			'2': 5,
			'3': 4,
		}
	}
	addProductToCart = (productId,count) => {
		this.setState((prevState) => ({
			productsInCart:{
				[productId]: (prevState.productsInCart[productId] || 0) + count,

			}
		}))
		// this.setState((prevState) => ({
		// 	cartData: {
		// 		totalPrice: prevState.cartData.totalPrice + (price*count),
		// 		totalproductsCount: prevState.cartData.totalproductsCount + count,
		// 	}
		// }))
	} 

	
	render () {
			
		return (
			<div className = 'App'>
				<Header
					productsInCart={this.state.productsInCart}
				/>
				<Main
					addProductToCart = {this.addProductToCart}
				/>
				<Footer/>
			</div>
		)
	}
}






export default App



