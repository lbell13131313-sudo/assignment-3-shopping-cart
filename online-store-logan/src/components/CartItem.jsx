import './CartItem.css' // allows me to use my custom css styles

// each card has the same format to help with a clean look
function CartItem({name, price}) {
    
    // formats the price to USD format including 2 decimal places and the $ in front
    const formattedCurrency = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(price);

    return (
        <div className="item-box">
            <div>
                <h3>{name}</h3>
                <p>{formattedCurrency}</p>
            </div>
        </div>
    );
}

// Every component file must export the component
export default CartItem;