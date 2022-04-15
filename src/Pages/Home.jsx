import React from "react";
import BillBoard from "../Components/BillBoard/BillBoard";
import HomeInfo from "../Components/HomeInfo/HomeInfo";
import News from "../Components/News/News";

const Home = () => {
  return (
    <main>
      <div className="row">
        <div className="col l12 s12">
          <BillBoard></BillBoard>
        </div>
      </div>

      <div className="row">
        <div className="col l9 s12">
          <HomeInfo />
        </div>
        <div className="col l3 s12">
          <News />
        </div>
      </div>
      <div className="row">
        <div className="col l9 s12">
          <h2>Pago</h2>
        </div>
      </div>
    </main>
  );
};

export default Home;
