/**
 * Navbar component
 */

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
          <a className="nav-link" href="/">
            Home
          </a>
        </li>
        <li className="nav-menu-item">
          <a className="nav-link" href="/about">
            About
          </a>
        </li>
        <li className="nav-menu-item">
          <a className="nav-link" href="/exercise">
            Excercise
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
