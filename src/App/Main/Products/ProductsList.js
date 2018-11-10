import React from 'react'

import ProductsListItem from './ProductsListItem'
import products from './products'

import './ProductsList.css'

const ProductsList = () => {
    return (
        <div className='products-list'>
            <h2>ProductsList</h2>
            <div className='row'>
                <div className='col-lg-6'>
                    <ProductsListItem
                        name="iPhone 8"
                        description="This is"
                        type="phone"
                        capacity={64}
                        price={5000}
                    />
                </div>
                <div className='col-lg-6'>
                    <ProductsListItem
                        name="iPhone x"
                        description="This isxxx"
                        type="phone"
                        capacity={128}
                        price={10000}
                    />
                </div>
                <div className='col-lg-6'>
                    <ProductsListItem
                        name="iPhone 5"
                        description="This is"
                        type="phone"
                        capacity={32}
                        price={1000}
                    />
                </div>
                <div className='col-lg-6'>
                    <ProductsListItem
                        name="iPhone 7+"
                        description="This is"
                        type="phone"
                        capacity={128}
                        price={4000}
                    />
                </div>
            </div>
        </div>
    )
}


export default ProductsList