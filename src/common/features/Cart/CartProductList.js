import React from 'react'
import {keys} from 'lodash'
import products, { getProductsMap } from './../../../App/Main/Products/products'
import CartProductListItem from './CartProductLIstItem'

const CartProductList = ({
    productsMap = getProductsMap(products),
	productsInCart,
	CartListComponent = CartProductListItem,
}) => {
    return(
        <div>
			{
			keys(productsInCart).map((productId)=>(
				<CartListComponent
					key ={productId}
					product = {productsMap[productId]}
					count = {productsInCart[productId]}
				/>
			))
			}
			</div>
    )

}

export default CartProductList