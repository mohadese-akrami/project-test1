import React from 'react';

const ProductList = () => {
  // Dummy product data
  const products = [
    { id: 1, name: 'mobile', price: 10 },
    { id: 2, name: 'keyboard', price: 20 },
    { id: 3, name: 'hp', price: 30 },
  ];

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
