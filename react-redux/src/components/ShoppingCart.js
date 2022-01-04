import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addOne, clear, remove} from "../actions/shoppingActions";
import CartItem from "./CartItem";
import ProductItem from "./ProductItem";

const ShoppingCart = () => {
  //const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  const dispatch = useDispatch();
  const state = useSelector((state)=>state)
  console.log(state)
  
  let {cart, products} = state.shopping
 


  return (
    <div> 
      <h3 style={{textAlign: "center"}}>Products</h3>
      <article className="box grid-responsive">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            data={product}
            addOne={()=>dispatch(addOne(product.id))}
          />
        ))}
      </article>
      
      <h3 style={{textAlign: "center"}}>Cart</h3>
      <button onClick={()=>dispatch(clear())}>Clear all</button>
  
      <article className="box grid-responsive">
        {cart.map((product, index) => (
          <CartItem 
          key={index} 
          data={product} 
          removeOne={()=>dispatch(remove(product.id))}
          removeAll={()=>dispatch(remove(product.id, true))} />
        ))}
      </article>
    </div>
  );
};

export default ShoppingCart;