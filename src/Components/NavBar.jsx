import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "../css/NavBar.module.css";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={styles.navbar}>
      <FontAwesomeIcon
        icon={faBars}
        className={styles.menuIcon}
        onClick={toggleMenu}
      />
      <nav className={`${styles.navMenu} ${showMenu ? styles.showMenu : ""}`}>
        <span className={styles.navItem}>All</span>
        <span className={styles.navItem}>Fashion</span>
        <span className={styles.navItem}>Electronics</span>
        <span className={styles.navItem}>Home</span>
        <span className={styles.navItem}>Books</span>
        <span className={styles.navItem}>Toys</span>
        <span className={styles.navItem}>Sports</span>
        <span className={styles.navItem}>Beauty</span>
        <span className={styles.navItem}>Grocery</span>
        <span className={styles.navItem}>Health</span>
        <span className={styles.navItem}>Shoes</span>
        <span className={styles.navItem}>Laptops</span>
      </nav>
      <div className={styles.searchBar}>
        <FontAwesomeIcon icon={faSearch} className={styles.searchIcon} />
        <input
          type="text"
          placeholder="Search Here ..."
          className={styles.searchInput}
        />
      </div>
      {showMenu && <div className={styles.overlay} onClick={toggleMenu}></div>}
    </div>
  );
};

export default NavBar;
