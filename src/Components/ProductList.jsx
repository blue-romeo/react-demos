import React from 'react'

const ProductList = () => {
    const products = [
        { id: 1, name: 'Laptop', price: 999.99 },
        { id: 2, name: 'Smartphone', price: 499.99 },
        { id: 3, name: 'Tablet', price: 299.99 }
    ];

  return (
    <div>
        <h1>Product List</h1>
        {products.map(product => (
            <div key={product.id}>
            <h2>Product: {product.name}</h2>
            <p>Price: ${product.price}</p>
            </div>
        ))}
    </div>
  )
}

export default ProductList
