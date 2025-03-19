import {useCart} from "./contexts/CartContext";

 
const products = [ 
  { id: 1, name: "iPhone 15", price: 999 }, 
  { id: 2, name: "Samsung Galaxy S24", price: 899 }, 
  { id: 3, name: "Google Pixel 8", price: 799 } 
]; 
 
const ProductList = () => { 
  const { addToCart } = useCart(); 

  return ( 
    <div> 
      <h2>📦 Available Products</h2> 
      {products.map((product) => ( 
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
    <button onClick={() => addToCart(product)}>Add to 
Cart</button> 
        </div> 
      ))} 
    </div> 
  ); 
}; 
 
export default ProductList; 