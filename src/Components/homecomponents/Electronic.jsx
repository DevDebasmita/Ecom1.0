import React from 'react';
import './Electronic.css';
import { Link } from 'react-router-dom';

const products = [
  { image: '../m2.jpeg', name: 'Mobile 1', description: 'Durable mobile phone', reviews: '(4.1k)', price: '$95.50' },
  { image: '../m3.png', name: 'Mobile 2', description: 'Great mobile phone', reviews: '(4.1k)', price: '$95.50' },
  { image: '../m2.jpeg', name: 'Mobile 3', description: 'Awesome mobile phone', reviews: '(4.1k)', price: '$95.50' },
  { image: '../m1.png', name: 'Mobile 4', description: 'Stylish mobile phone', reviews: '(4.1k)', price: '$95.50' }
  
];

const electronics = [
  { image: '../e1.jpeg', name: 'Electronic 1', description: 'High-quality electronic', reviews: '(4.1k)', price: '$95.50' },
  { image: '../e2.png', name: 'Electronic 2', description: 'Advanced electronic', reviews: '(4.1k)', price: '$95.50' },
  { image: '../e1.jpeg', name: 'Electronic 3', description: 'Innovative electronic', reviews: '(4.1k)', price: '$95.50' },
  { image: '../e4.jpeg', name: 'Electronic 4', description: 'Reliable electronic', reviews: '(4.1k)', price: '$95.50' }
  
];

const Electronic = () => {
  return (
    <div className="electronic-container">
      <div className="head">
        <h3>Mobiles</h3>
        <Link to={'/viewmore'}><button className="view-more-btn">View More</button></Link>
      </div>
      <div className="product-section">
        {products.map((product, index) => (
          <div className="product-card" key={`mobile-${index}`}>
            <Link to={'/image'}>
              <img src={product.image} alt={product.name} />
            </Link>
            <div className="product-info">
              <div className="product-name">
                <h4>{product.name}</h4>
                <span className="ratings">★★★★</span>
              </div>
              <p>{product.description}</p>
              <p>{product.reviews} Customer Reviews</p>
              <p className="price">{product.price}</p>
              <div className="product-actions">
                <button className="add-to-cart-btn">Add to Cart</button>
                <span className="heart">♡</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="head">
        <h3>Electronics</h3>
      </div>
      <div className="product-section">
        {electronics.map((product, index) => (
          <div className="product-card" key={`electronic-${index}`}>
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <div className="product-name">
                <h4>{product.name}</h4>
                <span className="ratings">★★★★</span>
              </div>
              <p>{product.description}</p>
              <p>{product.reviews} Customer Reviews</p>
              <p className="price">{product.price}</p>
              <div className="product-actions">
                <button className="add-to-cart-btn">Add to Cart</button>
                <span className="heart">♡</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Electronic;
