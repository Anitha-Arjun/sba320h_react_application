import React, { useEffect, useContext } from "react";
import { CartContext } from "./CartContext";
import "./CartSidebar.css";

const CartSidebar = ({ isOpen, onClose }) => {
  const { cart, updateQuantity, removeFromCart } = useContext(CartContext);

  const totalPrice = cart
    .reduce((acc, product) => acc + product.price * product.quantity, 0)
    .toFixed(2);

  return (
    <div className={`cart-sidebar ${isOpen ? "open" : ""}`}>
      <button className="close-btn" onClick={onClose}>
        ×
      </button>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((product) => (
            <li key={product.id} className="cart-item">
              <img
                src={product.image}
                alt={product.title}
                className="cart-item-image"
              />
              <div className="cart-item-details">
                <div className="cart-item-title">{product.title}</div>
                <div className="cart-item-quantity">
                  Qty:
                  <button
                    onClick={() =>
                      updateQuantity(
                        product.id,
                        Math.max(1, product.quantity - 1)
                      )
                    }
                  >
                    -
                  </button>
                  {product.quantity}
                  <button
                    onClick={() =>
                      updateQuantity(product.id, product.quantity + 1)
                    }
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="cart-item-price">
                ${(product.price * product.quantity).toFixed(2)}
              </div>
              <button
                className="remove-btn"
                onClick={() => removeFromCart(product.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      <div className="cart-footer">
        <p>Total Price: ${totalPrice}</p>
        <p>
          Total items:{" "}
          {cart.reduce((acc, product) => acc + product.quantity, 0)}
        </p>
      </div>
    </div>
  );
};

export default CartSidebar;
