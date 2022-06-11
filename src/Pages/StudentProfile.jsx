import React from "react";

import AdminHeader from "../Components/AdminHeader/AdminHeader";
import AdminMenu from "../Components/AdminMenu/AdminMenu";
import StudentInfo from "../Components/StudentInfo/StudentInfo";

const StudentProfile = () => {
  return (
    <main>
      <aside>
        <AdminMenu></AdminMenu>
      </aside>

      <section className="full-box dashboard-contentPage">
        <AdminHeader></AdminHeader>

        {/* Cotenido principal  */}
        <StudentInfo></StudentInfo>
      </section>
    </main>
  );
};

export default StudentProfile;
