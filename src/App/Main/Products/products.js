const products = [
    {
        id:1,
        name: "iPhone 8",
        //description:"This is 8",
        type:"phone",
        capacity:64,
        price:5000,
        image:"/images/products/ipad.png",
    },
    {
        id:2,
        name: "iPhone 8 plus",
        description:"This is 8 plus",
        type:"phone",
        capacity:128,
        price:8000,
        image:"/images/products/iphone.png",
    },
    {
        id:3,
        name: "iPhone X",
        description:"This is X",
        type:"phone",
        capacity:64,
        price:20000,
        image:"/images/products/iphone.png",
    },
    {
        id:4,
        name: "iPhone XS",
        description:"This is Xs",
        type:"phone",
        capacity:256,
        price:50000,
        image:"/images/products/ipad.png",
    },
    
    
]

export const getProductsMap = (array) => {
    return array.reduce((map,product)=>({
        ...map,
        [product.id]:product,
}),{})
}
export default products