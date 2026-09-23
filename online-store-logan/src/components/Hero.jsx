import './Hero.css' // allows me to use my custom css styles

// hero right now is just the image
function Hero({image}) {
    return (
        <div className="hero">
            <img 
                src={image}
                alt="Product image" 
                className="image"
            />
        </div>
    );
}

// Every component file must export the component
export default Hero;