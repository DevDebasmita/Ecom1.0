
import React from 'react';
import Header from '../Header';
import Footer from './Footer';
import NavBar from '../NavBar';
import './mywhistle.css';
import { Link } from 'react-router-dom';
const products = [
  { image: '../m3.png', name: 'Product 1', description: 'Durable mobile phone', reviews: '(4.1k)', price: '$95.50' },
  { image: '../m3.png', name: 'Product 2', description: 'Great mobile phone', reviews: '(4.1k)', price: '$95.50' },
  { image: '../m3.png', name: 'Product 3', description: 'Awesome mobile phone', reviews: '(4.1k)', price: '$95.50' },
  { image: '../m3.png', name: 'Product 4', description: 'Stylish mobile phone', reviews: '(4.1k)', price: '$95.50' },
  { image: '../m3.png', name: 'Product 5', description: 'Durable mobile phone', reviews: '(4.1k)', price: '$95.50' },
  { image: '../m3.png', name: 'Product 6', description: 'Great mobile phone', reviews: '(4.1k)', price: '$95.50' },
  { image: '../m3.png', name: 'Product 7', description: 'Awesome mobile phone', reviews: '(4.1k)', price: '$95.50' },
  { image: '../m3.png', name: 'Product 8', description: 'Stylish mobile phone', reviews: '(4.1k)', price: '$95.50' }
];

const MyWhistle = () => {
  return (
    <div>
      <Header />
      <NavBar />
      &nbsp;

      <Link to={'/myorder'}><h2>&nbsp; &nbsp;My Wishlist</h2></Link>
      <div className="whistle-product-container">
      
        {products.map((product, index) => (
          <div className="whistle-product-card" key={index}>
            
            <img src={product.image} alt={product.name} className="whistle-product-image" />
            
            <div className="whistle-product-info">
            <div className="whistle-cross">&times;</div>
              <h3 className="whistle-product-name">{product.name}</h3>
              <p className="whistle-product-description">{product.description}</p>
              <div className="star">★★★★☆</div>
              <p className="whistle-product-reviews">{product.reviews} Customer Reviews</p>
              <p className="whistle-product-price">{product.price}</p>
              <button className="whistle-add-to-cart">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default MyWhistle;
