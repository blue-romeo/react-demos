import React from 'react'

const ProductInfo = () => {
    const product = {
        name: 'Laptop',
        price: 999.99,
        description: 'A high-performance laptop for all your computing needs.',
        inStock: true,
        rating: 4.5,
    }
  return (
    <div>
      <h1> Product: {product.name}</h1>
      <p>Price: ${product.price}</p>  
        <p>Description: {product.description}</p>
        <p>In Stock: {product.inStock ? 'Yes' : 'No'}</p>
        <p>Rating: {product.rating} stars</p>
    </div>
  )
}

export default ProductInfo
