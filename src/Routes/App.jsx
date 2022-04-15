import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Layout from "../Components/Layout/Layout";

import Home from "../Pages/Home";

const App = () => {
  return (
      <Layout>
          <Home></Home>
      </Layout>
  );
};

export default App;
