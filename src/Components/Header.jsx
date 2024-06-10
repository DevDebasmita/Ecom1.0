import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHeart, faShoppingCart, faMapMarkerAlt, faTimes, faCheckCircle, faCircle } from '@fortawesome/free-solid-svg-icons';
import styles from '../css/Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isProfileOpen, setProfileOpen] = useState(false);
  const [isCartOpen, setCartOpen] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isDelivered, setIsDelivered] = useState(false);

  const toggleProfile = () => {
    setProfileOpen(!isProfileOpen);
  };

  const toggleCart = () => {
    setCartOpen(!isCartOpen);
  };

  const closeProfile = () => {
    setProfileOpen(false);
  };

  const closeCart = () => {
    setCartOpen(false);
  };

  const handleSaveClick = () => {
    setIsPopupVisible(true);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  const handleDeliveredClick = () => {
    setIsDelivered(true);
  };

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src="../sh.jpeg" alt="Company Logo" className={styles.logoImage} />
        <span className={styles.companyName}>Company</span>
        <div className={styles.delivery}>
          <span><FontAwesomeIcon icon={faMapMarkerAlt} className={styles.locationIcon} /> Deliver to John</span>
          <br />
          <span>Bangalore 560034</span>
        </div>
      </div>
      <div className={styles.icons}>
        <div className={styles.iconContainer} onClick={toggleProfile}>
          <FontAwesomeIcon icon={faUser} className={styles.icon} />
        </div>
        <Link to={'/whistle'}><FontAwesomeIcon icon={faHeart} className={`${styles.icon} ${styles.heart}`} /></Link>
        <div className={styles.cartIcon} onClick={toggleCart}>
        <Link to={'/cart'}><FontAwesomeIcon icon={faShoppingCart} className={`${styles.icon} ${styles.cart}`} /></Link>
          <span className={styles.cartCount}>3</span>
        </div>
      </div>
      {isProfileOpen && (
        <div className={styles.profileDropdown}>
          <FontAwesomeIcon icon={faTimes} className={styles.closeIcon} onClick={closeProfile} />
          <div className={styles.profileContent}>
            <div className={styles.profileLeft}>
              <img src="../p1.jpeg" alt="Profile" className={styles.profilePic} />
              <input type="file" accept="image/*" className={styles.fileInput} />
            </div>
            <div className={styles.profileRight}>
              <input type="text" placeholder="Name" className={styles.input} /><br />
              <input type="email" placeholder="Email Address" className={styles.input} />
              <div className={styles.gridContainer}>
              <div className={styles.gridItem}>
                <label htmlFor="pincode">Pincode</label>
                <input type="text" id="pincode" className={styles.input} />
              </div>
              <div className={styles.gridItem}>
                <label htmlFor="state">State</label>
                <input type="text" id="state" className={styles.input} />
              </div>
              <div className={styles.gridItem}>
                <label htmlFor="address">Address</label>
                <input type="text" id="address" className={styles.input} />
              </div>
              <div className={styles.gridItem}>
                <label htmlFor="city">City</label>
                <input type="text" id="city" className={styles.input} />
              </div>
              <div className={styles.gridItem}>
                <label htmlFor="locality">Locality</label>
                <input type="text" id="locality" className={styles.input} />
              </div>
              <div className={styles.gridItem}>
                <label htmlFor="PhoneNumber">PhoneNumber</label>
                <input type="text" id="phonenumber" className={styles.input} />
              </div>
              <div className={styles.gridItem}>
                <label htmlFor="Place">Place</label>
                <input type="text" id="place" className={styles.input} />
              </div>
              <div className={styles.gridItem}>
                <label htmlFor="Nation">Nation</label>
                <input type="text" id="nation" className={styles.input} />
              </div>
              <div className={styles.gridItem}>
                <label htmlFor="street">Street</label>
                <input type="text" id="street" className={styles.input} />
              </div>
              <div className={styles.gridItem}>
                <label htmlFor="Country">Country</label>
                <input type="text" id="country" className={styles.input} />
              </div>
              </div>
              <button onClick={handleSaveClick} className={styles.saveButton}>Save Changes</button>
            </div>
          </div>
        </div>
      )}
      {isPopupVisible && (
        <div className={styles.popup}>
          <div className={styles.popupContent}>
            <FontAwesomeIcon icon={faCheckCircle} className={styles.popupIcon} />
            <p>Profile successfully updated!</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
      {isCartOpen && (
        <div className={styles.cartDropdown}>
          <FontAwesomeIcon icon={faTimes} className={styles.closeIcon} onClick={closeCart} />
          <div className={styles.cartContent}>
            <div className={styles.orderCard}>
              <img src="../m3.png" alt="Product" className={styles.smallProductImage} />
              <div className={styles.productDetails}>
                <h3>Product Name</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>2 pcs<br/>Wednesday, 20 March 2020</p>
                <div className={styles.stars}>★★★★☆</div>
              </div>
              <div className={styles.productPrice}>
                <strong>$95.50</strong>
                <div className={styles.shipped} onClick={handleDeliveredClick}>
                  {isDelivered ? 'Delivered' : 'Shipped'}
                </div>
              </div>
            </div>
            <div className={styles.deliveryAddress}>
              <p>Delivery Address:</p>
              <h3>Kolkata, Orissa 1470065</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className={styles.trackOrder}>
              <h4>Track the Order</h4>
              <div className={styles.trackStep}>
                <FontAwesomeIcon icon={faCheckCircle} className={styles.checkmark} />
                <p>Ordered</p>
                <div className={styles.trackLine}></div>
                <FontAwesomeIcon icon={faCheckCircle} className={styles.checkmark} />
                <p>Shipped</p>
                <div className={styles.trackLine}></div>
                <FontAwesomeIcon
                  icon={isDelivered ? faCheckCircle : faCircle}
                  className={styles.checkmark}
                  onClick={handleDeliveredClick}
                />
                <p>Delivered</p>
              </div>
            </div>
            <div className={styles.orderSummary}>
              <div className={styles.orderTotal}>
                <h4>Cart Total</h4>
                <p>Product×1: $95.50</p>
                <p>GST: $95.5</p>
                <p>Delivery charge: $95.5</p>
                <p>Service Charge: $95.00</p>
                <p><strong>Total: $50056.00</strong></p>
              </div>
              <div className={styles.orderDetails}>
                <h4>Order Details</h4>
                <p>Product Name: iPhone 13 Pro</p>
                <p>Order at: 5:00 AM</p>
                <p>Date: 23/12/2023</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
