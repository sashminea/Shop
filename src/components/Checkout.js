import React, { useState } from 'react';

const Checkout = () => {
    const [orderPlaced, setOrderPlaced] = useState(false);
    const [orderMessage, setOrderMessage] = useState('');

    const [formData, setFormData] = useState({
        name: '',
        address: '',
        city: '',
        postalCode: '',
    });

    const handleChange = (e) => {
        // Handle changes in form fields and update form data
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform order submission logic (e.g., sending data to a server).
        setOrderPlaced(true);
        setOrderMessage('Thank you for your order!');
    };

    return (
        <div className="Checkout">
            <h2>Checkout</h2>
            {orderPlaced ? (
                <div className="OrderConfirmation">
                    <p>{orderMessage}</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="address">Address:</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="city">City:</label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="postalCode">Postal Code:</label>
                        <input
                            type="text"
                            id="postalCode"
                            name="postalCode"
                            value={formData.postalCode}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit">Place Order</button>
                </form>
            )}
        </div>
    );
};

export default Checkout;
