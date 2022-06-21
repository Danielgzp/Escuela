import React from "react";

import AdminHeader from "../Components/AdminHeader/AdminHeader";
import AdminMenu from "../Components/AdminMenu/AdminMenu";
import PeriodsForm from "../Components/FormsFasfaga/PeriodsForm";
import InformationFasfaga from "../Components/InformationFasfaga/InformationFasfaga";

const AddPeriod = () => {
  return (
    <main>
      <aside>
        <AdminMenu />
      </aside>

      <section className="full-box dashboard-contentPage">
        {/* Barra de navegación*/}
        <AdminHeader />
        <InformationFasfaga user="Períodos" icon="date" />

        <div>
          <PeriodsForm />
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

export default AddPeriod;
