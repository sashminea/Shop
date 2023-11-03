import React from 'react';

const ProductDetail = ({ product, onClose }) => {
    return (
        <div className="ProductDetail">
            <div className="ProductDetail-header">
                <h2>{product.name}</h2>
                <button onClick={onClose} className="ProductDetail-close-button">
                    Close
                </button>
            </div>
            <div className="ProductDetail-details">
                <p>Price: ${product.price.toFixed(2)}</p>
                <p>Description: {product.description || 'No description available.'}</p>
                {/* Add more details here */}
            </div>
        </div>
    );
};

export default ProductDetail;
