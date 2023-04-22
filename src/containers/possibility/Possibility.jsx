import React from "react";
import "./possibility.css";
import possibilityImage from "../../assets/possibility.png";

const Possibility = () => {
  return (
    <div className="gpt3__possibility section-padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Early Acces to Get Started</h4>
        <h1 className="gradient__text">
          The Possibilities Beyond our Imagination
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          delectus magnam rem ipsam accusamus sed?
        </p>
        <h4>Request Early Acces to Get Started</h4>
      </div>
    </div>
  );
};

export default Possibility;
