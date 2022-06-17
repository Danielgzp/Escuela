import React from "react";

import "../../node_modules/materialize-css/dist/css/materialize.min.css";
import "../../node_modules/materialize-css/dist/js/materialize";

import { BrowserRouter, Link, Route, Routes, Switch } from "react-router-dom";
import Layout from "../Components/Layout/Layout";

import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Logout from "../Pages/Logout";
import Pastoral from "../Pages/Pastoral";
import History from "../Pages/History";
import MisionVision from "../Pages/MisionVision";
import Gallery from "../Pages/Gallery";
import AdminHome from "../Pages/AdminHome";
import AddAdmin from "../Pages/AddAdmin";
import AddTeacher from "../Pages/AddTeacher";
import AddStudent from "../Pages/AddStudent";
import NotFoundPage from "../Pages/NotFoundPage";
import Biblioteca from "../Pages/Biblioteca";
import StudentProfile from "../Pages/StudentProfile";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Layout> */}
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/pastoral" component={Pastoral} />
        <Route exact path="/history" component={History} />
        <Route exact path="/mision-vision" component={MisionVision} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/admin" component={AdminHome} />
        <Route exact path="/admin/addnewadmin" component={AddAdmin} />
        <Route exact path="/admin/addnewteacher" component={AddTeacher} />
        <Route exact path="/admin/addnewstudent" component={AddStudent} />
        <Route exact path="/services/biblioteca" component={Biblioteca} />
        <Route exact path="/admin/studentprofile" component={StudentProfile} />
        {/* <Route component={NotFoundPage} /> */}
        {/* </Layout> */}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
