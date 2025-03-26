import React, { useReducer } from 'react'
const initialState = 0;


function reducer (state , action) {
        switch(action.type){
            case 'cong' : 
            return state + 1 ; 
            case 'tru' : 
            return state -1 ; 
            case 'reset' : 
            return initialState ; 
            default : 
            throw new Error () 
        }
}

function CounterReducer() {
    const [state , dispatch] = useReducer(reducer, initialState);
    const increment = () => dispatch({type : 'cong'})
    const decrement = () => dispatch({type : 'tru'})
    const reset = () => dispatch({type : 'reset'})
  return (
    <div className='max-w-xl mx-auto px-4 border flex items-center justify-center h-100 bg-gray-200 text-center mt-10 rounded-md'>
     
    <div className=''> 
    <h1>Counter Reducer</h1>
       <h1 className='text-xl  font-semibold px-4 py-2'>Count : {state}</h1>

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
  )
}

export default CounterReducer