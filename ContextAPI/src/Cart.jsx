import  {useCart}  from "./contexts/CartContext"; 
 
const Cart = () => { 
  const { cart, removeFromCart, totalItems } = useCart(); 
  return ( 
    <div> 
      <h2> Cart ({totalItems} items)</h2> 
      {cart.length === 0 ? ( 
        <p>Your cart is empty</p> 
      ) : ( 
        cart.map((product) => ( 
          <div  
            key={product.id}  
            style={{ 
              display: "flex", 
              justifyContent: "space-between", 
              alignItems: "center", 
              padding: "10px", 
              margin: "5px 0", 
              border: "1px solid #ddd" 
            }} 
          > 
            <span>{product.name} - ${product.price}</span> 
            <button onClick={() => 
removeFromCart(product.id)}>Remove</button> 
          </div> 
        )) 
      )} 
    </div> 
  ); 
}; 
 
export default Cart; 