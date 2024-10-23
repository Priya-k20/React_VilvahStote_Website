import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Cart.css'; 

function Cart() {
  const location = useLocation();
  const [cartItems, setCartItems] = useState(
    (location.state.cartItems || []).map(item => ({ ...item, quantity: item.quantity || 1 }))
  );

  const handleAddQuantity = (itemId) => {
    setCartItems(cartItems.map(item =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const handleSubtractQuantity = (itemId) => {
    setCartItems(cartItems.map(item =>
      item.id === itemId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };

  const handleRemoveItem = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  const handlePlaceOrder = () => {
    const orderId = Math.floor(1000 + Math.random() * 9000);
    alert(`Order ID: ${orderId}\nOrder placed successfully!`);
    setCartItems([]);
  };

  const handleCancelOrder = () => {
    alert('Order canceled.');
    setCartItems([]);
  };

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cartItems.length > 0 ? (
        <div>
          <div className="cart-items-container">
            {cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-image" />
                <div className="cart-info">
                  <h2>{item.name}</h2>
                  <p>${item.price}</p>
                  <div className="quantity-controls">
                    <button onClick={() => handleSubtractQuantity(item.id)} className="quantity-button">-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleAddQuantity(item.id)} className="quantity-button">+</button>
                    <button onClick={() => handleRemoveItem(item.id)} className="remove-button">Remove</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <h2>Total Amount: ${totalAmount}</h2>
          <div className="order-controls">
            <button onClick={handlePlaceOrder} className="confirm-order-button">Confirm Order</button>
            <button onClick={handleCancelOrder} className="cancel-order-button">Cancel</button>
          </div>
        </div>
      ) : (
        <h2>Your cart is empty</h2>
      )}
    </div>
  );
}

export default Cart;
