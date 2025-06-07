import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./GameStart.css";

const GameStart = () => {
  const [showRules, setShowRules] = useState(false);
  const [score, setScore] = useState(0);

  return (
    <div className="game-start">
      <div className="header-section">
        <div className="score">
          <h1 id="socred">{score}</h1>
          <h4>Total Score</h4>
        </div>
        <div className="choose">
          <div className="numbers">
            <p className="number-btn" id="btn">
              1
            </p>
            <p className="number-btn" id="btn">
              2
            </p>
            <p className="number-btn" id="btn">
              3
            </p>
            <p className="number-btn" id="btn">
              4
            </p>
            <p className="number-btn" id="btn">
              5
            </p>
            <p className="number-btn" id="btn">
              6
            </p>
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
          <button onClick={() => setScore(0)}>Reset Score</button>
          <span>
            <button
              id="rules-btn"
              onClick={() => {
                setShowRules(!showRules);
              }}
            >
              {showRules ? "Hide Rules" : "Show Rules"}
            </button>
          </span>
          {showRules ? (
            <div className="rules" id="rules-box">
              <h2>How to play dice game</h2>
              <p>Select any number</p>
              <p>
                after click on dice if selected number is equal to dice number
                you will get same point as dice{" "}
              </p>
              <p>if you get wrong guess then 2 point will be dedcuted </p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default GameStart;
