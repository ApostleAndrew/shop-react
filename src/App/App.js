import React, {Component} from 'react'


import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'


import '../common/style/base.css'
import '../common/style/reset.css'

class App extends Component {
	state = {
		cartData : {
			totalproductsCount: 10,
			totalPrice: 0,
		}
	}
	addProductToCart(price,count) {
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
				<button onClick={() => this.addProductToCart(10,20)}>add Product</button>
				<Main/>
				<Footer/>
			</div>
		)
	}
}






export default App



