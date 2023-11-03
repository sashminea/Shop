import ProductList from "./components/ProductList";
import './index.css';
import Cart from './components/Cart';
import React from 'react';

function App() {
  const [cart, setCart] = React.useState([]);


  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const [products, setProducts] = React.useState([
    { id: 1, name: 'Product 1', price: 10.99 },
    { id: 2, name: 'Product 2', price: 15.99 },
    // Add more products here
  ]);

  const removeFromCart = (product) => {
    const updatedCart = cart.filter((item) => item.id !== product.id);
    setCart(updatedCart);
  };



  return (
    <div className="App">
      <h1>My React Shop</h1>
      <ProductList products={products} setProducts={setProducts} addToCart={addToCart} />
      <Cart cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
}

export default App;