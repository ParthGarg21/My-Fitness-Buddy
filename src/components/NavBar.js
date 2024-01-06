/**
 * Navbar component
 */

import { Link } from "react-router-dom";
import logo from "../assets/images/Logo.png";
import styles from "../styles/navbar.module.css";
import { useState } from "react";

const NavBar = () => {
  const [isDisplay, setIsDisplay] = useState(false);
  const MobileMenu = (
    <section className={styles.mobileMenuContainer}>
      <ul className={styles.mobileMenu}>
        <li className={styles.navMenuItem}>
          <Link
            className={styles.navLink}
            to="/"
            onClick={() => {
              setIsDisplay(false);
            }}
          >
            Home
          </Link>
        </li>
        <li className={styles.navMenuItem}>
          <a
            className={styles.navLink}
            href="/#search-exercises"
            onClick={() => {
              setIsDisplay(false);
            }}
          >
            Excercise
          </a>
        </li>
      </ul>
    </section>
  );
  return (
    <nav className={styles.navBar}>
      <div className={styles.innerContainer}>
        <div className={styles.logoCon}>
          <img className={styles.logo} src={logo} alt="" />
          <h1 className={styles.logoTitle}>My Fitness Buddy</h1>
        </div>
        <span
          className={styles.hamburger + " material-symbols-outlined"}
          onClick={() => {
            setIsDisplay(!isDisplay);
          }}
        >
          menu
        </span>

        <ul className={styles.navMenu}>
          <li className={styles.navMenuItem}>
            <Link className={styles.navLink} to="/">
              Home
            </Link>
          </li>
          <li className={styles.navMenuItem}>
            <a className={styles.navLink} href="/#search-exercises">
              Excercise
            </a>
          </li>
        </ul>
      </div>

      {isDisplay ? MobileMenu : ""}
    </nav>
  );
};

export default NavBar;
