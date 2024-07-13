// src/pages/ShoppingCartPage.js
import React from 'react';
import './ShoppingCartPage.css';

const ShoppingCartPage = ({ cart, updateCart, removeFromCart }) => {
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce((acc, item) => acc + item.quantity * item.price, 0).toFixed(2);

  return (
    <div className="shopping-cart-page">
      <h2>Shopping Cart</h2>
      <p>Total items: {totalItems}</p>
      <p>Total price: ${totalPrice}</p>
      <button onClick={() => alert('Checkout not implemented')}>Checkout</button>
      <button onClick={() => alert('Continue Shopping')}>Continue Shopping</button>
      <div className="cart-items">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>Unit price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => updateCart(item.id, item.quantity + 1)}>+</button>
            <button onClick={() => updateCart(item.id, item.quantity - 1)}>-</button>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoppingCartPage;
