import React from 'react';


const products = [
  { image: '../g1.png', name: 'Product 1', description: 'Durable mobile phone', reviews: '(4.1k)', price: '$95.50' },
  { image: '../g2.png', name: 'Product 2', description: 'Great mobile phone', reviews: '(4.1k)', price: '$95.50' },
  { image: '../g3.png', name: 'Product 3', description: 'Awesome mobile phone', reviews: '(4.1k)', price: '$95.50' },
  { image: '../g4.png', name: ' Product 4', description: 'Stylish mobile phone', reviews: '(4.1k)', price: '$95.50' },
  
];

const electronics = [
  { image:'../g1.png' , name: 'Product 1', description: 'High-quality electronic', reviews: '(4.1k)', price: '$95.50' },
  { image: '../g2.png', name: 'Product 2', description: 'Advanced electronic', reviews: '(4.1k)', price: '$95.50' },
  { image:'../g3.png', name: 'Product 3', description: 'Innovative electronic', reviews: '(4.1k)', price: '$95.50' },
  { image:'../g4.png' , name: 'Product 4', description: 'Reliable electronic', reviews: '(4.1k)', price: '$95.50' },
 
];

const Grocery= () => {
  return (
    <div>
      <div className="head">
        <h3>Grocery</h3>
        
      </div>
      <div className="product-section">
        {products.map((product, index) => (
          <div className="product-card" key={`mobile-${index}`}>
            <img src={product.image} alt={product.name} />
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

      <div className="head">
        <h3>Grocery</h3>
        
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
};

export default Grocery;
