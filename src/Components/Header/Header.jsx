import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./styles.css";

import logo2 from "../../images/logo2.svg";
//import M from "materialize-css";

const Header = () => {
  let [showMobileMenu, setShowMobileMenu] = useState(false);
  const [menu, setMenu] = useState("");

  useEffect(() => {
    setMenu(document.querySelector(".menu"));
  }, []);

  const handleMenuShow = () => {
    setShowMobileMenu(!showMobileMenu);
    if (showMobileMenu) {
      menu.classList.add("open");
    } else {
      menu.classList.remove("open");
    }
  };

  // document.addEventListener("DOMContentLoaded", function () {
  //   var elems = document.querySelectorAll(".sidenav");
  //   var instances = M.Sidenav.init(elems, {
  //     draggable: true,
  //   });
  // });
  // document.addEventListener("DOMContentLoaded", function () {
  //   var elems = document.querySelectorAll(".collapsible");
  //   var instances = M.Collapsible.init(elems, {
  //     accordion: true,
  //   });
  // });

  return (
    <header>
      <nav>
        <div className="logo-container">
          <Link to="/">
            <img src={logo2} alt="Logo del colegio" className="logo" />
            <span>U.E.C Fe y Alegría San Francisco </span>
          </Link>
        </div>
        <div
          className="btn-menu"
          // onClick={() => {
          //   handleMenuShow();
          // }}
        >
          <i
            data-target="slide-out"
            className="sidenav-trigger material-icons icon-white"
            id="burger"
          >
            menu
          </i>
        </div>
        <div className="slider-container">
          <ul id="slide-out" class="sidenav slide-menu">
            <li className="no-padding">
              <ul className="collapsible collapsible-accordion">
                <div className="background-nav"></div>
                <li>
                  <div className="user-view">
                    <img className="circle" src={logo2} />

                    <span className="white-text name">John Doe</span>

                    <span className="white-text email">
                      jdandturk@gmail.com
                    </span>
                  </div>
                </li>
                <li>
                  <a className="collapsible-header">
                    <i className="material-icons icon-white">account_balance</i>
                    Quienes Somos
                    <i className="material-icons right">arrow_drop_down</i>
                  </a>
                  <div className="collapsible-body">
                    <ul>
                      <li>
                        <Link to="/history">
                          <i className="tiny material-icons icon-white">
                            chevron_right
                          </i>
                          Historia
                        </Link>
                      </li>
                      <li>
                        <Link to="/mision-vision">
                          <i className="tiny material-icons icon-white">
                            chevron_right
                          </i>
                          Mision y Vision
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/gallery">
                <i className="material-icons icon-white">photo_library</i>
                Galeria
              </Link>
            </li>

            <li>
              <Link to="#">
                <i className="material-icons icon-white">description</i>
                Publicaciones
              </Link>
            </li>

            <li>
              <Link to="#">
                <i className="material-icons icon-white">contacts</i>
                Contacto
              </Link>
            </li>

            <li>
              <Link to="/login">
                <i className="material-icons icon-white">account_circle</i>
                Login
              </Link>
            </li>
          </ul>
        </div>
        <ul className="right hide-on-med-and-down"></ul>
      </nav>
    </header>
  );
};

export default Header;
