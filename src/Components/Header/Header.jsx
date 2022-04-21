import React, { useEffect, useState } from "react";

import "./styles.css";

import logo from "../../images/logofeyalegria 2.png";
import { Link } from "react-router-dom";

const Header = () => {
  let [showMobileMenu, setShowMobileMenu] = useState(false);
  const [menu, setMenu] = useState("");

  useEffect(() => {
    setMenu(document.querySelector(".mobile-menu"));
  }, []);

  const handleMenuShow = () => {
    setShowMobileMenu(!showMobileMenu);
    if (showMobileMenu) {
      menu.classList.add("open");
    } else {
      menu.classList.remove("open");
    }
  };

  return (
    <header>
      <nav className="mobile-menu side-nav" id="side-nav">
        <ul className="menu">
          <Link to="#">
            <li>
              <i className="material-icons icon-white">account_balance</i>
              Colegio
            </li>
          </Link>
          <Link to="#">
            <li>
              <i className="material-icons icon-white">photo_library</i>
              Galeria
            </li>
          </Link>
          <Link to="#">
            <li>
              <i className="material-icons icon-white">description</i>
              Publicaciones
            </li>
          </Link>
          <Link to="#">
            <li>
              <i className="material-icons icon-white">contacts</i>
              Contacto
            </li>
          </Link>
          <Link to="/login">
            <li>
              <i className="material-icons icon-white">account_circle</i>
              Login
            </li>
          </Link>
        </ul>
      </nav>
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="Logo del colegio" className="logo" />
          <span>U.E.C Fe y Alegría San Francisco </span>
        </Link>
      </div>
      <div
        className="menu-container"
        onClick={() => {
          handleMenuShow();
        }}
      >
        <i className="material-icons icon-white" id="burger">
          menu
        </i>
      </div>
    </header>
  );
};

export default Header;
