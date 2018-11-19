import React, {Component} from 'react'


import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'


import '../common/style/base.css'
import '../common/style/reset.css'

class App extends Component {
	state = {
		cartData : {
			totalproductsCount: 0,
			totalPrice: 0,
		}
	}
	addProductToCart = (price,count) => {
		this.setState((prevState) => ({
			cartData: {
				totalPrice: prevState.cartData.totalPrice + (price*count),
				totalproductsCount: prevState.cartData.totalproductsCount + count,
			}
		}))
	} 

	
	render () {
			
		return (
			<div className = 'App'>
				<Header
					cartData={this.state.cartData}
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



