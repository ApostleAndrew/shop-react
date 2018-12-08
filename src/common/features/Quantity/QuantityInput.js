import React from 'react'

const QuantityInput = ({
    productsCount,
    onDecrementClick,
    onIncrementClick,

}) => {
    return (
        <div className='poduct-quantity'>
            <button 
                onClick={()=> onDecrementClick()}
                disabled={productsCount <= 1}
            >-</button>
            <input type='text' value={productsCount} readOnly/>
            <button 
                onClick={()=> onIncrementClick()}
                disabled={productsCount >= 10}
            >+</button>
        </div>

    )
}

export default QuantityInput