import React from "react";
import AdminMenu from "../Components/AdminMenu/AdminMenu";

import { TablesFadeIn } from "../js/tables";

const AddTeacher = () => {
  return (
    <div>
      <div>
        <AdminMenu />
      </div>
      <div>
        <section className="full-box dashboard-contentPage">
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
				<a href="#!" class="btn-search">
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
                          <form action>
                            <div className="form-group label-floating">
                              <label className="control-label">Nombre</label>
                              <input className="form-control" type="text" />
                            </div>
                            <div className="form-group label-floating">
                              <label className="control-label">Apellido</label>
                              <input className="form-control" type="text" />
                            </div>
                            <div className="form-group label-floating">
                              <label className="control-label">Dirección</label>
                              <textarea
                                className="form-control"
                                defaultValue={""}
                              />
                            </div>
                            <div className="form-group label-floating">
                              <label className="control-label">Correo</label>
                              <input className="form-control" type="text" />
                            </div>
                            <div className="form-group label-floating">
                              <label className="control-label">Telefono</label>
                              <input className="form-control" type="text" />
                            </div>
                            <div className="form-group label-floating">
                              <label className="control-label">
                                Especialidad
                              </label>
                              <input className="form-control" type="text" />
                            </div>
                            <div className="form-group">
                              <label className="control-label">Genero</label>
                              <select className="form-control">
                                <option>Hombre</option>
                                <option>Mujer</option>
                              </select>
                            </div>
                            <div className="form-group">
                              <label className="control-label">Foto</label>
                              <div>
                                <input
                                  type="text"
                                  readOnly
                                  className="form-control"
                                  placeholder="Buscar..."
                                />
                                <input type="file" />
                              </div>
                            </div>
                            <p className="text-center">
                              <button
                                href="#!"
                                className="btn btn-info btn-raised btn-sm"
                              >
                                <i className="zmdi zmdi-floppy" /> Save
                              </button>
                            </p>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="list">
                    <div className="table-responsive">
                      <table className="table table-hover text-center">
                        <thead>
                          <tr>
                            <th className="text-center">#</th>
                            <th className="text-center">Nombre</th>
                            <th className="text-center">Apellido</th>
                            <th className="text-center">Dirección</th>
                            <th className="text-center">Correo</th>
                            <th className="text-center">Telefono</th>
                            <th className="text-center">Especialidad</th>
                            <th className="text-center">Genero</th>
                            <th className="text-center">Actualizar</th>
                            <th className="text-center">Borrar</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Carlos</td>
                            <td>Alfaro</td>
                            <td>Barquisimeto</td>
                            <td>carlos@gmail.com</td>
                            <td>04245974905</td>
                            <td>Biologia</td>
                            <td>Hombre</td>
                            <td>
                              <a
                                href="#!"
                                className="btn btn-success btn-raised btn-xs"
                              >
                                <i className="zmdi zmdi-refresh" />
                              </a>
                            </td>
                            <td>
                              <a
                                href="#!"
                                className="btn btn-danger btn-raised btn-xs"
                              >
                                <i className="zmdi zmdi-delete" />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Luis</td>
                            <td>Perez</td>
                            <td>Barquisimeto</td>
                            <td>carlos@gmail.com</td>
                            <td>04245974905</td>
                            <td>Biologia</td>
                            <td>Hombre</td>
                            <td>
                              <a
                                href="#!"
                                className="btn btn-success btn-raised btn-xs"
                              >
                                <i className="zmdi zmdi-refresh" />
                              </a>
                            </td>
                            <td>
                              <a
                                href="#!"
                                className="btn btn-danger btn-raised btn-xs"
                              >
                                <i className="zmdi zmdi-delete" />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Maria</td>
                            <td>Yepez</td>
                            <td>Barquisimeto</td>
                            <td>carlos@gmail.com</td>
                            <td>04245974905</td>
                            <td>Matematica</td>
                            <td>Mujer</td>
                            <td>
                              <a
                                href="#!"
                                className="btn btn-success btn-raised btn-xs"
                              >
                                <i className="zmdi zmdi-refresh" />
                              </a>
                            </td>
                            <td>
                              <a
                                href="#!"
                                className="btn btn-danger btn-raised btn-xs"
                              >
                                <i className="zmdi zmdi-delete" />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>Jose</td>
                            <td>Mendoza</td>
                            <td>Barquisimeto</td>
                            <td>carlos@gmail.com</td>
                            <td>04245974905</td>
                            <td>Musica</td>
                            <td>Hombre</td>
                            <td>
                              <a
                                href="#!"
                                className="btn btn-success btn-raised btn-xs"
                              >
                                <i className="zmdi zmdi-refresh" />
                              </a>
                            </td>
                            <td>
                              <a
                                href="#!"
                                className="btn btn-danger btn-raised btn-xs"
                              >
                                <i className="zmdi zmdi-delete" />
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <ul className="pagination pagination-sm">
                        <li className="disabled">
                          <a href="#!">«</a>
                        </li>
                        <li className="active">
                          <a href="#!">1</a>
                        </li>
                        <li>
                          <a href="#!">2</a>
                        </li>
                        <li>
                          <a href="#!">3</a>
                        </li>
                        <li>
                          <a href="#!">4</a>
                        </li>
                        <li>
                          <a href="#!">5</a>
                        </li>
                        <li>
                          <a href="#!">»</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AddTeacher;
