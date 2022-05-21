import React from "react";
import AdminHeader from "../Components/AdminHeader/AdminHeader";

import AdminMenu from "../Components/AdminMenu/AdminMenu";
import Tables from "../Components/Tables/Tables";

import { TablesFadeIn } from "../js/tables";
import M from "materialize-css";

const AddStudent = () => {
  document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll("select");
    var instances = M.FormSelect.init(elems, {});
  });
  return (
    <div>
      <aside>
        <AdminMenu></AdminMenu>
      </aside>
      <main className="full-box dashboard-contentPage">
        {/* NavBar */}
        <AdminHeader />
        {/* Content page */}
        <div className="container-fluid">
          <div className="page-header">
            <h1 className="text-titles">
              <i className="zmdi zmdi-face zmdi-hc-fw" /> Usuarios{" "}
              <small>Estudiantes</small>
            </h1>
          </div>
          <p className="lead">
            En este apartado puede agregar nuevos estudiantes al sistema
          </p>
        </div>
        <section className="container-fluid">
          <div className="row">
            <div className="col-xs-12">
              <ul className="nav nav-tabs" style={{ marginBottom: "15px" }}>
                <li className="active" onClick={() => TablesFadeIn()}>
                  <a href="#new" data-toggle="tab">
                    Nuevo estudiante
                  </a>
                </li>
                <li onClick={() => TablesFadeIn()}>
                  <a href="#list" data-toggle="tab">
                    Lista de estudiantes
                  </a>
                </li>
              </ul>
              <div id="myTabContent" className="tab-content">
                <div className="tab-pane fade active in" id="new">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-xs-12 col-md-10 col-md-offset-1">
                        {/*-----------Formualario para agregar estudiantes-------------*/}
                        <form onSubmit={""} id="newStudent-form" action>
                          <fieldset>Datos del estudiante</fieldset>
                          {/*-----------------Informacion Personal------------------*/}
                          <div className="personal">
                            <h4>Informacion personal</h4>
                            <div className="input-field">
                              <input
                                id="names"
                                className="validate"
                                type="text"
                                required
                              />
                              <label for="names">Nombres</label>
                            </div>
                            <div className="input-field">
                              <label for="last_name">Apellidos</label>
                              <input
                                id="last_name"
                                className="validate"
                                type="text"
                                required
                              />
                            </div>
                            <div className="input-field">
                              <label for="dni">
                                Cédula *en caso de que tenga
                              </label>
                              <select>
                                <option value=""></option>
                                <option value="Venezolana">V</option>
                                <option value="Extranjera">E</option>
                              </select>
                              <input
                                id="dni"
                                className="validate"
                                type="number"
                                placeholder="000000000"
                              />
                            </div>
                            <div className="input-field">
                              <textarea
                                id="address"
                                class="materialize-textarea"
                                required
                              ></textarea>
                              <label for="address">Direccion</label>
                            </div>

                            <div class="input-field">
                              <input
                                id="date"
                                type="date"
                                className="validate"
                                required
                              />
                              <label for="date">Fecha de nacimiento</label>
                            </div>

                            <div className="input-field">
                              <label for="email">
                                Correo *en caso de que tenga
                              </label>
                              <input
                                id="email"
                                className="validate"
                                type="email"
                              />
                            </div>
                            <div className="input-field">
                              <label for="telephone">
                                Telefono *en caso de que tenga
                              </label>
                              <input
                                id="telephone"
                                type="tel"
                                class="validate"
                              />
                            </div>
                            <div>
                              <label for="sex">Sexo</label>
                              <p>
                                <label for="masculine">
                                  <input
                                    name="group1"
                                    id="masculine"
                                    type="radio"
                                    required
                                  />
                                  <span>Masculino</span>
                                </label>
                              </p>
                              <p>
                                <label for="femenine">
                                  <input
                                    name="group1"
                                    type="radio"
                                    id="femenine"
                                  />
                                  <span>Femenino</span>
                                </label>
                              </p>
                            </div>
                            <div className="input-field">
                              <label for="picture">Buscar foto...</label>
                              <div>
                                <input type="text" readOnly />
                                <input
                                  id="picture"
                                  className="validate"
                                  type="file"
                                />
                              </div>
                            </div>
                          </div>
                          {/*-----------------Informacion Familiar------------------*/}
                          <div>
                            <h4>Informacion familiar o del representante</h4>
                            <div className="input-field">
                              <label for="representative_name">
                                Nombre del representante
                              </label>
                              <input
                                id="representative_name"
                                className="validate"
                                type="text"
                                required
                              />
                            </div>
                            <div className="input-field">
                              <label for="representative_dni">
                                Cedula del representante
                              </label>
                              <input
                                id="representative_dni"
                                className="validate"
                                type="text"
                                required
                              />
                            </div>
                            <div className="input-field">
                              <label for="representative_dni">Telefono</label>
                              <input
                                id="representative_dni"
                                className="validate"
                                type="text"
                                required
                              />
                            </div>

                            <div className="input-field">
                              <label for="representative_email">Correo</label>
                              <input
                                id="representative_email"
                                className="validate"
                                type="email"
                                required
                              />
                            </div>
                            <div className="input-field">
                              <span>Parentesco</span>
                              <select required>
                                <option disabled selected>
                                  Elige...
                                </option>
                                <option value="1">Padre/Madre</option>
                                <option value="2">Hermano/Hermana</option>
                                <option value="3">Tío/Tía</option>
                                <option value="4">Abuelo/Abuela</option>
                                <option value="5">Primo/Prima</option>
                                <option value="6">Otro</option>
                              </select>
                            </div>
                            <div>
                              <h6>Con quién vive?</h6>
                              <p>
                                <label for="parents">
                                  <input
                                    id="parents"
                                    className="validate"
                                    type="checkbox"
                                  />
                                  <span>Padres</span>
                                </label>
                              </p>
                              <p>
                                <label for="brothers">
                                  <input
                                    id="brothers"
                                    className="validate"
                                    type="checkbox"
                                  />
                                  <span>Hermanos</span>
                                </label>
                              </p>
                              <p>
                                <label for="uncles">
                                  <input
                                    id="uncles"
                                    className="validate"
                                    type="checkbox"
                                    class="filled-in"
                                  />
                                  <span>Tíos</span>
                                </label>
                              </p>
                              <p>
                                <label for="grandparents">
                                  <input id="grandparents" type="checkbox" />
                                  <span>Abuelos</span>
                                </label>
                              </p>
                              <p>
                                <label for="others">
                                  <input
                                    id="others"
                                    className="validate"
                                    type="checkbox"
                                  />
                                  <span>Otros</span>
                                </label>
                              </p>
                            </div>
                          </div>
                          {/*-----------------Informacion Academica------------------*/}
                          <div className="academic">
                            <h4>Informacion academica</h4>
                            <div className="input-field">
                              <h6>Grado que cursa?</h6>
                              <select name="sectionsStudent">
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
                <Tables />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AddStudent;
