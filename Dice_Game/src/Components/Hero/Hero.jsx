import React from "react";
import "./Hero.css";

const Hero = () => {

  
  return (
    <div className="hero">
      <div className="multiple-dices">
        <img src="../public/Images/dices.png" alt="Dices" />
      </div>
      <div className="heading">
        <h1>DICE GAME</h1>
        <button id="heading-btn">Play Now</button>
      </div>
    </div>
  );
};

export default Hero;
