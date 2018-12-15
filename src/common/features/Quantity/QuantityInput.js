import React from 'react'

const QuantityInput = ({
    productsCount,
    onDecrementClick,
    onIncrementClick,
    minCount = Number.MIN_SAFE_INTEGER,

}) => {
    return (
        <div className='poduct-quantity'>
            <button 
                onClick={()=> onDecrementClick()}
                disabled={productsCount <= minCount }
                
                
                
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