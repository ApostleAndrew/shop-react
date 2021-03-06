import React from 'react'
import {Link} from 'react-router-dom'
import CartTotal from '../../../common/features/Cart/CartTotal'
import CartProductList from '../../../common/features/Cart/CartProductList';
import CartProductListItemExtended from '../../../common/features/Cart/CartProductListItemExtended';
import {connect} from 'react-redux'



const CartPage = ({
	productsInCart,
	removeProductFromCart,
	setProductQantity,
}) => {
	return(	
        <div className="cart text-center">
			<h1>Cart Page</h1>
			<CartProductList 
				CartListComponent={CartProductListItemExtended}
				removeProductFromCart={removeProductFromCart} 
				setProductQantity={setProductQantity}
				productsInCart={productsInCart}
				/>
				
			<CartTotal productsInCart={productsInCart}/>
			<Link to='/buy'> Buy </Link>	
		</div>
	)
}
	
const mapStateToProps = (state) =>{
	return {
		productsInCart:state.productsInCart,
	}
}



export default connect(mapStateToProps)(CartPage)
