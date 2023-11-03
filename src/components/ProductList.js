import React from 'react';
import ProductDetail from './ProductDetail'


const ProductList = ({ products, setProducts, addToCart }) => {
    const [productName, setProductName] = React.useState('');
    const [productPrice, setProductPrice] = React.useState('');
    const [selectedProduct, setSelectedProduct] = React.useState(null);
    const [showProductForm, setShowProductForm] = React.useState(false);


    const openProductDetail = (product) => {
        setSelectedProduct(product);
    };

    const closeProductDetail = () => {
        setSelectedProduct(null);
    };

    const removeProduct = (productId) => {
        // Filter out the product to remove it from the product list
        const updatedProducts = products.filter((product) => product.id !== productId);
        setProducts(updatedProducts);
    };

    const addProduct = (e) => {

        e.preventDefault();

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

    const updateQuantity = (product, newQuantity) => {
        const updatedProducts = products.map((p) => {
            if (p.id === product.id) {
                return { ...p, quantity: parseInt(newQuantity, 10) };
            }
            return p;
        });
        setProducts(updatedProducts);
    };

    return (
        <div className="ProductList-list">
            <h2>Product List</h2>
            {showProductForm && (
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
                    <button onClick={addProduct}>Add Product</button>
                </form>)}


            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.name} - ${product.price.toFixed(2)}
                        <input
                            type="number"
                            min="1"
                            value={product.quantity || 1}
                            onChange={(e) => updateQuantity(product, e.target.value)}
                        />
                        <button onClick={() => addToCart(product)}>Add to Cart</button>
                        <button onClick={() => openProductDetail(product)}>Details</button>
                        <button onClick={() => removeProduct(product.id)}>Remove</button>
                    </li>
                ))}
            </ul>

            {selectedProduct && (
                <ProductDetail product={selectedProduct} onClose={closeProductDetail} />
            )}

            <button onClick={() => setShowProductForm(!showProductForm)}>
                {showProductForm ? 'Hide Form' : 'Add New Product'}
            </button>

        </div>
    );
};

export default ProductList;
