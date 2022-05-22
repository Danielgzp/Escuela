import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import AdminHeader from "../Components/AdminHeader/AdminHeader";

import AdminMenu from "../Components/AdminMenu/AdminMenu";
import Tables from "../Components/Tables/Tables";

import { TablesFadeIn } from "../js/tables";
import M from "materialize-css";
import DataTable from "../Components/Tables/MyDataTable";

const AddAdmin = () => {
  
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll("select");
      var instances = M.FormSelect.init(elems, {});
    });
  
  return (
    <div>
      <AdminMenu></AdminMenu>

      <section className="full-box dashboard-contentPage">
        <AdminHeader></AdminHeader>
        <div>
          <div className="container-fluid">
            <div className="page-header">
              <h1 className="text-titles">
                <i className="zmdi zmdi-account zmdi-hc-fw" /> Usuarios{" "}
                <small>Administradores</small>
              </h1>
            </div>
            <p className="lead">
              Puede añadir más administradores en este apartado
            </p>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-12">
                <ul className="nav nav-tabs">
                  <li className="active" onClick={() => TablesFadeIn()}>
                    <a href="#new" data-toggle="tab">
                      Nuevo Admin
                    </a>
                  </li>
                  <li onClick={() => TablesFadeIn()}>
                    <a href="#list" data-toggle="tab">
                      Administradores
                    </a>
                  </li>
                </ul>
                <div id="myTabContent" className="tab-content">
                  <div className="tab-pane fade active in" id="new">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-xs-12 col-md-10 col-md-offset-1">
                          <form action id="newAdmin-form">
                            <div className="personal">
                              <h4>Informacion personal</h4>
                              <div className="input-field">
                                <input
                                  id="namesAdmin"
                                  className="validate"
                                  type="text"
                                  required
                                />
                                <label for="namesAdmin">Nombres</label>
                              </div>
                              <div className="input-field">
                                <label for="last_nameAdmin">Apellidos</label>
                                <input
                                  id="last_nameAdmin"
                                  className="validate"
                                  type="text"
                                  required
                                />
                              </div>
                              <div className="input-field">
                                <label for="dniAdmin">Cédula</label>
                                <select id="dniAdmin">
                                  <option value=""></option>
                                  <option value="V">V</option>
                                  <option value="E">E</option>
                                </select>
                                <input
                                  id="dniNumberAdmin"
                                  className="validate"
                                  type="number"
                                  placeholder="0000000"
                                />
                              </div>
                              <div className="input-field">
                                <textarea
                                  id="addressAdmin"
                                  class="materialize-textarea"
                                  required
                                ></textarea>
                                <label for="addressAdmin">Direccion</label>
                              </div>

                              <div class="input-field">
                                <input
                                  id="dateAdmin"
                                  type="date"
                                  className="validate"
                                  required
                                />
                                <label for="dateAdmin">
                                  Fecha de nacimiento
                                </label>
                              </div>

                              <div className="input-field">
                                <label for="emailAdmin">Correo</label>
                                <input
                                  id="emailAdmin"
                                  className="validate"
                                  type="email"
                                />
                              </div>
                              <div className="input-field">
                                <label for="telephoneAdmin">Telefono</label>
                                <input
                                  id="telephoneAdmin"
                                  type="tel"
                                  class="validate"
                                />
                              </div>
                              <div>
                                <h6 for="sex">Sexo</h6>
                                <p>
                                  <label for="masculineAdmin">
                                    <input
                                      name="group1"
                                      id="masculineAdmin"
                                      type="radio"
                                      required
                                    />
                                    <span>Masculino</span>
                                  </label>
                                </p>
                                <p>
                                  <label for="femenineAdmin">
                                    <input
                                      name="group1"
                                      type="radio"
                                      id="femenineAdmin"
                                    />
                                    <span>Femenino</span>
                                  </label>
                                </p>
                              </div>
                              <div className="input-field">
                                <label for="adminFunction">
                                  Cargo del administrador
                                </label>
                                <input
                                  id="adminFunction"
                                  className="validate"
                                  type="text"
                                />
                              </div>
                              <div className="input-field">
                                <label for="pictureAdmin">Buscar foto...</label>
                                <div>
                                  <input type="text" readOnly />
                                  <input
                                    id="pictureAdmin"
                                    className="validate"
                                    type="file"
                                  />
                                </div>
                              </div>
                            </div>

                            <button
                              class="btn red waves-effect"
                              type="submit"
                              name="action"
                            >
                              Submit
                              <i class="material-icons right">send</i>
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <DataTable />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddAdmin;
