/**
 * Navbar component
 */

import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import styles from "../styles/navbar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <div className={styles.logoCon}>
        <img className={styles.logo} src={logo} alt="" />
        <h1 className={styles.logoTitle}>My Fitness Buddy</h1>
      </div>
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
    </nav>
  );
};

export default NavBar;
