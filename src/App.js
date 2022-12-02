import React, { useState, useEffect } from "react";
import "./styles/App.scss";
import {resetGame,updateUI,calculateWinner,ai_selected} from "./utils/utils"
import {WINNER_COMBO} from "./utils/var"
const App = () => {
  const [PLAYER_SCORE, setPLAYER_SCORE] = useState(0);
  //TODO get rid of useEffect in main component
  useEffect(() => {
    let savedScore = localStorage.getItem("PLAYER_SCORE", PLAYER_SCORE);
    console.log(` savedScore`, savedScore);
    if (savedScore) {
      setPLAYER_SCORE(savedScore);
    }
    return () => {};
  }, []);
  useEffect(() => {
    console.log(`PLAYER_SCORE`, PLAYER_SCORE);
    if (PLAYER_SCORE) {
      localStorage.setItem("PLAYER_SCORE", PLAYER_SCORE);
    }

    return () => {};
  }, [PLAYER_SCORE]);

  function handlePlayersChoice(e, choiceNumber) {
    calculateWinner(WINNER_COMBO[choiceNumber], ai_selected(),PLAYER_SCORE,setPLAYER_SCORE);
  }


  return (
    <div>
      <div className="container">
        <div class="container-text hide">
          <h1 class="neon">
            You've won.An urban legend come true.
            <br /> You complete the jigsaw puzzle to discover it is a picture of
            yourself, finishing that same puzzle
          </h1>
        </div>

        <div className="heading-container">
          <h2>
            Rock <br />
            Paper <br />
            Scissors <br />
          </h2>
          <div className="score-container">
            <p>score</p>
            <div id="score">{PLAYER_SCORE}</div>
          </div>
        </div>
        <div className="game-container">
          <div
            id="rock"
            className="selectable rock"
            onClick={(e, choice = 0) => handlePlayersChoice(e, choice)}
          >
            ✊
          </div>
          <div
            id="paper"
            className="selectable paper"
            onClick={(e, choice = 1) => handlePlayersChoice(e, choice)}
          >
            ✋
          </div>
          <div
            id="scissors"
            className="selectable scissors"
            onClick={(e, choice = 2) => handlePlayersChoice(e, choice)}
          >
            ✌
          </div>
        </div>
        <div className="winner-container hide">
          <div className="selected">
            <div className="user-results"></div>
            <p>You Picked</p>
          </div>
          <div className="selected">
            <div className="ai-results"></div>
            <p>AI Picked</p>
          </div>
        </div>
        <div className="outcome hide">
          <h2 id="won-text"></h2>
          <button id="reset" onClick={resetGame}>
            Play again
          </button>
        </div>
      </div>
      <h3 className="made-by">By Denis Poplavskii</h3>
    </div>
  );
};
export default App;
