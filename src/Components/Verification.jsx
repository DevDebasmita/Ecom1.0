
import { Link } from 'react-router-dom';
import React from 'react';
import styles from '../css/Verification.module.css';
const Verification=() =>{
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img 
          src="../verify.png" 
          alt="Verification" 
          className={styles.image}
        />
      </div>
      <div className={styles.formContainer}>
        <h1>Verification</h1>
        <form>
          <div className={styles.textField}>
            <input 
              type="text" 
              maxLength="6" 
              placeholder="Enter 6-digit code" 
              className={styles.input}
            />
          </div>
          <button type="submit" className={styles.submitBtn}>Submit</button>
        

                
        </form>
      </div>
    </div>
  );
}

export default Verification;



