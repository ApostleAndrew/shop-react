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

    state = {
        productsCount: 0,
    }
    onIncrementClick () {
        this.setState((prevState)=>({
            productsCount: prevState.productsCount + 1 
        }))
    }
    onDecrementClick  = () => {
        this.setState((prevState)=>({
            productsCount:prevState.productsCount - 1
        }))
    }
    renderProductCount () {
        return(
            <div className='poduct-quantity'>
            <button 
                onClick={()=> this.onDecrementClick()}
                disabled={this.state.productsCount <= 0}
            >-</button>
            <input type='text' value={this.state.productsCount} readOnly/>
            <button 
                onClick={()=>this.onIncrementClick()}
                disabled={this.state.productsCount >= 10}
            >+</button>
        </div>
        )
    }


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
                {this.renderProductCount()}
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