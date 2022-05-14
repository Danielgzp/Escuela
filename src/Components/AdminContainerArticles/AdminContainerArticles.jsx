import React from "react";
import { Link } from "react-router-dom";

const AdminContainerArticles = ({ link, title, registered, icon }) => {
  return (
    <React.Fragment>
      <Link to={link}>
        <article className="full-box tile">
          <div className="full-box tile-title text-center text-titles text-uppercase">
            {title}
          </div>
          <div className="full-box tile-icon text-center">
            <i className={icon}></i>
          </div>
          <div className="full-box tile-number text-titles">
            <p className="full-box">{registered}</p>
            <small>Registrados</small>
          </div>
        </article>
      </Link>
    </React.Fragment>
  );
};

export default AdminContainerArticles;
