import React, { useEffect } from "react";

import AdminHeader from "../Components/AdminHeader/AdminHeader";
import AdminMenu from "../Components/AdminMenu/AdminMenu";
import Tables from "../Components/Tables/Tables";

import { TablesFadeIn } from "../js/tables";
import M from "materialize-css";

const AddTeacher = () => {
  useEffect(() => {
    var elems = document.querySelectorAll("select");
    var instances = M.FormSelect.init(elems, {});
  }, []);

  return (
    <main>
      <aside>
        <AdminMenu></AdminMenu>
      </aside>

      <section className="full-box dashboard-contentPage">
        {/* Barra de navegación*/}
        <AdminHeader />
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
