import './Header.css' // allows me to use my custom css styles

function Header({store_name}) {
    return (
        <div className="header">
            <div className="store_name">
                {store_name}
            </div>
            <div className="menu_buttons">
                <div>Home</div>
                <div>Products</div>
                <div>About</div>
                <div>Contact</div>
            </div>
        </div>
    );
}

// Every component file must export the component
export default Header;