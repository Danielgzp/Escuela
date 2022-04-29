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

      <div className="row">
        <div className="col m8 l9 s12">
          <HomeInfo />
        </div>
        <div className="col m4 l3 s12">
          <News />
        </div>
      </div>
      <div className="row">
        <div className="col l9 s12">
          <h2>Pago</h2>
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
