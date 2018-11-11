import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './ProductsListItem.css'

class ProductsListItem extends Component {
    render(){

        return (
            <div className='products-list-item'>
                <div className='product-image'><img src={this.props.image} alt={this.props.name}/> </div>
                <div className='product-name'> {this.props.name}</div>
                <div className='product-description'> {this.props.description}</div>
                <div className='product-type'>Type: {this.props.type}</div>
                <div className='product-capacity'> Capacity:{this.props.capacity} Gb</div>
                <div className='poduct-quantity'>
                    <button>-</button>
                    <input type='text' value={1} readOnly/>
                    <button>+</button>
                </div>
                <div className='product-price'> $ {this.props.price}</div>
                <button className='btn-add-to-cart'>Add to cart</button>
            </div>
        )
    }

    }


// const ProductsListItem = ({
//     name,
//     description = "no description...",
//     type,
//     capacity,
//     price,
//     image,
// }) => {
    


//  ProductsListItem.propTypes = {
//      name: PropTypes.string.isRequired,
//      description: PropTypes.string,
//      type: PropTypes.string,
//      capacity: PropTypes.number,
//      price:PropTypes.number.isRequired,

//  }

 /*ProductsListItem.defaultProps = {
     description: "no desc.."
 }*/

export default ProductsListItem