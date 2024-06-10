// import React from 'react'
import { Link } from "react-router-dom";
import styles from "../css/Create.module.css";
const CreateAccount = () => {
  return (
    <section className={styles.register}>
      <div className={styles.container}>
        <div className={styles.img}>
          <img
            src="./Createpage.jpg"
            alt="wait for load....."
          />
        </div>

        <div className={styles.login_area}>
          <div className={styles.login_box}>
            <form>
              <h2>Create An Account</h2>
              <h4>Enter Your Details below</h4>
              <div className={styles.text_field}>
                <input type="text" placeholder="Name" />
              </div>
              <div className={styles.text_field}>
                <input type="text" placeholder="Email or Phone Number" />
              </div>

              <div className={styles.text_field}>
                <input type="password" placeholder="Password" />
              </div>

              <button type="button" className={styles.btn}>
                Create account
              </button>
              <br />
              <button type="botton" className={styles.btn2}>
                <img
                  src="https://www.gstatic.com/images/branding/product/1x/gsa_64dp.png"
                  alt="Google logo"
                  className={styles.googleLogo}
                />{" "}
                Sign Up with Google
              </button>

              <div className={styles.link}>
                
                <Link to={'/'}><p>Already have account? Login</p></Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateAccount;
