import React from 'react'
import { useState } from 'react'

const ExampleOne = () => {
const [count, setCount] = useState(() => {
    const InitialCount = 10;
    return InitialCount;
});

const Increment = () => {
    setCount((prevCount) => prevCount + 1);
};
  return (
    <div>
      <h1>Count: {count} </h1>
      <button onClick={Increment}>+</button>
    </div>
  )
}

export default ExampleOne
