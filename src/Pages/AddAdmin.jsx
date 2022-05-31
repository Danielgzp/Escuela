import React, { useEffect } from "react";

import "./styles/AddAdmin.css";
import AdminHeader from "../Components/AdminHeader/AdminHeader";
import AdminMenu from "../Components/AdminMenu/AdminMenu";

import M from "materialize-css";
import AddAdminForm from "../Components/FormsFasfaga/AdminForm";
import InformatioFasfaga from "../Components/InformationFasfaga/InformationFasfaga";
import MyDataTable from "../Components/Tables/MyDataTable";

const AddAdmin = () => {
  useEffect(() => {
    var elems = document.querySelectorAll("select");
    var elems2 = document.querySelectorAll(".tabs");
    var instances = M.FormSelect.init(elems, {});
    var instance2 = M.Tabs.init(elems2, {});
  }, []);

  return (
    <main className="addAdmin">
      <AdminMenu></AdminMenu>
      <section className="full-box dashboard-contentPage">
        <AdminHeader></AdminHeader>
        <InformatioFasfaga user="Administradores" icon="account" />

        <div className="swipes-container">
          <ul id="swipeList" class="tabs dataMenu z-depth-4">
            <li class="tab">
              <a href="#swipeForm" class="active">
                Nuevo Admin
              </a>
            </li>
            <li class="tab ">
              <a href="#swipeTable">Administradores</a>
            </li>
          </ul>
          <div id="swipeForm" class=" active">
            
            <AddAdminForm />
          </div>
          <div id="swipeTable" class="">
            <MyDataTable />
          </div>
        </div>
      </section>
    </main>
  );
};

export default AddAdmin;
