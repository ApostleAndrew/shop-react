import React from 'react'
import {Link} from 'react-router-dom'
import './cart.css'
import CartTotal from './../../../common/features/Cart/CartTotal'
import CartProductList from '../../../common/features/Cart/CartProductList';
import {connect} from 'react-redux'


const Cart = ({
	productsInCart,
}) => {
	return(	
        <div className="cart text-center">
			<CartProductList productsInCart={productsInCart}/>
			<CartTotal productsInCart={productsInCart}/>		
			<Link to='/cart'> Show cart </Link>	
		</div>
	)
}
const mapStateToProps = (state)=>{
	return {
		productsInCart:state.productsInCart
	}
}

export default connect(mapStateToProps)(Cart)