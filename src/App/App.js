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
	render() {
			
		return (
			<div className = 'App'>
				<Header
					cartData={this.state.cartData}
				/>
				<Main/>
				<Footer/>
			</div>
		)
	}
}






export default App



