import React, { useState } from 'react';
import CounterState from './component/counterState';
import CounterReducer from './component/CounterReducer';
import UserEffect from './component/UserEffect';
import ExampleComponent from './component/ExampleComponent';
import UseRef from './component/UseRef'
import UseCall from './component/UseCall'
import useCounter  from './hook/useCounter'
function App() {
  const { count, increment, decrement, reset } = useCounter();

  return (

 <div>
      {/* <CounterState/> */}
      {/* <CounterReducer/> */}
      {/* <UserEffect/> */}
      {/* <ExampleComponent/> */}
      {/* <UseRef/> */}
      {/* <UseCall/> */}

      <div className='max-w-xl mx-auto px-4 border flex items-center justify-center h-100 bg-gray-200 text-center mt-10 rounded-md'>
  
  <div className=''> 
  <h1>Counter State</h1>
     <h1 className='text-xl  font-semibold px-4 py-2'>Count : {count}</h1>

    <button
    className='bg-blue-500 text-white px-4 py-2 mx-2 rounded-md'
      onClick={() => increment()}
    >InC</button>
    <button
       className='bg-red-500 text-white px-4 py-2 mx-2 rounded-md'
      onClick={() => decrement()}
    >DeC</button>
    <button
       className='bg-green-500 text-white px-4 py-2 mx-2 rounded-md'
      onClick={() => reset()}
    >Reset</button></div>
</div>
 </div>
 
  );
}

export default App;
