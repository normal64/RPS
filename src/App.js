import React from "react";
import "./styles/App.scss"
const App = () => {
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
            <div id="score">1</div>
          </div>
        </div>
        <div className="game-container">
            <div id="rock" className="selectable rock">✊</div>
            <div id="paper" className="selectable paper">✋</div>
            <div id="scissors" className="selectable scissors">✌</div>
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
        <div className="outcome">
            <h2 id="won-text"></h2>
            <button id="reset">Play again</button>
        </div>
      </div>
    </div>
  );
};
export default App;
