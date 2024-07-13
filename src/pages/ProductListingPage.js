// src/pages/ProductListingPage.js
import React from 'react';
import products from '../data/products'; // Create a data file with product details
import './ProductListingPage.css';

const ProductListingPage = ({ addToCart }) => {
  return (
    <div className="product-listing-page">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductListingPage;
