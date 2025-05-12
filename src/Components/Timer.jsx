import React from 'react'
import { useRef, useState, useEffect } from 'react'

const Timer = () => {
    const [count, setCount] = useState(0)
    const intervalRef = useRef(null)

    useEffect(() => {
         intervalRef.current = setInterval(
            () => setCount(
                previousCount => previousCount +1),
                60000)
    
            return () => {
                clearInterval(intervalRef.current)
            }
    },[])
  return (
    <div>
        <h1>Timer: {count} minutes</h1>
        <button onClick={() =>{clearInterval(intervalRef.current)} }>Stop</button>

    </div>

  )
}

export default Timer
