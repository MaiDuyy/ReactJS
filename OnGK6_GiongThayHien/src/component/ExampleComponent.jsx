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


