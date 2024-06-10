import React from 'react';
import './NewLaunching.css';

const NewLaunching = () => {
  return (
    <div className="custom-section">
      <div className="content-left">
        <p className="collection">Women Collection</p>
        <h2 className="product-title">I Phone 15 Pro</h2>
        <p className="description-title">Description</p>
        <p className="description-text">
          This is the latest addition to our collection. <br />
          It offers exceptional quality and unmatched performance.
        </p>
        <button className="buy-now-button">Buy Now</button>
      </div>
      <div className="image-right">
        <img src='../NEW.jpeg' alt="New Launch" />
      </div>
    </div>
  );
}

export default NewLaunching;
