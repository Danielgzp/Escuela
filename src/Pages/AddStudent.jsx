import React, { useEffect } from "react";

import AdminHeader from "../Components/AdminHeader/AdminHeader";
import AdminMenu from "../Components/AdminMenu/AdminMenu";
import StudentForm from "../Components/FormsFasfaga/StudentForm";
import InformationFasfaga from "../Components/InformationFasfaga/InformationFasfaga";
import MyDataTable from "../Components/Tables/MyDataTable";

import M from "materialize-css";

const AddStudent = () => {
  useEffect(() => {
    var elems2 = document.querySelectorAll(".tabs");
    var instance2 = M.Tabs.init(elems2, {});
  }, []);

  return (
    <main>
      <aside>
        <AdminMenu></AdminMenu>
      </aside>
      <section className="full-box dashboard-contentPage">
        <AdminHeader></AdminHeader>
        <InformationFasfaga user="Estudiantes" icon="student" />
        <div className="swipes-container">
          <ul id="swipeList" className="tabs dataMenu">
            <li className="tab">
              <a href="#swipeForm" className="active">
                Nuevo Estudiante
              </a>
            </li>
            <li className="tab">
              <a href="#swipeTable">Nomina de Estudiantes</a>
            </li>
          </ul>
          <div id="swipeForm" className="active">
            <StudentForm />
          </div>
          <div id="swipeTable" className="">
            <MyDataTable />
          </div>
        </div>
      </section>
    </main>
  );
};

export default AddStudent;
