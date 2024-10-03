import { useState } from "react";
import ImageCarousel from "./components/ImageCarousel";
import ProductList from "./components/ProductList";

import { CartProvider } from "./components/CartContext";
import CartSidebar from "./components/CartSidebar";

import "./App.css";

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <CartProvider>
      <div>
        <h1>SPARKL</h1>
        <ImageCarousel />
        <button onClick={toggleCart} className="cart-button">
          🛒 View Cart
        </button>
        <CartSidebar isOpen={isCartOpen} onClose={toggleCart} />

        <ProductList />
      </div>
    </CartProvider>
  );
};

export default App;
