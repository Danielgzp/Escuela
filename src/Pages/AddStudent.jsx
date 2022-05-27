import React, { useEffect } from "react";

import AdminHeader from "../Components/AdminHeader/AdminHeader";
import AdminMenu from "../Components/AdminMenu/AdminMenu";
import StudentForm from "../Components/FormsFasfaga/StudentForm";
import InformationFasfaga from "../Components/InformationFasfaga/InformationFasfaga";
import MyDataTable from "../Components/Tables/MyDataTable";

import M from "materialize-css";

const AddStudent = () => {
  useEffect(() => {
    var elems = document.querySelectorAll("select");
    var instances = M.FormSelect.init(elems, {});

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
          <ul id="swipeList" class="tabs dataMenu">
            <li class="tab">
              <a href="#swipeForm" class="active">
                Nuevo Estudiante
              </a>
            </li>
            <li class="tab ">
              <a href="#swipeTable">Estudiantes</a>
            </li>
          </ul>
          <div id="swipeForm" class=" active">
            <StudentForm />
          </div>
          <div id="swipeTable" class="">
            <MyDataTable />
          </div>
        </div>
      </section>
    </main>
  );
};

export default AddStudent;
