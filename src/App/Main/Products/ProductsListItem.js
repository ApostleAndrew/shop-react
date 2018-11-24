import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './ProductsListItem.css'

class ProductsListItem extends Component {

    static propTypes = {
        name: PropTypes.string.isRequired,
        description: PropTypes.string,
        type: PropTypes.string,
        capacity: PropTypes.number,
        price:PropTypes.number.isRequired,
    }

    // static defaultProps = {
    //     description:"NO desc..."
    // }
    render(){

        const {
            name,
            description = "no description...",
            type,
            capacity,
            price,
            image,
        } = this.props
        
        return (
            <div className='products-list-item'>
                <div className='product-image'><img src={image} alt={name}/> </div>
                <div className='product-name'> {name}</div>
                <div className='product-description'> {description}</div>
                <div className='product-type'>Type: {type}</div>
                <div className='product-capacity'> Capacity:{capacity} Gb</div>
                <div className='poduct-quantity'>
                    <button>-</button>
                    <input type='text' value={1} readOnly/>
                    <button>+</button>
                </div>
                <div className='product-price'> $ {price}</div>
                <button className='btn-add-to-cart'>Add to cart</button>
            </div>
        )
    }

    }




//  ProductsListItem.propTypes = {
//      

//  }

 /*ProductsListItem.defaultProps = {
     description: "no desc.."
 }*/

export default ProductsListItem