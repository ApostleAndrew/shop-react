import React from 'react'

import ProductsListItem from './ProductsListItem'

import './ProductsList.css'

const ProductsList = () => {
    return (
        <div className='products-list'>
            <h2>ProductsList</h2>
            <div className='row'>
                <div className='col-lg-6'>
                    <ProductsListItem/>
                </div>
                <div className='col-lg-6'>
                    <ProductsListItem/>
                </div>
                <div className='col-lg-6'>
                    <ProductsListItem/>
                </div>
                <div className='col-lg-6'>
                    <ProductsListItem/>
                </div>
            </div>
        </div>
    )
}


export default ProductsList