import React from 'react'
import { useRef } from 'react'

const FocusInput = () => {
    const inputRef = useRef(null)
    const focusInput = () => {
        if (inputRef.current) {
            inputRef.current.focus()
        }
    }
  return (
    <div>
      <input type="text" ref={inputRef} placeholder="  Click to focus" />
      <button onClick={focusInput}>
      Focus
      </button>
    </div>
  )
}

export default FocusInput
