import React from 'react'

const Product = (props) => {
  return (
    <div>
        <h1>Product: {props.name} </h1>
        <p>Price: ${props.price} </p>
    </div>
  )
}

export default Product
