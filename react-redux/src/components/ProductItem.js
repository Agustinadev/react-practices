import React from 'react'

const ProductItem = ({data, addOne}) => {
    const {name, price} = data
    
    
   
    
    return (
        <div style={{border: "2px solid #000", padding: "1rem" }}>
            <h4>{name}</h4>
            <h4>${price}.00</h4>
            <button onClick={addOne}>Add Product</button>
        </div>
    )
}

export default ProductItem
