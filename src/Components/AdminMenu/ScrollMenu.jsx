import React from "react";

const ScrollMenu = () => {
  return (
    <section className="full-box dashboard-contentPage mCustomScrollbar _mCS_2 mCS-autoHide mCS_no_scrollbar">
      <div
        id="mCSB_2"
        className="mCustomScrollBox mCS-dark-thin mCSB_vertical mCSB_inside"
        style={{ maxHeight: "none" }}
        tabIndex={0}
      >
        <div
          id="mCSB_2_container"
          className="mCSB_container mCS_y_hidden mCS_no_scrollbar_y"
          style={{ position: "relative", top: 0, left: 0 }}
          dir="ltr"
        >
          {/* Barra de navegación*/}
          <nav className="full-box dashboard-Navbar">
            <ul className="full-box list-unstyled text-right">
              <li className="pull-left">
                <a href="#!" className="btn-menu-dashboard">
                  <i className="zmdi zmdi-more-vert" />
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
					<a href="#!" class="btn-search">r
						<i class="zmdi zmdi-search"></i>
					</a>
				</li>
				*/}
              <li>
                <a href="#!" className="btn-modal-help">
                  <i className="zmdi zmdi-help-outline" />
                </a>
              </li>
            </ul>
          </nav>
          {/* Cotenido principal */}
          <div className="container-fluid">
            <div className="page-header">
              <h1 className="text-titles">
                Administración<small> Usuarios registrados:</small>
              </h1>
            </div>
          </div>
          {/* Usuarios registrados */}
          <div
            className="full-box text-center"
            style={{ padding: "30px 10px" }}
          >
            <article className="full-box tile">
              <div className="full-box tile-title text-center text-titles text-uppercase">
                Administradores
              </div>
              <div className="full-box tile-icon text-center">
                <i className="zmdi zmdi-account" />
              </div>
              <div className="full-box tile-number text-titles">
                <p className="full-box">7</p>
                <small>Registrados</small>
              </div>
            </article>
            <article className="full-box tile">
              <div className="full-box tile-title text-center text-titles text-uppercase">
                Docentes
              </div>
              <div className="full-box tile-icon text-center">
                <i className="zmdi zmdi-male-alt" />
              </div>
              <div className="full-box tile-number text-titles">
                <p className="full-box">10</p>
                <small>Registrados</small>
              </div>
            </article>
            <article className="full-box tile">
              <div className="full-box tile-title text-center text-titles text-uppercase">
                Estudiantes
              </div>
              <div className="full-box tile-icon text-center">
                <i className="zmdi zmdi-face" />
              </div>
              <div className="full-box tile-number text-titles">
                <p className="full-box">70</p>
                <small>Registrados</small>
              </div>
            </article>
          </div>
        </div>
        <div
          id="mCSB_2_scrollbar_vertical"
          className="mCSB_scrollTools mCSB_2_scrollbar mCS-dark-thin mCSB_scrollTools_vertical"
          style={{ display: "none" }}
        >
          <a href="#" className="mCSB_buttonUp" />
          <div className="mCSB_draggerContainer">
            <div
              id="mCSB_2_dragger_vertical"
              className="mCSB_dragger"
              style={{
                position: "absolute",
                minHeight: "30px",
                height: "0px",
                top: "0px",
              }}
            >
              <div
                className="mCSB_dragger_bar"
                style={{ lineHeight: "30px" }}
              />
            </div>
            <div className="mCSB_draggerRail" />
          </div>
          <a href="#" className="mCSB_buttonDown" />
        </div>
      </div>
    </section>
  );
};

export default ScrollMenu;
