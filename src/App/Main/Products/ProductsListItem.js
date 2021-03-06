import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import './ProductsListItem.css'
import QuantityInput from '../../../common/features/Quantity/QuantityInput';



class ProductsListItem extends Component {
    static defaultProps = {
        isLiked:false,
    }

    static propTypes = {
        name: PropTypes.string.isRequired,
        description: PropTypes.string,
        type: PropTypes.string,
        capacity: PropTypes.number,
        price:PropTypes.number.isRequired,
    }

    state = {
        productsCount: 1,
    }

    
    onIncrementClick = () => {
        this.setState((prevState)=>({
            productsCount: prevState.productsCount + 1 
        }))
    }
    onDecrementClick  = () => {
        this.setState((prevState)=>({
            productsCount:prevState.productsCount - 1

        }))
    }
    renderProductCount() {
        return(
            
            <QuantityInput
            productsCount={this.state.productsCount}
            onDecrementClick={this.onDecrementClick}
            onIncrementClick={this.onIncrementClick}
            minCount={1}
            />
           
        )
    }
    onLikeClick = () => {
        if (this.props.isLiked){
            this.props.dispatchDisLike(this.props.id)
        } else {
            this.props.dispatchLike(this.props.id)
        }
    }

    render(){

        const {
            name,
            description = "no description...",
            type,
            capacity,
            price,
            image,
            addProductToCart,
            id,
            isLiked
        } = this.props
        
        

        
        return (
            <div className='products-list-item'>
                <div className='product-image'><img src={image} alt={name}/> </div>
                <button onClick={()=> this.onLikeClick()}>
                    {isLiked ? <span>&#9829;</span> : <span>&#9825;</span>}
                </button>
                
                
                <div className='product-name'><Link to={`products/${id}`}>{name}</Link></div>
                <div className='product-description'> {description}</div>
                <div className='product-type'>Type: {type}</div>
                <div className='product-capacity'> Capacity:{capacity} Gb</div>
                {this.renderProductCount()}
                <div className='product-price'> $ {price}</div>
                <button onClick={() => addProductToCart(id, this.state.productsCount )} className='btn-add-to-cart'>Add to cart</button>
            </div>
        )
    }

    }

    const mapStateToProps = (state,props)=>{
        return {
            isLiked:state.likeProducts[props.id]
        }
    }

    const mapDispatchToProps = (dispatch) => ({
        dispatchLike: (id) => dispatch({
            type: "LIKE",
            id: id,
        }),
        dispatchDisLike: (id) => dispatch({
            type: "DISLIKE",
            id:id,
        }),
        addProductToCart: (id,count) => dispatch({
            type:"ADD_PRODUCT_TO_CART",
            id:id,
            // or id,
            count:count,
        })
    })




//  ProductsListItem.propTypes = {
//      

//  }

 /*ProductsListItem.defaultProps = {
     description: "no desc.."
 }*/

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    )(ProductsListItem)