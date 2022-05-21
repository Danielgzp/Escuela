import React from "react";

import BillBoard from "../Components/BillBoard/BillBoard";
import HomeInfo from "../Components/HomeInfo/HomeInfo";
import News from "../Components/News/News";

import Map from "../hooks/Map";
import credentials from "../credentials";

const mapUrl = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.mapsKey}`;

const Home = () => {
  
  return (
    <main>
      <div className="row">
        <div className="col l12 s12">
          <BillBoard></BillBoard>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col m12 l12 s12">
            <HomeInfo />
          </div>
          {/* <div className="col m4 l3 s12">
          <News />
        </div> */}
        </div>
        <div className="row">
          <div className="col l12 s12">
            <h2>Pago</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col l12 s12 m12">
          <Map
            googleMapURL={mapUrl}
            containerElement={<div style={{ height: "600px" }}></div>}
            mapElement={<div style={{ height: "100%" }}></div>}
            loadingElement={<p>Cargando...</p>}
          />
        </div>
      </div>
    </main>
  );
};

export default Home;

<div className="mapa">
  <div className="mapa1">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5555.575032611196!2d-69.350872746027!3d10.067524207831363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdeee3299ecf6ded7!2sInstituto+Universitario+Jesus+Obrero+(IUJO)!5e0!3m2!1ses!2sve!4v1519061245773"
      width="100%"
      height="400"
      frameborder="0"
      style="border:0"
      allowfullscreen=""
    ></iframe>
  </div>
</div>;
