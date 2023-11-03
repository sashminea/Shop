import React from 'react';

const Cart = ({ cart, removeFromCart }) => {
    const total = cart.reduce((acc, product) => acc + product.price, 0);

    return (
        <div className="Cart">
            <h2>Shopping Cart</h2>
            <ul>
                {cart.length === 0 ? (
                    <li>Your cart is empty.</li>
                ) : (
                    cart.map((product) => (
                        <li key={product.id}>
                            {product.name} - ${product.price.toFixed(2)}{' '}
                            <button onClick={() => removeFromCart(product)}>Remove</button>
                        </li>
                    ))
                )}
            </ul>
            {cart.length > 0 && <p>Total: ${total.toFixed(2)}</p>}
        </div>
    );
};

export default Cart;
