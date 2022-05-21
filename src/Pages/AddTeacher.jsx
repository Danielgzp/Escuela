import React from "react";

import AdminHeader from "../Components/AdminHeader/AdminHeader";
import AdminMenu from "../Components/AdminMenu/AdminMenu";
import Tables from "../Components/Tables/Tables";

import { TablesFadeIn } from "../js/tables";
import M from "materialize-css";

const AddTeacher = () => {
  document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll("select");
    var instances = M.FormSelect.init(elems, {});
  });

  return (
    <div>
      <div>
        <AdminMenu></AdminMenu>
      </div>
      <div>
        <section className="full-box dashboard-contentPage">
          {/* Barra de navegación*/}
          <AdminHeader />
          {/*
			<li>
				<a href="#!" className="btn-Notifications-area">
					<i className="zmdi zmdi-notifications-none"></i>
					<span className="badge">7</span>
				</a>
			</li>
			<li>
				<a href="#!" className="btn-search">
					<i className="zmdi zmdi-search"></i>
				</a>
			</li>
			*/}

          {/* Content page */}
          <div className="container-fluid">
            <div className="page-header">
              <h1 className="text-titles">
                <i className="zmdi zmdi-male-alt zmdi-hc-fw" /> Usuarios{" "}
                <small>Docentes</small>
              </h1>
            </div>
            <p className="lead">
              En esta seccion puedes añadir nuevos docentes a la base de datos
            </p>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-12">
                <ul className="nav nav-tabs" style={{ marginBottom: "15px" }}>
                  <li className="active" onClick={() => TablesFadeIn()}>
                    <a href="#new" data-toggle="tab">
                      Nuevo docente
                    </a>
                  </li>
                  <li onClick={() => TablesFadeIn()}>
                    <a href="#list" data-toggle="tab">
                      Lista
                    </a>
                  </li>
                </ul>
                <div id="myTabContent" className="tab-content">
                  <div className="tab-pane fade active in" id="new">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-xs-12 col-md-10 col-md-offset-1">
                          <form action id="newTeacher-form">
                            <div className="personal">
                              <h4>Informacion personal</h4>
                              <div className="input-field">
                                <label for="namesTeacher">Nombres</label>
                                <input
                                  id="namesTeacher"
                                  className="validate"
                                  type="text"
                                />
                              </div>
                              <div className="input-field">
                                <label for="last_nameTeacher">Apellidos</label>
                                <input
                                  id="last_nameTeacher"
                                  className="validate"
                                  type="text"
                                />
                              </div>
                              <div className="input-field">
                                <label for="dniTeacher">Cédula</label>
                                <select>
                                  <option value=""></option>
                                  <option value="Venezolana">V</option>
                                  <option value="Extranjera">E</option>
                                </select>
                                <input
                                  id="dniTeacher"
                                  className="validate"
                                  type="number"
                                  placeholder="0000000"
                                />
                              </div>
                              <div className="input-field">
                                <textarea
                                  id="addressTeacher"
                                  class="materialize-textarea"
                                ></textarea>
                                <label for="addressTeacher">Direccion</label>
                              </div>

                              <div class="input-field">
                                <input
                                  id="dateTeacher"
                                  type="date"
                                  className="validate"
                                />
                                <label for="dateTeacher">
                                  Fecha de nacimiento
                                </label>
                              </div>

                              <div className="input-field">
                                <label for="emailTeacher">Correo</label>
                                <input
                                  id="emailTeacher"
                                  className="validate"
                                  type="email"
                                />
                              </div>
                              <div className="input-field">
                                <label for="telephoneTeacher">Telefono</label>
                                <input
                                  id="telephoneTeacher"
                                  type="tel"
                                  class="validate"
                                />
                              </div>
                              <div>
                                <label for="sexTeacher">Sexo</label>
                                <p>
                                  <label for="masculineTeacher">
                                    <input
                                      name="group1"
                                      id="masculineTeacher"
                                      type="radio"
                                    />
                                    <span>Masculino</span>
                                  </label>
                                </p>
                                <p>
                                  <label for="femenineTeacher">
                                    <input
                                      name="group1"
                                      type="radio"
                                      id="femenineTeacher"
                                    />
                                    <span>Femenino</span>
                                  </label>
                                </p>
                              </div>
                              <div className="input-field">
                                <label for="pictureTeacher">
                                  Buscar foto...
                                </label>
                                <div>
                                  <input type="text" readOnly />
                                  <input
                                    id="pictureTeacher"
                                    className="validate"
                                    type="file"
                                  />
                                </div>
                              </div>
                            </div>

                            {/*-----------------Informacion Academica------------------*/}
                            <div className="academic">
                              <h4>Informacion academica</h4>
                              <div className="input-field">
                                <span>Grado en el cual imparte docencia</span>
                                <select name="sections">
                                  <option>Selecciona el grado</option>

                                  <optgroup label="1°">
                                    <option value="1er Grado A">
                                      1er Grado A
                                    </option>
                                    <option value="1er Grado B">
                                      1er Grado B
                                    </option>
                                  </optgroup>
                                  <optgroup label="2°">
                                    <option value="2do Grado A">
                                      2do Grado A
                                    </option>
                                    <option value="2do Grado B">
                                      2do Grado B
                                    </option>
                                  </optgroup>
                                  <optgroup label="3°">
                                    <option value="3er Grado A">
                                      3er Grado A
                                    </option>
                                    <option value="3er Grado B">
                                      3er Grado B
                                    </option>
                                  </optgroup>
                                  <optgroup label="4°">
                                    <option value="4to Grado A">
                                      4to Grado A
                                    </option>
                                    <option value="4to Grado B">
                                      4to Grado B
                                    </option>
                                  </optgroup>
                                  <optgroup label="5°">
                                    <option value="5to Grado A">
                                      5to Grado A
                                    </option>
                                    <option value="5to Grado B">
                                      5to Grado B
                                    </option>
                                  </optgroup>
                                  <optgroup label="6°">
                                    <option value="6to Grado A">
                                      6to Grado A
                                    </option>
                                    <option value="6to Grado B">
                                      6to Grado B
                                    </option>
                                  </optgroup>
                                </select>
                              </div>
                              <div className="input-field">
                                <input
                                  id="dateTeacherIn"
                                  type="date"
                                  className="validate"
                                />
                                <label for="dateTeacherIn">
                                  Fecha en la cual ingresó a la institución
                                </label>
                              </div>
                            </div>

                            {/*-----------------Informacion de Salud------------------*/}
                            <div className="healthy">
                              <h4>Informacion de Salud</h4>
                              <p>
                                <label for="Esquizofrenia">
                                  <input
                                    id="Esquizofrenia"
                                    className="validate"
                                    type="checkbox"
                                  />
                                  <span>Esquizofrenia*</span>
                                </label>
                              </p>
                              <p>
                                <label for="bipolaridad">
                                  <input
                                    id="bipolaridad"
                                    className="validate"
                                    type="checkbox"
                                  />
                                  <span>Bipolaridad</span>
                                </label>
                              </p>
                              <p>
                                <label for="Nervios">
                                  <input
                                    id="Nervios"
                                    className="validate"
                                    type="checkbox"
                                    class="filled-in"
                                  />
                                  <span>Nervios</span>
                                </label>
                              </p>
                              <p>
                                <label for="Alergias">
                                  <input id="Alergias" type="checkbox" />
                                  <span>Alergias*</span>
                                </label>
                              </p>
                              <p>
                                <label for="Diabetes">
                                  <input
                                    id="Diabetes"
                                    className="validate"
                                    type="checkbox"
                                  />
                                  <span>Diabetes*</span>
                                </label>
                              </p>
                              <p>
                                <label for="Migrañas">
                                  <input
                                    id="Migrañas"
                                    className="validate"
                                    type="checkbox"
                                  />
                                  <span>Migrañas</span>
                                </label>
                              </p>
                              <p>
                                <label for="Asma">
                                  <input
                                    id="Asma"
                                    className="validate"
                                    type="checkbox"
                                  />
                                  <span>Asma</span>
                                </label>
                              </p>
                              <p>
                                <label for="Rinitis">
                                  <input
                                    id="Rinitis"
                                    className="validate"
                                    type="checkbox"
                                  />
                                  <span>Rinitis*</span>
                                </label>
                              </p>
                              <div>
                                <h5>Presenta alguna condicion</h5>
                                <p>
                                  <label>
                                    <input
                                      class="with-gap"
                                      name="conditionGroup"
                                      type="radio"
                                    />
                                    <span>Si</span>
                                  </label>
                                </p>
                                <p>
                                  <label>
                                    <input
                                      class="with-gap"
                                      name="conditionGroup"
                                      type="radio"
                                    />
                                    <span>No</span>
                                  </label>
                                </p>
                              </div>
                              <div className="input-field">
                                <textarea
                                  id="condition"
                                  name="conditionGroup"
                                  class="materialize-textarea"
                                />
                                <label for="condition">
                                  Que tipo de condicion presenta:
                                </label>
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
                <Tables />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AddTeacher;
