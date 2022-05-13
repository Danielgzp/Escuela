import React, { useEffect, useState } from "react";

import Swal from "sweetalert2";

import M from "materialize-css";

const AdminHeader = () => {
  const [styles, setStyles] = useState({
    body: "",
    sidebar: "",
  });

  document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll(".sidenav");
    var instances = M.Sidenav.init(elems, {});
  });

  useEffect(() => {
    setStyles({
      body: document.querySelector(".dashboard-contentPage"),
      sidebar: document.querySelector(".dashboard-sideBar"),
    });
  }, []);

  const handleHelper = () => {
    Swal.fire({
      icon: "info",
      title: "AYUDA",
      text: "Si tiene algún problema contactar con el hijo de Naibys",
    });
  };

  const handleSidebarMenu = () => {
    // Para eliminar propeidas de css con Javascript ////
    // styles.sidebar.style.width = "270px";
    // styles.sidebar.style.opacity = "1";

    if (styles.sidebar.classList.contains("hide-sidebar")) {
      styles.body.classList.remove("no-paddin-left");
      styles.sidebar.classList.remove("hide-sidebar").add("show-sidebar");
    }
    if (styles.sidebar.classList.contains("show-sidebar")) {
      styles.body.classList.add("no-paddin-left");
      styles.sidebar.classList.add("hide-sidebar").remove("show-sidebar");
    } else {
      styles.sidebar.classList.add("show-sidebar");
    }
  };

  return (
    <React.Fragment>
      <nav class="full-box dashboard-Navbar">
        <ul class="full-box list-unstyled text-right">
          <li class="pull-left">
            <a
              href="#!"
              class="btn-menu-dashboard sidenav-trigger"
              data-target="slide-out 2"
            >
              <i class="zmdi zmdi-more-vert"></i>
            </a>
          </li>
          {/*
				<li>
					<a href="#!" class="btn-Notifications-area">
						<i class="zmdi zmdi-notifications-none"></i>
						<span class="badge">7</span>
					</a>
				</li>
				<li>
					<a href="#!" class="btn-search">
						<i class="zmdi zmdi-search"></i>
					</a>
				</li>
				*/}
          <li>
            <a href="#!" class="btn-modal-help" onClick={() => handleHelper()}>
              <i class="zmdi zmdi-help-outline"></i>
            </a>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default AdminHeader;
