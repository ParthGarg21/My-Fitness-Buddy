/**
 * Navbar component
 */

import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <div className="logo-con">
        <img className="logo" src={logo} alt="" />
        <h1 className="logo-title">My Fitness Buddy</h1>
      </div>
      <ul className="nav-menu">
        <li className="nav-menu-item">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-menu-item">
          <Link className="nav-link" to="/about">
            About
          </Link>
        </li>
        <li className="nav-menu-item">
          <a className="nav-link" href="/#search-exercises">
            Excercise
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
