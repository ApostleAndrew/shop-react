import React from 'react'

import './ProductsListItem.css'

const ProductsListItem = (props) => {
    return (
        <div className='products-list-item'>
            <div className='product-name'> {props.name}</div>
            <div className='product-description'> {props.deccription}</div>
            <div className='product-type'>Type: {props.type}</div>
            <div className='product-capacity'> {props.capacity} Gb</div>
            <div className='poduct-quantity'>
                <button>-</button>
                <input type='text'/>
                <button>+</button>
            </div>
            <div className='product-price'> $ {props.price}</div>
            <button className='btn-add-to-cart'>Add to cart</button>
        </div>
    )
}


export default ProductsListItem