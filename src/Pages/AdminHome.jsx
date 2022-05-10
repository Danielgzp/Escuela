import React from "react";
import { Link } from "react-router-dom";

import AdminHeader from "../Components/AdminHeader/AdminHeader";
import AdminMenu from "../Components/AdminMenu/AdminMenu";

const AdminHome = () => {
  return (
    <div>
      <div>
        <AdminMenu></AdminMenu>
      </div>
      <div>
        <section class="full-box dashboard-contentPage">
          <AdminHeader></AdminHeader>

          {/* Cotenido principal  */}
          <div class="container-fluid">
            <div class="page-header">
              <h1 class="text-titles">
                Administración<small> Usuarios registrados:</small>
              </h1>
            </div>
          </div>

          {/* Usuarios registrados  */}
          <div className="full-box text-center" /*style="padding: 30px 10px;"*/>
            <Link to="/admin/AddNewAdmin">
              <article class="full-box tile">
                <div class="full-box tile-title text-center text-titles text-uppercase">
                  Administradores
                </div>
                <div class="full-box tile-icon text-center">
                  <i class="zmdi zmdi-account"></i>
                </div>
                <div class="full-box tile-number text-titles">
                  <p class="full-box">7</p>
                  <small>Registrados</small>
                </div>
              </article>
            </Link>
            <Link to="/admin/AddNewTeacher">
              <article class="full-box tile">
                <div class="full-box tile-title text-center text-titles text-uppercase">
                  Docentes
                </div>
                <div class="full-box tile-icon text-center">
                  <i class="zmdi zmdi-male-alt"></i>
                </div>
                <div class="full-box tile-number text-titles">
                  <p class="full-box">10</p>
                  <small>Registrados</small>
                </div>
              </article>
            </Link>
            <Link to="/admin/AddNewStudent">
              <article class="full-box tile">
                <div class="full-box tile-title text-center text-titles text-uppercase">
                  Estudiantes
                </div>
                <div class="full-box tile-icon text-center">
                  <i class="zmdi zmdi-face"></i>
                </div>
                <div class="full-box tile-number text-titles">
                  <p class="full-box">70</p>
                  <small>Registrados</small>
                </div>
              </article>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AdminHome;
