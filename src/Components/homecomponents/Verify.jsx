import React from 'react';
import styles from './verify.module.css';
import { Link } from 'react-router-dom';
const Verify = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftPanel}>
        <div className={styles.logoBox}>
          <div className={styles.logo}>Logo</div>
          <div className={styles.welcomeText}>Welcome to Selling Admin</div>
        </div>
      </div>
      <div className={styles.rightPanel}>
        <div className={styles.verificationBox}>
          <h2 className={styles.verificationTitle}>Verification</h2>
          <p className={styles.verificationText}>
            We sent a 4-digit verification code to your email to reset your password.
          </p>
          <div className={styles.codeInput}>
            <input type="text" maxLength="1" className={styles.inputBox} />
            <input type="text" maxLength="1" className={styles.inputBox} />
            <input type="text" maxLength="1" className={styles.inputBox} />
            <input type="text" maxLength="1" className={styles.inputBox} />
          </div>
          <a href="#" className={styles.resendLink}>Resend</a>
          <button className={styles.verifyButton}><Link to="/Login/Home"> VERIFY</Link></button>
        </div>
      </div>
    </div>
  );
};

export default Verify;
