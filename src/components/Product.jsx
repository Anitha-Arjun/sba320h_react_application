import React, { useContext } from "react";
import { CartContext } from "./CartContext";

import "./Product.css";

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(product);
    alert(`${product.title} has been added to your cart!`);
  };
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <h2 className="product-title">{product.title}</h2>
      <p className="product-description">{product.description}</p>
      <p className="product-price">${product.price.toFixed(2)}</p>
      <p className="product-rating">
        Rating: {product.rating.rate} ({product.rating.count} reviews)
      </p>
      <button onClick={handleAddToCart} className="add-to-cart-button">
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
