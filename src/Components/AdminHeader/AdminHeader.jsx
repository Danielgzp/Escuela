import React, { useEffect, useState } from "react";

const AdminHeader = () => {
  const [styles, setStyles] = useState({
    body: "",
    sidebar: "",
  });

  useEffect(() => {
    setStyles({
      body: document.querySelector(".dashboard-contentPage"),
      sidebar: document.querySelector(".dashboard-sideBar"),
    });
  }, []);

  const handleSidebarMenu = () => {
    if (styles.sidebar.classList.contains("hide-sidebar")) {
      styles.body.classList.remove("no-paddin-left");
      styles.sidebar.classList.remove("hide-sidebar").add("show-sidebar");
    } else {
      styles.body.classList.add("no-paddin-left");
      styles.sidebar.classList.add("hide-sidebar").remove("show-sidebar");
    }
  };

  //   $(".btn-menu-dashboard").on("click", function () {
  //     var body = $(".dashboard-contentPage");
  //     var sidebar = $(".dashboard-sideBar");
  //     if (sidebar.css("pointer-events") == "none") {
  //       body.removeClass("no-paddin-left");
  //       sidebar.removeClass("hide-sidebar").addClass("show-sidebar");
  //     } else {
  //       body.addClass("no-paddin-left");
  //       sidebar.addClass("hide-sidebar").removeClass("show-sidebar");
  //     }
  //   });

  return (
    <React.Fragment>
      <nav class="full-box dashboard-Navbar">
        <ul class="full-box list-unstyled text-right">
          <li class="pull-left">
            <a
              href="#!"
              class="btn-menu-dashboard"
              onClick={() => handleSidebarMenu()}
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
            <a href="#!" class="btn-modal-help">
              <i class="zmdi zmdi-help-outline"></i>
            </a>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default AdminHeader;