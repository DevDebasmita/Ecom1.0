import React, { useState } from 'react';
import Header from '../Header';
import Footer from './Footer';
import AllProduct from './AllProduct';
import './fashion.css';
import NavBar from '../NavBar';

const Fashion = () => {
  const [showDescription, setShowDescription] = useState(false);
  const [showReview, setShowReview] = useState(false);

  const handleDescriptionClick = () => {
    setShowDescription(!showDescription);
    setShowReview(false); // Hide review when description is clicked
  };

  const handleReviewClick = () => {
    setShowReview(!showReview);
    setShowDescription(false); // Hide description when review is clicked
  };

  return (
    <div>
      <Header />
      <NavBar />
      <div className="main">
        <div className="phone">
          <div className="image-container">
            <img className="fashion" src="./F1.jpeg" alt="Main Product" />
            <div className="sticker">-24%</div>
          </div>
          <div className="short-images">
            <img src="./F1.jpeg" alt="Product 1" />
            <img src="./F1.jpeg" alt="Product 2" />
            <img src="./F1.jpeg" alt="Product 3" />
            <img src="./F1.jpeg" alt="Product 4" />
          </div>
          <div className="product-info">
            <div className="headers">
              <h3 onClick={handleDescriptionClick} className="clickable">
                Description
              </h3>
              <h3 onClick={handleReviewClick} className="clickable">
                Review(0)
              </h3>
            </div>
            {showDescription && (
              <p className="description">
                A key objective is engaging digital marketing customers and allowing them to interact with the brand through servicing and delivery of digital media. Information is easy to access at a fast rate through the use of digital communications.
                Users with access to the Internet can use many digital mediums, such as Facebook, YouTube, Forums, and Email etc. Through Digital communications it creates a Multi-communication channel where information can be quickly exchanged around the world by anyone without any regard to whom they are. Social segregation plays no part through social mediums due to lack of face to face communication and information being wide spread instead to a selective audience.
              </p>
            )}
            {showReview && (
              <div className="review">
                <p>No reviews yet. Be the first to write a review!</p>
                <div className="review-placeholder">
                  <p><strong>John Doe</strong></p>
                  <p>★★★★☆</p>
                  <p>
                    Great product! I have been using it for a week now and it works perfectly. The design is sleek and the features are very user-friendly.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="product-details">
          <h1>Product Name</h1>
          <div className="star">★★★★☆</div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p className="reviews">(4.1k) Customer Reviews</p>
          <div className="details-content">
            <h3>$95.50</h3>
            <p>
              This is a stylish mobile phone with a lot of great features. It has a sleek design and is very user-friendly.
              <br />Category: Men, Polo, Casual
              <br />Tags: Modern, Design, cotton
            </p>
          </div>
          <div className="dropdown">
            <label htmlFor="sizes">Select Size:</label>
            <select id="sizes">
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>
          <button className="add-to-cart">Add to Cart</button>
          <div className="short-heading">Color:</div>
          <div className="color-circles">
            <div className="circle red"></div>
            <div className="circle green"></div>
            <div className="circle blue"></div>
            <div className="circle yellow"></div>
          </div>
        </div>
      </div>
      <AllProduct />
      <Footer />
    </div>
  );
}

export default Fashion;
