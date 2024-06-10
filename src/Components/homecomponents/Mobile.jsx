
import React from 'react';
import Header from '../Header';
import Footer from './Footer';
import Electronic from './Electronic';
import './mobile.css';
import NavBar from '../NavBar';

const Mobile = () => {
  return (
    <div>
      <Header />
      <NavBar />
      <div className="main">
        <div className="phone">
          <div className="image-container">
            <img className="iphone" src="./m1.png" alt="Main Product" />
            <div className="sticker">24%</div>
          </div>
          <div className="short-images">
            <img src="./m2.jpeg" alt="Product 1" />
            <img src="./m3.png" alt="Product 2" />
            <img src="./m2.jpeg" alt="Product 3" />
            <img src="./m3.png" alt="Product 4" />
          </div>
          <div className="product-info">
            <h3>Description  &nbsp; &nbsp; Review(0)</h3>
            <p className="description">A key objective is engaging digital marketing customers and allowing them to interact with the brand through servicing and delivery of digital media. </p>


            </div>
        </div>
        <div className="product-details">
          <h1>Product Name</h1>
          <div className="star">★★★★☆</div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p className="reviews">(4.1k) Customer Reviews</p>
          <div className="details-content">
            <p className="description">
              <h3>$95.50</h3>
              This is a stylish mobile phone with a lot of great features. It has a sleek design and is very user-friendly.<br/>Category: Men, Polo, Casual<br/>
Tags: Modern, Design, cotton

            </p>
            
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
      <h1 className="relevant-heading">Relevant Products</h1>
      <Electronic />
      <Footer />
    </div>
  );
}

export default Mobile;
