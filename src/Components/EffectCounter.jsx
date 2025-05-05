import React from 'react'
import { useState, useEffect } from 'react'
const EffectCounter = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count]);
  return (
    <section>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
    </section>
  )
}

export default EffectCounter
