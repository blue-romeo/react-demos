import React from 'react'   
import {useReducer} from 'react'

const initialState = ['name', 'email', 'message' ]

function reducer (state, action) {
    switch (action.type) {
        case 'updateField':
            return{...state, [action.field] : action.value} 
        case 'reset':
            return initialState
    
        default:
            throw new Error();
    }
}

const ContactForm = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(state)
        dispatch({type: 'reset'})
    }
    const handleChange = (e) => {dispatch({
        type: 'updateField',
        field: e.target.value,
        value: e.target.value
    })}
  return (
    
     <form onSubmit={handleSubmit}>
        <input 
        name = {'name'} 
        onChange = {handleChange} 
        value={state.name}  
        placeholder='Name' />
        <br />
        
        <input 
        name = {'email'} 
        onChange = {handleChange} 
        value={state.email}  
        placeholder='Email' />
        <br />

        <textarea 
        name = {'message'} 
        onChange = {handleChange} 
        value={state.message} 
        placeholder='Message' />
        <br />
        <button type='submit'>Submit</button>
        <button type='reset'>Reset</button>
     </form>
    
  )
}

export default ContactForm
