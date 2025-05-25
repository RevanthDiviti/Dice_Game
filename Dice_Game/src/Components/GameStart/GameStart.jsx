import React from "react";
import "./GameStart.css";

const GameStart = () => {
  return (
    <div className="game-start">
      <div className="header-section">
        <div className="score">
          <h1 id="socred">0</h1>
          <h4>Total Score</h4>
        </div>
        <div className="choose">
          <div className="numbers">
            <p id="btn">1</p>
            <p id="btn">2</p>
            <p id="btn">3</p>
            <p id="btn">4</p>
            <p id="btn">5</p>
            <p id="btn">6</p>
          </div>
          <div className="select-number">
            <p>Select Number</p>
          </div>
        </div>
      </div>
      <div className="dice">
        <div className="dice-img">
          <img src="../public/Images/dice_1.png" alt="dice-1" />
          <p>Click on Dice to roll</p>
          <button>Reset Score</button>
          <span>
            <button>Show Rules</button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default GameStart;
