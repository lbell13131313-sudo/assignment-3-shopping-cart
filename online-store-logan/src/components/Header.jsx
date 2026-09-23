import './Header.css' // allows me to use my custom css styles

function Header({store_name, length}) {
    return (
        <div className="header">
            <div className="store-name">
                {store_name}
            </div>
            <div className="menu_buttons">
                <div>Home</div>
                <div>Products</div>
                <div>About</div>
                <div>Contact</div>
            </div>
            <div className="cart-container"> 
                <span className="cart-icon">🛒</span> 
                {/* Cart count display here*/} 
            </div>
        </div>
    );
}

// Every component file must export the component
export default Header;