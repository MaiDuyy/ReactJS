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


import React, { useState } from 'react'

function CounterState() {
   const [count, setCount] = useState(0);
  
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);

    
    return (
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
    );
  }

export default CounterState

import React, { useMemo, useState } from 'react';

function ExampleComponent() {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(0);

  const expensiveCalculation = useMemo(() => {
    console.log('Expensive calculation running...');
    return count * 2;
  }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <h1>Expensive Result: {expensiveCalculation}</h1>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setOtherState(otherState + 1)}>Update Other State</button>
    </div>
  );
}

export default ExampleComponent;
import React, { useState, useCallback, memo } from 'react';


const ChildButton = memo(({ onClick, label }) => {
  console.log('ChildButton rendered');
  return <button onClick={onClick}>{label}</button>;
});

function ParentComponent() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const increment = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);


  const decrement = () => {
    setCount(prev => prev - 1);
  };

  return (
    <div>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type something..."
      />
      <p>Count: {count}</p>
    
      <ChildButton onClick={increment} label="Increment" />
  
      <ChildButton onClick={decrement} label="Decrement" />
    </div>
  );
}

export default ParentComponent;

import { useRef } from 'react';

export default function Form() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleClick}>
        Focus the input
      </button>
    </>
  );
}
import axios from 'axios';
import React, { useEffect, useState } from 'react'

function UserEffect() {
    const [product , setProduct] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => setProduct(res.data))
        .catch(err => console.log(err));
    },[]);

  return (
   <div className='bg-gray-100'>
     <div className='max-w-7xl px-4 mx-auto py-8'>
        {
            product.map((item)=>(
                    <div key={item.id} className='shadow-md px-4 py-2 rounded-lg bg-white my-2 hover:drop-shadow-md '>
                        <span>Id: {item.id}</span>
                           <h1>Title: {item.title}</h1> 
                           <p>Body: {item.body}</p>
                    </div>
            ))

        }    
    </div>
   </div>
  )
}

export default UserEffect


import { useState } from 'react';

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
}

export default useCounter;

import React, { useReducer } from 'react'

const initialState = 0;
function counterReducer(state, action) {
    switch (action.type) {
        case "cong":
            return state + 1;
        case "tru":
            return state - 1;
        case "reset":
            return initialState;
        default:
            throw new Error("Khong chon cai nao")
    }
}

function useCounterRedex() {
    const [count, dispatch] = useReducer(counterReducer, initialState);

    const increment = () => dispatch({ type: 'cong' });
    const decrement = () => dispatch({ type: 'tru' });
    const reset = () => dispatch({ type: 'reset' });
    return { count, increment, decrement, reset }
}

export default useCounterRedex