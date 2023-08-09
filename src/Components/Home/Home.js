import React from "react";
import "../Nav/Nav.css";
import "../Home/Home.css";
import img from "../Images/logo-big.png";

const Home = () => {
  return (
    <div className="home-header">
      <div className="home-wrapper">
        <div className="pdm-photo">
          <img src={img} alt="img" />
        </div>
        <div className="intro">
          <h1>
            This is my Best 2 years website! The Greatest mission in the World!
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
