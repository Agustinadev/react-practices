import React from 'react'

 const CartItem = ({data, removeOne, removeAll}) => {
    const {name, price, quantity} = data
    
    return (
        <div style={{border: "2px solid #000", padding: "1rem" }}>
            <h4>{name}</h4>
            <h4>${price}.00 X {quantity}</h4>
            {quantity > 1 && <h5>Total ${price * quantity} </h5>}
            <button onClick={removeOne}>Remove Product</button>
            <button onClick={removeAll}>Remove All Product</button>
        </div>
    )
}
export default CartItem
