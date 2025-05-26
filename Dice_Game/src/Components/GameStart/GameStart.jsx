import React, { useState } from "react";
import "./GameStart.css";

const GameStart = () => {
  const showRules = () => {
    const rules = document.getElementById("rules-box");
    const rules_btn = document.getElementById("rules-btn");
    rules.style.display = "block";
    // rules_btn.innerHTML = "Hide Rules";
  };

  return (
    <div className="game-start">
      <div className="header-section">
        <div className="score">
          <h1 id="socred">0</h1>
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
          <button>Reset Score</button>
          <span>
            <button id="rules-btn" onClick={showRules}>
              Show Rules
            </button>
          </span>
          <div className="rules" id="rules-box">
            <h2>How to play dice game</h2>
            <p>Select any number</p>
            <p>
              after click on dice if selected number is equal to dice number you
              will get same point as dice{" "}
            </p>
            <p>if you get wrong guess then 2 point will be dedcuted </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameStart;
