import React from "react";
import { Link } from "react-router-dom";

const AdminContainer = () => {
  

  return (
    <div>
      {/* Usuarios registrados  */}
      <div className="full-box text-center" style={{padding: "30px 10px"}}>
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
    </div>
  );
};

export default AdminContainer;
