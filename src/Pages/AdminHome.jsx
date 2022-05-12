import React from "react";

import AdminHeader from "../Components/AdminHeader/AdminHeader";
import AdminMenu from "../Components/AdminMenu/AdminMenu";
import AdminContainer from "../Components/AdminContainer/AdminContainer";

const AdminHome = () => {
  return (
    <div>
      <div>
        <AdminMenu></AdminMenu>
      </div>
      <div>
        <section class="full-box dashboard-contentPage">
          <AdminHeader></AdminHeader>

          {/* Cotenido principal  */}
          <div class="container-fluid">
            <div class="page-header">
              <h1 class="text-titles">
                Administración<small> Usuarios registrados:</small>
              </h1>
            </div>
          </div>

          <div>
            <AdminContainer></AdminContainer>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AdminHome;
