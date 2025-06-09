import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./GameStart.css";

const GameStart = () => {
  const [showRules, setShowRules] = useState(false);
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [randomNumber, setRandomNumber] = useState(null);
  const selected = document.getElementById("not-selected");

  useEffect(() => {
    // if (selectedNumber != null) {
    //   if (selectedNumber == randomNumber) {
    //     setScore(score++);
    //   } else {
    //     alert(`You Lost!!! \n Your score is ${score}`);
    //   }
    // }
    console.log(selectedNumber);
    console.log(randomNumber);
  }, [selectedNumber, randomNumber]);

  return (
    <div className="game-start">
      <div className="header-section">
        <div className="score">
          <h1 id="socred">{score}</h1>
          <h4>Total Score</h4>
        </div>
        <div className="choose">
          <p id="not-selected">You have not selected any number</p>
          <div className="numbers">
            <p
              value="1"
              className="number-btn"
              id="btn"
              onClick={() => {
                setSelectedNumber(1);
                selected.style.display = "none";
              }}
            >
              1
            </p>
            <p
              value="2"
              className="number-btn"
              id="btn"
              onClick={() => {
                setSelectedNumber(2);
                selected.style.display = "none";
              }}
            >
              2
            </p>
            <p
              value="3"
              className="number-btn"
              id="btn"
              onClick={() => {
                setSelectedNumber(3);
                selected.style.display = "none";
              }}
            >
              3
            </p>
            <p
              value="4"
              className="number-btn"
              id="btn"
              onClick={() => {
                setSelectedNumber(4);
                selected.style.display = "none";
              }}
            >
              4
            </p>
            <p
              value="5"
              className="number-btn"
              id="btn"
              onClick={() => {
                setSelectedNumber(5);
                selected.style.display = "none";
              }}
            >
              5
            </p>
            <p
              value="6"
              className="number-btn"
              id="btn"
              onClick={() => {
                setSelectedNumber(6);
                selected.style.display = "none";
              }}
            >
              6
            </p>
          </div>
          <div className="select-number">
            <p>Select Number</p>
            <p id="display-selected">Selected Number: {selectedNumber}</p>
          </div>
        </div>
      </div>
      <div className="dice">
        <div className="dice-img">
          <img
            src={`../public/Images/dice_${randomNumber || 1}.png`}
            alt={`dice-${randomNumber || 1}`}
            onClick={() => {
              if (selectedNumber === null) {
                selected.style.display = "block";
                return;
              }
              const rand = Math.floor(Math.random() * 6) + 1;
              setRandomNumber(rand);

              if (selectedNumber === rand) {
                setScore((prev) => prev + rand);
              } else {
                setScore((prev) => prev - 2);
              }
            }}
          />
          <p>Dice Value: {randomNumber}</p>
          {/* <img
            src="../public/Images/dice_1.png"
            alt="dice-1"
            onClick={() => {
              if (selectedNumber == null) {
                if (selectedNumber == null) {
                  const selected = document.getElementById("not-selected");
                  selected.style.display = "block";
                }
              }
              if (selectedNumber != null) {
                const rand = Math.floor(Math.random() * 6) + 1;
                setRandomNumber(rand);
                if (selectedNumber == randomNumber) {
                  setScore(score++);
                } else {
                  alert(`You Lost!!! \n Your score is ${score}`);
                }
              }
            }}
          /> */}
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

{
  /* 
 
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./GameStart.css";

const GameStart = () => {
  const [showRules, setShowRules] = useState(false);
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [randomNumber, setRandomNumber] = useState(null);
  const [attempts, setAttempts] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (attempts >= 3) {
      setGameOver(true);
    }
  }, [attempts]);

  const handleDiceRoll = () => {
    if (gameOver) return;
    if (selectedNumber === null) {
      alert("Please select a number first!");
      return;
    }
    const rand = Math.floor(Math.random() * 6) + 1;
    setRandomNumber(rand);

    if (selectedNumber === rand) {
      setScore((prev) => prev + rand);
    } else {
      setScore((prev) => Math.max(0, prev - 2));
    }
    setAttempts((prev) => prev + 1);
  };

  const handleReset = () => {
    setScore(0);
    setAttempts(0);
    setGameOver(false);
    setRandomNumber(null);
    setSelectedNumber(null);
  };

  return (
    <div className="game-start">
      <div className="header-section">
        <div className="score">
          <h1 id="socred">{score}</h1>
          <h4>Total Score</h4>
        </div>
        <div className="choose">
          <div className="numbers">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <p
                key={num}
                className={`number-btn${selectedNumber === num ? " selected" : ""}`}
                onClick={() => setSelectedNumber(num)}
              >
                {num}
              </p>
            ))}
          </div>
          <div className="select-number">
            <p>Select Number</p>
          </div>
        </div>
      </div>
      <div className="dice">
        <div className="dice-img">
          <img
            src={`../public/Images/dice_${randomNumber || 1}.png`}
            alt={`dice-${randomNumber || 1}`}
            onClick={handleDiceRoll}
            style={{ cursor: gameOver ? "not-allowed" : "pointer", opacity: gameOver ? 0.5 : 1 }}
          />
          <p>Click on Dice to roll</p>
          <button onClick={handleReset}>Reset Score</button>
          <span>
            <button
              id="rules-btn"
              onClick={() => setShowRules(!showRules)}
            >
              {showRules ? "Hide Rules" : "Show Rules"}
            </button>
          </span>
          {showRules && (
            <div className="rules" id="rules-box">
              <h2>How to play dice game</h2>
              <p>Select any number</p>
              <p>
                After clicking on dice, if selected number is equal to dice number
                you will get same point as dice.
              </p>
              <p>If you get wrong guess then 2 points will be deducted.</p>
              <p>You have 3 attempts. Game over after 3 rolls.</p>
            </div>
          )}
          <p>Dice Value: {randomNumber}</p>
          <p>Attempts: {attempts}/3</p>
          {gameOver && <h2 style={{ color: "red" }}>Game Over</h2>}
        </div>
      </div>
    </div>
  );
};

export default GameStart;
  
  */
}
