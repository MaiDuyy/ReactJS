import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removerFromCart, removeALL,  updateQuantity,totalItems} from '../store/cartSlice'

function Cart() {
  const { items, quantity, total } = useSelector(state => state.cart);


// const handleUpate = (id, new) => {
//     if (new < 1 ) return ; 
//     dispatch(updateQuantity({id, quantity : new}));
// };

const handleQuantityChange = (id, newQuantity) => {
  if (newQuantity < 1) return;
  dispatch(updateQuantity({ id, quantity: newQuantity }));
};

  

  const dispatch = useDispatch();
  return (
    <div className='max-w-7xl px-4 mx-auto'>
      <div>
        <h1>Gio hang ({items.length})  </h1>
      </div>

      {items.map((item) => (
        <div key={item.id} className='flex w-full justify-between shadow-md items-center py-2 rounded-md px-3 mb-2 hover:shadow-xl duration-300' >
          <div className='flex'>
            <img src={item.image} alt="" className='w-20 h-20' />
            <p className='items-center'>{item.name}</p>
          </div>
          <div>
            { }
          </div>
          <div>
            <button 
               className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
        onClick={()=> handleQuantityChange(item.id,  item.quantity + 1 )}
            >
              +
            </button>
            <span>{item.quantity}</span>
            <button
              onClick={() => dispatch(removerFromCart(item.id))}
              className='text-red-800 border py-2 px-4 rounded-lg'>Xoa</button>
          </div>



        </div>
      ))}

      <div className='w-full shadow rounded-xl mb-2'>
        <p>Tong {total}</p>
        <button
        onClick={()=> dispatch(removeALL())}
        className='item-center w-full border py-2 px-4 rounded-md my-2'>

        
          Remove ALL
        </button>
      </div>
    </div>
  )
}

export default Cart