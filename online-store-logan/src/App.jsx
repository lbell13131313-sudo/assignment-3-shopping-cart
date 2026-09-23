import './App.css'
import ProductCard from './components/ProductCard' // allows us to use the Product Card function from ProductCard.jsx
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import { useState } from 'react'

// please note that my page is in dark mode
function App() {
  const products = [
    { 
      id: 1, 
      name: "Xbox Series X|S Controller", 
      price: 53.99, 
      image: "https://placehold.co/300x200",
      description: "Game controller usable for Xbox Series X|S, PC, and Phone"
    },
    { 
      id: 2, 
      name: "80 Minute CD-Rs", 
      price: 7.99, 
      image: "https://placehold.co/300x200",
      description: "10 pack of writeable CD-R discs"
    },
    { 
      id: 3, 
      name: "Vinyl Player", 
      price: 249.00, 
      image: "https://placehold.co/300x200",
      description: "Plays both fullsize vinyls and mini vinyls"
    }
  ];
  
  return (
    <div className="app">
      <Header
        store_name="Logan's Tech Shop"
      />

      {/* I had to change the link because my page is only 1124px wide for some reason I have no idea why */}
      <Hero
        image="https://placehold.co/1124x400/9767d6/ffffff?text=Shop+Tech+and+Tech+Related+Items"
      />

      <h3>Featured Products</h3>

      {/* allows the product cards to be in a row centered on the screen */}
      <div className="product_row">
        {/* supplies the props to the ProductCard function in ProductCard.jsx */}
        {/* much more condensed and reusable now than it was before */}
        {products.map(p => (
          <ProductCard
            key={p.id}
            name={p.name}
            price={p.price}
            image={p.image}
            description={p.description}
          />
        )) }
      </div>

      <Footer
        store_name="Logan's Tech Shop"
        email="logantechshop@gmail.com"
        phone="(123) 456-7890"
        address="123 Main Street, Nowhereville, NJ 12345"
      />
    </div>
  )
}

export default App;