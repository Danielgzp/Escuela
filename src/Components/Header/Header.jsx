import React, { useEffect, useState } from "react";

import "./styles.css";

import logo from "../../images/logofeyalegria 2.png";

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
      <nav className="mobile-menu">
        <ul className="menu">
          <a href="#">
            <li>
              <i className="material-icons icon-white">account_balance</i>Colegio
            </li>
          </a>
          <a href="#">
            <li>
              <i className="material-icons icon-white">photo_library</i>
              Galeria
            </li>
          </a>
          <a href="#">
            <li>
              <i className="material-icons icon-white">description</i>
              Publicaciones
            </li>
          </a>
          <a href="#">
            <li>
              <i className="material-icons icon-white">contacts</i>
              Contacto
            </li>
          </a>
          <a href="#">
            <li>
              <i className="material-icons icon-white">account_circle</i>
              Login
            </li>
          </a>
        </ul>
      </nav>
      <div className="logo-container">
        <img src={logo} alt="Logo del colegio" className="logo" />
        <h4 className="white-text">U.E.C Fe y Alegría San Francisco </h4>
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
