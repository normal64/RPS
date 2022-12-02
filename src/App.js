import React, { useState } from "react";
import "./styles/App.scss";
const App = () => {
  const [PLAYER_SCORE, setPLAYER_SCORE] = useState(0);
  const WINNER_COMBO = [
    {
      selected: "rock",
      beats: "scissors",
      icon: "✊",
    },
    {
      selected: "paper",
      beats: "rock",
      icon: "✋",
    },
    {
      selected: "scissors",
      beats: "paper",
      icon: "✌",
    },
  ];
  function handlePlayersChoice(e, choiceNumber) {
    console.log(e.target.id);
    console.log(choiceNumber);
    calculateWinner(WINNER_COMBO[choiceNumber], ai_selected());
  }
  function ai_selected() {
    const RandomIndex = Math.floor(Math.random() * WINNER_COMBO.length);
    return WINNER_COMBO[RandomIndex];
  }
  function calculateWinner(user, ai) {
    if (user.beats == ai.selected) {
      setPLAYER_SCORE(PLAYER_SCORE + 1);
      console.log(`user.icon`, user.icon);
      updateUI(user.icon, ai.icon, "You won", user, ai);
      return;
    }
    if (user.selected == ai.selected) {
      updateUI(user.icon, ai.icon, "Draw", user, ai);
      return;
    }
    updateUI(user.icon, ai.icon, "You lost", user, ai);
  }
  function updateUI(userIcon, aiIcon, outcome_text, user, ai) {
    document.querySelector(".user-results").innerHTML = userIcon;
    document.querySelector(".user-results").classList.add(`${user.selected}`);
    document.querySelector(".user-results").classList.add(`selectable`);

    document.querySelector(".ai-results").innerHTML = aiIcon;
    document.querySelector(".ai-results").classList.add(`${ai.selected}`);
    document.querySelector(".ai-results").classList.add(`selectable`);

    document.querySelector("#won-text").innerHTML = outcome_text;
    document.querySelector(".game-container").classList.add("hide");
    document.querySelector(".outcome").classList.remove("hide");
    document.querySelector(".winner-container").classList.remove("hide");
  }
  function resetGame() {
    document.querySelector(".game-container").classList.remove("hide");
    document.querySelector(".winner-container").classList.add("hide");
    document.querySelector(".outcome").classList.add("hide");
  }
  return (
    <div>
      <div className="container">
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
    </div>
  );
};
export default App;
