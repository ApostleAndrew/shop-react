import React from 'react'
import './CartProductListItemExtended.css'
import QuantityInput from '../Quantity/QuantityInput';
import {connect} from 'react-redux'


const CartProductListItemExtended = ({
    product,
    count,
    removeProductFromCart,
    setProductQantity,
    minCount,
    isLiked,


    
}) => (
    <div>
       
        <div className="cart-product-list-item-description">
            <div className="row">
                <div className="col-lg-3">
                    <img src={product.image} alt={product.name}/>
                </div>
                <div className="col-lg-9">
                    <p className="cart-extended-name">
                        <span> {product.name} </span> 
                    </p>
                    <p className="cart-extended-price">
                         Price for one item: <span className="bold">$ {product.price} </span> 
                    </p>
                    <button>
                    {isLiked ? <span>&#9829;</span> : <span>&#9825;</span>}
                    </button>
                    <p className="cart-extended-count">
                         Selected quantity: <span className="bold"> {count} </span> 
                         
                    </p>
    
                    
                    <p className="cart-extended-sum">
                         Sum for this item: <span className="bold sum-price">$ {(product.price * count)} </span> 
                    </p>
                    <QuantityInput
                        minCount={0}
                        productsCount = {count}
                        onIncrementClick = {()=> setProductQantity(product.id, count + 1)}
                        onDecrementClick = {() => {
                            if ((count-1) === 0) removeProductFromCart(product.id)
                            else setProductQantity(product.id, count - 1)
                        }
                    }
                    />
                    <button onClick={() => removeProductFromCart(product.id)}>Видалити товар</button>
                  
                </div>
            </div>
        </div>
    </div>
)

const mapStateToProps = (state,props)=>{
        return {
            isLiked:state.likeProducts[props.product.id]
        }
    }
const mapDispatchToProps = (dispath) => ({
    removeProductFromCart:(id)=>dispath({
        type:'REMOVE_PRODUCT_FROM_CART',
        id:id,
    }),
    setProductQantity:(id,count)=>dispath({
        type:'SET_PRODUCT_QUANTITY',
        id:id,
        count:count,
    })

})

export default connect(
    mapStateToProps,
    mapDispatchToProps,) (CartProductListItemExtended)

