import React from "react";

import { useEffect } from "react";
import { useState } from "react";

import AdminHeader from "../Components/AdminHeader/AdminHeader";
import AdminMenu from "../Components/AdminMenu/AdminMenu";
import PageError from "../Components/Error/PageError";
import Loader from "../Components/Loader/Loader";
import StudentInfo from "../Components/StudentInfo/StudentInfo";

const StudentProfile = (props) => {
  const studentProfile = props.match.params.studentProfile;

  const [state, setState] = useState({
    student: [],
    loading: false,
    error: null,
  });

  useEffect(() => {
    async function fetchData() {
      setState({ loading: true, error: null });
      try {
        const data = await fetch("http://localhost/escuela/api/showStudents");
        const response = await data.json();
        setState({
          ...state,
          /* Im using find because because i just need to find 1 object in the array and 
          filter is used to travel in the array and find the value that we are searching*/
          student: response.results.find((std) => {
            return `${std.ci}`
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .toLowerCase()
              .includes(studentProfile.toLowerCase());
          }),
        });
      } catch (error) {
        setState({ loading: false, error: error });
      }
    }
    fetchData();
  }, [studentProfile]);

  if (state.loading) {
    return <Loader></Loader>;
  }
  if (state.error) {
    return <PageError />;
  }

  return (
    <main>
      <aside>
        <AdminMenu></AdminMenu>
      </aside>

      <section className="full-box dashboard-contentPage">
        <AdminHeader></AdminHeader>

        {/* Cotenido principal  */}
        <StudentInfo student={state.student} />
      </section>
    </main>
  );
};

export default StudentProfile;
