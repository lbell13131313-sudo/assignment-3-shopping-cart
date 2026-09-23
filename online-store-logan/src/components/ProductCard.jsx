import './ProductCard.css' // allows me to use my custom css styles

// each card has the same format to help with a clean look
function ProductCard({key, name, price, image, description, onAddToCart}) {
    
    // formats the price to USD format including 2 decimal places and the $ in front
    const formattedCurrency = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(price);

    return (
        <div className="product-card">
            <div className="product-header">
                <img 
                    src={image}
                    alt="Product image" 
                    className="image"
                />
                <div className="product-info">
                    <h3 className="name">{name}</h3>
                    <p className="description">{description}</p>
                    <p className="price">{formattedCurrency}</p>
                </div>
                <button className="add-cart-button" onClick = {() => onAddToCart(key)}> 
                    Add to Cart
                </button>
            </div>
        </div>
    );
}

// Every component file must export the component
export default ProductCard;