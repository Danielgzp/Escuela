import React from "react";
import { Link } from "react-router-dom";

import "./styles/NotFound.css";

import error404 from "../images/404error.gif";

const NotFoundPage = () => {
  return (
    <React.Fragment>
      <div className="Home_error">
        <div className="container">
          <div className="row">
            <div className="Errors_container valign-wrapper">
              <div className="Home__col-error col l5 s12">
                <h2>Page not found</h2>
                <p>
                  Lo sentimos, no hemos podido encontrar la pagina que buscabas
                </p>
                <Link to="/" className="btn red home-link">
                  Volver al inicio
                </Link>
              </div>

              <div className="Home__col-error col l7 s12 center">
                <img src={error404} alt="Error" className="img-fluid p-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NotFoundPage;
