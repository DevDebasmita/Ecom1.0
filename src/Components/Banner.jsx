// src/components/Banner.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import styles from '../css/Banner.module.css';

const Banner = () => {
  return (
    <div className={styles.bannerContainer}>
      <img src="../phone.jpeg" alt="Banner" className={styles.bannerImage} />
      <div className={styles.overlay}>
        <div className={styles.textContainer}>
          <p className={styles.bannerSubtitle}>iPhone 14 Series</p>
          <h1 className={styles.bannerTitle}>Up to 10% <br/>off Voucher</h1>
          <a href="#" className={styles.shopNow}>Shop Now &#8594;</a>
        </div>
        <div className={styles.navigation}>
          <FontAwesomeIcon icon={faChevronLeft} className={styles.chevronLeft} />
          <FontAwesomeIcon icon={faChevronRight} className={styles.chevronRight} />
        </div>
      </div>
    </div>
  );
}

export default Banner;
