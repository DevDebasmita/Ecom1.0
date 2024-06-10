import React from 'react';
import { Link } from 'react-router-dom';
import './AllProduct.css';

const products = [
  { image: '../w1.png', name: 'Product 1', description: 'Durable', reviews: '(4.1k)', price: '$95.50' },
  { image: '../w2.png', name: 'Product 2', description: 'Great', reviews: '(4.1k)', price: '$95.50' },
  { image: '../w3.png', name: 'Product 3', description: 'Awesome', reviews: '(4.1k)', price: '$95.50' },
  { image: '../F1.jpeg', name: 'Product 4', description: 'Stylish', reviews: '(4.1k)', price: '$95.50' }
  
];

const electronics = [
  { image: '../e1.jpeg', name: 'Product 1', description: 'High-quality electronic', reviews: '(4.1k)', price: '$95.50' },
  { image: '../e2.png', name: 'Product 2', description: 'Advanced electronic', reviews: '(4.1k)', price: '$95.50' },
  { image: '../e1.jpeg', name: 'Product 3', description: 'Innovative electronic', reviews: '(4.1k)', price: '$95.50' },
  { image: '../e5.png', name: 'Product 4', description: 'Reliable electronic', reviews: '(4.1k)', price: '$95.50' }
  
];

const kids = [
  { image: '../t1.jpeg', name: 'Product 1', description: 'High-quality electronic', reviews: '(4.1k)', price: '$95.50' },
  { image: '../t2.jpeg', name: 'Product 2', description: 'Advanced electronic', reviews: '(4.1k)', price: '$95.50' },
  { image: '../t3.jpeg', name: 'Product 3', description: 'Innovative electronic', reviews: '(4.1k)', price: '$95.50' },
  { image: '../t4.jpeg', name: 'Product 4', description: 'Reliable electronic', reviews: '(4.1k)', price: '$95.50' }
  
];

const AllProduct = () => {
  return (
    <div className="allproduct">
      <Section title="Women Fashion" products={products} />
      <Section title="Toys" products={electronics} />
      <Section title="Kids Personal Care" products={kids} />
    </div>
  );
};

const Section = ({ title, products }) => (
  <div className="section">
    <div className="head">
      <h3>{title}</h3>
    </div>
    <div className="product-section">
      {products.map((product, index) => (
        <div className="product-card" key={`${title}-${index}`}>
          <Link to={'/fashion'}>
            <img src={product.image} alt={product.name} />
          </Link>
          <div className="product-info">
            <div className="product-name">
              <h4>{product.name}</h4>
              <span className="ratings">★★★★</span>
            </div>
            <p>{product.description}</p>
            <p>{product.reviews} Customer Reviews</p>
            <p>{product.price}</p>
            <div className="product-actions">
              <button>Add to Cart</button>
              <span className="heart">♡</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default AllProduct;
