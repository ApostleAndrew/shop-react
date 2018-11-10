import React from 'react'

import ProductsListItem from './ProductsListItem'
import products from './products'

import './ProductsList.css'

const ProductsList = () => {
    return (
        <div className='products-list'>
            <h2>ProductsList</h2>
            <div className='row'>
                {
                    products.map((product) => (
                        <div className="col-lg-6">
                        <ProductsListItem
                            name={product.name}
                            deccription={product.description}
                            type={product.type}
                            capacity={product.capacity}
                            price={product.price}
                        />
                            
                        </div>
                    ))
                }
               
            </div>
        </div>
    )
}


export default ProductsList