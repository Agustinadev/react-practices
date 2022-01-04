import { ADD_ONE, CLEAR, REMOVE_ALL, REMOVE_ONE } from "../types";

export const shoppingInitialState = {
    products: [
        { id: 1, name: "Product 1", price: 100 },
        { id: 2, name: "Product 2", price: 200 },
        { id: 3, name: "Product 3", price: 300 },
        { id: 4, name: "Product 4", price: 400 },
        { id: 5, name: "Product 5", price: 500 },
        { id: 6, name: "Product 6", price: 600 },
        { id: 7, name: "Product 7", price: 700 },
    ],
    cart: [],
}

export const shoppingReducer = (state = shoppingInitialState, action) => {
    const {products, cart} = state;
    switch (action.type) {
        case ADD_ONE: {
            let newItem = products.find((item) => item.id === action.payload)
            let itemInCart = cart.find((item) => item.id === newItem.id)
            
            return itemInCart 
            ? {...state, cart: cart.map((item) => 
                item.id === newItem.id
                && {...newItem, quantity: item.quantity + 1}
                
                )}
            : {...state, cart: [...cart, {...newItem, quantity: 1}]}
        }
            
        case REMOVE_ONE: {
            let itemToDelete = cart.find((item)=> item.id === action.payload)
            console.log(itemToDelete)
            return itemToDelete.quantity > 1
            ? {...state, cart: cart.map((item)=> 
                item.id === action.payload
                && {...item, quantity: item.quantity - 1}
                
                )}
            : {...state, cart: cart.filter((item)=> 
                item.id !== action.payload )}
        }
            
        case REMOVE_ALL: {
            return {...state, cart: cart.filter((item)=> item.id !== action.payload )}
        }

        case CLEAR: {
            return shoppingInitialState;
        }

        default:
            return state;
    }
}