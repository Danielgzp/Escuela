import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Swal from "sweetalert2";

import "./styles.css";

import admin from "../../images/admin.jpg";

const AdminMenu = () => {
  console.log(Swal);
  const [menu, setMenu] = useState({
    subMenu: "",
    btnSubMenu: "",
    iconSubMenuBtn: "",
  });

  useEffect(() => {
    setMenu({
      subMenu: document.querySelector(".btn-sideBar-SubMenu"),
      btnSubMenu: document.querySelectorAll(
        "ul.dashboard-sideBar-Menu > li > ul"
      ),

      iconSubMenuBtn: document.querySelectorAll(
        "a.btn-sideBar-SubMenu > i.zmdi-caret-down"
      ),
    });
  }, []);

  const handleOnClick = () => {
    for (var i = 0; i < menu.iconSubMenuBtn.length; i++) {
      if (menu.btnSubMenu[i].classList.contains("show-sideBar-SubMenu")) {
        menu.btnSubMenu[i].classList.remove("show-sideBar-SubMenu");
        menu.iconSubMenuBtn[i].classList.remove("zmdi-hc-rotate-180");

        // menu.btnSubMenu[i].classList.remove("show-sideBar-SubMenu");
        // menu.iconSubMenuBtn[i].classList.remove("zmdi-hc-rotate-180");
      } else {
        menu.iconSubMenuBtn[i].classList.add("zmdi-hc-rotate-180");
        menu.btnSubMenu[i].classList.add("show-sideBar-SubMenu");
      }
      // menu.iconSubMenuBtn[i].classList.add("zmdi-hc-rotate-180");
      // menu.btnSubMenu[i].classList.add("show-sideBar-SubMenu");
    }
  };

  // useEffect(() => {
  //   setMenu(document.querySelector(".menu"));
  // }, []);

  // const handleMenuShow = () => {
  //   setShowMobileMenu(!showMobileMenu);
  //   if (showMobileMenu) {
  //     menu.classList.add("open");
  //   } else {
  //     menu.classList.remove("open");
  //   }
  // };
  //////////////////////////////////importante///////////////////////////////////////////////////////
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
    <div>
      <ul id="slide-out 2" class="sidenav">
        <ul>
          <li>
            <div class="user-view">
              <div class="background"></div>
            </div>
          </li>
        </ul>
        {/* Nombre del Colegio  */}
        <div className="full-box text-uppercase text-center text-titles dashboard-sideBar-title">
          U.E Colegio Fe y Alegria San Francisco
          {/* <i className="zmdi zmdi-close btn-menu-dashboard visible-xs" /> */}
        </div>
        {/* INFORMACIÓN DE USUARIO, PARTE LATERAL */}
        <div className="full-box dashboard-sideBar-UserInfo">
          <figure className="full-box">
            <img src={admin} alt="UserIcon" />
            <figcaption className="text-center text-titles">
              El admin pá
            </figcaption>
          </figure>
          {/* Botones de iniciar sesión y configuración*/}
          <ul className="full-box list-unstyled text-center">
            <li>
              <a href="#!">
                <i className="zmdi zmdi-settings" />
              </a>
            </li>
            <li
              onClick={() => {
                Swal.fire({
                  title: "¿Estas seguro?",
                  text: "La sesión actual se cerrará",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: '<i class="zmdi zmdi-run"></i> Salir',
                }).then((result) => {
                  if (result.isConfirmed) {
                    window.location.href = "/login";
                  }
                });
              }}
            >
              <a href="#!" className="btn-exit-system">
                <i className="zmdi zmdi-power" />
              </a>
            </li>
          </ul>
        </div>
        {/* Menu de barra deslizante*/}
        <ul className="list-unstyled full-box dashboard-sideBar-Menu">
          <li>
            <Link to="/admin">
              <i className="zmdi zmdi-view-dashboard zmdi-hc-fw"></i> Home
            </Link>
          </li>
          {/*Administrar */}
          <li>
            <a
              href="#!"
              className="btn-sideBar-SubMenu"
              onClick={() => handleOnClick()}
            >
              <i className="zmdi zmdi-case zmdi-hc-fw" /> Administrar{" "}
              <i className="zmdi zmdi-caret-down pull-right" />
            </a>
            {/* Submenú de Administrar*/}
            <ul className="list-unstyled full-box">
              <li>
                <a href="subject.html">
                  <i className="zmdi zmdi-book zmdi-hc-fw" />
                  {"   "} Materias
                </a>
              </li>
              <li>
                <a href="section.html">
                  <i className="zmdi zmdi-graduation-cap zmdi-hc-fw" />
                  {"   "} Secciones
                </a>
              </li>
            </ul>
          </li>
          {/* Usuarios */}
          <li>
            <a
              href="#!"
              className="btn-sideBar-SubMenu"
              onClick={() => handleOnClick()}
            >
              <i className="zmdi zmdi-account-add zmdi-hc-fw" /> Usuarios{" "}
              <i className="zmdi zmdi-caret-down pull-right" />
            </a>
            {/* Submenú de usuarios*/}
            <ul className="list-unstyled full-box">
              <li>
                <Link to="/admin/AddNewAdmin">
                  <i className="zmdi zmdi-account zmdi-hc-fw" /> Administradores
                </Link>
              </li>
              <li>
                <Link to="/admin/AddNewTeacher">
                  <i className="zmdi zmdi-male-alt zmdi-hc-fw" /> Docentes
                </Link>
              </li>
              <li>
                <Link to="/admin/AddNewStudent">
                  <i className="zmdi zmdi-face zmdi-hc-fw" /> Estudiantes
                </Link>
              </li>
            </ul>
          </li>
          {/* Metodos de Pago
				<li>
					<a href="#!" class="btn-sideBar-SubMenu">
						<i class="zmdi zmdi-card zmdi-hc-fw"></i> Payments <i class="zmdi zmdi-caret-down pull-right"></i>
					</a>
					<ul class="list-unstyled full-box">
						<li>
							<a href="registration.html"><i class="zmdi zmdi-money-box zmdi-hc-fw"></i> Registration</a>
						</li>
						<li>
							<a href="payments.html"><i class="zmdi zmdi-money zmdi-hc-fw"></i> Payments</a>
						</li>
					</ul>
				</li>
				<li>
				

					<a href="#!" class="btn-sideBar-SubMenu">
						<i class="zmdi zmdi-shield-security zmdi-hc-fw"></i> Settings School <i class="zmdi zmdi-caret-down pull-right"></i>
					</a>
					<ul class="list-unstyled full-box">
						<li>
							<a href="school.html"><i class="zmdi zmdi-balance zmdi-hc-fw"></i> School Data</a>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	        */}
        </ul>
      </ul>
    </div>
  );
};

export default AdminMenu;
