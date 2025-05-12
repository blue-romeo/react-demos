import React from 'react'
import { useReducer } from 'react'

const initialState = {count: 0}

function reducer (state,action){
    switch (action.type) {
        case 'Increment':
            return {count: state.count + 1}
        case 'Decrement':
            return {count: state.count - 1}

        
        default:
            throw new Error();
        }
    }
    function Exercise() {
        const[state, dispatch] = useReducer(reducer, initialState)
    
        return (
            <div>
            <h1> Count: {state.count}</h1>
            <button onClick={() =>dispatch({type :'Increment'})}>+</button>
            <button onClick={() =>dispatch({type :'Decrement'})}>-</button>
            </div>
  )}


export default Exercise
