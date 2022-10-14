import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { MdMenu, MdMenuOpen } from "react-icons/md";
import cvLogo from "../../Images/mira2.ico"
import "./Navbar.css";

export const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="nav-height">
      <div className="nav">
        <Link className="nav-logo-link" to="/">
          <div className="nav-box">
          <img className="nav-logo-img" src={cvLogo} alt="CV Logo" onClick={() => setShowNav(false)} />
          <h1 className="nav-h1">ShooterAim</h1>
          </div>
        </Link>
        <div className="mobile-menu-icon" onClick={() => setShowNav(!showNav)} role="button">
          {showNav ? <MdMenuOpen size={48} /> : <MdMenu size={48} />}
        </div>
        <ul className={!showNav ? "nav-items hide-item" : "nav-items"}>
          <li className="nav-li">
            <NavLink className="nav-link" to="/games" onClick={() => setShowNav(false)} role="button">
              Games
            </NavLink>
          </li>
          <li className="nav-li">
            <NavLink className="nav-link" to="/contact" onClick={() => setShowNav(false)} role="button">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
