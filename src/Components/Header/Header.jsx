import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./styles.css";

import logo2 from "../../images/logo2.svg";
import M from "materialize-css";

const Header = () => {
  let [showMobileMenu, setShowMobileMenu] = useState(false);
  const [state, setState] = useState({
    menu: "",
    iconRotate: "",
    burgerMenu: "",
  });

  useEffect(() => {
    var elems = document.querySelectorAll(".sidenav");
    var instances = M.Sidenav.init(elems, {
      draggable: true,
    });
    var elems2 = document.querySelectorAll(".collapsible");
    var instances2 = M.Collapsible.init(elems2, {
      accordion: true,
    });
    var elems3 = document.querySelectorAll(".dropdown-trigger");
    var instances3 = M.Dropdown.init(elems3, {
      coverTrigger: false,
      hover: true,
    });

    setState({
      menu: document.querySelector(".menu"),
      iconRotate: document.querySelector("i.material-icons.right"),
      burgerMenu: document.querySelector(".btn-menu__container"),
    });
  }, []);

  const handleMenuShow = () => {
    setShowMobileMenu(!showMobileMenu);
    if (showMobileMenu) {
      state.menu.classList.add("open");
    } else {
      state.classList.remove("open");
    }
  };

  const handleRotateClick = () => {
    if (state.iconRotate.classList.contains("zmdi-hc-rotate-180")) {
      state.iconRotate.classList.remove("zmdi-hc-rotate-180");
    } else {
      state.iconRotate.classList.add("zmdi-hc-rotate-180");
    }
  };

  return (
    <header>
      <ul id="dropdown1" className="dropdown-content">
        <li>
          <Link to="/history">Historia</Link>
        </li>
        <li className="divider"></li>
        <li>
          <Link to="/mision-vision">Mision y Vision</Link>
        </li>
        <li className="divider"></li>
      </ul>
      <ul id="dropdown2" className="dropdown-content">
        <li>
          <Link to="/services/biblioteca">Biblioteca</Link>
        </li>
        <li className="divider"></li>
        <li>
          <Link to="/mision-vision">Computación</Link>
        </li>
        <li className="divider"></li>
        <li>
          <Link to="#">Psicología</Link>
        </li>
        <li className="divider"></li>
        <li>
          <Link to="#">Psicopedagogía</Link>
        </li>
      </ul>
      <div className="slider-container">
        <ul id="slide-out" className="sidenav slide-menu">
          <li className="no-padding">
            <ul className="collapsible collapsible-accordion">
              <div className="background-nav"></div>

              <div className="user-view">
                <div className="background"></div>
                <img className="circle" src={logo2} />

                <span className="white-text name center">
                  U.E Colegio Fe y Alegria San Francisco
                </span>
              </div>
              <li>
                <Link to="/">
                  <i className="material-icons icon-white">home</i> 
                  Home
                </Link>
              </li>
              <li>
                <a
                  className="collapsible-header"
                  onClick={() => handleRotateClick()}
                >
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
          <ul className="collapsible">
            <li>
              <a
                className="collapsible-header"
                onClick={() => handleRotateClick()}
              >
                <i className="material-icons">school</i>
                Servicios
                <i className="material-icons right">arrow_drop_down</i>
              </a>
              <div className="collapsible-body">
                <ul>
                  <li>
                    <Link to="/services/biblioteca">
                      <i className="tiny material-icons icon-white">
                        chevron_right
                      </i>
                      {/* <i className="tiny material-icons icon-white">chevron_right</i> */}
                      Biblioteca
                    </Link>
                  </li>

                  <li>
                    <Link to="/mision-vision">
                      <i className="tiny material-icons icon-white">
                        chevron_right
                      </i>
                      {/* <i className="tiny material-icons icon-white">chevron_right</i> */}
                      Computación
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          <li>
            <Link to="/login">
              <i className="material-icons icon-white">account_circle</i>
              Login
            </Link>
          </li>
        </ul>
      </div>

      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper fixed">
            <Link to="/" className="logo-big left">
              <img src={logo2} alt="Logo del colegio" className="logo" />
              <span>U.E.C Fe y Alegría San Francisco</span>
            </Link>
            <ul className="right nav-navigator__list">
              {/* <!-- Dropdown Trigger --> */}
              <li>
                <a
                  className="dropdown-trigger"
                  href="#!"
                  data-target="dropdown1"
                >
                  Quienes Somos
                  <i className="material-icons right">arrow_drop_down</i>
                </a>
              </li>
              <li>
                <Link to="/gallery">
                  {/* <i className="material-icons icon-white">photo_library</i> */}
                  Galeria
                </Link>
              </li>
              <li>
                <Link to="#">
                  {/* <i className="material-icons icon-white">description</i> */}
                  Publicaciones
                </Link>
              </li>
              <li>
                <Link to="/admin">
                  {/* <i className="material-icons icon-white">description</i> */}
                  ADMIN
                </Link>
              </li>

              {/* <li>
                <Link to="#">
                   <i className="material-icons icon-white">contacts</i> 
                  Contacto
                </Link>
              </li> */}
              <li>
                {/* <i className="material-icons icon-white">contacts</i> */}
                <a
                  className="dropdown-trigger"
                  href="#!"
                  data-target="dropdown2"
                >
                  Servicios
                  <i className="material-icons right">arrow_drop_down</i>
                </a>
              </li>

              <li>
                <Link to="/login">
                  {/* <i className="material-icons icon-white">account_circle</i> */}
                  Login
                </Link>
              </li>
            </ul>
            <div className="right btn-menu__container">
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
            </div>

            <ul className="right hide-on-med-and-down"></ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

//  <div className="slider-container">
//               <div className="background-slider"></div>
//               <ul id="slide-out" className="sidenav slide-menu">
//                 <li className="no-padding">
//                   <ul className="collapsible collapsible-accordion">
//                     <div className="background-nav"></div>

//                     <div className="user-view">
//                       <div className="background"></div>
//                       <img className="circle" src={logo2} />

//                       <span className="white-text name center">
//                         U.E Colegio Fe y Alegria San Francisco
//                       </span>
//                     </div>

//                     <li>
//                       <a
//                         className="collapsible-header"
//                         onClick={() => handleRotateClick()}
//                       >
//                         <i className="material-icons icon-white">
//                           account_balance
//                         </i>
//                         Quienes Somos
//                         <i className="material-icons right">arrow_drop_down</i>
//                       </a>
//                       <div className="collapsible-body">
//                         <ul>
//                           <li>
//                             <Link to="/history">
//                               <i className="tiny material-icons icon-white">
//                                 chevron_right
//                               </i>
//                               Historia
//                             </Link>
//                           </li>
//                           <li>
//                             <Link to="/mision-vision">
//                               <i className="tiny material-icons icon-white">
//                                 chevron_right
//                               </i>
//                               Mision y Vision
//                             </Link>
//                           </li>
//                         </ul>
//                       </div>
//                     </li>
//                   </ul>
//                 </li>
//                 <li>
//                   <Link to="/gallery">
//                     <i className="material-icons icon-white">photo_library</i>
//                     Galeria
//                   </Link>
//                 </li>

//                 <li>
//                   <Link to="#">
//                     <i className="material-icons icon-white">description</i>
//                     Publicaciones
//                   </Link>
//                 </li>
//                 <ul className="collapsible">
//                   <li>
//                     <a
//                       className="collapsible-header"
//                       onClick={() => handleRotateClick()}
//                     >
//                       <i className="material-icons">school</i>
//                       Servicios
//                       <i className="material-icons right">arrow_drop_down</i>
//                     </a>
//                     <div className="collapsible-body">
//                       <ul>
//                         <li>
//                           <Link to="/services/biblioteca">
//                             <i className="tiny material-icons icon-white">
//                               chevron_right
//                             </i>
//                             {/* <i className="tiny material-icons icon-white">chevron_right</i> */}
//                             Biblioteca
//                           </Link>
//                         </li>

//                         <li>
//                           <Link to="/mision-vision">
//                             <i className="tiny material-icons icon-white">
//                               chevron_right
//                             </i>
//                             {/* <i className="tiny material-icons icon-white">chevron_right</i> */}
//                             Computación
//                           </Link>
//                         </li>
//                       </ul>
//                     </div>
//                   </li>
//                 </ul>
//                 <li>
//                   <Link to="/login">
//                     <i className="material-icons icon-white">account_circle</i>
//                     Login
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//             <ul className="right hide-on-med-and-down"></ul>
//           </div>
