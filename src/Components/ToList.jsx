import React from 'react'
import {useState,useReducer} from 'react'

const initialState = []

function reducer(state, action){
    switch (action.type) {
        case 'add':
            return [...state, {id: Date.now(),
                text:action.text,
                completed: false
            }]
        case 'toggle':
            return state.map(todo => 
                todo.id=== action.id ? {...todo, completed: !todo.completed} : todo)
        case 'remove':
            return state.filter(todo => todo.id !== action.id)  

             
        default:
            throw new Error();
    }
}

const ToList = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [text, setText] = useState('')

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        dispatch({type: 'add', text})
        setText('')
      }}>
        <input value={text} onChange={e => setText(e.target.value)} />
        <button type='submit'>Add to do</button>
      </form>
      <ul>
        {state.map(todo =>(
          <li key= {todo.id}>
            <span
             style={{textDecoration: todo.complete ? 'line-through' :'none',}}
             onClick={() => 
             dispatch({type: 'toggle',id: todo.id})}>{todo.text}
             </span>
             <button onClick={()=> dispatch({type : 'remove', id: todo.id })}>Remove</button>


          </li>
        ))}
      </ul>

    </div>
  )
}

export default ToList
