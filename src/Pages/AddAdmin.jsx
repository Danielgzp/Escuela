import React, { useEffect } from "react";

import './styles/AddAdmin.css'
import AdminHeader from "../Components/AdminHeader/AdminHeader";
import AdminMenu from "../Components/AdminMenu/AdminMenu";

import M from "materialize-css";
import DataTable from "../Components/Tables/MyDataTable";
import AddAdminForm from "../Components/FormsFasfaga/AddAdminForm";
import InformatioFasfaga from "../Components/InformationFasfaga/InformationFasfaga";

const AddAdmin = () => {
  document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll("select");
    var instances = M.FormSelect.init(elems, {});
  });
  document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll(".tabs");
    var instance = M.Tabs.init(elems, {});
  });

  return (
    <main className="addAdmin">
      <AdminMenu></AdminMenu>
      <section className="full-box dashboard-contentPage">
        <AdminHeader></AdminHeader>
        <InformatioFasfaga user="Administradores" icon="account" />
        <div className="container-fluid">
          <div className="row">
            <div className="col s12">
              <ul id="tabs-swipe-demo" class="tabs dataMenu">
                <li class="tab col s6">
                  <a href="#test-swipe-1" class="active">
                    Nuevo Admin
                  </a>
                </li>
                <li class="tab col s6">
                  <a href="#test-swipe-2">Administradores</a>
                </li>
              </ul>
              <div id="test-swipe-1" class="col s12 active">
                <AddAdminForm />
              </div>
              <div id="test-swipe-2" class="col s12">
                <DataTable />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AddAdmin;
