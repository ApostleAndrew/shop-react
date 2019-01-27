import productLikesReducer from '../../common/features/Like/productlikesreduser'
import cartReduser from '../../common/features/Cart/cartReduser'

const rootReduser = (state={}, action) => {
    return {
        likeProducts: productLikesReducer(state.likeProducts,action),
        productsInCart: cartReduser(state.productsInCart,action),
    }
}

export default rootReduser