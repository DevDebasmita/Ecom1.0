import React from 'react';
import './Footer.css'; 
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-left">
        <h3>Company</h3>
        <p>Got questions? Call us 24/7!</p>
        <p>
          03 111 XXXXX 144<br />
          0317 XXXX5005.
        </p>
        <p>
          Contact info<br />
          SUPPORT@Companyname.in
        </p>
        <div className="social-links">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="../ins.jpeg" alt="Instagram" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="../fac.jpeg" alt="Facebook" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="../tw.jpeg" alt="Twitter" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="../in.jpeg" alt="LinkedIn" />
          </a>
        </div>
      </div>
      <div className="footer-center">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="/profile">My Profile</a></li>
          <li><a href="/cart">My Cart</a></li>
          <li><a href="/about">My Wishlist</a></li>
          <li><a href="/about">My Orders</a></li>
          <li><a href="/about">Order History</a></li>
        </ul>
      </div>
      <div className="footer-center1">
        <h4>About Us</h4>
        <ul>
          <li><a href="/about">About Us</a></li>
          <Link to={'/support'}><li><a href="/support">Support And Help</a></li></Link>
          <Link to={'/policy'}><li><a href="/privacy">Privacy Policy</a></li></Link>
          <Link to={'/terms'}><li><a href="/terms">Terms and Conditions</a></li></Link>
        </ul>
      </div>
      <div className="footer-right">
        <img src="../vi.png" alt="Visa" />
        <img src="../ma.png" alt="MasterCard" />
        <img src="../ca.png" alt="American Express" />
        <img src="../eas.png" alt="Easy Pay" />
      </div>
    </div>
  );
}

export default Footer;
