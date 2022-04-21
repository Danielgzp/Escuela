import React from "react";

import "./styles.css";

import regresoAClases from "../../images/regresoaclases.jpg";

const BillBoard = () => {

  return (
    <section className="cartelera-section">
      <div class="carousel carousel-slider center">
        <div class="carousel-item" href="#one!">
          <h2>First Panel</h2>
          <p class="white-text">This is your first panel</p>
        </div>
        <div class="carousel-item" href="#two!">
          <h2>Second Panel</h2>
          <p>This is your second panel</p>
          <h3>heee</h3>
        </div>
        <div class="carousel-item green white-text" href="#three!">
          <h2>Third Panel</h2>
          <p class="white-text">This is your third panel</p>
        </div>
        <div class="carousel-item blue white-text" href="#four!">
          <h2>Fourth Panel</h2>
          <p class="white-text">This is your fourth panel</p>
        </div>
        <ul class="indicators"></ul>
      </div>
    </section>
  );
};

export default BillBoard;
