import React, { useEffect } from "react";

import AdminHeader from "../Components/AdminHeader/AdminHeader";
import AdminMenu from "../Components/AdminMenu/AdminMenu";
import Tables from "../Components/Tables/Tables";

import { TablesFadeIn } from "../js/tables";
import M from "materialize-css";
import TeacherForm from "../Components/FormsFasfaga/TeacherForm";
import MyDataTable from "../Components/Tables/MyDataTable";
import InformationFasfaga from "../Components/InformationFasfaga/InformationFasfaga";

const AddTeacher = () => {
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
        {/* Barra de navegación*/}
        <AdminHeader />
        <InformationFasfaga user="Docentes" icon="male" />
        <div className="swipes-container">
          <ul id="swipeList" className="tabs dataMenu">
            <li className="tab">
              <a href="#swipeForm" className="active">
                Nuevo Usuario
              </a>
            </li>
            <li className="tab ">
              <a href="#swipeTable">Nomina de Empleados</a>
            </li>
          </ul>
          <div id="swipeForm" className="active">
            <TeacherForm />
          </div>
          <div id="swipeTable" className="">
            <MyDataTable />
          </div>
        </div>
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
      </section>
    </main>
  );
};

export default AddTeacher;
