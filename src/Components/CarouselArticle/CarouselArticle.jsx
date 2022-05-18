import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

const CarouselArticle = ({ img, title, description, link }) => {
  return (
    <article className="carousel-item z-depth-3 cente-r">
      <div className="carousel-item__image">
        <img src={img} alt={title} />
      </div>
      <div className="carousel-item__info">
        <h4>{title}</h4>
        <p>{description}</p>

        <Link href={link} className="btn waves-effect red white-text">
          Ver mas
          <i className="material-icons right">arrow_forward</i>
        </Link>
      </div>
    </article>
  );
};

export default CarouselArticle;
