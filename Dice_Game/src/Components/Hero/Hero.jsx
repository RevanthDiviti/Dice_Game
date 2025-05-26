import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <div className="multiple-dices">
        <img src="../public/Images/dices.png" alt="Dices" />
      </div>
      <div className="heading">
        <h1>DICE GAME</h1>
        <Link to="/gamestart">
          <button id="heading-btn">Play Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
