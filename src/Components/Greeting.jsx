import React from 'react'
const name = 'John Doe'
const date= new Date ()
const Greeting = () => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>Today is {date.getDate()}</p>
    </div>
  )
}

export default Greeting
