import React from "react";
import AdminHeader from "../Components/AdminHeader/AdminHeader";

import AdminMenu from "../Components/AdminMenu/AdminMenu";

import { TablesFadeIn } from "../js/tables";

const AddAdmin = () => {
  return (
    <div>
      <div>
        <AdminMenu></AdminMenu>
      </div>
      <div>
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
                            <form action>
                              <div className="form-group label-floating">
                                <label className="control-label">Nombre</label>
                                <input className="form-control" type="text" />
                              </div>
                              <div className="form-group label-floating">
                                <label className="control-label">
                                  Apellido
                                </label>
                                <input className="form-control" type="text" />
                              </div>
                              <div className="form-group label-floating">
                                <label className="control-label">
                                  Dirección
                                </label>
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
                                <label className="control-label">
                                  Telefono
                                </label>
                                <input className="form-control" type="text" />
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
                                  <i className="zmdi zmdi-floppy" /> Guardar
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
                              <th className="text-center">Direccion</th>
                              <th className="text-center">Correo</th>
                              <th className="text-center">Telefono</th>
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
                              <td>Alicia</td>
                              <td>Melendez</td>
                              <td>Barquisimeto</td>
                              <td>alicia@gmail.com</td>
                              <td>04245974905</td>
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
                              <td>Sarai</td>
                              <td>Lopez</td>
                              <td>Barquisimeto</td>
                              <td>sarai@gmail.com</td>
                              <td>04245974905</td>
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
                              <td>Alba</td>
                              <td>Bonilla</td>
                              <td>Barquisimeto</td>
                              <td>alba@gmail.com</td>
                              <td>04245974905</td>
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
          </div>
        </section>
      </div>
    </div>
  );
};

export default AddAdmin;
