import React from "react";

import '../../node_modules/materialize-css/dist/css/materialize.min.css'
import '../../node_modules/materialize-css/dist/js//materialize';

import { BrowserRouter, Link, Route, Routes, Switch } from "react-router-dom";
import Layout from "../Components/Layout/Layout";

import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Pastoral from "../Pages/Pastoral";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/pastoral"component={Pastoral} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
