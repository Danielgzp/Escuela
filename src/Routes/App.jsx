import React from "react";
import { BrowserRouter, Link, Route, Routes, Switch } from "react-router-dom";
import Layout from "../Components/Layout/Layout";

import Home from "../Pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
