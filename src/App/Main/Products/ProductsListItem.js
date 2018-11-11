import React from 'react'
import PropTypes from 'prop-types'
import './ProductsListItem.css'

const ProductsListItem = ({
    name,
    description = "no description...",
    type,
    capacity,
    price,
}) => {
    return (
        <div className='products-list-item'>
            <div className='product-name'> {name}</div>
            <div className='product-description'> {description}</div>
            <div className='product-type'>Type: {type}</div>
            <div className='product-capacity'> Capacity:{capacity} Gb</div>
            <div className='poduct-quantity'>
                <button>-</button>
                <input type='text'/>
                <button>+</button>
            </div>
            <div className='product-price'> $ {price}</div>
            <button className='btn-add-to-cart'>Add to cart</button>
        </div>
    )
}


 ProductsListItem.propTypes = {
     name: PropTypes.string.isRequired,
     description: PropTypes.string,
     type: PropTypes.string,
     capacity: PropTypes.number,
     price:PropTypes.number.isRequired,

 }

 /*ProductsListItem.defaultProps = {
     description: "no desc.."
 }*/

export default ProductsListItem