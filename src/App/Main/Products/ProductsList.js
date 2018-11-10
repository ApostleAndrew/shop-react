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
                    products.map(({
                        name,
                        description,
                        type,
                        capacity,
                        price,
                    }) => (
                        <div className="col-lg-6">
                        <ProductsListItem
                            name={name}
                            deccription={description}
                            type={type}
                            capacity={capacity}
                            price={price}
                        />
                            
                        </div>
                    ))
                }
               
            </div>
        </div>
    )
}


export default ProductsList