import React from "react";
import img from "../Images/me.png";
import "../About/About.css";

const About = () => {
  return (
    <div className="header-container">
      <div className="header-wrapper">
        <div className="profile-pix">
          <img src={img} alt="img" />
        </div>

        <div className="info">
          <h1>Hi, My name is Marco.</h1>
          <p>
            I'm from the beautiful town of Lagonoy in Camarines Sur,
            Philippines, and I'm blessed to have a happy family. Together with
            my wife, we're raising two daughters and a son, filling our home
            with love and laughter. In addition to my family life, I'm actively
            involved in my local church community. I currently serve as a High
            Council Man and the 1st Councilor in the Elders Quorum Presidency in
            Lagonoy's 1st Ward, under Goa Stake. These roles allow me to
            contribute to my community and guide others in their spiritual
            journey. I also had the privilege to serve my mission in the
            Philippines Davao Mission, an experience that has shaped my faith
            and values. Through family, faith, and service, I strive to live a
            life filled with purpose and joy. Join me as I continue on this
            path, embracing the principles that define who I am.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
