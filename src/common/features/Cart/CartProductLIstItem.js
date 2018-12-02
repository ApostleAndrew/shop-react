import React from 'react'

const CartProductListItem = ({
    product,
    count,
}) => {
    return(
        <div>
            <span>{product.name}</span> : <span>{count}</span>
        </div>
    )
}

export default CartProductListItem