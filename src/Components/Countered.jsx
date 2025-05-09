import React from 'react'
import { useReducer, useState } from 'react'
import {reducer, initialState} from '../Components/CounterReducer'
const Countered = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [inputValue, setInputValue] = useState(0);

    const handleIncrement = () =>dispatch({type: 'increment'});
    const handleDecrement = () =>dispatch({type: 'decrement'});

    const handleIncrementAmount = () => {
      dispatch({type: 'incrementByAmount', payload: +inputValue});
      setInputValue(0); 
    }
    const handleDecrementAmount = () => {
      dispatch({type: 'decrementByAmount', payload: +inputValue});
      setInputValue(0); 
    }


  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <br/>
      <br/>
      <input type='number' value={inputValue} onChange={e => setInputValue(e.target.value)} />
      <button type='Submit' onClick={handleIncrementAmount}>Add</button>
      <button type='Submit' onClick={handleDecrementAmount}>Deduct</button>
    </div>
    
  )
}

export default Countered
