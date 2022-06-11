import React from "react";

import AdminHeader from "../Components/AdminHeader/AdminHeader";
import AdminMenu from "../Components/AdminMenu/AdminMenu";
import AdminContainerArticles from "../Components/AdminContainerArticles/AdminContainerArticles";

const AdminHome = () => {
  return (
    <div>
      <aside>
        <AdminMenu></AdminMenu>
      </aside>
      <div>
        <section className="full-box dashboard-contentPage">
          <AdminHeader></AdminHeader>

          {/* Cotenido principal  */}
          <div className="container-fluid">
            <div className="page-header">
              <h1 className="text-titles">
                Administración<small> Usuarios registrados:</small>
              </h1>
            </div>
          </div>
          <div
            className="full-box text-center"
            style={{ padding: "30px 10px" }}
          >
            <AdminContainerArticles
              link={"/admin/addnewadmin"}
              registered={"7"}
              title={"Administradores"}
              icon={"zmdi zmdi-account"}
            />
            <AdminContainerArticles
              link={"/admin/addnewteacher"}
              registered={"10"}
              title={"Docentes"}
              icon={"zmdi zmdi-male-alt"}
            />
            <AdminContainerArticles
              link={"/admin/addnewstudent"}
              registered={"70"}
              title={"Estudiantes"}
              icon={"zmdi zmdi-face"}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default AdminHome;
