import React from 'react'
import products, {getProductsMap} from './products'


const ProductPage = ({
    productsItem = getProductsMap(products),
    match,
}) => {
    return(
        <div className = 'products-list'>
            <h2>{productsItem[match.params.productId].name}</h2>
            <img src={productsItem[match.params.productId].image} alt={products.name}/>

        </div>
    )
}

export default ProductPage