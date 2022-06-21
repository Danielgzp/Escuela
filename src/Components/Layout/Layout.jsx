import React from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = (props) => {
  // console.log(props.location.pathname);
  if (props.location.pathname.includes("/admin")) {
    return props.children;
  } else {
    return (
      <React.Fragment>
        <Header />
        {props.children}
        <Footer />
      </React.Fragment>
    );
  }
};

export default Layout;
