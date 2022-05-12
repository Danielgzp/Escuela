import React from "react";

import "../../node_modules/materialize-css/dist/css/materialize.min.css";
import "../../node_modules/materialize-css/dist/js/materialize";

import { BrowserRouter, Link, Route, Routes, Switch } from "react-router-dom";
import Layout from "../Components/Layout/Layout";

import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Pastoral from "../Pages/Pastoral";
import History from "../Pages/History";
import MisionVision from "../Pages/MisionVision";
import Gallery from "../Pages/Gallery";
import AdminHome from "../Pages/AdminHome";
import AddAdmin from "../Pages/AddAdmin";
import AddTeacher from "../Pages/AddTeacher";
import AddStudent from "../Pages/AddStudent";

const App = () => {
  return (
    <BrowserRouter>
       <Layout> 
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/pastoral" component={Pastoral} />
          <Route exact path="/history" component={History} />
          <Route exact path="/mision-vision" component={MisionVision} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/admin" component={AdminHome} />
          <Route exact path="/admin/AddNewAdmin" component={AddAdmin} />
          <Route exact path="/admin/AddNewTeacher" component={AddTeacher} />
          <Route exact path="/admin/AddNewStudent" component={AddStudent} />
        </Switch>
       </Layout> 
    </BrowserRouter>
  );
};

export default App;
