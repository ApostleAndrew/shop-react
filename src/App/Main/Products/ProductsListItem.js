import React from 'react'

import './ProductsListItem.css'

const ProductsListItem = () => {
    return (
        <div className='products-list-item'>
            <div className='product-name'> iPhone X</div>
            <div className='product-description'> This is ...</div>
            <div className='product-type'> Type: phone</div>
            <div className='product-capacity'> Capacity: 64Gb</div>
            <div className='poduct-quantity'>
                <button>-</button>
                <input type='text'/>
                <button>+</button>
            </div>
            <div className='product-price'> $ 5222</div>
            <button className='btn-add-to-cart'>Add to cart</button>
        </div>
    )
}


export default ProductsListItem