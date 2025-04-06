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