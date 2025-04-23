import React from 'react'

const Person = ({name, age}) => {
  return (
    <div>
      <h1>Person: {name} </h1>
      <p>Age: {age} </p>     
    </div>
  )
}

export default Person
