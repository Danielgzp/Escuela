import React from "react";
import { Table } from "react-bootstrap";
import AdminHeader from "../Components/AdminHeader/AdminHeader";

import AdminMenu from "../Components/AdminMenu/AdminMenu";
import Tables from "../Components/Tables/Tables";

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
                  <Tables></Tables>
                  <Table></Table>
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
