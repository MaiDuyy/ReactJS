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