import React from "react";

const ProductList = ({ products, setProducts, addToCart }) => { // Ensure you receive 'addToCart' as a prop
    const [productName, setProductName] = React.useState('');
    const [productPrice, setProductPrice] = React.useState('');

    const addProduct = () => {
        if (productName && productPrice) {
            const newProduct = {
                id: Date.now(),
                name: productName,
                price: parseFloat(productPrice),
            };
            setProducts([...products, newProduct]);
            setProductName(''); // Clear the input field after adding
            setProductPrice(''); // Clear the input field after adding
        }
    };

    return (
        <div className="ProductList">
            <h2>Product List</h2>

            <form>
                <div>
                    <label htmlFor="productName">Product Name:</label>
                    <input
                        type="text"
                        id="productName"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="productPrice">Product Price:</label>
                    <input
                        type="number"
                        id="productPrice"
                        value={productPrice}
                        onChange={(e) => setProductPrice(e.target.value)}
                    />
                </div>
            </form>

            <button onClick={addProduct}>Add Product</button>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.name} - ${product.price.toFixed(2)}
                        <button onClick={() => addToCart(product)}>Add to Cart</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
