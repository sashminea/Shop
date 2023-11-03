import ProductList from "./components/ProductList";
import './index.css';
import Cart from './components/Cart';
import React from 'react';
import Checkout from "./components/Checkout";
import { useState } from "react";

function App() {

  const [cart, setCart] = React.useState([]);


  const addToCart = (product) => {
    // Check if the product is already in the cart
    const existingProduct = cart.find((p) => p.id === product.id);

    if (existingProduct) {
      const updatedCart = cart.map((p) => {
        if (p.id === product.id) {
          return { ...p, quantity: p.quantity + (product.quantity || 1) };
        }
        return p;
      });
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: product.quantity || 1 }]);
    }

  };


  const [products, setProducts] = React.useState([
    { id: 1, name: 'Furniture', price: 10.99 },
    { id: 2, name: 'Water', price: 1.2 },
    // Add more products here
  ]);

  const removeFromCart = (product) => {
    const updatedCart = cart.filter((item) => item.id !== product.id);
    setCart(updatedCart);
  };


  const [isCheckout, setIsCheckout] = useState(false);

  const goToCheckout = () => {
    setIsCheckout(true);
  };

  return (
    isCheckout ? (
      <Checkout />
    ) : (
      <div className="App">
        <h1>My React Shop</h1>
        <ProductList products={products} setProducts={setProducts} addToCart={addToCart} />
        <Cart cart={cart} removeFromCart={removeFromCart} />
        <button onClick={goToCheckout}>Proceed to Checkout</button>
      </div>
    )
  );


}

export default App;