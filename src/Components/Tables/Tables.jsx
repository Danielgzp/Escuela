import React from "react";

const Tables = () => {
  return (
    <section>
      <div className="tab-pane fade" id="list">
        <div className="table-responsive">
          <table className="table table-bordered align-middle">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Direccion</th>
                <th>Correo</th>
                <th>Telefono</th>
                <th>Grado</th>
                <th>Sección</th>
                <th>Ver perfil</th>
                <th>Borrar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Carlos Gabriel</td>
                <td>Alfaro Dominguez</td>
                <td>Barquisimeto</td>
                <td>carlosalfaro@gmail.com</td>
                <td>04245974905</td>
                <td>1er Grado</td>
                <td>A</td>
                <td>
                  <a href="#!" className="btn btn-success btn-raised btn-xs">
                    <i className="zmdi zmdi-account" />
                  </a>
                </td>
                <td>
                  <a href="#!" className="btn btn-danger btn-raised btn-xs">
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
                <td>1er Grado</td>
                <td>A</td>
                <td>
                  <a href="#!" className="btn btn-success btn-raised btn-xs">
                    <i className="zmdi zmdi-account" />
                  </a>
                </td>
                <td>
                  <a href="#!" className="btn btn-danger btn-raised btn-xs">
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
                <td>1er Grado</td>
                <td>A</td>
                <td>
                  <a href="#!" className="btn btn-success btn-raised btn-xs">
                    <i className="zmdi zmdi-account" />
                  </a>
                </td>
                <td>
                  <a href="#!" className="btn btn-danger btn-raised btn-xs">
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
                <td>1er Grado</td>
                <td>A</td>
                <td>
                  <a href="#!" className="btn btn-success btn-raised btn-xs">
                    <i className="zmdi zmdi-account" />
                  </a>
                </td>
                <td>
                  <a href="#!" className="btn btn-danger btn-raised btn-xs">
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
    </section>
  );
};

export default Tables;
